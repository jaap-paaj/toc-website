import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog/loader";
import { BlogDetailPage } from "@/app/_components/blog/BlogDetailPage";
import type { Locale } from "@/lib/i18n/config";

interface BlogPostPageProps {
    params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
    // Generate slug params for all locales — the loader falls back to "en"
    // so the same slugs work for both /nl/blog/... and /en/blog/...
    const posts = getAllPosts("en");
    return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const post = getPostBySlug(slug, lang as Locale);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Blog | The Only Constant`,
        description: post.intro,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { lang, slug } = await params;
    const locale = lang as Locale;
    const allPosts = getAllPosts(locale);

    // Find active post
    const post = allPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    // Fetch full post content
    const fullPost = getPostBySlug(slug, locale);
    if (!fullPost) notFound();

    // Get strictly 5 latest posts (excluding active)
    const latestPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 5);

    return <BlogDetailPage post={fullPost} latestPosts={latestPosts} />;
}
