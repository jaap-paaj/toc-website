// src/app/_components/home/modules/HomeClientsModule.tsx
import { HomeModule } from "../HomeModule";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { homeContent } from "@/app/_content/home";

export function HomeClientsModule() {
    return (
        <HomeModule id="clients" width="full" pad="m" padTop="none" gap="s">
            <ClientsSection eyebrow={homeContent.clients.eyebrow} items={[...homeContent.clients.items]} />
        </HomeModule>
    );
}