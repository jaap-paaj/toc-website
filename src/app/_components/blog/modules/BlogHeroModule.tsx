import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { blogContent } from "@/app/_content/blog";

export function BlogHeroModule() {
    return (
        <HomeModule
            id="blog-hero"
            width="full"
            tone="dark"
            padTop="xl"
            padBottom="m"
            gap="none"
            containsContent
        >
            {/* Canonical Hero Layout Reuse (About-style) */}
            <div className={layoutTokens.splitHero}>
                {/* Left Column: Headline */}
                <div className={spacing.stackXs}>
                    <Heading
                        level={1}
                        className={cn(typography.variants.display.heroTertiary, "w-full")}
                    >
                        {blogContent.hero.title}
                    </Heading>
                </div>
            </div>
        </HomeModule>
    );
}
