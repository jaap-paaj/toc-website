"use client";

import React from "react";
import { HomeModule } from "../../home/HomeModule";
import { StackedEditorialSection } from "@/components/sections/StackedEditorialSection";
import { educateContent } from "@/app/_content/educate";
import { useLocale } from "@/lib/i18n/useLocale";

export function EducateTrainingCatalogModule() {
    const lang = useLocale();

    return (
        <HomeModule id="training-catalog" width="full" tone="light" pad="m" gap="s">
            <StackedEditorialSection
                blocks={[
                    {
                        eyebrow: educateContent[lang].trainingCatalog.aiTraining.eyebrow,
                        description: educateContent[lang].trainingCatalog.aiTraining.description,
                        items: [...educateContent[lang].trainingCatalog.aiTraining.items]
                    },
                    {
                        eyebrow: educateContent[lang].trainingCatalog.innovationTraining.eyebrow,
                        description: educateContent[lang].trainingCatalog.innovationTraining.description,
                        items: [...educateContent[lang].trainingCatalog.innovationTraining.items]
                    }
                ]}
            />
        </HomeModule>
    );
}
