import fs from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const LOCALES = ["nl", "en"] as const;

/**
 * A blog post's folder name is its stable key; its URL comes from the `slug:`
 * frontmatter field. Whenever those differ, the folder name is a URL that used
 * to work and now has to 301 — as does anything listed in `previousSlugs:`.
 *
 * Derived rather than hand-listed on purpose: a list you have to remember to
 * update is stale the day you write it, and a forgotten redirect is a 404 on a
 * page that once ranked. `npm run audit:locale-pairs` derives the same set to
 * check that no new post claims a URL that redirects.
 *
 * Read with a regex instead of gray-matter: next.config.ts is compiled without
 * the app's path aliases, so it stays free of project imports.
 */
function blogRedirects() {
    const redirects: { source: string; destination: string; statusCode: number }[] = [];

    for (const locale of LOCALES) {
        const dir = path.join(BLOG_DIR, locale);
        if (!fs.existsSync(dir)) continue;

        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;

            const file = path.join(dir, entry.name, "post.md");
            if (!fs.existsSync(file)) continue;

            const block = fs.readFileSync(file, "utf-8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
            if (!block) continue;

            const slug =
                block[1].match(/^slug:[ \t]*(.+)$/m)?.[1].trim().replace(/^['"]|['"]$/g, "") ||
                entry.name;
            if (slug === entry.name) continue;

            const previous = [
                ...block[1].matchAll(/^previousSlugs:[ \t]*\[(.*)\]$/gm),
            ].flatMap((m) => m[1].split(",").map((v) => v.trim().replace(/^['"]|['"]$/g, "")));

            for (const source of [entry.name, ...previous].filter(Boolean)) {
                redirects.push({
                    // 301, not `permanent: true` — that emits a 308, and the
                    // acceptance test checks for the status we actually meant.
                    source: `/${locale}/blog/${source}`,
                    destination: `/${locale}/blog/${slug}`,
                    statusCode: 301,
                });
            }
        }
    }

    return redirects;
}

/**
 * The English answers moved from /en/vragen/<dutch slug> to
 * /en/questions/<english slug>. Both halves changed, so every old English URL
 * needs a redirect; the Dutch ones are untouched.
 *
 * Read out of the content file with a regex for the same reason as above:
 * next.config.ts is compiled without the app's path aliases. The count check is
 * the guard — a parse that silently found nothing would ship a section with no
 * redirects at all.
 */
function answerRedirects() {
    const source = fs.readFileSync(
        path.join(process.cwd(), "src", "app", "_content", "vragen.ts"),
        "utf-8",
    );

    // The English pages are declared first, the Dutch ones after `const nl`.
    const dutchBlock = source.search(/^const nl\b/m);
    if (dutchBlock === -1) throw new Error("could not find the Dutch block in vragen.ts");

    const english = source.slice(0, dutchBlock);
    const pairs = [...english.matchAll(/key: "([^"]+)",\s*\n\s*slug: "([^"]+)",/g)];

    if (pairs.length !== 14) {
        throw new Error(
            `expected 14 English answer pages in vragen.ts, parsed ${pairs.length}`,
        );
    }

    return [
        { source: "/en/vragen", destination: "/en/questions", statusCode: 301 },
        ...pairs.map(([, key, slug]) => ({
            source: `/en/vragen/${key}`,
            destination: `/en/questions/${slug}`,
            statusCode: 301,
        })),
    ];
}

const nextConfig: NextConfig = {
    async redirects() {
        return [...blogRedirects(), ...answerRedirects()];
    },
};

export default nextConfig;
