import fs from "node:fs";
import path from "node:path";
import { test, expect } from "@playwright/test";

/**
 * Every URL a blog post has ever had must still lead somewhere.
 *
 * The cases are derived from the content, not listed here: a hand-written list
 * would pass on the day it was written and quietly stop covering the post
 * added the week after. If a slug moves and no redirect follows, this fails.
 *
 * Runs against the production build, because redirects live in next.config and
 * the dev server is not what visitors hit.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const LOCALES = ["nl", "en"] as const;

interface Post {
    locale: string;
    key: string;
    slug: string;
    previousSlugs: string[];
}

function readPosts(): Post[] {
    const posts: Post[] = [];

    for (const locale of LOCALES) {
        const dir = path.join(BLOG_DIR, locale);
        if (!fs.existsSync(dir)) continue;

        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;

            const file = path.join(dir, entry.name, "post.md");
            if (!fs.existsSync(file)) continue;

            const block = fs
                .readFileSync(file, "utf-8")
                .match(/^---\r?\n([\s\S]*?)\r?\n---/);
            if (!block) continue;

            const unquote = (v: string) => v.trim().replace(/^['"]|['"]$/g, "");

            posts.push({
                locale,
                key: entry.name,
                slug: unquote(block[1].match(/^slug:[ \t]*(.+)$/m)?.[1] ?? "") || entry.name,
                previousSlugs: (block[1].match(/^previousSlugs:[ \t]*\[(.*)\]$/m)?.[1] ?? "")
                    .split(",")
                    .map(unquote)
                    .filter(Boolean),
            });
        }
    }

    return posts;
}

const posts = readPosts();

const retired = posts.flatMap((post) =>
    [...post.previousSlugs, ...(post.slug === post.key ? [] : [post.key])].map((from) => ({
        from: `/${post.locale}/blog/${from}`,
        to: `/${post.locale}/blog/${post.slug}`,
    })),
);

test.describe("blog redirects", () => {
    test("there is something to check", () => {
        expect(retired.length).toBeGreaterThan(0);
    });

    for (const { from, to } of retired) {
        test(`301 ${from} -> ${to}`, async ({ request }) => {
            const response = await request.get(from, { maxRedirects: 0 });

            // 301, not 308: `permanent: true` in next.config emits a 308, and a
            // silent switch between the two is exactly the kind of drift this
            // test exists to catch.
            expect(response.status()).toBe(301);
            expect(new URL(response.headers()["location"], "http://localhost").pathname).toBe(to);
        });
    }

    for (const post of posts) {
        test(`200 /${post.locale}/blog/${post.slug}`, async ({ request }) => {
            const response = await request.get(`/${post.locale}/blog/${post.slug}`, {
                maxRedirects: 0,
            });
            expect(response.status()).toBe(200);
        });
    }
});
