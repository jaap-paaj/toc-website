import Link from "next/link";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog/types";

interface BlogLatestSectionProps {
    posts: BlogPostMeta[];
    showBottomBorder?: boolean;
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-GB", {
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
                                New
                            </span>
                        )}
                        <time
                            dateTime={post.date}
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground"
                            )}
                        >
                            {formatDate(post.date)}
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
