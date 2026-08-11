import { test, expect, type Page } from "@playwright/test";
import { pathPairs } from "./fixtures/content";

/**
 * Click the language button, opening the menu first when it is behind one.
 *
 * The switcher sits in the header on desktop and inside the collapsed menu on
 * mobile — and mobile is where most readers are, so testing only the desktop
 * copy would leave the version that matters unchecked.
 */
/** Tailwind's `lg`, the breakpoint the header collapses at. */
const LG = 1024;

async function switchLanguage(page: Page, label: "NL" | "EN") {
    const width = page.viewportSize()?.width ?? LG;

    // Branching on the viewport rather than probing the page, because probing
    // cannot work here: the copy that is out of play carries Tailwind's
    // `hidden`, which is display:none, and an element with display:none is
    // absent from the accessibility tree — so getByRole does not see it at all,
    // not even as present-but-hidden. Whichever copy is in play is the only one
    // any role query can find.
    if (width < LG) {
        await page.getByRole("button", { name: "Open menu" }).click();
    }

    await page.getByRole("link", { name: label, exact: true }).click();
}

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

/**
 * The pages that can break — the ones whose path differs per language, minus
 * the ones with no header to switch from. The chat views are deliberately
 * chrome-free: there is nothing to click mid-conversation.
 */
const translated = pairs.filter((pair) => pair.nl !== pair.en && !pair.noHeader);

test.describe("language switcher", () => {
    test("there is a translated path to check", () => {
        expect(translated.length).toBeGreaterThan(0);
    });

    for (const pair of translated) {
        test(`EN -> NL on ${pair.en}`, async ({ page }) => {
            await page.goto(`/en${pair.en}`);
            await switchLanguage(page, "NL");
            await expect(page).toHaveURL(`/nl${pair.nl}`);
            await expect(page.locator("h1")).toBeVisible();
        });

        test(`NL -> EN on ${pair.nl}`, async ({ page }) => {
            await page.goto(`/nl${pair.nl}`);
            await switchLanguage(page, "EN");
            await expect(page).toHaveURL(`/en${pair.en}`);
            await expect(page.locator("h1")).toBeVisible();
        });
    }

    test("a shared path still switches", async ({ page }) => {
        const shared = pairs.find((pair) => pair.nl === pair.en);
        test.skip(!shared, "every page has a translated path");

        await page.goto(`/en${shared!.en}`);
        await switchLanguage(page, "NL");
        await expect(page).toHaveURL(`/nl${shared!.nl}`);
    });
});
