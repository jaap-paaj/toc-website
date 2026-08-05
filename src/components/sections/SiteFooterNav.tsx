"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { footerContent, footerLegal } from "@/app/_content/footer";
import { useLocale } from "@/lib/i18n/useLocale";

/**
 * The navigation layer of the footer.
 *
 * Sits below the CTA band rather than inside it, so the call to action keeps
 * its single job. Lives in FooterCtaSection, which means the four tool pages
 * that deliberately have no footer keep their clean chrome without an
 * exception having to be maintained.
 */
export function SiteFooterNav() {
    const lang = useLocale();
    const { columns } = footerContent[lang];
    const legal = footerLegal(lang);

    return (
        <div className="container">
            <div
                className={cn(
                    "flex flex-col gap-[var(--space-lg)] border-t border-border/40",
                    "pt-[var(--space-lg)]",
                )}
            >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[var(--space-lg)]">
                    {columns.map((column) => (
                        <div key={column.title} className={spacing.stackSm}>
                            <span
                                className={cn(
                                    typography.variants.meta.label,
                                    "text-muted-foreground",
                                )}
                            >
                                {column.title}
                            </span>
                            <ul className="flex flex-col gap-[var(--space-xs)]">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                typography.variants.body.sm,
                                                "text-foreground/80 hover:text-foreground transition-colors",
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {legal.length > 0 && (
                    <div className="flex flex-wrap gap-x-[var(--space-sm)] gap-y-1">
                        {legal.map((line) => (
                            <span
                                key={line}
                                className={cn(
                                    typography.variants.body.sm,
                                    "text-muted-foreground",
                                )}
                            >
                                {line}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
