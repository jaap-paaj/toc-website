"use client";

import { LeadMagnetHero } from "@/components/sections/LeadMagnetHero";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { trackEvent } from "@/lib/analytics/ga";
import { useLocale } from "@/lib/i18n/useLocale";

interface ScanLandingHeroModuleProps {
    title?: string;
    subtitle?: string;
}

export function ScanLandingHeroModule({ title, subtitle }: ScanLandingHeroModuleProps) {
    const lang = useLocale();
    const base = scanContent[lang].hero;
    const trust = scanContent[lang].trust;
    const usingVariantTitle = !!title;

    const handleCtaClick = () => {
        trackEvent("cta_click", {
            tool: "readiness",
            cta_label: base.cta.label,
            cta_location: "hero_scan_landing",
            language: lang,
        });
    };

    return (
        <LeadMagnetHero
            id="scan-hero"
            eyebrow={base.eyebrow}
            title={title ?? base.title}
            titleMuted={usingVariantTitle ? undefined : base.titleMuted}
            description={subtitle ?? base.subtitle}
            cta={base.cta}
            trust={trust}
            onCtaClick={handleCtaClick}
        />
    );
}
