import { test, expect } from "@playwright/test";

const LOCALES = ["nl", "en"] as const;

const STATIC_PAGES = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "automate", path: "/automate" },
    { name: "innovate", path: "/innovate" },
    { name: "educate", path: "/educate" },
    { name: "contact", path: "/contact" },
    { name: "blog", path: "/blog" },
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

// --- Static pages ---

for (const locale of LOCALES) {
    for (const page of STATIC_PAGES) {
        test(`${page.name} — ${locale}`, async ({ page: p }) => {
            await p.goto(`/${locale}${page.path}`, {
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
