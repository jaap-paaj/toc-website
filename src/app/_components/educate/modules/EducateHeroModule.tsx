import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";

export function EducateHeroModule() {
    return (
        <HomeModule
            id="hero"
            width="full"
            padTop="xl"
            padBottom="m"
            gap="none"
            className="bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]"
        >
            <div className="container mx-auto">
                <div className={layoutTokens.splitHero}>
                    {/* Left Column: Headline */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm md:text-base font-mono tracking-wider opacity-60">
                            01
                        </span>
                        <Heading
                            level={1}
                            className="text-display-hero font-display xl:text-8xl w-full"
                        >
                            EDUCATE
                        </Heading>
                    </div>

                    {/* Right Column: Text top, CTA bottom */}
                    <div className="flex h-full flex-col">
                        <Text
                            size="lg"
                            className="font-medium max-w-lg leading-relaxed min-h-[var(--toc-page-hero-copy-min-h)]"
                        >
                            We empower teams with the knowledge and skills to navigate the AI landscape effectively. Through workshops, training, and strategic guidance, we build the internal capability needed for sustainable innovation.
                        </Text>

                        <div className="mt-auto pt-10 md:pt-12">
                            {/* Layout parity spacer */}
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
