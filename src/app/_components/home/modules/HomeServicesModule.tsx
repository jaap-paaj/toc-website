import { CapabilityCardsSection } from "@/components/sections/CapabilityCardsSection";
import { HomeModule } from "../HomeModule";
import { homeContent } from "../home.content";

export function HomeServicesModule() {
    return (
        <HomeModule id="capabilities" width="full" pad="m" gap="none">
            <CapabilityCardsSection
                eyebrow={homeContent.services.eyebrow}
                items={[...homeContent.services.items]}
            />
        </HomeModule>
    );
}
