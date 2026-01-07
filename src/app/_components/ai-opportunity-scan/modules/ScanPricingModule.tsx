"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Heading, Text } from "@/design-system/components/Typography";
import { CardContent, CardHeader } from "@/components/ui/Card";
import { scanContent } from "@/app/_content/ai-opportunity-scan";

export function ScanPricingModule() {
    return (
        <section className={cn("w-full tone-light bg-background text-foreground", spacing.modulePadBottom.m)}>
            <div className={cn("container mx-auto", spacing.stackLg)}>
                {/* Header: Stacked left-aligned by default (SectionHeader default) */}
                <SectionHeader
                    eyebrow={scanContent.pricing.eyebrow}
                    title={scanContent.pricing.title}
                    variant="stacked"
                    divider={true}
                />

                {/* Pricing Grid: 2-column adapted from Process 3-column */}
                <div className={cn("grid grid-cols-1 md:grid-cols-2 items-start", "gap-6 lg:gap-8")}> {/* lint:allowed - matching FeatureGridSection canon */}
                    {scanContent.pricing.items.map((item, idx) => (
                        <Surface
                            key={idx}
                            variant="card"
                            className="flex flex-col h-full" // Ensure visually equal heights
                        >
                            <CardHeader> {/* Optical adjustment for stackMd gap below */}
                                <div className={cn(spacing.stackXs, "w-full")}>
                                    {/* Header Row: Price (replaces Step Index) */}
                                    <div className="flex justify-between items-center w-full">
                                        {/* Reusing step typography for price to match weight */}
                                        <Text className={cn("text-muted-foreground", typography.variants.meta.step)}>
                                            {item.price}
                                        </Text>
                                        {/* No badge needed for pricing currently, but keeping structure clean */}
                                    </div>

                                    <Heading level={3} size="card" className={cn("text-balance", spacing.component.cardTitle)}>
                                        {item.title}
                                    </Heading>
                                </div>
                            </CardHeader>

                            <CardContent className={cn(spacing.stackMd, "pb-6")}> {/* lint:allowed - primitive fix for bottom padding */}
                                <Text size="md" className="text-muted-foreground">
                                    {item.description}
                                </Text>
                            </CardContent>
                        </Surface>
                    ))}
                </div>
            </div>
        </section>
    );
}
