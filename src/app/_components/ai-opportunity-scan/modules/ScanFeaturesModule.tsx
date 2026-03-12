"use client";

import { cn } from "@/lib/utils";

import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { spacing } from "@/design-system/tokens/spacing";
import { useLocale } from "@/lib/i18n/useLocale";

export function ScanFeaturesModule() {
    const lang = useLocale();
    return (
        <section className={cn(spacing.modulePad.m, "tone-light bg-background text-foreground")}>
            <div className={cn("container mx-auto")}>
                <FeatureGridSection
                    items={scanContent[lang].features.items}
                    columns={3}
                    interactive={false}
                />
            </div>
        </section>
    );
}
