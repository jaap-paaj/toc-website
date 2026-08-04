"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { ContentCard } from "@/components/ui/ContentCard";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { readinessScanContent } from "@/app/_content/ai-readiness-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ReadinessHowItWorksModule() {
    const lang = useLocale();
    const { howItWorks } = readinessScanContent[lang];

    return (
        <HomeModule
            id="readiness-how"
            width="full"
            tone="light"
            padTop="m"
            padBottom="m"
            gap="none"
            containsContent
        >
            <div className={cn("w-full", spacing.stackLg)}>
                <span className={typography.variants.meta.eyebrow}>
                    {howItWorks.eyebrow}
                </span>
                <div className={cn("grid grid-cols-1 md:grid-cols-3 items-start", "gap-6 lg:gap-8")}> {/* lint:allowed - matching FeatureGridSection canon */}
                    {howItWorks.items.map((item) => (
                        <ContentCard key={item.step} variant="card" className="h-full">
                            <div className={cn(spacing.stackXs, "w-full")}>
                                <div className="flex justify-between items-center w-full">
                                    <Text
                                        className={cn(
                                            "text-muted-foreground",
                                            typography.variants.meta.step,
                                        )}
                                    >
                                        {item.step}
                                    </Text>
                                    {item.duration && (
                                        <div
                                            className={cn(
                                                "rounded-full border border-border px-3 py-1 bg-background/50" /* lint:allowed - badge internal padding */,
                                                typography.variants.meta.badge,
                                            )}
                                        >
                                            {item.duration}
                                        </div>
                                    )}
                                </div>
                                <Heading
                                    level={3}
                                    size="card"
                                    className={cn("text-balance", spacing.component.cardTitle)}
                                >
                                    {item.title}
                                </Heading>
                            </div>
                            <Text size="md" className="text-muted-foreground">
                                {item.description}
                            </Text>
                        </ContentCard>
                    ))}
                </div>
            </div>
        </HomeModule>
    );
}
