"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { readinessScanContent } from "@/app/_content/ai-readiness-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ReadinessAboutModule() {
    const lang = useLocale();
    const { about } = readinessScanContent[lang];

    return (
        <HomeModule
            id="readiness-about"
            width="full"
            tone="light"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
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
