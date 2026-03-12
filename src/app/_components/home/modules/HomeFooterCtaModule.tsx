"use client";

import { HomeModule } from "../HomeModule";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { homeContent } from "@/app/_content/home";
import { useLocale } from "@/lib/i18n/useLocale";

export function HomeFooterCtaModule() {
    const lang = useLocale();
    return (
        <HomeModule id="cta" width="full" pad="m" padTop="none" gap="s">
            <FooterCtaSection
                title={homeContent[lang].footerCta.title}
                cta={homeContent[lang].footerCta.cta}
                panelTitle={homeContent[lang].footerCta.panelTitle}
                panelBody={homeContent[lang].footerCta.panelBody}
                copyright={homeContent[lang].footerCta.copyright}
            />
        </HomeModule>
    );
}