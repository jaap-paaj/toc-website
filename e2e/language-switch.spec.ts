import { test, expect } from "@playwright/test";
import { pathPairs } from "./fixtures/content";

/**
 * The language switcher must land on a page that exists.
 *
 * Now that paths are translated, swapping only the locale segment of the URL
 * points at a path the other language does not have. That failure is invisible
 * to every other check here: the server-rendered HTML is correct, the redirects
 * are correct, and the broken href is computed in the browser.
 *
 * So this test drives the button rather than reading the page.
 */

const pairs = pathPairs();

/** The pages that can break — the ones whose path differs per language. */
const translated = pairs.filter((pair) => pair.nl !== pair.en);

test.describe("language switcher", () => {
    test("there is a translated path to check", () => {
        expect(translated.length).toBeGreaterThan(0);
    });

    for (const pair of translated) {
        test(`EN -> NL on ${pair.en}`, async ({ page }) => {
            await page.goto(`/en${pair.en}`);
            await page.getByRole("link", { name: "NL", exact: true }).first().click();
            await expect(page).toHaveURL(`/nl${pair.nl}`);
            await expect(page.locator("h1")).toBeVisible();
        });

        test(`NL -> EN on ${pair.nl}`, async ({ page }) => {
            await page.goto(`/nl${pair.nl}`);
            await page.getByRole("link", { name: "EN", exact: true }).first().click();
            await expect(page).toHaveURL(`/en${pair.en}`);
            await expect(page.locator("h1")).toBeVisible();
        });
    }

    test("a shared path still switches", async ({ page }) => {
        const shared = pairs.find((pair) => pair.nl === pair.en);
        test.skip(!shared, "every page has a translated path");

        await page.goto(`/en${shared!.en}`);
        await page.getByRole("link", { name: "NL", exact: true }).first().click();
        await expect(page).toHaveURL(`/nl${shared!.nl}`);
    });
});
