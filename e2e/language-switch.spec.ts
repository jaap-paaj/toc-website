import fs from "node:fs";
import path from "node:path";
import { test, expect } from "@playwright/test";

/**
 * The language switcher must land on a page that exists.
 *
 * Now that a post's slug is translated, swapping only the locale segment of the
 * URL points at a slug the other language does not have. That failure is
 * invisible to every other check here: the server-rendered HTML is correct, the
 * redirects are correct, and the broken href is computed in the browser.
 *
 * So this test drives the button rather than reading the page.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function slugsByKey(locale: string): Map<string, string> {
    const dir = path.join(BLOG_DIR, locale);
    const slugs = new Map<string, string>();
    if (!fs.existsSync(dir)) return slugs;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;

        const file = path.join(dir, entry.name, "post.md");
        if (!fs.existsSync(file)) continue;

        const block = fs.readFileSync(file, "utf-8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const declared = block?.[1]
            .match(/^slug:[ \t]*(.+)$/m)?.[1]
            .trim()
            .replace(/^['"]|['"]$/g, "");

        slugs.set(entry.name, declared || entry.name);
    }

    return slugs;
}

const nl = slugsByKey("nl");
const en = slugsByKey("en");

const pairs = [...nl.entries()]
    .filter(([key]) => en.has(key))
    .map(([key, nlSlug]) => ({ key, nl: nlSlug, en: en.get(key)! }));

/** Posts whose slug differs per locale — the only ones that can break. */
const translated = pairs.filter((p) => p.nl !== p.en);

test.describe("language switcher", () => {
    test("there is a translated post to check", () => {
        expect(translated.length).toBeGreaterThan(0);
    });

    for (const pair of translated) {
        test(`EN -> NL on /en/blog/${pair.en}`, async ({ page }) => {
            await page.goto(`/en/blog/${pair.en}`);
            await page.getByRole("link", { name: "NL", exact: true }).first().click();
            await expect(page).toHaveURL(`/nl/blog/${pair.nl}`);
            await expect(page.locator("h1")).toBeVisible();
        });

        test(`NL -> EN on /nl/blog/${pair.nl}`, async ({ page }) => {
            await page.goto(`/nl/blog/${pair.nl}`);
            await page.getByRole("link", { name: "EN", exact: true }).first().click();
            await expect(page).toHaveURL(`/en/blog/${pair.en}`);
            await expect(page.locator("h1")).toBeVisible();
        });
    }

    test("a shared slug still switches", async ({ page }) => {
        const shared = pairs.find((p) => p.nl === p.en);
        test.skip(!shared, "every post has a translated slug");

        await page.goto(`/en/blog/${shared!.en}`);
        await page.getByRole("link", { name: "NL", exact: true }).first().click();
        await expect(page).toHaveURL(`/nl/blog/${shared!.nl}`);
    });
});
