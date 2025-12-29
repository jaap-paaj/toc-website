import { HomeModule } from "../../home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";

export function InnovatePropositionsModule() {
    const { propositions } = innovateContent;

    const items = propositions.items.map(item => ({
        title: `${item.title} (${item.meta})`,
        description: item.body
    }));

    return (
        <HomeModule id="propositions" width="full" tone="light" pad="m" gap="none">
            <CatalogGridSection
                eyebrow={propositions.eyebrow}
                description={propositions.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
