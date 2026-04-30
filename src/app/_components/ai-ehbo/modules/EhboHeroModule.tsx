"use client";

import { LeadMagnetHero } from "@/components/sections/LeadMagnetHero";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboHeroModule() {
    const lang = useLocale();
    const { hero } = ehboContent[lang];

    return (
        <LeadMagnetHero
            id="ehbo-hero"
            eyebrow={hero.eyebrow}
            title={hero.title}
            titleMuted={hero.titleMuted}
            description={hero.description}
            cta={{ label: hero.cta, href: "/ai-ehbo/chat" }}
        />
    );
}
