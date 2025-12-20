import { Text } from "@/design-system/components/Typography";
import { HomeModule } from "../../home/HomeModule";
import { cn } from "@/lib/utils";
import { layoutTokens } from "@/design-system/tokens/layout";
import { Heading } from "@/design-system/components/Typography";

export function EducateHeroModule() {
    return (
        <HomeModule
            id="educate-hero"
            width="full"
            className={cn(
                "bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]",
                "pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32"
            )}
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
                        <Text size="lg" className="font-medium max-w-lg leading-relaxed">
                            We empower teams with the knowledge and skills to navigate the AI landscape effectively.
                            Through workshops, training, and strategic guidance, we build the internal capability needed for sustainable innovation.
                        </Text>

                        <div className="mt-auto pt-10 md:pt-12">
                            {/* Optional CTA or Indicator */}
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
