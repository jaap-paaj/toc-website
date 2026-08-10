import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { vragenContent } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";

interface VragenIndexHeroModuleProps {
    lang: Locale;
}

export function VragenIndexHeroModule({ lang }: VragenIndexHeroModuleProps) {
    const { hero } = vragenContent[lang].index;

    return (
        <HomeModule
            id="vragen-hero"
            width="full"
            tone="light"
            pad="m"
            padTop="xl"
            padBottom="s"
            gap="none"
            containsContent
        >
            {/* Centering uses flex, not mx-auto: globals.css nullifies margins. */}
            <div className="flex justify-center">
                <div className={cn(spacing.stackMd, "w-full max-w-3xl")}>
                    <span
                        className={cn(
                            typography.variants.meta.eyebrow,
                            "text-muted-foreground",
                        )}
                    >
                        {hero.eyebrow}
                    </span>
                    <Heading level={1} size="section" className="text-balance">
                        {hero.title}
                    </Heading>
                    <Text size="lg" className="text-muted-foreground">
                        {hero.intro}
                    </Text>
                </div>
            </div>
        </HomeModule>
    );
}
