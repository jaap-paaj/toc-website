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
}

/**
 * The whole footer: the call-to-action band and the navigation strip under it.
 *
 * One module, so the seam between the two is decided once. The band's own
 * padding is symmetric, which is what makes the space above the band equal the
 * space from the band down to the first link; the strip therefore contributes
 * no top padding of its own.
 *
 * Pages that deliberately end without a footer — the four tool entry points —
 * simply do not render this. scripts/audit-footer.js keeps that list honest.
 */
export function SiteFooterModule({ cta }: SiteFooterModuleProps) {
    const lang = useLocale();
    const content = cta ?? footerCta[lang];

    return (
        <>
            <HomeModule
                id="site-footer-cta"
                width="full"
                tone="dark"
                pad="m"
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
