"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboProblemsModule() {
    const lang = useLocale();
    const { problems, hero } = ehboContent[lang];

    return (
        <HomeModule id="ehbo-problems" width="full" tone="light" padTop="none" padBottom="m" gap="none" containsContent>
            <div className="w-full flex flex-col items-center">
            <div className={cn("w-full max-w-3xl", spacing.stackLg)}>
                <Heading level={2} size="lg" className="text-center">
                    {problems.title}
                </Heading>
                <div className={spacing.stackMd}>
                    {problems.items.map((problem) => (
                        <Surface key={problem} variant="muted" className="px-5 py-4 flex items-start gap-3"> {/* lint:allowed - problem card internal padding */}
                            <CheckIcon className="w-5 h-5 text-foreground shrink-0 mt-0.5" /* lint:allowed */ />
                            <Text size="md" className="text-muted-foreground">
                                {problem}
                            </Text>
                        </Surface>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/ai-ehbo/chat"
                        className={cn(
                            typography.variants.ui.button.lg,
                            "rounded-full bg-foreground text-background px-8 py-4 hover:bg-foreground/80 transition-colors" /* lint:allowed - CTA button */
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
