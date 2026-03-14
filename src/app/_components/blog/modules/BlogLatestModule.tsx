"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog/types";
import { blogContent } from "@/app/_content/blog";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogLatestSectionProps {
    posts: BlogPostMeta[];
    showBottomBorder?: boolean;
}

function formatDate(dateStr: string, lang: string): string {
    return new Date(dateStr).toLocaleDateString(lang === "nl" ? "nl-NL" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function isRecent(dateStr: string, days = 30): boolean {
    const postDate = new Date(dateStr);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return postDate >= cutoff;
}

export function BlogLatestSection({ posts, showBottomBorder }: BlogLatestSectionProps) {
    const lang = useLocale();
    const content = blogContent[lang].detail;

    if (posts.length === 0) return null;

    return (
        <div className={cn("max-w-4xl mx-auto w-full px-6", spacing.stackXl)}>
            {posts.map((post, i) => (
                <article
                    key={post.slug}
                    className={cn(
                        spacing.stackMd,
                        "text-center max-w-4xl self-center w-full",
                        (i < posts.length - 1 || showBottomBorder) &&
                        `border-b border-border ${spacing.modulePadBottom.xs}`
                    )}
                >
                    {/* Meta row: NEW badge + date */}
                    <div className="flex items-center justify-center gap-[var(--space-xs)]">
                        {isRecent(post.date) && (
                            <span
                                className={cn(
                                    typography.variants.meta.badge,
                                    "bg-primary text-primary-foreground px-2 py-0.5 rounded-full"
                                )}
                            >
                                {content.newBadge}
                            </span>
                        )}
                        <time
                            dateTime={post.date}
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground"
                            )}
                        >
                            {formatDate(post.date, lang)}
                        </time>
                    </div>

                    {/* Title */}
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group block"
                    >
                        <Heading level={2} size="lg" className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200">
                            {post.title}
                        </Heading>
                    </Link>

                    {/* Intro */}
                    <Text size="lg">
                        {post.intro}
                    </Text>

                </article>
            ))}
        </div>
    );
}
