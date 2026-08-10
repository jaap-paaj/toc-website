import { HomeModule } from "@/app/_components/home/HomeModule";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { tenAiTipsContent } from "@/app/_content/ten-ai-tips";
import type { Locale } from "@/lib/i18n/config";

interface TipsListModuleProps {
    lang: Locale;
}

export function TipsListModule({ lang }: TipsListModuleProps) {
    const { tips } = tenAiTipsContent[lang];

    return (
        <HomeModule
            id="tips-list"
            width="full"
            tone="dark"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2",
                    "gap-4 md:gap-6",
                )} /* lint:allowed - tips grid */
            >
                {tips.map((tip) => (
                    <Surface
                        key={tip.number}
                        variant="card"
                        className={cn(spacing.stackSm, "p-6 md:p-8") /* lint:allowed - tip card */}
                    >
                        <div className={cn("flex items-center gap-3")}> {/* lint:allowed - badge + title row */}
                            <span
                                className={cn(
                                    typography.variants.meta.badge,
                                    "flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground" /* lint:allowed - lime number badge */,
                                )}
                            >
                                {tip.number}
                            </span>
                            <Heading
                                level={3}
                                size="card"
                                className="text-balance text-foreground"
                            >
                                {tip.title}
                            </Heading>
                        </div>
                        <Text size="md" className="text-muted-foreground">
                            {tip.body}
                        </Text>
                    </Surface>
                ))}
            </div>
        </HomeModule>
    );
}
