"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";

export function AiActProblemsModule() {
    const lang = useLocale();
    const { problems, hero } = aiActContent[lang];

    return (
        <HomeModule
            id="ai-act-problems"
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
                        {problems.title}
                    </Heading>
                    <div className={spacing.stackMd}>
                        {problems.items.map((problem) => (
                            <Surface
                                key={problem}
                                variant="muted"
                                className={cn(
                                    spacing.component.contentCard,
                                    "flex-row items-start",
                                )}
                            >
                                <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-0.5" /* lint:allowed - icon sizing + alignment */ />
                                <Text size="md" className="text-foreground">
                                    {problem}
                                </Text>
                            </Surface>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/ai-act/check"
                            className={cn(
                                typography.variants.ui.button.lg,
                                "rounded-full bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/80 transition-colors" /* lint:allowed - CTA button */,
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
