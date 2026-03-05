import { PageLayout } from "@/design-system/components/Layout";
import { BlogPostModule } from "./modules/BlogPostModule";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import type { BlogPost, BlogPostMeta } from "@/lib/blog/types";

interface BlogDetailPageProps {
    post: BlogPost;
    latestPosts: BlogPostMeta[];
}

export function BlogDetailPage({ post, latestPosts }: BlogDetailPageProps) {
    return (
        <PageLayout variant="landing">
            <BlogPostModule post={post} latestPosts={latestPosts} />
            <HomeModule
                id="blog-cta-seam"
                width="full"
                tone="dark"
                pad="none"
                padTop="m"
                gap="none"
            >
                <HomeFooterCtaModule />
            </HomeModule>
        </PageLayout>
    );
}
