"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { PageLayout } from "@/design-system/components/Layout";
import { BlogPostModule } from "./modules/BlogPostModule";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { BlogLatestSection } from "./modules/BlogLatestModule";
import type { BlogPost, BlogPostMeta } from "@/lib/blog/types";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { blogContent } from "@/app/_content/blog";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogDetailPageProps {
    post: BlogPost;
    latestPosts: BlogPostMeta[];
}

export function BlogDetailPage({ post, latestPosts }: BlogDetailPageProps) {
    const lang = useLocale();
    const content = blogContent[lang].detail;
    return (
        <PageLayout variant="landing">
            <BlogPostModule post={post} latestPosts={latestPosts} />
            <HomeModule id="blog-more" width="full" padTop="none" padBottom="m" gap="none" tone="light">
                <div className="w-full flex flex-col items-center">
                    <hr className={cn("w-full max-w-5xl border-border", spacing.modulePadBottom.m)} />
                    <div className={cn("w-full flex flex-col items-center", spacing.stackLg)}>
                        <span className={cn(typography.variants.meta.eyebrow, "text-secondary text-center")}>
                            {content.moreFrom}
                        </span>
                        <BlogLatestSection posts={latestPosts} showBottomBorder />
                        <Link
                            href="/blog"
                            className={cn(typography.variants.meta.label, "underline underline-offset-4 decoration-border hover:decoration-current transition-colors")}
                        >
                            {content.viewAll} &rarr;
                        </Link>
                    </div>
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
