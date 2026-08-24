import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { StandfirstSection } from "@/components/sections/StandfirstSection";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { privacyContent } from "@/app/_content/privacy";
import type { Locale } from "@/lib/i18n/config";

interface PrivacyHeroModuleProps {
    lang: Locale;
}

export function PrivacyHeroModule({ lang }: PrivacyHeroModuleProps) {
    const { hero } = privacyContent[lang];

    return (
        <HomeModule
            id="privacy-hero"
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
                    <div className={spacing.stackSm}>
                        {/* "page", the structural H1 of the heading tier —
                            not "section", which is display tier and sized for
                            landing heroes: at that scale the unbreakable word
                            "Privacyverklaring" pushes past a 375px viewport.
                            SCALES_CANON: heading.page is the H1 "with enough
                            air to stay readable when it wraps". */}
                        <Heading level={1} size="page" className="text-balance">
                            {hero.title}
                        </Heading>
                        {/* The revision date is part of the statement itself:
                            the closing paragraph points the reader at it. */}
                        <p
                            className={cn(
                                typography.variants.body.sm,
                                "text-muted-foreground",
                            )}
                        >
                            {hero.updated}
                        </p>
                    </div>
                    <StandfirstSection text={hero.lead} />
                </div>
            </div>
        </HomeModule>
    );
}
