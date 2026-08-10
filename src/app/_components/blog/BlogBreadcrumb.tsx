"use client";

import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { getPillarForBlog } from "@/app/_content/pillar";
import { useLocale } from "@/lib/i18n/useLocale";

interface BlogBreadcrumbProps {
    postTitle?: string;
    /** The post's stable key, which is what pillars are keyed on. */
    postKey?: string;
}

export function BlogBreadcrumb({ postTitle, postKey }: BlogBreadcrumbProps) {
    const lang = useLocale();
    const pillar = postKey ? getPillarForBlog(postKey, lang) : null;

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
