"use client";

import { cn } from "@/lib/utils";

import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";

export function ScanFeaturesModule() {
    return (
        <section className={cn(spacing.modulePad.m, "tone-light bg-background text-foreground")}>
            <div className={cn("container mx-auto")}>
                <FeatureGridSection
                    items={scanContent.features.items}
                    columns={3}
                    interactive={false}
                />
            </div>
        </section>
    );
}
