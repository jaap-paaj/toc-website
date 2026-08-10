"use client";

import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { getPillarForBlog } from "@/app/_content/pillar";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogBreadcrumbProps {
    postTitle?: string;
    slug?: string;
}

export function BlogBreadcrumb({ postTitle, slug }: BlogBreadcrumbProps) {
    const lang = useLocale();
    const pillar = slug ? getPillarForBlog(slug, lang) : null;

    const crumbs: Crumb[] = [
        { label: lang === "nl" ? "Inzichten" : "Insights", href: "/blog" },
    ];

    if (pillar) {
        crumbs.push({
            label: pillar.tagLabel,
            href: postTitle ? `/${pillar.pillarSlug}` : undefined,
        });
    }

    if (postTitle) {
        crumbs.push({ label: postTitle });
    }

    return <Breadcrumb crumbs={crumbs} />;
}
