import { test, expect } from "@playwright/test";

/**
 * The footer seam.
 *
 * Screenshot tests do catch a broken seam, but only if someone looks at the
 * diff: test:visual:update accepts whatever the page currently does, and a
 * doubled seam looks like an intentional change. These assertions have no
 * baseline to overwrite.
 *
 * The rule they encode is the narrow one that was actually broken: when the
 * module above the footer paints the same colour and already ends on a full
 * step, the footer must not add a second one. Two steps in one colour read as
 * one oversized gap, because there is no edge between them to divide it.
 *
 * Where the colour does change, both blocks may keep their own step — the edge
 * splits the space and each side reads as its own. That is a design call per
 * page, so it is not asserted here.
 */

const ROUTES = [
    "/nl",
    "/nl/about",
    "/nl/educate",
    "/nl/automate",
    "/nl/innovate",
    "/nl/contact",
    "/nl/blog",
    "/nl/vragen",
    "/nl/ai-strategie",
    "/nl/ai-ehbo",
    "/nl/ai-act",
    "/nl/ai-readiness-scan",
    "/nl/ai-opportunity-scan",
    "/nl/10-ai-tips",
    "/en",
    "/en/blog",
    "/en/10-ai-tips",
];

/** Below this, the module above is not carrying the seam on its own. */
const FULL_STEP = 48;

async function seam(page: import("@playwright/test").Page) {
    return page.evaluate(() => {
        const band = document.querySelector("#site-footer-cta");
        const strip = document.querySelector("#site-footer-nav");
        if (!band || !strip) return null;

        const prev = band.previousElementSibling;
        const green = band.querySelector('[class*="rounded"]');
        const firstLink = strip.querySelector("a");
        if (!prev || !green || !firstLink) return null;

        /** The colour actually painted behind an element. */
        const painted = (start: Element) => {
            let node: Element | null = start;
            let bg = getComputedStyle(start).backgroundColor;
            while (node && (bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
                node = node.parentElement;
                if (!node) break;
                bg = getComputedStyle(node).backgroundColor;
            }
            return bg;
        };

        // The bottom of the last thing actually drawn above, not the section's
        // border box — the section's own padding is part of the gap.
        let lastContentBottom = -Infinity;
        for (const el of prev.querySelectorAll("*")) {
            const r = el.getBoundingClientRect();
            if (r.width > 0 && r.height > 0 && r.bottom > lastContentBottom) {
                lastContentBottom = r.bottom;
            }
        }

        const g = green.getBoundingClientRect();
        return {
            sameColour: painted(prev) === painted(band),
            prevPadBottom: parseFloat(getComputedStyle(prev).paddingBottom),
            bandPadTop: parseFloat(getComputedStyle(band).paddingTop),
            below: Math.round(firstLink.getBoundingClientRect().top - g.bottom),
            above: Math.round(g.top - lastContentBottom),
        };
    });
}

test.describe("footer seam", () => {
    for (const route of ROUTES) {
        test(`does not stack two steps in one colour — ${route}`, async ({ page }) => {
            await page.goto(route, { waitUntil: "networkidle" });
            const m = await seam(page);
            expect(m, `${route} has no footer to measure`).not.toBeNull();

            if (m!.sameColour && m!.prevPadBottom >= FULL_STEP) {
                expect(
                    m!.bandPadTop,
                    `the module above paints the same colour and already ends on ` +
                        `${m!.prevPadBottom}px, so the footer must not add another ` +
                        `${m!.bandPadTop}px on top of it`,
                ).toBe(0);
            } else if (!m!.sameColour) {
                expect(
                    m!.bandPadTop,
                    `the colour changes above the band, so the dark side needs a ` +
                        `margin of its own — otherwise the band lands straight ` +
                        `against the edge`,
                ).toBeGreaterThanOrEqual(FULL_STEP);
            }
        });
    }

    test("the band sits evenly between the page and the links", async ({ page }) => {
        // Home: same colour above, so one step above and one below the band.
        await page.goto("/nl", { waitUntil: "networkidle" });
        const m = await seam(page);
        expect(m).not.toBeNull();
        expect(Math.abs(m!.above - m!.below)).toBeLessThanOrEqual(8);
    });
});
