"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { trackEvent } from "@/lib/analytics/ga";
import { TextStack } from "../primitives/TextStack";

export function ScanLandingHeroModule() {
    const handleCtaClick = () => {
        trackEvent("cta_click", {
            cta_label: scanContent.hero.cta.label,
            cta_location: "hero_scan_landing",
        });
    };

    return (
        <section className={cn("w-full", spacing.modulePad.l, spacing.modulePadTop.xl)}>
            <TextStack
                title={scanContent.hero.title}
                subtitle={scanContent.hero.subtitle}
                outcomes={scanContent.hero.outcomes}
                cta={scanContent.hero.cta}
                trust={scanContent.trust}
                onCtaClick={handleCtaClick}
            />
        </section>
    );
}
