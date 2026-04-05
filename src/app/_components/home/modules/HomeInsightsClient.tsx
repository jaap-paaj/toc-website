"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "../HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/blog/types";
import { homeContent } from "@/app/_content/home";
import { getPillarForBlog } from "@/app/_content/pillar";
import { useLocale } from "@/lib/i18n/useLocale";

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

export function HomeInsightsClient({ posts }: { posts: BlogPostMeta[] }) {
    const lang = useLocale();
    const content = homeContent[lang].insights;
    const [featured, ...rest] = posts;

    return (
        <HomeModule id="insights" width="full" tone="light" pad="m" gap="s" containsContent>
            <div className="flex flex-col gap-[var(--space-md)]">
                {/* Eyebrow */}
                <Text className={cn(typography.variants.meta.eyebrow, "text-foreground")}>
                    {content.eyebrow}
                </Text>

                {/* Posts */}
                <div className="flex flex-col">
                    <FeaturedPost post={featured} lang={lang} newBadge={content.newBadge} />
                    {rest.map((post) => (
                        <CompactPost key={post.slug} post={post} lang={lang} newBadge={content.newBadge} />
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
                        {content.viewAll} &rarr;
                    </Link>
                </div>
            </div>
        </HomeModule>
    );
}

function PillarBadge({ slug, lang }: { slug: string; lang: string }) {
    const pillar = getPillarForBlog(slug, lang as "nl" | "en");
    if (!pillar) return null;
    return (
        <div className="flex">
            <Link
                href={`/${pillar.pillarSlug}`}
                className={cn(
                    typography.variants.meta.badge,
                    "bg-foreground/10 text-foreground px-2 py-0.5 rounded-full hover:bg-foreground/20 transition-colors duration-200"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {pillar.tagLabel}
            </Link>
        </div>
    );
}

function FeaturedPost({ post, lang, newBadge }: { post: BlogPostMeta; lang: string; newBadge: string }) {
    return (
        <article className="flex flex-col gap-[var(--space-sm)] border-t border-border py-[var(--space-lg)] cursor-default">
            <div className="flex items-center gap-[var(--space-xs)]">
                {isRecent(post.date) && (
                    <span className={cn(typography.variants.meta.badge, "bg-primary text-primary-foreground px-2 py-0.5 rounded-full")}>
                        {newBadge}
                    </span>
                )}
                <Text className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                    {formatDate(post.date, lang)}
                </Text>
            </div>

            <Link href={`/blog/${post.slug}`} className="group">
                <Heading level={3} size="page" className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200">
                    {post.title}
                </Heading>
            </Link>

            {post.intro && (
                <Text size="lg" measure="2xl" className="text-muted-foreground">
                    {post.intro}
                </Text>
            )}

            <PillarBadge slug={post.slug} lang={lang} />
        </article>
    );
}

function CompactPost({ post, lang, newBadge }: { post: BlogPostMeta; lang: string; newBadge: string }) {
    return (
        <article className="flex flex-col gap-[var(--space-xs)] border-t border-border py-[var(--space-lg)] cursor-default">
            <div className="flex items-center gap-[var(--space-xs)]">
                {isRecent(post.date) && (
                    <span className={cn(typography.variants.meta.badge, "bg-primary text-primary-foreground px-2 py-0.5 rounded-full")}>
                        {newBadge}
                    </span>
                )}
                <Text className={cn(typography.variants.meta.label, "text-muted-foreground")}>
                    {formatDate(post.date, lang)}
                </Text>
            </div>

            <Link href={`/blog/${post.slug}`} className="group">
                <Heading level={3} size="lg" className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200">
                    {post.title}
                </Heading>
            </Link>

            {post.intro && (
                <Text size="md" measure="2xl" className="text-muted-foreground">
                    {post.intro}
                </Text>
            )}

            <PillarBadge slug={post.slug} lang={lang} />
        </article>
    );
}
