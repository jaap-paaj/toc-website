import { test, expect } from "@playwright/test";
import { pathPairs, retiredUrls } from "./fixtures/content";

/**
 * Every URL a page has ever had must still lead somewhere.
 *
 * The cases are derived from the content, not listed here, so a page added next
 * week is covered without anyone remembering to add a case. Runs against the
 * production build, because redirects live in next.config and the dev server is
 * not what visitors hit.
 */

const retired = retiredUrls();
const pairs = pathPairs();

test.describe("redirects", () => {
    test("there is something to check", () => {
        expect(retired.length).toBeGreaterThan(0);
    });

    for (const { from, to } of retired) {
        test(`301 ${from} -> ${to}`, async ({ request }) => {
            const response = await request.get(from, { maxRedirects: 0 });

            // 301, not 308: `permanent: true` in next.config emits a 308, and a
            // silent switch between the two is the drift this test exists to catch.
            expect(response.status()).toBe(301);
            expect(new URL(response.headers()["location"], "http://localhost").pathname).toBe(to);
        });
    }

    for (const pair of pairs) {
        for (const lang of ["nl", "en"] as const) {
            test(`200 /${lang}${pair[lang]}`, async ({ request }) => {
                const response = await request.get(`/${lang}${pair[lang]}`, {
                    maxRedirects: 0,
                });
                expect(response.status()).toBe(200);
            });
        }
    }
});
