import { ServicesSection } from "@/components/sections/ServicesSection";
import { HomeModule } from "../HomeModule";

const SERVICES_DATA = [
    {
        id: "01",
        title: "EDUCATE",
        description: "Build practical AI and innovation skills fast through hands-on workshops using your team’s real challenges.",
        href: "/educate",
    },
    {
        id: "02",
        title: "AUTOMATE",
        description: "Free your team from repetitive tasks with proven AI solutions that deliver measurable ROI.",
        href: "/automate",
    },
    {
        id: "03",
        title: "INNOVATE",
        description: "Accelerate innovation with AI-driven sprints that deliver validated, ready-to-build solutions fast.",
        href: "/innovate",
    },
];

export function HomeServicesModule() {
    return (
        <HomeModule id="capabilities" width="full" pad="m" gap="none">
            <ServicesSection
                headingLabel="Our Capabilities"
                items={SERVICES_DATA}
            // Removed py-0 to allow component-level token (heroFollower) to take effect
            />
        </HomeModule>
    );
}
