import { cn } from "@/lib/utils";
import React from "react";
import { HomeModule } from "../../home/HomeModule";
import { StackedEditorialSection } from "@/components/sections/StackedEditorialSection";
import { educateContent } from "../educate.content";

export function EducateTrainingCatalogModule() {
    return (
        <HomeModule id="training-catalog" width="full" tone="light" pad="m" gap="s">
            <StackedEditorialSection
                blocks={[
                    {
                        eyebrow: educateContent.trainingCatalog.aiTraining.eyebrow,
                        description: educateContent.trainingCatalog.aiTraining.description,
                        items: [...educateContent.trainingCatalog.aiTraining.items]
                    },
                    {
                        eyebrow: educateContent.trainingCatalog.innovationTraining.eyebrow,
                        description: educateContent.trainingCatalog.innovationTraining.description,
                        items: [...educateContent.trainingCatalog.innovationTraining.items]
                    }
                ]}
            />
        </HomeModule>
    );
}
