"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { getPillarForBlog } from "@/app/_content/pillar";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogBreadcrumbProps {
    postTitle?: string;
    slug?: string;
}

export function BlogBreadcrumb({ postTitle, slug }: BlogBreadcrumbProps) {
    const lang = useLocale();
    const pillar = slug ? getPillarForBlog(slug, lang) : null;

    const crumbClass = cn(typography.variants.meta.label, "text-muted-foreground hover:text-foreground transition-colors");
    const activeClass = cn(typography.variants.meta.label, "text-muted-foreground");
    const sepClass = cn(typography.variants.meta.label, "text-muted-foreground/50");

    return (
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5">
            <Link href="/blog" className={crumbClass}>{lang === "nl" ? "Inzichten" : "Insights"}</Link>
            {pillar && (
                <>
                    <span className={sepClass}>/</span>
                    {postTitle ? (
                        <Link href={`/${pillar.pillarSlug}`} className={crumbClass}>
                            {pillar.tagLabel}
                        </Link>
                    ) : (
                        <span className={activeClass}>{pillar.tagLabel}</span>
                    )}
                </>
            )}
            {postTitle && (
                <>
                    <span className={sepClass}>/</span>
                    <span className={cn(activeClass, "line-clamp-1")}>{postTitle}</span>
                </>
            )}
        </nav>
    );
}
