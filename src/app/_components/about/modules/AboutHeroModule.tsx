import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { aboutContent } from "@/app/_content/about";

export function AboutHeroModule() {
    return (
        <HomeModule
            id="about-hero"
            width="full"
            tone="dark"
            padTop="xl"
            padBottom="m"
            gap="none"
            containsContent
        >
            {/* Canonical Hero Layout Reuse (Educate-style) */}
            <div className={layoutTokens.splitHero}>
                {/* Left Column: Headline */}
                <div className={spacing.stackXs}>
                    <Heading
                        level={1}
                        className={cn(typography.variants.display.heroTertiary, "w-full")}
                    >
                        {aboutContent.hero.title}
                    </Heading>
                </div>
            </div>
        </HomeModule>
    );
}
