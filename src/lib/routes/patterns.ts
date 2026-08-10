import fs from "node:fs";
import path from "node:path";

const LANG_DIR = path.join(process.cwd(), "src", "app", "[lang]");

/**
 * The route patterns that exist, read from the app directory.
 *
 * Derived rather than listed, because a list of pages is stale the day a page
 * is added — and a page missing from the sitemap is a page that does not get
 * crawled, with nothing to notice it.
 */
export function getPagePatterns(dir = LANG_DIR, prefix = ""): string[] {
    if (!fs.existsSync(dir)) return [];

    const found: string[] = [];

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            if (entry.name === "page.tsx") found.push(prefix || "/");
            continue;
        }
        // Route groups and private folders do not appear in the URL.
        if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
        found.push(...getPagePatterns(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    }

    return found;
}
