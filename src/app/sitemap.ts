import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/loader";
import { ANSWERS_BASE_PATH, answerPath, getAnswerParams } from "@/app/_content/vragen";

const SITE_URL = "https://theonlyconstant.nl";

const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/nl", priority: 1.0 },
    { path: "/en", priority: 0.8 },
    { path: "/nl/about", priority: 0.7 },
    { path: "/en/about", priority: 0.5 },
    { path: "/nl/educate", priority: 0.9 },
    { path: "/en/educate", priority: 0.7 },
    { path: "/nl/automate", priority: 0.9 },
    { path: "/en/automate", priority: 0.7 },
    { path: "/nl/innovate", priority: 0.9 },
    { path: "/en/innovate", priority: 0.7 },
    { path: "/nl/contact", priority: 0.7 },
    { path: "/en/contact", priority: 0.5 },
    { path: "/nl/blog", priority: 0.8 },
    { path: "/en/blog", priority: 0.6 },
    { path: "/nl/ai-act", priority: 0.8 },
    { path: "/en/ai-act", priority: 0.6 },
    { path: "/nl/10-ai-tips", priority: 0.7 },
    { path: "/en/10-ai-tips", priority: 0.5 },
    { path: "/nl/ai-opportunity-scan", priority: 0.8 },
    { path: "/en/ai-opportunity-scan", priority: 0.6 },
    { path: "/nl/ai-ehbo", priority: 0.8 },
    { path: "/en/ai-first-aid", priority: 0.6 },
    { path: "/nl/ai-readiness-scan", priority: 0.9 },
    { path: "/en/ai-readiness-scan", priority: 0.7 },
    { path: "/nl/ai-strategie", priority: 0.8 },
    { path: "/en/ai-strategy", priority: 0.6 },
    { path: "/nl/ai-automatisering-gids", priority: 0.8 },
    { path: "/en/ai-automation-guide", priority: 0.6 },
    { path: "/nl/ai-en-mensen", priority: 0.8 },
    { path: "/en/ai-and-people", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
        url: `${SITE_URL}${page.path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page.priority,
    }));

    // Blog posts — NL (primary) and EN
    for (const locale of ["nl", "en"] as const) {
        const posts = getAllPosts(locale);
        for (const post of posts) {
            pages.push({
                url: `${SITE_URL}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: "monthly",
                priority: locale === "nl" ? 0.7 : 0.5,
            });
        }
    }

    // GEO answer pages — index + every answer, generated from the content file
    // so the sitemap can never drift out of sync with what is published.
    for (const locale of ["nl", "en"] as const) {
        pages.push({
            url: `${SITE_URL}/${locale}${ANSWERS_BASE_PATH[locale]}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: locale === "nl" ? 0.7 : 0.5,
        });
    }

    for (const { lang, slug } of getAnswerParams()) {
        pages.push({
            url: `${SITE_URL}/${lang}${answerPath(lang, slug)}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: lang === "nl" ? 0.8 : 0.6,
        });
    }

    return pages;
}
