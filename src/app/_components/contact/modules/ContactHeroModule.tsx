import { HomeModule } from "../../home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { typography } from "@/design-system/tokens/typography";
import { cn } from "@/lib/utils";

export function ContactHeroModule() {
    return (
        <HomeModule
            id="contact-hero"
            width="full"
            tone="dark"
            padTop="xl"
            padBottom="m"
            gap="none"
        >
            <div className="container mx-auto">
                {/* Canonical Hero Layout Reuse (Educate-style) */}
                <div className={layoutTokens.splitHero}>
                    {/* Left Column: Headline */}
                    <div className="flex flex-col gap-2">
                        <Heading
                            level={1}
                            className={cn(typography.variants.display.heroTertiary, "w-full")}
                        >
                            CONTACT
                        </Heading>
                    </div>
                    {/* Right Column: Omitted (Functional Header) */}
                </div>
            </div>
        </HomeModule>
    );
}
