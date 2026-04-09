"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboHowItWorksModule() {
    const lang = useLocale();
    const { howItWorks } = ehboContent[lang];

    return (
        <HomeModule id="ehbo-how" width="full" tone="light" padTop="none" padBottom="m" gap="none" containsContent>
            <div className={cn("w-full", spacing.stackLg)}>
            <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                {lang === "nl" ? "Hoe het werkt" : "How it works"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-xl)]">
                {howItWorks.items.map((item) => (
                    <Surface key={item.title} variant="card" className={spacing.component.contentCard}>
                        <span className="text-primary text-3xl font-bold"> {/* lint:allowed - decorative step number */}
                            {item.index}
                        </span>
                        <Heading level={3} size="card">
                            {item.title}
                        </Heading>
                        <Text size="md" className="text-muted-foreground">
                            {item.description}
                        </Text>
                    </Surface>
                ))}
            </div>
            </div>
        </HomeModule>
    );
}
