"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboHeroModule() {
    const lang = useLocale();
    const { hero } = ehboContent[lang];

    return (
        <HomeModule id="ehbo-hero" width="full" tone="light" pad="m" padTop="xl" gap="none" containsContent>
            <div className={cn("w-full flex flex-col items-center text-center", spacing.component.sectionHeader)}>
                <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                    {hero.eyebrow}
                </span>
                <Heading level={1} size="section" className="text-balance text-center">
                    {hero.title}
                    <br />
                    <span className="text-primary">{hero.titleMuted}</span>
                </Heading>
                <Text size="lg" measure="2xl" className="text-muted-foreground text-balance">
                    {hero.description}
                </Text>
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
        </HomeModule>
    );
}
