import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { blogContent } from "@/app/_content/blog";
import { getPillarForBlog } from "@/app/_content/pillar";
import type { BlogPostMeta } from "@/lib/blog/types";
import type { Locale } from "@/lib/i18n/config";

interface BlogGridSectionProps {
    posts: BlogPostMeta[];
    lang: Locale;
}

function formatDate(dateStr: string, locale: Locale): string {
    return new Date(dateStr).toLocaleDateString(locale === "nl" ? "nl-NL" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogGridSection({ posts, lang }: BlogGridSectionProps) {
    const { overview } = blogContent[lang];
    if (posts.length === 0) return null;

    return (
        <div className={cn("max-w-4xl mx-auto w-full px-6 flex flex-col", spacing.stackLg)}>
            <span className={typography.variants.meta.eyebrow}>
                {overview.moreTitle}
            </span>

            <div className={cn("flex flex-col", spacing.sectionStack.gap.s)}>
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={cn(spacing.stackXs, "group")}
                    >
                        {/* Date */}
                        <time
                            dateTime={post.date}
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground"
                            )}
                        >
                            {formatDate(post.date, lang)}
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
                        <Text size="md" className="text-muted-foreground line-clamp-3">
                            {post.intro}
                        </Text>

                        {/* Pillar badge */}
                        {(() => {
                            const pillar = getPillarForBlog(post.slug, lang);
                            if (!pillar) return null;
                            return (
                                <div className="flex">
                                    <span
                                        className={cn(
                                            typography.variants.meta.badge,
                                            "bg-foreground/10 text-foreground px-2 py-0.5 rounded-full"
                                        )}
                                    >
                                        {pillar.tagLabel}
                                    </span>
                                </div>
                            );
                        })()}

                    </Link>
                ))}
            </div>
        </div>
    );
}
