"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { trackEvent } from "@/lib/analytics/ga";
import { TextStack } from "../primitives/TextStack";
import { useLocale } from "@/lib/i18n/useLocale";

interface ScanLandingHeroModuleProps {
    title?: string;
    subtitle?: string;
}

export function ScanLandingHeroModule({ title, subtitle }: ScanLandingHeroModuleProps) {
    const lang = useLocale();
    const handleCtaClick = () => {
        trackEvent("cta_click", {
            cta_label: scanContent[lang].hero.cta.label,
            cta_location: "hero_scan_landing",
        });
    };

    return (
        <section className={cn("w-full", spacing.modulePad.l, spacing.modulePadTop.xl)}>
            <TextStack
                title={title || scanContent[lang].hero.title}
                subtitle={subtitle || scanContent[lang].hero.subtitle}
                outcomes={scanContent[lang].hero.outcomes}
                cta={scanContent[lang].hero.cta}
                trust={scanContent[lang].trust}
                onCtaClick={handleCtaClick}
            />
        </section>
    );
}
