import { PageLayout } from "@/design-system/components/Layout";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import type { LiveStatus } from "@/lib/inventory/status";
import type { ToolEntry } from "@/lib/inventory/tools";

interface Row {
    pattern: string;
    count: number;
    sample: string;
    dynamic: boolean;
    inSitemap: boolean;
    live: LiveStatus;
    inboundLinks: number;
}

interface InventoryPageProps {
    rows: Row[];
    tools: ToolEntry[];
}

const LIVE_LABEL: Record<LiveStatus, string> = {
    live: "live",
    missing: "niet live",
    unknown: "onbekend",
};

/** Things worth acting on, derived rather than remembered. */
function signals(row: Row): string[] {
    const found: string[] = [];

    if (row.live === "missing" && row.inSitemap) {
        found.push("staat in de sitemap maar is niet live");
    }
    if (row.live === "live" && !row.inSitemap) {
        found.push("live maar niet in de sitemap");
    }
    if (row.pattern !== "" && row.inboundLinks === 0) {
        found.push("geen link naar deze pagina gevonden in de code");
    }
    if (row.live === "unknown") {
        found.push("productie niet bereikbaar bij het ophalen");
    }

    return found;
}

function cellClass(muted = false) {
    return cn(
        typography.variants.body.sm,
        "py-3 pr-6 align-top",
        muted && "text-muted-foreground",
    );
}

export function InventoryPage({ rows, tools }: InventoryPageProps) {
    const flagged = rows
        .map((row) => ({ row, found: signals(row) }))
        .filter((entry) => entry.found.length > 0);

    const totalPages = rows.reduce((sum, row) => sum + row.count, 0);
    const liveCount = rows.filter((row) => row.live === "live").length;

    const headerClass = cn(
        typography.variants.meta.label,
        "text-muted-foreground pb-3 pr-6 text-left",
    );

    return (
        <PageLayout variant="landing">
            <HomeModule
                id="inventory-hero"
                width="full"
                tone="light"
                pad="m"
                padTop="xl"
                padBottom="s"
                gap="none"
                containsContent
            >
                <div className={cn(spacing.stackMd, "w-full")}>
                    <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                        Intern
                    </span>
                    <Heading level={1} size="prompt">
                        Wat hebben we, en wat staat live?
                    </Heading>
                    <Text size="md" className="text-muted-foreground">
                        {`${rows.length} routes, ${totalPages} pagina's per taal, ${liveCount} routes live op productie. Afgeleid uit de routes, de sitemap en de broncode, dus deze pagina veroudert niet.`}
                    </Text>
                </div>
            </HomeModule>

            {/* Signals first: this is what you came for */}
            <HomeModule
                id="inventory-signals"
                width="full"
                tone="light"
                pad="m"
                padTop="none"
                padBottom="m"
                gap="none"
                containsContent
            >
                <div className={cn(spacing.stackMd, "w-full")}>
                    <Heading level={2} size="card">
                        Vraagt aandacht
                    </Heading>
                    {flagged.length === 0 ? (
                        <Text size="md" className="text-muted-foreground">
                            Niets te melden.
                        </Text>
                    ) : (
                        <div className={spacing.stackSm}>
                            {flagged.map(({ row, found }) => (
                                <Surface
                                    key={row.pattern}
                                    variant="muted"
                                    className="px-5 py-4 flex flex-col gap-1" /* lint:allowed - signal card padding */
                                >
                                    <span className={cn(typography.variants.meta.code, "text-foreground")}>
                                        {row.pattern === "" ? "/" : row.pattern}
                                    </span>
                                    <Text size="sm" className="text-muted-foreground">
                                        {found.join(" · ")}
                                    </Text>
                                </Surface>
                            ))}
                        </div>
                    )}
                </div>
            </HomeModule>

            {/* Tools */}
            <HomeModule
                id="inventory-tools"
                width="full"
                tone="light"
                pad="m"
                padTop="none"
                padBottom="m"
                gap="none"
                containsContent
            >
                <div className={cn(spacing.stackMd, "w-full")}>
                    <Heading level={2} size="card">
                        Tools
                    </Heading>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className={headerClass}>Tool</th>
                                    <th className={headerClass}>Prijs</th>
                                    <th className={headerClass}>Ingang</th>
                                    <th className={headerClass}>Backend</th>
                                    <th className={headerClass}>GA4</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tools.map((tool) => (
                                    <tr key={tool.name} className="border-b border-border">
                                        <td className={cellClass()}>{tool.name}</td>
                                        <td className={cellClass(true)}>{tool.pricing}</td>
                                        <td className={cn(cellClass(), typography.variants.meta.code)}>
                                            {tool.entry}
                                        </td>
                                        <td className={cellClass(true)}>{tool.backend}</td>
                                        <td className={cn(cellClass(), typography.variants.meta.code)}>
                                            {tool.analyticsTool}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </HomeModule>

            {/* Every route */}
            <HomeModule
                id="inventory-routes"
                width="full"
                tone="light"
                pad="m"
                padTop="none"
                padBottom="m"
                gap="none"
                containsContent
            >
                <div className={cn(spacing.stackMd, "w-full")}>
                    <Heading level={2} size="card">
                        Alle pagina&apos;s
                    </Heading>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className={headerClass}>Route</th>
                                    <th className={headerClass}>Aantal</th>
                                    <th className={headerClass}>Productie</th>
                                    <th className={headerClass}>Sitemap</th>
                                    <th className={headerClass}>Inkomende links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.pattern} className="border-b border-border">
                                        <td className={cn(cellClass(), typography.variants.meta.code)}>
                                            {row.pattern === "" ? "/" : row.pattern}
                                        </td>
                                        <td className={cellClass(true)}>
                                            {row.dynamic ? row.count : ""}
                                        </td>
                                        <td className={cellClass()}>
                                            <CategoryPill
                                                className={
                                                    row.live === "live"
                                                        ? "bg-primary text-primary-foreground"
                                                        : undefined
                                                }
                                            >
                                                {LIVE_LABEL[row.live]}
                                            </CategoryPill>
                                        </td>
                                        <td className={cellClass(true)}>
                                            {row.inSitemap ? "ja" : "nee"}
                                        </td>
                                        <td className={cellClass(true)}>{row.inboundLinks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </HomeModule>
        </PageLayout>
    );
}
