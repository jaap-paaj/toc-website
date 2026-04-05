"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { HomeFooterCtaModule } from "@/app/_components/home/modules/HomeFooterCtaModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { pillarContent, type PillarSlug } from "@/app/_content/pillar";
import type { BlogPostMeta } from "@/lib/blog/types";
import { useLocale } from "@/lib/i18n/useLocale";

interface PillarPageProps {
    slug: PillarSlug;
    posts: BlogPostMeta[];
}

function formatDate(dateStr: string, lang: string): string {
    return new Date(dateStr).toLocaleDateString(lang === "nl" ? "nl-NL" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function PillarPage({ slug, posts }: PillarPageProps) {
    const lang = useLocale();
    const content = pillarContent[slug][lang];

    return (
        <PageLayout variant="landing">
            {/* Hero */}
            <HomeModule id="pillar-hero" width="full" tone="light" pad="m" padTop="xl" gap="none" containsContent>
                <div className={cn("w-full", spacing.stackLg)}>
                    <div className={spacing.stackSm}>
                        <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                            {content.hero.eyebrow}
                        </span>
                        <Heading level={1} size="section">
                            {content.hero.title}
                        </Heading>
                        <Heading level={2} size="card" className="text-muted-foreground">
                            {content.hero.subtitle}
                        </Heading>
                    </div>
                    <div className={spacing.stackMd}>
                        {content.intro.map((p, i) => (
                            <Text key={i} size="lg" measure="2xl" className="text-muted-foreground">
                                {p}
                            </Text>
                        ))}
                    </div>
                </div>
            </HomeModule>

            {/* Blog links */}
            <HomeModule id="pillar-articles" width="full" tone="light" pad="m" padTop="none" gap="none" containsContent>
                <div className="flex flex-col max-w-4xl">
                    <span className={cn(typography.variants.meta.eyebrow, "text-foreground")}>
                        {lang === "nl" ? "Inzichten" : "Insights"}
                    </span>
                    {posts.map((post) => (
                        <article key={post.slug} className="flex flex-col gap-[var(--space-xs)] border-t border-border py-[var(--space-lg)] cursor-default">
                            <time
                                dateTime={post.date}
                                className={cn(typography.variants.meta.label, "text-muted-foreground")}
                            >
                                {formatDate(post.date, lang)}
                            </time>
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
                            <div className="flex">
                                <span
                                    className={cn(
                                        typography.variants.meta.badge,
                                        "bg-foreground/10 text-foreground px-2 py-0.5 rounded-full"
                                    )}
                                >
                                    {content.hero.title}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </HomeModule>

            {/* Service CTA */}
            <HomeModule id="pillar-services" width="full" tone="light" pad="m" padTop="none" gap="none" containsContent>
                <Surface variant="panel" className={cn("px-6 py-8 md:px-8 md:py-10 bg-foreground/5" /* lint:allowed - CTA block internal padding */, spacing.stackMd)}>
                    <Heading level={2} size="card">
                        {lang === "nl" ? "Klaar om te beginnen?" : "Ready to start?"}
                    </Heading>
                    <div className="flex flex-wrap gap-[var(--space-sm)]">
                        {content.services.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className={cn(
                                    typography.variants.meta.label,
                                    "underline underline-offset-4 decoration-border hover:decoration-current transition-colors"
                                )}
                            >
                                {service.label} &rarr;
                            </Link>
                        ))}
                    </div>
                </Surface>
            </HomeModule>

            {/* Footer CTA */}
            <HomeModule
                id="pillar-cta-seam"
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
