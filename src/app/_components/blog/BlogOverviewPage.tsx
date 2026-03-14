import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { BlogLatestSection } from "./modules/BlogLatestModule";
import { BlogGridSection } from "./modules/BlogGridModule";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { blogContent } from "@/app/_content/blog";
import type { BlogPostMeta } from "@/lib/blog/types";
import type { Locale } from "@/lib/i18n/config";

interface BlogOverviewPageProps {
    posts: BlogPostMeta[];
    lang: Locale;
}

export function BlogOverviewPage({ posts, lang }: BlogOverviewPageProps) {
    const { overview } = blogContent[lang];
    // Split: first 3 are "latest", rest go to grid
    const latestPosts = posts.slice(0, 3);
    const olderPosts = posts.slice(3);

    return (
        <PageLayout variant="landing">
            <HomeModule id="blog-latest" width="full" padTop="xl" padBottom="m" gap="none" tone="light">
                <div className="w-full flex flex-col items-center">
                    <div className={cn("w-full flex flex-col items-center", spacing.sectionStack.gap.s)}>
                        <h1 className={cn(typography.variants.meta.eyebrow, "text-secondary text-center")}>
                            {overview.latestTitle}
                        </h1>
                        <BlogLatestSection posts={latestPosts} />
                    </div>
                </div>
            </HomeModule>
            {olderPosts.length > 0 && (
                <HomeModule id="blog-grid" width="full" tone="light" pad="m" padTop="none" gap="none">
                    <BlogGridSection posts={olderPosts} lang={lang} />
                </HomeModule>
            )}
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
