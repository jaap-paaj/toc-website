"use client";

import { CapabilityCardsSection } from "@/components/sections/CapabilityCardsSection";
import { HomeModule } from "../HomeModule";
import { homeContent } from "@/app/_content/home";
import { useLocale } from "@/lib/i18n/useLocale";

export function HomeServicesModule() {
    const lang = useLocale();
    return (
        <HomeModule id="capabilities" width="full" pad="m" gap="none">
            <CapabilityCardsSection
                eyebrow={homeContent[lang].services.eyebrow}
                items={[...homeContent[lang].services.items]}
            />
        </HomeModule>
    );
}
