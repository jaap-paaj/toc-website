import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta, BlogPost, FaqItem } from "./types";
import type { Locale } from "@/lib/i18n/config";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Parse FAQ items from a FAQ section string.
 * Expects bold questions (**Q?**) followed by answer paragraphs.
 */
function parseFaqItems(faqSection: string): FaqItem[] {
    const items: FaqItem[] = [];
    const parts = faqSection.split(/\*\*(.+?)\*\*/);
    // parts[0] = text before first question (usually empty)
    // parts[1] = first question, parts[2] = first answer, etc.
    for (let i = 1; i < parts.length; i += 2) {
        const question = parts[i].trim();
        const answer = (parts[i + 1] || "").trim();
        if (question && answer) {
            items.push({ question, answer });
        }
    }
    return items;
}

/**
 * Extract structured sections from raw markdown content:
 * - Main body (prose)
 * - CTA section (between last two --- before FAQ)
 * - FAQ items (after ## Veelgestelde vragen / ## Frequently Asked Questions)
 */
function parseContent(rawContent: string): {
    body: string;
    ctaContent?: string;
    faq?: FaqItem[];
} {
    let content = rawContent;
    let faq: FaqItem[] | undefined;

    // 1. Extract FAQ section
    const faqMatch = content.match(
        /^## (?:Veelgestelde vragen|Frequently [Aa]sked [Qq]uestions).*$/m
    );
    if (faqMatch && faqMatch.index !== undefined) {
        const faqSection = content.slice(faqMatch.index + faqMatch[0].length).trim();
        content = content.slice(0, faqMatch.index).trim();
        const items = parseFaqItems(faqSection);
        if (items.length > 0) faq = items;
    }

    // 2. Extract CTA section (between last two --- markers)
    let ctaContent: string | undefined;
    const hrMatches = [...content.matchAll(/^---$/gm)];
    if (hrMatches.length >= 2) {
        const firstHr = hrMatches[hrMatches.length - 2];
        const secondHr = hrMatches[hrMatches.length - 1];
        const ctaText = content
            .slice(firstHr.index! + 3, secondHr.index!)
            .trim();
        if (ctaText) {
            const before = content.slice(0, firstHr.index!).trim();
            const after = content.slice(secondHr.index! + 3).trim();
            content = after ? `${before}\n\n${after}` : before;
            ctaContent = ctaText;
        }
    }

    return { body: content, ctaContent, faq };
}

/**
 * Read all blog posts for a given locale, sorted by date descending.
 * Falls back to "en" when a locale folder doesn't exist or is empty.
 */
export function getAllPosts(locale: Locale = "en"): BlogPostMeta[] {
    const localeDir = path.join(BLOG_DIR, locale);
    const fallbackDir = path.join(BLOG_DIR, "en");

    // Use locale dir only if it exists and has subdirectories (posts)
    const hasLocalePosts =
        fs.existsSync(localeDir) &&
        fs.readdirSync(localeDir, { withFileTypes: true }).some((d) => d.isDirectory());

    const dir = hasLocalePosts ? localeDir : fallbackDir;

    if (!fs.existsSync(dir)) return [];

    const slugs = fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    const posts: BlogPostMeta[] = [];

    for (const slug of slugs) {
        const filePath = path.join(dir, slug, "post.md");
        if (!fs.existsSync(filePath)) continue;

        const raw = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(raw);

        posts.push({
            slug,
            title: (data.title as string) ?? slug,
            date: (data.date as string) ?? "",
            intro: (data.intro as string) ?? "",
            author: data.author as string | undefined,
            tags: data.tags as string[] | undefined,
        });
    }

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Collect all unique slugs across all locales for static param generation.
 */
export function getAllSlugs(): string[] {
    const slugs = new Set<string>();
    for (const locale of ["en", "nl"]) {
        const dir = path.join(BLOG_DIR, locale);
        if (!fs.existsSync(dir)) continue;
        fs.readdirSync(dir, { withFileTypes: true })
            .filter((d) => d.isDirectory())
            .forEach((d) => slugs.add(d.name));
    }
    return [...slugs];
}

/**
 * Read a single blog post by slug. Checks locale folder first, falls back to "en".
 */
export function getPostBySlug(slug: string, locale: Locale = "en"): BlogPost | null {
    const localeDir = path.join(BLOG_DIR, locale, slug, "post.md");
    const fallbackPath = path.join(BLOG_DIR, "en", slug, "post.md");
    const filePath = fs.existsSync(localeDir) ? localeDir : fallbackPath;

    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content: rawContent } = matter(raw);
    const { body, ctaContent, faq } = parseContent(rawContent);

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        intro: data.intro ?? "",
        author: data.author,
        tags: data.tags,
        content: body,
        ctaContent,
        faq,
    };
}
