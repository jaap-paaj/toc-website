import { HomeModule } from "@/app/_components/home/HomeModule";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { vragenContent, VRAGEN_BASE_PATH, type AnswerPage } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";

interface AnswerHeroModuleProps {
    lang: Locale;
    page: AnswerPage;
}

export function AnswerHeroModule({ lang, page }: AnswerHeroModuleProps) {
    const { index } = vragenContent[lang];

    return (
        <HomeModule
            id="answer-hero"
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
                <div className={cn(spacing.stackLg, "w-full max-w-2xl")}>
                    <Link
                        href={VRAGEN_BASE_PATH}
                        className={cn(
                            typography.variants.meta.eyebrow,
                            "text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-current transition-colors",
                        )}
                    >
                        {index.backLabel}
                    </Link>
                    <div className={spacing.stackMd}>
                        <span
                            className={cn(
                                typography.variants.meta.badge,
                                "text-muted-foreground",
                            )}
                        >
                            {page.cluster}
                        </span>
                        <Heading level={1} size="prompt" className="text-balance">
                            {page.question}
                        </Heading>
                    </div>
                    <Text size="lg" className="text-muted-foreground">
                        {page.lead}
                    </Text>
                </div>
            </div>
        </HomeModule>
    );
}
