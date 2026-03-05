import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog/loader";
import { BlogDetailPage } from "@/app/_components/blog/BlogDetailPage";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Blog | The Only Constant`,
        description: post.intro,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const allPosts = getAllPosts();

    // Find active post
    const post = allPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    // Fetch full post content
    const fullPost = getPostBySlug(slug);
    if (!fullPost) notFound();

    // Get strictly 5 latest posts (excluding active)
    const latestPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 5);

    return <BlogDetailPage post={fullPost} latestPosts={latestPosts} />;
}
