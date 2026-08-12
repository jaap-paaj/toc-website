import { test, expect } from "@playwright/test";
import { pathPairs } from "./fixtures/content";

const LOCALES = ["nl", "en"] as const;

const STATIC_PAGES = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "automate", path: "/automate" },
    { name: "innovate", path: "/innovate" },
    { name: "educate", path: "/educate" },
    { name: "contact", path: "/contact" },
    { name: "blog", path: "/blog" },
    // The answers index has a translated segment: /nl/vragen, /en/questions.
    { name: "vragen", path: "/vragen", en: "/questions" },
];

const SCAN_VARIANTS = [
    "v-human-time",
    "v-theatre",
    "v-right-things",
    "v-arriving-late",
];

const BLOG_SLUGS = [
    "ai-cannot-fix-what-you-cannot-explain",
    "rethinking-strategy",
];

// All 14 answer pages share one template. Two representatives cover both CTA
// targets, matching how BLOG_SLUGS samples the blog.
const ANSWER_SLUGS = [
    "is-ai-betrouwbaar",
    "wat-kost-ai-adoptie",
];

// --- Static pages ---

for (const locale of LOCALES) {
    for (const page of STATIC_PAGES) {
        test(`${page.name} — ${locale}`, async ({ page: p }) => {
            const path = locale === "en" && "en" in page ? page.en : page.path;
            await p.goto(`/${locale}${path}`, {
                waitUntil: "networkidle",
            });
            await expect(p).toHaveScreenshot(`${page.name}-${locale}.png`, {
                fullPage: true,
            });
        });
    }
}

// --- AI Opportunity Scan (default) ---

for (const locale of LOCALES) {
    test(`scan-default — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-opportunity-scan`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`scan-default-${locale}.png`, {
            fullPage: true,
        });
    });
}

// --- AI Opportunity Scan (variants) ---

for (const locale of LOCALES) {
    for (const variant of SCAN_VARIANTS) {
        test(`scan ${variant} — ${locale}`, async ({ page }) => {
            await page.goto(
                `/${locale}/ai-opportunity-scan?v=${variant}`,
                { waitUntil: "networkidle" }
            );
            await expect(page).toHaveScreenshot(
                `scan-${variant}-${locale}.png`,
                { fullPage: true }
            );
        });
    }
}

// --- Booking page (iframe masked) ---

for (const locale of LOCALES) {
    test(`booking — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-opportunity-scan/book`, {
            waitUntil: "networkidle",
        });
        const iframe = page.locator("iframe");
        await expect(page).toHaveScreenshot(`booking-${locale}.png`, {
            fullPage: true,
            mask: [iframe],
        });
    });
}

// --- AI Act Check (landing + first question) ---

for (const locale of LOCALES) {
    test(`ai-act-landing — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-act`, { waitUntil: "networkidle" });
        await expect(page).toHaveScreenshot(`ai-act-landing-${locale}.png`, {
            fullPage: true,
        });
    });

    test(`ai-act-check — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-act/check`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`ai-act-check-${locale}.png`, {
            fullPage: true,
        });
    });
}

// --- EHBO chat (empty state) ---

for (const locale of LOCALES) {
    test(`ehbo-chat — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-ehbo/chat`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`ehbo-chat-${locale}.png`, {
            fullPage: true,
        });
    });
}

// --- AI Readiness Scan (landing + chat empty state) ---

for (const locale of LOCALES) {
    test(`readiness-scan — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-readiness-scan`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`readiness-scan-${locale}.png`, {
            fullPage: true,
        });
    });

    test(`readiness-chat — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/ai-readiness-scan/chat`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`readiness-chat-${locale}.png`, {
            fullPage: true,
        });
    });
}

// --- 10 AI tips landing ---

for (const locale of LOCALES) {
    test(`ten-ai-tips — ${locale}`, async ({ page }) => {
        await page.goto(`/${locale}/10-ai-tips`, {
            waitUntil: "networkidle",
        });
        await expect(page).toHaveScreenshot(`ten-ai-tips-${locale}.png`, {
            fullPage: true,
        });
    });
}

// --- GEO answer pages ---

for (const locale of LOCALES) {
    for (const key of ANSWER_SLUGS) {
        // Named by the stable key, not the slug, so the baseline survives a
        // translated URL — the screenshot is of the same page either way.
        const pair = pathPairs().find((p) => p.key === key)!;

        test(`vragen ${key} — ${locale}`, async ({ page }) => {
            await page.goto(`/${locale}${pair[locale]}`, {
                waitUntil: "networkidle",
            });
            await expect(page).toHaveScreenshot(
                `vragen-${key}-${locale}.png`,
                { fullPage: true }
            );
        });
    }
}

// --- Blog posts ---

for (const locale of LOCALES) {
    for (const slug of BLOG_SLUGS) {
        test(`blog ${slug} — ${locale}`, async ({ page }) => {
            await page.goto(`/${locale}/blog/${slug}`, {
                waitUntil: "networkidle",
            });
            await expect(page).toHaveScreenshot(
                `blog-${slug}-${locale}.png`,
                { fullPage: true }
            );
        });
    }
}
