import Link from "next/link";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { BlogProse } from "@/app/_components/blog/BlogProse";
import type { BlogPost, BlogPostMeta } from "@/lib/blog/types";
import { layoutTokens } from "@/design-system/tokens/layout";

interface BlogPostModuleProps {
    post: BlogPost;
    latestPosts: BlogPostMeta[];
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogPostModule({ post, latestPosts }: BlogPostModuleProps) {
    return (
        <HomeModule id="blog-post" width="full" tone="light" pad="m" padTop="xl" gap="s" containsContent>
            <div className={cn("w-full flex flex-col items-center", spacing.stackXl)}>
                {/* Post header */}
                <header className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl px-4 md:px-0">
                    {/* Title */}
                    <Heading level={1} size="page" className="max-w-4xl text-balance">
                        {post.title}
                    </Heading>

                    {/* Intro */}
                    {post.intro && (
                        <Text size="lg" measure="2xl" className="text-balance text-muted-foreground">
                            {post.intro}
                        </Text>
                    )}

                    {/* Author & Date */}
                    <div className="flex flex-col items-center gap-4">
                        <div className={cn(typography.variants.meta.label, "text-muted-foreground flex flex-wrap items-center justify-center gap-2")}>
                            {post.author && (
                                <>
                                    <span className="font-semibold">By</span> {post.author}
                                    <span>&bull;</span>
                                </>
                            )}
                            <time dateTime={post.date}>
                                {formatDate(post.date)}
                            </time>
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex items-center justify-center flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={cn(
                                            typography.variants.meta.badge,
                                            "bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                                        )}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                {/* Divider */}
                <hr className="w-full max-w-5xl border-border" />

                {/* Content Split: Prose + Sidebar */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">

                    {/* Left: Prose */}
                    <div className="flex flex-col w-full">
                        <BlogProse content={post.content} />
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="hidden lg:flex flex-col items-start gap-8 sticky top-24 pl-8 border-l border-border/40">
                        <Heading level={3} size="sm">
                            Latest Posts
                        </Heading>
                        <div className="flex flex-col gap-6">
                            {latestPosts.map((latest) => (
                                <Link
                                    key={latest.slug}
                                    href={`/blog/${latest.slug}`}
                                    className="group flex flex-col gap-1.5"
                                >
                                    <span
                                        className={cn(
                                            typography.variants.body.md,
                                            "font-semibold underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200 line-clamp-2"
                                        )}
                                    >
                                        {latest.title}
                                    </span>
                                    <span className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                                        {formatDate(latest.date)}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/blog"
                            className={cn(typography.variants.meta.label, "mt-4 underline underline-offset-4 decoration-border hover:decoration-current transition-colors")}
                        >
                            View all blogs &rarr;
                        </Link>
                    </aside>
                </div>
            </div>
        </HomeModule>
    );
}
