"use client";

import { LeadMagnetHero } from "@/components/sections/LeadMagnetHero";
import {
    readinessScanContent,
    READINESS_SCAN_CHAT_PATH,
} from "@/app/_content/ai-readiness-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ReadinessHeroModule() {
    const lang = useLocale();
    const { hero } = readinessScanContent[lang];

    return (
        <LeadMagnetHero
            id="readiness-hero"
            eyebrow={hero.eyebrow}
            title={hero.title}
            titleMuted={hero.titleMuted}
            description={hero.description}
            cta={{ label: hero.cta, href: READINESS_SCAN_CHAT_PATH }}
        />
    );
}
