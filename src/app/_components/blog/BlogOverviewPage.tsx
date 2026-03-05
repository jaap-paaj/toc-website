import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { BlogHeroModule } from "./modules/BlogHeroModule";
import { BlogLatestSection } from "./modules/BlogLatestModule";
import { BlogGridSection } from "./modules/BlogGridModule";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog/types";

interface BlogOverviewPageProps {
    posts: BlogPostMeta[];
}

export function BlogOverviewPage({ posts }: BlogOverviewPageProps) {
    // Split: first 3 are "latest", rest go to grid
    const latestPosts = posts.slice(0, 3);
    const olderPosts = posts.slice(3);

    return (
        <PageLayout variant="landing">
            <BlogHeroModule />
            <HomeModule id="blog-content" width="full" pad="m" gap="s" tone="light">
                <div className={cn("flex flex-col w-full items-center", spacing.sectionStack.gap.m)}>
                    <BlogLatestSection posts={latestPosts} />
                    {olderPosts.length > 0 && <BlogGridSection posts={olderPosts} />}
                </div>
            </HomeModule>
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
