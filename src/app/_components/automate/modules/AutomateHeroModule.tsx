"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { automateContent } from "@/app/_content/automate";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";
import { useLocale } from "@/lib/i18n/useLocale";

export function AutomateHeroModule() {
    const lang = useLocale();
    const { hero } = automateContent[lang];

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
                seoTitle={hero.seoTitle || undefined}
            />
        </HomeModule>
    );
}
