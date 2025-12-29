import { HomeModule } from "@/app/_components/home/HomeModule";
import { automateContent } from "@/app/_content/automate";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";

export function AutomateHeroModule() {
    const { hero } = automateContent;

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
