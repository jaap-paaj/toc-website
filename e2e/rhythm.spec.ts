import { test, expect } from "@playwright/test";

/**
 * Vertical rhythm between modules.
 *
 * Neither of the existing safety nets can see this. The audits read source, so
 * a module's own padding always looks legal — the mistake only exists in the
 * relationship between two of them. The screenshot tests do catch it, but only
 * if someone reads the diff: test:visual:update accepts whatever the page
 * currently does, and a doubled seam is indistinguishable from an intentional
 * change. These assertions measure the rendered page and have no baseline to
 * overwrite.
 *
 * The rule, in one line: a colour edge divides the space, so both blocks may
 * keep a step; without an edge the two steps merge into one oversized gap, so
 * only one of them gets it.
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

/** Anything at or above this is a module carrying a seam on its own. */
const FULL_STEP = 48;

/** Runs in the page: every seam between two adjacent module sections. */
function collectSeams(step: number) {
    const painted = (start: Element) => {
        let node: Element | null = start;
        let bg = getComputedStyle(start).backgroundColor;
        while (node && bg === "rgba(0, 0, 0, 0)") {
            node = node.parentElement;
            if (!node) break;
            bg = getComputedStyle(node).backgroundColor;
        }
        return bg;
    };

    const seams: {
        name: string;
        padBottom: number;
        padTop: number;
        sameColour: boolean;
        doubled: boolean;
    }[] = [];

    for (const section of document.querySelectorAll("section")) {
        const next = section.nextElementSibling;
        if (!next || next.tagName !== "SECTION") continue;

        const padBottom = parseFloat(getComputedStyle(section).paddingBottom);
        const padTop = parseFloat(getComputedStyle(next).paddingTop);
        const sameColour = painted(section) === painted(next);

        seams.push({
            name: `${section.id || "(unnamed)"} → ${next.id || "(unnamed)"}`,
            padBottom,
            padTop,
            sameColour,
            doubled: sameColour && padBottom >= step && padTop >= step,
        });
    }
    return seams;
}

test.describe("module rhythm", () => {
    for (const route of ROUTES) {
        test(`no seam stacks two steps in one colour — ${route}`, async ({ page }) => {
            await page.goto(route, { waitUntil: "networkidle" });
            const seams = await page.evaluate(collectSeams, FULL_STEP);
            expect(seams.length, `${route} has no module seams to measure`).toBeGreaterThan(0);

            const doubled = seams.filter((s) => s.doubled);
            expect(
                doubled.map((s) => `${s.name} (${s.padBottom}px + ${s.padTop}px)`),
                "with no colour edge between them the two steps read as one " +
                    "oversized gap — only one side should carry it",
            ).toEqual([]);
        });
    }

    test.describe("footer seam", () => {
        for (const route of ROUTES) {
            test(`the module above ends on a full step — ${route}`, async ({ page }) => {
                await page.goto(route, { waitUntil: "networkidle" });
                const m = await page.evaluate(() => {
                    const band = document.querySelector("#site-footer-cta");
                    const prev = band?.previousElementSibling;
                    if (!band || !prev) return null;
                    return {
                        padBottom: parseFloat(getComputedStyle(prev).paddingBottom),
                    };
                });
                expect(m, `${route} has no footer`).not.toBeNull();

                // No page gets to end tight and have the footer make up for it.
                // That is what turned one seam into a special case: a module
                // that stopped short, and a prop invented to cover for it.
                expect(
                    m!.padBottom,
                    `the module above the footer ends on ${m!.padBottom}px, which ` +
                        `is not a full step — give it its own padBottom rather ` +
                        `than padding the footer`,
                ).toBeGreaterThanOrEqual(FULL_STEP);
            });
        }

        test("a colour change keeps a margin on the dark side", async ({ page }) => {
            await page.goto("/nl/educate", { waitUntil: "networkidle" });
            const padTop = await page.evaluate(() => {
                const band = document.querySelector("#site-footer-cta")!;
                return parseFloat(getComputedStyle(band).paddingTop);
            });
            expect(
                padTop,
                "the colour changes above the band, so the dark side needs a " +
                    "margin of its own or the band lands against the edge",
            ).toBeGreaterThanOrEqual(FULL_STEP);
        });
    });
});
