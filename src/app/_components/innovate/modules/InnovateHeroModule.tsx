import { HomeModule } from "@/app/_components/home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";

export function InnovateHeroModule() {
    const { hero } = innovateContent;

    return (
        <HomeModule
            id="hero"
            width="full"
            padTop="xl"
            padBottom="m"
            gap="none"
            tone="brand"
        >
            <CapabilityHeroSection
                index={hero.index}
                title={hero.title}
                description={hero.intro}
            />
        </HomeModule>
    );
}
