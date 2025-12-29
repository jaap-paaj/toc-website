import { HomeModule } from "@/app/_components/home/HomeModule";
import { CapabilityHeroSection } from "@/components/sections/CapabilityHeroSection";
import { educateContent } from "../educate.content";

export function EducateHeroModule() {
    const { hero } = educateContent;

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
                index={hero.eyebrow}
                title={hero.title}
                description={hero.description}
            />
        </HomeModule>
    );
}
