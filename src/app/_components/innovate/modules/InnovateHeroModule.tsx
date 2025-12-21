import { PageHero } from "@/components/sections/PageHero";
import { innovateContent } from "@/app/_content/innovate";

export function InnovateHeroModule() {
    const { hero } = innovateContent;

    return (
        <PageHero
            index={hero.index}
            title={hero.title}
            description={hero.intro}
        />
    );
}
