import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { layoutTokens } from "@/design-system/tokens/layout";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export interface CapabilityHeroSectionProps {
    index: string;
    title: string;
    description: string;
}

export function CapabilityHeroSection({
    index,
    title,
    description,
}: CapabilityHeroSectionProps) {
    return (
        <div className="container mx-auto">
            <div className={layoutTokens.capabilityHeroGrid}>
                {/* Left Column: Headline */}
                <div className="flex flex-col gap-2">
                    <span className={cn("opacity-60", typography.variants.meta.step)}>
                        {index}
                    </span>
                    <Heading
                        level={1}
                        className={cn(typography.variants.display.heroSecondary, "w-full")}
                    >
                        {title}
                    </Heading>
                </div>

                {/* Right Column: Text top, CTA bottom */}
                <div className="flex h-full flex-col">
                    <Text
                        size="lg"
                        // Canon: body.lg allowed here (Hero intro only)
                        className={cn("max-w-lg min-h-[var(--toc-page-hero-copy-min-h)]", typography.variants.body.lg)}
                    >
                        {description}
                    </Text>

                    <div className={cn("mt-auto", spacing.section.heroFollower)}>
                        {/* Layout parity spacer */}
                    </div>
                </div>
            </div>
        </div>
    );
}
