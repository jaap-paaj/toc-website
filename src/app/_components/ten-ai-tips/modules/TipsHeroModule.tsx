import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { tenAiTipsContent } from "@/app/_content/ten-ai-tips";
import type { Locale } from "@/lib/i18n/config";

interface TipsHeroModuleProps {
    lang: Locale;
}

export function TipsHeroModule({ lang }: TipsHeroModuleProps) {
    const { hero } = tenAiTipsContent[lang];

    return (
        <HomeModule
            id="tips-hero"
            width="full"
            tone="dark"
            pad="m"
            padTop="xl"
            padBottom="s"
            gap="none"
            containsContent
        >
            <div
                className={cn(
                    "w-full flex flex-col items-center text-center",
                    spacing.component.sectionHeader,
                )}
            >
                <span
                    className={cn(
                        typography.variants.meta.eyebrow,
                        "text-muted-foreground",
                    )}
                >
                    {hero.eyebrow}
                </span>
                <Heading
                    level={1}
                    size="section"
                    className="text-balance text-center"
                >
                    {hero.titleLine1}{" "}
                    <span className="text-primary">{hero.titleAccent}</span>{" "}
                    {hero.titleLine2}
                </Heading>
                <Text
                    size="lg"
                    measure="2xl"
                    className="text-muted-foreground text-balance"
                >
                    {hero.intro}
                </Text>
            </div>
        </HomeModule>
    );
}
