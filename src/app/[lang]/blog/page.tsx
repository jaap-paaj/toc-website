import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog/loader";
import { BlogOverviewPage } from "@/app/_components/blog/BlogOverviewPage";
import type { Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
    title: "Blog | The Only Constant",
    description:
        "Insights on AI, innovation, and digital transformation from The Only Constant.",
};

interface BlogPageProps {
    params: Promise<{ lang: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { lang } = await params;
    const posts = getAllPosts(lang as Locale);
    return <BlogOverviewPage posts={posts} />;
}
