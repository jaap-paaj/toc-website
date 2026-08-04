import type { Metadata } from "next";
import { InventoryPage } from "@/app/_components/intern/InventoryPage";
import { countInboundLinks, getRoutes } from "@/lib/inventory/routes";
import { checkLive, sitemapPaths } from "@/lib/inventory/status";
import { TOOLS } from "@/lib/inventory/tools";
import { getContentGroups } from "@/lib/inventory/content";

export const metadata: Metadata = {
    title: "Inventaris — intern",
    robots: { index: false, follow: false },
};

/** Production is asked live, so the answer is never older than five minutes. */
export const revalidate = 300;

export default async function Page() {
    const routes = getRoutes();
    const inSitemap = sitemapPaths();
    const live = await checkLive(routes.map((r) => r.sample));

    const rows = routes.map((route) => ({
        ...route,
        inSitemap: inSitemap.has(route.sample) || inSitemap.has(route.pattern),
        live: live.get(route.sample) ?? "unknown",
        inboundLinks: countInboundLinks(route.pattern),
    }));

    return (
        <InventoryPage
            rows={rows}
            tools={TOOLS}
            contentGroups={getContentGroups()}
        />
    );
}
