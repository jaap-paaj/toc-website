import { HomeModule } from "@/app/_components/home/HomeModule";
import { TeamGridSection } from "@/components/sections/TeamGridSection";
import { aboutContent } from "@/app/_content/about";

export function AboutTeamModule() {
    return (
        <HomeModule
            id="about-team"
            width="full"
            tone="light"
            pad="m"
            gap="none"
            containsContent // Canonical: Delegate container ownership to Section (HomeModule)
        >
            <TeamGridSection
                eyebrow={aboutContent.team.eyebrow}
                title={aboutContent.team.title}
                description={aboutContent.team.description}
                members={aboutContent.team.members}
            />
        </HomeModule>
    );
}
