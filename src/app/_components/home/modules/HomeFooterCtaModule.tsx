"use client";

import { HomeModule } from "../HomeModule";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { homeContent } from "@/app/_content/home";
import { useLocale } from "@/lib/i18n/useLocale";
import { footerIndexLink } from "@/app/_content/footer";

export function HomeFooterCtaModule() {
    const lang = useLocale();
    return (
        <HomeModule id="cta" width="full" pad="m" padTop="none" gap="s">
            <FooterCtaSection
                footerLink={footerIndexLink[lang]}
                title={homeContent[lang].footerCta.title}
                cta={homeContent[lang].footerCta.cta}
                panelTitle={homeContent[lang].footerCta.panelTitle}
                panelBody={homeContent[lang].footerCta.panelBody}

            />
        </HomeModule>
    );
}