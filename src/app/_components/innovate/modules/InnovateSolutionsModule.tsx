"use client";

import { HomeModule } from "../../home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";
import { useLocale } from "@/lib/i18n/useLocale";

export function InnovateSolutionsModule() {
    const lang = useLocale();
    const { solutions } = innovateContent[lang];

    const items = solutions.items.map(item => ({
        title: item.title,
        meta: item.meta,
        description: item.body
    }));

    return (
        <HomeModule id="solutions" width="full" tone="light" pad="m" padTop="none" gap="none">
            <CatalogGridSection
                eyebrow={solutions.eyebrow}
                description={solutions.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
