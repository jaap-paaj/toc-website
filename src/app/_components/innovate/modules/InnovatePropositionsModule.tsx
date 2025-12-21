
import { HomeModule } from "../../home/HomeModule";
import { EditorialCardGridSection } from "@/components/sections/EditorialCardGridSection";
import { innovateContent } from "@/app/_content/innovate";

export function InnovatePropositionsModule() {
    const { propositions } = innovateContent;

    const items = propositions.items.map(item => ({
        title: `${item.title} (${item.meta})`,
        description: item.body
    }));

    return (
        <HomeModule id="propositions" width="full" tone="light" spacing="standard" spacingEdge="none">
            {/* EditorialCardGridSection provides internal top inset (pt-16+) for the divider */}
            <EditorialCardGridSection
                categoryLabel={propositions.eyebrow}
                intro={propositions.description}
                items={items}
                className="[&_.grid]:h-auto [&_.grid]:min-h-0 [&_.grid]:items-start"
            />
        </HomeModule>
    );
}
