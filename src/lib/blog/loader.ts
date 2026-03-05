import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta, BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Read all blog posts, parse frontmatter, return sorted by date descending.
 */
export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const slugs = fs
        .readdirSync(BLOG_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    const posts: BlogPostMeta[] = [];

    for (const slug of slugs) {
        const filePath = path.join(BLOG_DIR, slug, "post.md");
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
 * Read a single blog post by slug. Returns null if not found.
 */
export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(BLOG_DIR, slug, "post.md");
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
