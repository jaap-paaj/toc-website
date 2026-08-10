import fs from "node:fs";
import path from "node:path";

/**
 * Walks the app directory to find out which pages exist.
 *
 * Deliberately derived, never hand-maintained: a list you have to remember to
 * update is stale the day you write it, which is the problem this page exists
 * to solve.
 */

const APP_DIR = path.join(process.cwd(), "src", "app");
const LANG_DIR = path.join(APP_DIR, "[lang]");

export interface RouteEntry {
    /** Route pattern below the locale, e.g. "/blog/[slug]". "" is the home page. */
    pattern: string;
    /** Concrete pages behind the pattern. 1 unless the route is dynamic. */
    count: number;
    /** A real path we can request, with dynamic segments filled in. */
    sample: string;
    dynamic: boolean;
}

function walk(dir: string, prefix = ""): string[] {
    if (!fs.existsSync(dir)) return [];

    const found: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            if (entry.name === "page.tsx") found.push(prefix || "/");
            continue;
        }
        // Route groups and private folders do not appear in the URL.
        if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
        found.push(...walk(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    }
    return found;
}

function expand(pattern: string): { count: number; sample: string } {
    if (pattern.startsWith("/blog/[slug]")) {
        // The folder name is the key, not the URL — the slug lives in the
        // frontmatter, so ask the loader rather than the filesystem.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getAllPosts } = require("@/lib/blog/loader");
        const posts: { slug: string }[] = getAllPosts("nl");
        return { count: posts.length, sample: `/blog/${posts[0]?.slug ?? ""}` };
    }

    if (pattern.startsWith("/vragen/[slug]")) {
        // Imported lazily to keep this module free of content dependencies.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getAnswerSlugs } = require("@/app/_content/vragen");
        const slugs: string[] = getAnswerSlugs();
        return { count: slugs.length, sample: `/vragen/${slugs[0] ?? ""}` };
    }

    return { count: 1, sample: pattern === "/" ? "" : pattern };
}

export function getRoutes(): RouteEntry[] {
    const patterns = walk(LANG_DIR).map((p) => (p === "/" ? "" : p));

    return patterns
        .map((pattern) => {
            const dynamic = pattern.includes("[");
            const { count, sample } = expand(pattern);
            return { pattern, count, sample, dynamic };
        })
        .sort((a, b) => a.pattern.localeCompare(b.pattern));
}

/**
 * Counts references to a path across the source, so we can spot pages that
 * nothing links to. A rough grep, not a link graph — enough to catch orphans.
 */
export function countInboundLinks(routePattern: string): number {
    if (routePattern === "") return 0;

    const haystack = readSource();
    const needles: string[] = [];

    // The href written out in full: href="/ai-ehbo"
    needles.push(`"${routePattern}"`);

    // Dynamic routes are linked through their parent: `/blog/${post.slug}`
    const parent = routePattern.replace(/\/\[[^\]]+\].*$/, "");
    if (parent !== routePattern) {
        needles.push(`\`${parent}/`);
        needles.push(`{${parent}/`); // template built from a constant
    }

    // Single-segment pages are often linked by slug rather than by path,
    // e.g. pillarSlug: "ai-strategie" resolved into `/${pillar.pillarSlug}`.
    const segments = routePattern.split("/").filter(Boolean);
    if (segments.length === 1) {
        needles.push(`"${segments[0]}"`);
    }

    let hits = 0;
    for (const needle of needles) {
        let index = haystack.indexOf(needle);
        while (index !== -1) {
            hits += 1;
            index = haystack.indexOf(needle, index + 1);
        }
    }

    // A detail page is reachable if its index is: /vragen/[slug] is linked from
    // /vragen, even though the href is built from a variable and no grep can
    // see it.
    if (parent !== routePattern && parent !== "") {
        hits += countInboundLinks(parent);
    }

    return hits;
}

let sourceCache: string | null = null;

function readSource(): string {
    if (sourceCache !== null) return sourceCache;

    const chunks: string[] = [];
    const roots = [path.join(process.cwd(), "src")];

    while (roots.length) {
        const dir = roots.pop()!;
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === "inventory") continue; // do not count ourselves
                roots.push(full);
            } else if (/\.(tsx?|md)$/.test(entry.name)) {
                chunks.push(fs.readFileSync(full, "utf8"));
            }
        }
    }

    sourceCache = chunks.join("\n");
    return sourceCache;
}
