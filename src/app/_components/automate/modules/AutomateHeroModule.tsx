import { PageHero } from "@/components/sections/PageHero";
import { automateContent } from "@/app/_content/automate";

export function AutomateHeroModule() {
    const { hero } = automateContent;

    return (
        <PageHero
            index={hero.index}
            title={hero.title}
            description={hero.intro}
        />
    );
}
