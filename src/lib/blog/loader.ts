import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta, BlogPost } from "./types";
import type { Locale } from "@/lib/i18n/config";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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
 * Read a single blog post by slug. Checks locale folder first, falls back to "en".
 */
export function getPostBySlug(slug: string, locale: Locale = "en"): BlogPost | null {
    const localeDir = path.join(BLOG_DIR, locale, slug, "post.md");
    const fallbackPath = path.join(BLOG_DIR, "en", slug, "post.md");
    const filePath = fs.existsSync(localeDir) ? localeDir : fallbackPath;

    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        intro: data.intro ?? "",
        author: data.author,
        tags: data.tags,
        content,
    };
}
