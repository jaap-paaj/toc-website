"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import {
    readinessScanContent,
    READINESS_SCAN_CHAT_PATH,
} from "@/app/_content/ai-readiness-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ReadinessChecksModule() {
    const lang = useLocale();
    const { checks, hero } = readinessScanContent[lang];

    return (
        <HomeModule
            id="readiness-checks"
            width="full"
            tone="light"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
            <div className="w-full flex flex-col items-center">
                <div className={cn("w-full max-w-3xl", spacing.stackLg)}>
                    <Heading level={2} size="lg" className="text-center">
                        {checks.title}
                    </Heading>
                    <div className={spacing.stackMd}>
                        {checks.items.map((item) => (
                            <Surface
                                key={item}
                                variant="muted"
                                className="px-5 py-4 flex items-start gap-3" /* lint:allowed - check card internal padding */
                            >
                                <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-0.5" /* lint:allowed */ />
                                <Text size="md" className="text-foreground">
                                    {item}
                                </Text>
                            </Surface>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href={READINESS_SCAN_CHAT_PATH}
                            className={cn(
                                typography.variants.ui.button.lg,
                                "rounded-full bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/80 transition-colors" /* lint:allowed - CTA button */
                            )}
                        >
                            {hero.cta}
                        </Link>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
