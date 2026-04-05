"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";
import { educateContent } from "@/app/_content/educate";
import { useLocale } from "@/lib/i18n/useLocale";

export function EducateHeroModule() {
    const lang = useLocale();
    const { hero } = educateContent[lang];

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
                index={hero.eyebrow}
                title={hero.title}
                description={hero.description}
                seoTitle={hero.seoTitle || undefined}
            />
        </HomeModule>
    );
}
