"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { FooterCtaSection } from "@/components/sections/FooterCtaSection";
import { tenAiTipsContent } from "@/app/_content/ten-ai-tips";
import type { Locale } from "@/lib/i18n/config";
import { footerIndexLink } from "@/app/_content/footer";

interface TipsCtaModuleProps {
    lang: Locale;
}

export function TipsCtaModule({ lang }: TipsCtaModuleProps) {
    const { closing } = tenAiTipsContent[lang];

    return (
        <HomeModule
            id="tips-cta"
            width="full"
            tone="dark"
            pad="m"
            padTop="m"
            gap="none"
        >
            <FooterCtaSection
                footerLink={footerIndexLink[lang]}
                title={closing.title}
                cta={closing.cta}
                secondaryAction={closing.secondaryAction}
                panelTitle={closing.panelTitle}
                panelBody={closing.panelBody}
            />
        </HomeModule>
    );
}
