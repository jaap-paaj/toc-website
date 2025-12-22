// src/app/_components/home/modules/HomeClientsModule.tsx
import { HomeModule } from "../HomeModule";
import { ClientsSection } from "@/components/sections/ClientsSection";

const CLIENT_LOGOS = [
    { src: "/images/clients/akzo_logo.png", name: "AkzoNobel" },
    { src: "/images/clients/eon_drive_logo.png", name: "E.ON Drive" },
    { src: "/images/clients/eneco_logo.png", name: "Eneco" },
    { src: "/images/clients/intersport_logo.png", name: "Intersport" },

    { src: "/images/clients/ministerie_logo.png", name: "Ministerie van Justitie en Veiligheid" },
    { src: "/images/clients/randstad_logo.png", name: "Randstad" },
    { src: "/images/clients/reama_logo.png", name: "ReumaNederland" },
];

export function HomeClientsModule() {
    return (
        <HomeModule id="clients" width="full" pad="m" padTop="none" gap="s">
            <ClientsSection headingLabel="Clients" items={CLIENT_LOGOS} />
        </HomeModule>
    );
}