"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboAboutModule() {
    const lang = useLocale();
    const { about } = ehboContent[lang];

    return (
        <HomeModule id="ehbo-about" width="full" tone="light" padTop="none" padBottom="m" gap="none" containsContent>
            <div className="w-full flex flex-col items-center">
            <div className={cn("w-full max-w-3xl text-center", spacing.stackMd)}>
                <Heading level={2} size="card">
                    {about.title}
                </Heading>
                {about.body.map((p, i) => (
                    <Text key={i} size="md" className="text-muted-foreground">
                        {p}
                    </Text>
                ))}
            </div>
            </div>
        </HomeModule>
    );
}
