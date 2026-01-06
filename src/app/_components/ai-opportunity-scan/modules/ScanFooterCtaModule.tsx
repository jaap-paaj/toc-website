"use client";

import { cn } from "@/lib/utils";

import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";

export function ScanFooterCtaModule() {
    return (
        <section className={spacing.modulePad.m}>
            <FooterCtaSection
                title={scanContent.footerCta.title}
                cta={scanContent.footerCta.cta}
                panelTitle={scanContent.footerCta.panelTitle}
                panelBody={scanContent.footerCta.panelBody}
                copyright={scanContent.footerCta.copyright}
            />
        </section>
    );
}
