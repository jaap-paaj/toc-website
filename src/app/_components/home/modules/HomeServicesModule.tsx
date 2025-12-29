import { ServicesSection } from "@/components/sections/ServicesSection";
import { HomeModule } from "../HomeModule";
import { homeContent } from "../home.content";

export function HomeServicesModule() {
    return (
        <HomeModule id="capabilities" width="full" pad="m" gap="none">
            <ServicesSection
                eyebrow={homeContent.services.eyebrow}
                items={[...homeContent.services.items]}
            />
        </HomeModule>
    );
}
