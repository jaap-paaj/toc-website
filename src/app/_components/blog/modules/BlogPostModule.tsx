"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { categoryPillClass, categoryPillInteractiveClass } from "@/components/ui/CategoryPill";
import { BlogProse } from "@/app/_components/blog/BlogProse";
import { BlogFaqSection } from "@/app/_components/blog/BlogFaqSection";
import { BlogCtaSection } from "@/app/_components/blog/BlogCtaSection";
import { BlogAuthorBio } from "@/app/_components/blog/BlogAuthorBio";
import type { BlogPost, BlogPostMeta } from "@/lib/blog/types";
import { blogContent } from "@/app/_content/blog";
import { getPillarForBlog } from "@/app/_content/pillar";
import { BlogBreadcrumb } from "@/app/_components/blog/BlogBreadcrumb";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogPostModuleProps {
    post: BlogPost;
    latestPosts: BlogPostMeta[];
}

function formatDate(dateStr: string, lang: string): string {
    return new Date(dateStr).toLocaleDateString(lang === "nl" ? "nl-NL" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogPostModule({ post, latestPosts }: BlogPostModuleProps) {
    const lang = useLocale();
    const content = blogContent[lang].sidebar;
    const pillar = getPillarForBlog(post.key, lang);
    return (
        <HomeModule id="blog-post" width="full" tone="light" pad="m" padTop="xl" gap="s" containsContent>
            <div className={cn("w-full flex flex-col items-center", spacing.stackXl)}>
                {/* Breadcrumb */}
                <BlogBreadcrumb postTitle={post.title} postKey={post.key} />

                {/* Post header */}
                <header className={cn("flex flex-col items-center text-center max-w-4xl", spacing.component.sectionHeader, "px-[var(--space-sm)] md:px-0")}>
                    {/* Title */}
                    <Heading level={1} size="section" className="max-w-4xl text-balance">
                        {post.title}
                    </Heading>

                    {/* Intro */}
                    {post.intro && (
                        <Text size="lg" measure="2xl" className="text-balance text-muted-foreground">
                            {post.intro}
                        </Text>
                    )}

                    {/* Author & Date */}
                    <div className="flex flex-col items-center gap-[var(--space-sm)]">
                        <div className={cn(typography.variants.meta.label, "text-muted-foreground flex flex-wrap items-center justify-center gap-2")}>
                            {post.author && (
                                <>
                                    <span>{lang === "nl" ? "Door" : "By"}</span> {post.author}
                                    <span>&bull;</span>
                                </>
                            )}
                            <time dateTime={post.date}>
                                {formatDate(post.date, lang)}
                            </time>
                        </div>

                        {/* Pillar tag */}
                        {pillar && (
                            <Link
                                href={`/${pillar.pillarSlug}`}
                                className={cn(
                                    categoryPillClass,
                                    categoryPillInteractiveClass
                                )}
                            >
                                {pillar.tagLabel}
                            </Link>
                        )}
                    </div>
                </header>

                {/* Divider */}
                <hr className="w-full max-w-5xl border-border" />

                {/* Content Split: Prose + Sidebar */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[var(--space-xl)] lg:gap-[var(--space-xxl)] items-start">

                    {/* Left: Prose + CTA + Author Bio + FAQ */}
                    <div className={cn("flex flex-col w-full", spacing.stackXl)}>
                        <BlogProse content={post.content} />

                        {/* CTA section */}
                        {post.ctaContent && (
                            <BlogCtaSection content={post.ctaContent} />
                        )}

                        {/* Author bio */}
                        <BlogAuthorBio />

                        {/* FAQ accordion */}
                        {post.faq && post.faq.length > 0 && (
                            <BlogFaqSection
                                title={blogContent[lang].faq.title}
                                items={post.faq}
                            />
                        )}

                        {/* Pillar page back-link */}
                        {pillar && (
                            <nav className={cn("w-full border-t border-border", spacing.stackSm, "pt-6" /* lint:allowed - visual separator */)}>
                                <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                                    {lang === "nl" ? "Meer over dit onderwerp" : "More on this topic"}
                                </span>
                                <Link
                                    href={`/${pillar.pillarSlug}`}
                                    className={cn(
                                        typography.variants.body.md,
                                        "underline underline-offset-4 decoration-border hover:decoration-current transition-colors duration-200"
                                    )}
                                >
                                    {pillar.title} &rarr;
                                </Link>
                            </nav>
                        )}
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="hidden lg:flex flex-col items-start gap-[var(--space-lg)] sticky top-24 pl-[var(--space-lg)] border-l border-border/40">
                        <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                            {content.latestPosts}
                        </span>
                        <div className="flex flex-col gap-[var(--space-md)]">
                            {latestPosts.map((latest) => (
                                <Link
                                    key={latest.slug}
                                    href={`/blog/${latest.slug}`}
                                    className="group flex flex-col gap-1.5"
                                >
                                    <span
                                        className={cn(
                                            typography.variants.body.md,
                                            "underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200 line-clamp-2"
                                        )}
                                    >
                                        {latest.title}
                                    </span>
                                    <span className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                                        {formatDate(latest.date, lang)}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/blog"
                            className={cn(typography.variants.meta.label, "underline underline-offset-4 decoration-border hover:decoration-current transition-colors")}
                        >
                            {content.viewAll} &rarr;
                        </Link>
                    </aside>
                </div>
            </div >
        </HomeModule >
    );
}
