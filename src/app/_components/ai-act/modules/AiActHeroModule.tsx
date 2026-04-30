"use client";

import { LeadMagnetHero } from "@/components/sections/LeadMagnetHero";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";

export function AiActHeroModule() {
    const lang = useLocale();
    const { hero } = aiActContent[lang];

    return (
        <LeadMagnetHero
            id="ai-act-hero"
            eyebrow={hero.eyebrow}
            title={hero.title}
            titleMuted={hero.titleMuted}
            description={hero.description}
            cta={{ label: hero.cta, href: "/ai-act/check" }}
        />
    );
}
