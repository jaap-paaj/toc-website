import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/loader";
import { answerPath, getAnswerParams } from "@/app/_content/vragen";
import { getPagePatterns } from "@/lib/routes/patterns";
import { getLocalePathPairs } from "@/lib/i18n/localePaths";
import { i18n, type Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

/**
 * Pages deliberately kept out of the sitemap. Each one is a step inside a tool
 * rather than a page anyone should arrive on from a search result.
 *
 * A page not listed here is included — the safe direction, because a page that
 * appears and should not is a decision someone can see, and a page that quietly
 * never appears is not.
 */
const NOT_INDEXED = new Set([
    "/ai-act/check", // mid-wizard
    "/ai-ehbo/chat", // mid-conversation
    "/ai-first-aid/chat", // the same conversation, English route
    "/ai-readiness-scan/chat", // mid-scan
    "/ai-opportunity-scan/book", // the booking calendar
]);

/** Editorial weight. Anything unlisted gets the default for its locale. */
const PRIORITY: Record<string, number> = {
    "/": 1.0,
    "/educate": 0.9,
    "/automate": 0.9,
    "/innovate": 0.9,
    "/ai-readiness-scan": 0.9,
    "/blog": 0.8,
    "/ai-act": 0.8,
    "/ai-opportunity-scan": 0.8,
    "/ai-ehbo": 0.8,
    "/ai-first-aid": 0.8,
    "/ai-strategie": 0.8,
    "/ai-strategy": 0.8,
    "/ai-automatisering-gids": 0.8,
    "/ai-automation-guide": 0.8,
    "/ai-en-mensen": 0.8,
    "/ai-and-people": 0.8,
    "/about": 0.7,
    "/contact": 0.7,
    "/10-ai-tips": 0.7,
    "/vragen": 0.7,
    "/questions": 0.7,
};

/** Dutch is the primary market, so English pages sit a step lower. */
function priorityFor(path: string, locale: Locale): number {
    const base = PRIORITY[path] ?? 0.6;
    return locale === "nl" ? base : Math.max(0.4, base - 0.2);
}

/**
 * Which locales serve a given path.
 *
 * Most routes serve both. The ones in the locale-path table do not: they are
 * the pages that live at a different path per language, so each path belongs to
 * exactly one of them.
 */
function localesFor(path: string): Locale[] {
    for (const pair of getLocalePathPairs()) {
        if (pair.nl === path) return ["nl"];
        if (pair.en === path) return ["en"];
    }
    return [...i18n.locales];
}

export default function sitemap(): MetadataRoute.Sitemap {
    const pages: MetadataRoute.Sitemap = [];

    // Static pages, read from the app directory rather than listed here.
    for (const pattern of getPagePatterns()) {
        if (pattern.includes("[")) continue; // dynamic routes are expanded below
        const path = pattern === "/" ? "" : pattern;
        if (NOT_INDEXED.has(path)) continue;

        for (const locale of localesFor(path)) {
            pages.push({
                url: `${SITE_URL}/${locale}${path}`,
                changeFrequency: "weekly",
                priority: priorityFor(path || "/", locale),
            });
        }
    }

    // Blog posts carry a real publication date; everything else omits
    // lastModified rather than claiming it changed on the day of the build.
    for (const locale of i18n.locales) {
        for (const post of getAllPosts(locale)) {
            pages.push({
                url: `${SITE_URL}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: "monthly",
                priority: locale === "nl" ? 0.7 : 0.5,
            });
        }
    }

    for (const { lang, slug } of getAnswerParams()) {
        pages.push({
            url: `${SITE_URL}/${lang}${answerPath(lang, slug)}`,
            changeFrequency: "monthly",
            priority: lang === "nl" ? 0.8 : 0.6,
        });
    }

    return pages;
}
