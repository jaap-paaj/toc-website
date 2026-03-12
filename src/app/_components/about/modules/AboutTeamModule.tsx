"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { TeamGridSection } from "@/components/sections/TeamGridSection";
import { aboutContent } from "@/app/_content/about";
import { useLocale } from "@/lib/i18n/useLocale";

export function AboutTeamModule() {
    const lang = useLocale();
    return (
        <HomeModule
            id="about-team"
            width="full"
            tone="light"
            pad="m"
            gap="none"
            containsContent // Canonical: Delegate container ownership to Section (HomeModule)
        >
            <TeamGridSection
                eyebrow={aboutContent[lang].team.eyebrow}
                title={aboutContent[lang].team.title}
                description={aboutContent[lang].team.description}
                members={aboutContent[lang].team.members}
            />
        </HomeModule>
    );
}
