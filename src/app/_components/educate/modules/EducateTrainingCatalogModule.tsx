import { cn } from "@/lib/utils";
import React from "react";
import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";

// Local implementation removed in favor of src/components/sections/CatalogGridSection.tsx

import { CatalogGridSection } from "@/components/sections/CatalogGridSection";
import { educateContent } from "../educate.content";

export function EducateTrainingCatalogModule() {
    return (
        <HomeModule id="training-catalog" width="full" tone="light" pad="m" gap="s">
            <div className="container mx-auto flex flex-col gap-16 md:gap-24">
                <CatalogGridSection
                    eyebrow={educateContent.trainingCatalog.aiTraining.eyebrow}
                    description={educateContent.trainingCatalog.aiTraining.description}
                    items={[...educateContent.trainingCatalog.aiTraining.items]}
                />
                <CatalogGridSection
                    eyebrow={educateContent.trainingCatalog.innovationTraining.eyebrow}
                    description={educateContent.trainingCatalog.innovationTraining.description}
                    items={[...educateContent.trainingCatalog.innovationTraining.items]}
                />
            </div>
        </HomeModule>
    );
}
