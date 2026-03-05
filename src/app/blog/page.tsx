import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog/loader";
import { BlogOverviewPage } from "@/app/_components/blog/BlogOverviewPage";

export const metadata: Metadata = {
    title: "Blog | The Only Constant",
    description:
        "Insights on AI, innovation, and digital transformation from The Only Constant.",
};

export default function BlogPage() {
    const posts = getAllPosts();
    return <BlogOverviewPage posts={posts} />;
}
