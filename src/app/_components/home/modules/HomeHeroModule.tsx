import { Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { HomeModule } from "../HomeModule";
import { cn } from "@/lib/utils";
import { layoutTokens } from "@/design-system/tokens/layout";
import { BrandHeroHeadline } from "@/design-system/components/BrandHeroHeadline";

export function HomeHeroModule() {
  return (
    <HomeModule
      id="hero"
      width="full"
      spacing="none"
      className={cn(
        "bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]",
        "pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32"
      )}
    >
      <div className="container mx-auto">
        {/* Ensure the two columns stretch to the same height so "bottom" is meaningful */}
        <div className={cn(layoutTokens.splitHero, "items-stretch")}>
          {/* Left Column: Headline */}
          <div className="flex flex-col">
            <BrandHeroHeadline />
          </div>

          {/* Right Column: Text top, CTA bottom */}
          <div className="flex h-full flex-col">
            {/* Top content */}
            <Text size="lg" className="font-medium max-w-lg leading-relaxed">
              The Only Constant is a digital transformation and innovation agency built for a faster world. We help
              organizations move from assumptions to proven business results. Fast.
            </Text>

            {/* Bottom CTA */}
            <div className="mt-auto pt-10 md:pt-12">
              <Button
                size="xl"
                className="bg-black text-white hover:bg-black/80 font-bold"
              >
                EXPLORE OUR SERVICES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HomeModule>
  );
}