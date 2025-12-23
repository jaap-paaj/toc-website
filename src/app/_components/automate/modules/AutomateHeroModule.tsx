import { cn } from "@/lib/utils";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { automateContent } from "@/app/_content/automate";
import { typography } from "@/design-system/tokens/typography";

export function AutomateHeroModule() {
    const { hero } = automateContent;

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
                        <span className={cn("opacity-60", typography.variants.meta.code)}>
                            {hero.index}
                        </span>
                        <Heading
                            level={1}
                            className={cn(typography.variants.display.hero[800], "w-full")}
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

                        <div className="mt-auto pt-10 md:pt-12">
                            {/* No children passed in AutomateHeroModule, but empty div maintained for layout parity */}
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
