"use client";

import { Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { HomeModule } from "../HomeModule";
import { cn } from "@/lib/utils";
import { layoutTokens } from "@/design-system/tokens/layout";
import { BrandHeroHeadline } from "@/design-system/components/BrandHeroHeadline";

import { homeContent } from "../home.content";
import { trackEvent } from "@/lib/analytics/ga";

export function HomeHeroModule() {
  return (
    <HomeModule
      id="hero"
      width="full"
      padTop="xl"


      gap="none"
      tone="brand"
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
            {/* Canon: body.lg allowed here (Hero intro only) */}
            <Text size="lg" className="max-w-lg">
              {homeContent.hero.description}
            </Text>

            {/* Bottom CTA */}
            <div className={cn("mt-auto", spacing.section.heroFollower)}>
              <Button
                asChild
                size="xl"
                className="tone-dark bg-background text-foreground hover:bg-background/80"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_label: homeContent.hero.cta.label,
                    cta_location: "hero",
                  })
                }
              >
                <a href={homeContent.hero.cta.href}>
                  {homeContent.hero.cta.label}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HomeModule>
  );
}