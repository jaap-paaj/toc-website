"use client";

import { HomeModule } from "../../home/HomeModule";
import { automateContent } from "@/app/_content/automate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";
import { useLocale } from "@/lib/i18n/useLocale";

export function AutomateReadyToRunModule() {
    const lang = useLocale();
    const { readyToRun } = automateContent[lang];

    const items = readyToRun.items.map(item => ({
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="ready-to-run" width="full" tone="light" pad="m" gap="s">
            <CatalogGridSection
                eyebrow={readyToRun.eyebrow}
                description={readyToRun.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
