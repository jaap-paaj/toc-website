"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";
import { useLocale } from "@/lib/i18n/useLocale";

export function InnovateHeroModule() {
    const lang = useLocale();
    const { hero } = innovateContent[lang];

    return (
        <HomeModule
            id="hero"
            width="full"
            padTop="xl"
            padBottom="m"
            gap="none"
            tone="brand"
        >
            <CapabilityHeroSection
                index={hero.index}
                title={hero.title}
                description={hero.intro}
            />
        </HomeModule>
    );
}
