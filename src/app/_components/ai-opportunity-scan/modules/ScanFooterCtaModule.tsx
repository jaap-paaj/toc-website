"use client";

import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";
import { useLocale } from "@/lib/i18n/useLocale";

export function ScanFooterCtaModule() {
    const lang = useLocale();
    return (
        <section className={spacing.modulePad.m}>
            <FooterCtaSection
                title={scanContent[lang].footerCta.title}
                cta={scanContent[lang].footerCta.cta}
                panelTitle={scanContent[lang].footerCta.panelTitle}
                panelBody={scanContent[lang].footerCta.panelBody}
                copyright={scanContent[lang].footerCta.copyright}
            />
        </section>
    );
}
