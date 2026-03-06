import Link from "next/link";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog/types";

interface BlogGridSectionProps {
    posts: BlogPostMeta[];
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogGridSection({ posts }: BlogGridSectionProps) {
    if (posts.length === 0) return null;

    return (
        <div className={cn("container mx-auto flex flex-col", spacing.stackLg)}>
            <span className={typography.variants.meta.eyebrow}>
                More from The Only Constant
            </span>

            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8")}>
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={cn(
                            spacing.stackSm,
                            "group border border-border rounded-surface bg-card shadow-surface hover:border-primary hover:shadow-lg transition-all",
                            spacing.component.contentCard
                        )}
                    >
                        {/* Date */}
                        <time
                            dateTime={post.date}
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground"
                            )}
                        >
                            {formatDate(post.date)}
                        </time>

                        {/* Title */}
                        <Heading
                            level={3}
                            size="card"
                            className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200"
                        >
                            {post.title}
                        </Heading>

                        {/* Intro */}
                        <Text size="sm" className="line-clamp-3">
                            {post.intro}
                        </Text>

                        {/* Author */}
                        {post.author && (
                            <span
                                className={cn(
                                    typography.variants.meta.label,
                                    "text-muted-foreground"
                                )}
                            >
                                <span>By</span> {post.author}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}
