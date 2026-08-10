"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { layoutTokens } from "@/design-system/tokens/layout";
import { footerContent, footerPrimary } from "@/app/_content/footer";
import { useLocale } from "@/lib/i18n/useLocale";

/**
 * The navigation layer of the footer.
 *
 * A sibling of the CTA band, not a part of it, so the call to action keeps its
 * single job and any page can carry one without the other. It brings no outer
 * spacing of its own: the module that places it owns the distance to whatever
 * sits above.
 *
 * Not mounted on the site yet — only on /intern/footer-preview.
 */
export function SiteFooterNav() {
    const lang = useLocale();
    const { columns } = footerContent[lang];
    const primary = footerPrimary[lang];

    return (
        <div className="container">
            {/* One dominant block, three secondary columns grouped opposite it.
                No rule and no top padding: the distance down from the CTA band
                is the band's own padBottom, which is the same scale step as the
                padTop above it. A divider would add a second, unequal gap. */}
            <div className={layoutTokens.splitAsymmetric}>
                {/* Type token and cap trim both sit on the li: the line box takes
                    its metrics from the block container, and the trim is what
                    makes the space above the band equal the space below it to
                    the eye rather than only in the box model. */}
                <ul className={spacing.stackSm}>
                    {primary.map((link) => (
                        <li
                            key={link.href}
                            className={cn(
                                typography.variants.heading.prompt,
                                typography.capTrim,
                            )}
                        >
                            <Link
                                href={link.href}
                                className="text-foreground hover:text-foreground/70 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={layoutTokens.linkListCluster}>
                    {columns.map((column) => (
                        <div key={column.title} className={spacing.stackMd}>
                            {/* Eyebrow, not label: the column head has to
                                outrank the links under it on size, weight and
                                brightness, or the group reads as one flat
                                list. */}
                            <span
                                className={cn(
                                    typography.variants.meta.eyebrow,
                                    typography.capTrim,
                                    "text-foreground",
                                )}
                            >
                                {column.title}
                            </span>
                            <ul className={spacing.stackSm}>
                                {/* The type token sits on the li, not on the a.
                                    A line box takes its height from the block
                                    container, so leading applied to the inline
                                    link would be overruled by the li's
                                    strut. */}
                                {column.links.map((link) => (
                                    <li
                                        key={link.href}
                                        className={
                                            typography.variants.ui.nav.listLink
                                        }
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-foreground/80 hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
