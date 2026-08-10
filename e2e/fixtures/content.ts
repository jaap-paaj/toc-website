import fs from "node:fs";
import path from "node:path";

/**
 * The paths the site publishes, read from the content rather than listed here.
 *
 * A hand-written list passes on the day it is written and quietly stops
 * covering whatever is added the week after — which, with generated content
 * arriving, is the failure mode that matters.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const VRAGEN = path.join(process.cwd(), "src", "app", "_content", "vragen.ts");

const unquote = (value: string) => value.trim().replace(/^['"]|['"]$/g, "");

/** One page, as its path below the locale in each language. */
export interface PathPair {
    key: string;
    nl: string;
    en: string;
}

/** A URL that used to work and must now redirect. */
export interface Retired {
    from: string;
    to: string;
}

// -- BLOG --

function blogSlugs(locale: string): Map<string, { slug: string; previous: string[] }> {
    const dir = path.join(BLOG_DIR, locale);
    const found = new Map<string, { slug: string; previous: string[] }>();
    if (!fs.existsSync(dir)) return found;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;

        const file = path.join(dir, entry.name, "post.md");
        if (!fs.existsSync(file)) continue;

        const block = fs.readFileSync(file, "utf-8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const declared = block?.[1].match(/^slug:[ \t]*(.+)$/m)?.[1];
        const previous = (block?.[1].match(/^previousSlugs:[ \t]*\[(.*)\]$/m)?.[1] ?? "")
            .split(",")
            .map(unquote)
            .filter(Boolean);

        found.set(entry.name, {
            slug: declared ? unquote(declared) : entry.name,
            previous,
        });
    }

    return found;
}

// -- ANSWERS --

function answerSlugs(): { key: string; nl: string; en: string }[] {
    const source = fs.readFileSync(VRAGEN, "utf-8");
    const dutchBlock = source.search(/^const nl\b/m);

    const read = (text: string) =>
        new Map(
            [...text.matchAll(/key: "([^"]+)",\s*\n\s*slug: "([^"]+)",/g)].map(
                ([, key, slug]) => [key, slug] as const,
            ),
        );

    const en = read(source.slice(0, dutchBlock));
    const nl = read(source.slice(dutchBlock));

    return [...nl.entries()]
        .filter(([key]) => en.has(key))
        .map(([key, nlSlug]) => ({ key, nl: nlSlug, en: en.get(key)! }));
}

// -- PUBLIC --

export function pathPairs(): PathPair[] {
    const nlBlog = blogSlugs("nl");
    const enBlog = blogSlugs("en");

    const blog: PathPair[] = [...nlBlog.entries()]
        .filter(([key]) => enBlog.has(key))
        .map(([key, nl]) => ({
            key,
            nl: `/blog/${nl.slug}`,
            en: `/blog/${enBlog.get(key)!.slug}`,
        }));

    const answers: PathPair[] = answerSlugs().map(({ key, nl, en }) => ({
        key,
        nl: `/vragen/${nl}`,
        en: `/questions/${en}`,
    }));

    return [
        ...blog,
        { key: "answers-index", nl: "/vragen", en: "/questions" },
        ...answers,
    ];
}

export function retiredUrls(): Retired[] {
    const retired: Retired[] = [];

    for (const locale of ["nl", "en"] as const) {
        for (const [key, post] of blogSlugs(locale)) {
            const sources = [...post.previous];
            if (post.slug !== key) sources.push(key);
            for (const from of sources) {
                retired.push({
                    from: `/${locale}/blog/${from}`,
                    to: `/${locale}/blog/${post.slug}`,
                });
            }
        }
    }

    // The English answers moved segment as well as slug; the Dutch ones did not.
    retired.push({ from: "/en/vragen", to: "/en/questions" });
    for (const { key, en } of answerSlugs()) {
        retired.push({ from: `/en/vragen/${key}`, to: `/en/questions/${en}` });
    }

    return retired;
}
