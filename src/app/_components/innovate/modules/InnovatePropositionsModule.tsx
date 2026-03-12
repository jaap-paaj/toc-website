"use client";

import { HomeModule } from "../../home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";
import { useLocale } from "@/lib/i18n/useLocale";

export function InnovatePropositionsModule() {
    const lang = useLocale();
    const { propositions } = innovateContent[lang];

    const items = propositions.items.map(item => ({
        title: item.title,
        meta: item.meta,
        description: item.body
    }));

    return (
        <HomeModule id="propositions" width="full" tone="light" pad="m" gap="none">
            <CatalogGridSection
                eyebrow={propositions.eyebrow}
                description={propositions.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
