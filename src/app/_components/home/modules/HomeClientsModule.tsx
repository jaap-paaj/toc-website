// src/app/_components/home/modules/HomeClientsModule.tsx
"use client";

import { HomeModule } from "../HomeModule";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { homeContent } from "@/app/_content/home";
import { useLocale } from "@/lib/i18n/useLocale";

export function HomeClientsModule() {
    const lang = useLocale();
    return (
        <HomeModule id="clients" width="full" pad="m" padTop="none" gap="s">
            <ClientsSection eyebrow={homeContent[lang].clients.eyebrow} items={[...homeContent[lang].clients.items]} />
        </HomeModule>
    );
}