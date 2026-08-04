"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

export interface Crumb {
    label: string;
    /** Omit on the current page: it renders as plain text, not a link. */
    href?: string;
}

interface BreadcrumbProps {
    crumbs: readonly Crumb[];
    className?: string;
}

/**
 * The site's one breadcrumb treatment. Extracted from the blog so every
 * section that needs a trail uses the same thing instead of inventing its own.
 */
export function Breadcrumb({ crumbs, className }: BreadcrumbProps) {
    const linkClass = cn(
        typography.variants.meta.label,
        "text-muted-foreground hover:text-foreground transition-colors",
    );
    const currentClass = cn(typography.variants.meta.label, "text-muted-foreground");
    const separatorClass = cn(typography.variants.meta.label, "text-muted-foreground/50");

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("flex items-center flex-wrap gap-1.5", className)}
        >
            {crumbs.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                    {i > 0 && <span className={separatorClass}>/</span>}
                    {crumb.href ? (
                        <Link href={crumb.href} className={linkClass}>
                            {crumb.label}
                        </Link>
                    ) : (
                        <span className={cn(currentClass, "line-clamp-1")}>
                            {crumb.label}
                        </span>
                    )}
                </span>
            ))}
        </nav>
    );
}
