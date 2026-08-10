"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { SiteFooterNav } from "@/components/sections/SiteFooterNav";
import { footerCta, type FooterCtaContent } from "@/app/_content/footer";
import { useLocale } from "@/lib/i18n/useLocale";

interface SiteFooterModuleProps {
    /**
     * Page-specific closing copy. Omit it and the page ends on the site-wide
     * call to action, which is what almost every page wants.
     */
    cta?: FooterCtaContent;
    /**
     * The footer's own step of space above the band.
     *
     * Default "m", because most pages end on a light module and the footer is
     * dark. A tone edge splits the space in two: the light block keeps its step
     * above the edge, and the dark block needs its own below it, or the band
     * lands straight against the colour change with no margin of its own.
     *
     * Pass "none" where the module above paints the same colour and already
     * ends on a full step. With no edge to divide them the two steps merge into
     * one oversized gap, and the footer drifts away from the page.
     */
    spaceAbove?: "none" | "m";
}

/**
 * The whole footer: the call-to-action band and the navigation strip under it.
 *
 * The seam above it belongs to the page, not to the footer — see spaceAbove.
 * Everything below the band's top edge belongs here: the band's padBottom and
 * the strip's lack of a padTop are what keep the space under the band equal to
 * the space above it.
 *
 * Pages that deliberately end without a footer — the four tool entry points —
 * simply do not render this. scripts/audit-footer.js keeps that list honest,
 * and e2e/rhythm.spec.ts keeps this seam from doubling again.
 */
export function SiteFooterModule({ cta, spaceAbove = "m" }: SiteFooterModuleProps) {
    const lang = useLocale();
    const content = cta ?? footerCta[lang];

    return (
        <>
            <HomeModule
                id="site-footer-cta"
                width="full"
                tone="dark"
                pad="m"
                padTop={spaceAbove}
                gap="none"
            >
                <FooterCtaSection
                    title={content.title}
                    cta={content.cta}
                    secondaryAction={content.secondaryAction}
                    panelTitle={content.panelTitle}
                    panelBody={content.panelBody}
                />
            </HomeModule>

            <HomeModule
                id="site-footer-nav"
                width="full"
                tone="dark"
                pad="m"
                padTop="none"
                gap="none"
            >
                <SiteFooterNav />
            </HomeModule>
        </>
    );
}
