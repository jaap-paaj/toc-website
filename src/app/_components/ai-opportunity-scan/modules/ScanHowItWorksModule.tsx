"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Heading, Text } from "@/design-system/components/Typography";
import { ContentCard } from "@/components/ui/ContentCard";
import { scanContent } from "@/app/_content/ai-opportunity-scan";

export function ScanHowItWorksModule() {
    return (
        <section className={cn("w-full tone-light bg-background text-foreground", spacing.modulePadBottom.m)}>
            <div className={cn("container mx-auto", spacing.stackLg)}>
                {/* Header: Stacked left-aligned by default (SectionHeader default) */}
                <SectionHeader
                    eyebrow={scanContent.howItWorks.eyebrow}
                    title={scanContent.howItWorks.title}
                    variant="stacked"
                />

                {/* Steps Grid: 3-column standard */}
                <div className={cn("grid grid-cols-1 md:grid-cols-3 items-start", "gap-6 lg:gap-8")}> {/* lint:allowed - matching FeatureGridSection canon */}
                    {scanContent.howItWorks.steps.map((step, idx) => (
                        <ContentCard
                            key={idx}
                            variant="card"
                            className="h-full" // Ensure visually equal heights if content varies slightly
                        >
                            <div className={cn(spacing.stackXs, "w-full")}>
                                {/* Header Row: Index + Badge */}
                                <div className="flex justify-between items-center w-full">
                                    <Text className={cn("text-muted-foreground", typography.variants.meta.step)}>
                                        {step.step}
                                    </Text>
                                    <div className={cn(
                                        "rounded-full border border-border px-3 py-1 bg-background/50", // lint:allowed - Badge internal padding
                                        typography.variants.meta.badge
                                    )}>
                                        {step.duration}
                                    </div>
                                </div>

                                <Heading level={3} size="card" className={cn("text-balance", spacing.component.cardTitle)}>
                                    {step.title}
                                </Heading>
                            </div>

                            <Text size="md" className="text-muted-foreground">
                                {step.description}
                            </Text>
                        </ContentCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
