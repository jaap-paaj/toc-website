import { HomeModule } from "../../home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";

export function ContactHeroModule() {
    return (
        <HomeModule
            id="contact-hero"
            width="full"
            tone="dark"
            // Use "hero" spacing for top to match Educate/Automate visual band
            spacing="hero"
            spacingEdge="top"
            // Manually apply "compact" bottom spacing to reduce height (pb-12 md:pb-16 lg:pb-20)
            className="pb-12 md:pb-16 lg:pb-20"
        >
            <div className="container mx-auto">
                {/* Canonical Hero Layout Reuse (Educate-style) */}
                <div className={layoutTokens.splitHero}>
                    {/* Left Column: Title Only */}
                    <div className="flex flex-col gap-2">
                        <Heading
                            level={1}
                            className="text-display-hero font-display xl:text-8xl w-full"
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
