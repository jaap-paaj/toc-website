
import { cn } from "@/lib/utils";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";

export interface PageHeroProps {
    index: string;
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string; // Allow minimal overrides if absolutely necessary, but generally discourage
}

export function PageHero({
    index,
    title,
    description,
    children,
    className
}: PageHeroProps) {
    return (
        <HomeModule
            id="hero"
            width="full"
            spacing="hero"
            spacingEdge="both" // ENSURES top offset (header breathing room) AND bottom tail
            className={cn(
                "bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]",
                className
            )}
        >
            <div className="container mx-auto">
                <div className={layoutTokens.splitHero}>
                    {/* Left Column: Headline */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm md:text-base font-mono tracking-wider opacity-60">
                            {index}
                        </span>
                        <Heading
                            level={1}
                            className="text-display-hero font-display xl:text-8xl w-full"
                        >
                            {title}
                        </Heading>
                    </div>

                    {/* Right Column: Text top, CTA bottom */}
                    <div className="flex h-full flex-col">
                        <Text
                            size="lg"
                            className="font-medium max-w-lg leading-relaxed min-h-[var(--toc-page-hero-copy-min-h)]"
                        >
                            {description}
                        </Text>

                        <div className="mt-auto pt-10 md:pt-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
