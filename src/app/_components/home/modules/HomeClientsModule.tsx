import { HomeModule } from "../HomeModule";
import { ClientsSection } from "@/components/sections/ClientsSection";

const CLIENT_LOGOS = [
    { src: "/clients/akzo_logo.png", name: "AkzoNobel" },
    { src: "/clients/eon_drive_logo.png", name: "E.ON Drive" },
    { src: "/clients/eneco-logo.png", name: "Eneco" },
    { src: "/clients/Intersport_logo.png", name: "Intersport" },
    { src: "/clients/landal_logo.png", name: "Landal" },
    { src: "/clients/ministerie_logo.png", name: "Ministerie van Justitie en Veiligheid" },
    { src: "/clients/randstad_logo.png", name: "Randstad" },
    { src: "/clients/reama_logo.png", name: "ReumaNederland" },
];

export function HomeClientsModule() {
    return (
        <HomeModule id="clients" width="full" spacing="standard" spacingEdge="bottom">
            <ClientsSection headingLabel="Clients" items={CLIENT_LOGOS} />
        </HomeModule>
    );
}