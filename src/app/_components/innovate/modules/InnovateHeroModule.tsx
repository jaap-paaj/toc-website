import { cn } from "@/lib/utils";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { innovateContent } from "@/app/_content/innovate";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export function InnovateHeroModule() {
    const { hero } = innovateContent;

    return (
        <HomeModule
            id="hero"
            width="full"
            padTop="xl"
            padBottom="m"
            gap="none"
            tone="brand"
        >
            <div className="container mx-auto">
                <div className={layoutTokens.splitHero}>
                    {/* Left Column: Headline */}
                    <div className="flex flex-col gap-2">
                        <span className={cn("opacity-60", typography.variants.meta.step)}>
                            {hero.index}
                        </span>
                        <Heading
                            level={1}
                            className={cn(typography.variants.display.heroSecondary, "w-full")}
                        >
                            {hero.title}
                        </Heading>
                    </div>

                    {/* Right Column: Text top, CTA bottom */}
                    <div className="flex h-full flex-col">
                        <Text
                            size="lg"
                            className={cn("max-w-lg min-h-[var(--toc-page-hero-copy-min-h)]", typography.variants.body.lg)}
                        >
                            {hero.intro}
                        </Text>

                        <div className={cn("mt-auto", spacing.section.heroFollower)}>
                            {/* Layout parity spacer */}
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
