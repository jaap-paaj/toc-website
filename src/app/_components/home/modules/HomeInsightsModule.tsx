import Link from "next/link";
import { HomeModule } from "../HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";
import { getAllPosts } from "@/lib/blog/loader";
import type { BlogPostMeta } from "@/lib/blog/types";

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

export function HomeInsightsModule() {
    const posts = getAllPosts().slice(0, 3);
    if (posts.length === 0) return null;

    const [featured, ...rest] = posts;

    return (
        <HomeModule id="insights" width="full" tone="light" pad="m" gap="s" containsContent>
            <div className="flex flex-col gap-[var(--space-md)]">
                {/* Eyebrow */}
                <Text className={cn(typography.variants.meta.eyebrow, "text-foreground")}>
                    Latest Thinking
                </Text>

                {/* Posts */}
                <div className="flex flex-col">
                    <FeaturedPost post={featured} />
                    {rest.map((post) => (
                        <CompactPost key={post.slug} post={post} />
                    ))}
                </div>

                {/* View all */}
                <div className="flex justify-start">
                    <Link
                        href="/blog"
                        className={cn(
                            typography.variants.meta.label,
                            "underline underline-offset-4 decoration-border hover:decoration-current transition-colors duration-200"
                        )}
                    >
                        View all &rarr;
                    </Link>
                </div>
            </div>
        </HomeModule>
    );
}

function FeaturedPost({ post }: { post: BlogPostMeta }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4 border-t border-border py-[var(--space-lg)]">
            <div className="flex items-center gap-[var(--space-xs)]">
                {isRecent(post.date) && (
                    <span className={cn(typography.variants.meta.badge, "bg-primary text-primary-foreground px-2 py-0.5 rounded-full")}>
                        New
                    </span>
                )}
                <Text className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                    {formatDate(post.date)}
                </Text>
            </div>

            <Heading level={3} size="page" className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200">
                {post.title}
            </Heading>

            {post.intro && (
                <Text size="lg" measure="2xl" className="text-muted-foreground">
                    {post.intro}
                </Text>
            )}
        </Link>
    );
}

function CompactPost({ post }: { post: BlogPostMeta }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-2 border-t border-border py-[var(--space-lg)]">
            <div className="flex items-center gap-[var(--space-xs)]">
                {isRecent(post.date) && (
                    <span className={cn(typography.variants.meta.badge, "bg-primary text-primary-foreground px-2 py-0.5 rounded-full")}>
                        New
                    </span>
                )}
                <Text className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                    {formatDate(post.date)}
                </Text>
            </div>

            <Heading level={3} size="lg" className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200">
                {post.title}
            </Heading>

            {post.intro && (
                <Text size="md" measure="2xl" className="text-muted-foreground">
                    {post.intro}
                </Text>
            )}

        </Link>
    );
}
