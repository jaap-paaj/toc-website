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
 * Which directory a locale actually reads from.
 *
 * Falls back to "en" when the locale folder is missing or holds no posts. The
 * emptiness check matters: a folder that exists but is empty used to pass, and
 * the site then rendered a blog with nothing in it.
 *
 * Every reader below goes through here, so a locale can never resolve its list
 * from one directory and its individual posts from another.
 */
function localeDir(locale: Locale): string | null {
    const dir = path.join(BLOG_DIR, locale);
    const hasPosts =
        fs.existsSync(dir) &&
        fs.readdirSync(dir, { withFileTypes: true }).some((d) => d.isDirectory());

    if (hasPosts) return dir;

    const fallback = path.join(BLOG_DIR, "en");
    return fs.existsSync(fallback) ? fallback : null;
}

/** Folder names under a locale directory, i.e. the keys published in that locale. */
function keysIn(dir: string): string[] {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
}

/**
 * The URL segment for a post. The `slug:` frontmatter field wins; without it
 * the folder name is used, which is what every post did before slugs became
 * translatable.
 */
function resolveSlug(data: Record<string, unknown>, key: string): string {
    const declared = typeof data.slug === "string" ? data.slug.trim() : "";
    return declared || key;
}

/**
 * Read all blog posts for a given locale, sorted by date descending.
 */
export function getAllPosts(locale: Locale = "en"): BlogPostMeta[] {
    const dir = localeDir(locale);
    if (!dir) return [];

    const posts: BlogPostMeta[] = [];

    for (const key of keysIn(dir)) {
        const filePath = path.join(dir, key, "post.md");
        if (!fs.existsSync(filePath)) continue;

        const raw = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(raw);

        posts.push({
            key,
            slug: resolveSlug(data, key),
            title: (data.title as string) ?? key,
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
 * Every ({lang, slug}) pair that has a page, for static param generation.
 *
 * Not a union of slugs: the same post can have a different slug per locale, so
 * a flat list would prerender half the site under the wrong path.
 */
export function getAllBlogParams(): { lang: Locale; slug: string }[] {
    return (["nl", "en"] as const).flatMap((lang) =>
        getAllPosts(lang).map((post) => ({ lang, slug: post.slug }))
    );
}

/**
 * The blog path per locale for one post, for hreflang and canonical.
 * Returns null when the key is not published in every locale — the pair check
 * in `npm run validate` is what stops that from reaching production.
 */
export function getBlogPathsByKey(key: string): Record<Locale, string> | null {
    const paths = {} as Record<Locale, string>;

    for (const locale of ["nl", "en"] as const) {
        const post = getPostByKey(key, locale);
        if (!post) return null;
        paths[locale] = `/blog/${post.slug}`;
    }

    return paths;
}

/**
 * Every published post as its slug in each locale.
 *
 * The language switcher runs in the browser and cannot read the content
 * directory, but swapping only the locale segment of a URL would send a visitor
 * to a slug that does not exist in the other language. This is the table it
 * needs, resolved on the server and handed down.
 */
export function getBlogSlugPairs(): Record<Locale, string>[] {
    const byKey = new Map<string, Partial<Record<Locale, string>>>();

    for (const locale of ["nl", "en"] as const) {
        for (const post of getAllPosts(locale)) {
            byKey.set(post.key, { ...byKey.get(post.key), [locale]: post.slug });
        }
    }

    return [...byKey.values()].filter(
        (pair): pair is Record<Locale, string> => Boolean(pair.nl && pair.en),
    );
}

/** Read one post by its stable key, within a single locale. */
export function getPostByKey(key: string, locale: Locale = "en"): BlogPost | null {
    const dir = localeDir(locale);
    if (!dir) return null;

    const filePath = path.join(dir, key, "post.md");
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content: rawContent } = matter(raw);
    const { body, ctaContent, faq } = parseContent(rawContent);

    return {
        key,
        slug: resolveSlug(data, key),
        title: data.title ?? key,
        date: data.date ?? "",
        intro: data.intro ?? "",
        author: data.author,
        tags: data.tags,
        content: body,
        ctaContent,
        faq,
    };
}

/**
 * Read one post by the slug in its URL, within a single locale.
 *
 * Deliberately no cross-locale fallback: now that slugs are translatable, a
 * miss on the Dutch side is a Dutch 404, not a licence to serve the English
 * text under a Dutch URL.
 */
export function getPostBySlug(slug: string, locale: Locale = "en"): BlogPost | null {
    const dir = localeDir(locale);
    if (!dir) return null;

    for (const key of keysIn(dir)) {
        const filePath = path.join(dir, key, "post.md");
        if (!fs.existsSync(filePath)) continue;

        const { data } = matter(fs.readFileSync(filePath, "utf-8"));
        if (resolveSlug(data, key) === slug) return getPostByKey(key, locale);
    }

    return null;
}
