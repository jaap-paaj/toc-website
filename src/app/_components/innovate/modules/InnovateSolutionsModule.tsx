
import { HomeModule } from "../../home/HomeModule";
import { EditorialCardGridSection } from "@/components/sections/EditorialCardGridSection";
import { innovateContent } from "@/app/_content/innovate";

export function InnovateSolutionsModule() {
    const { solutions } = innovateContent;

    const items = solutions.items.map(item => ({
        title: `${item.title} (${item.meta})`,
        description: item.body
    }));

    return (
        <HomeModule id="solutions" width="full" tone="light" spacing="standard" spacingEdge="bottom">
            {/* EditorialCardGridSection provides internal top inset (pt-16+) for the divider */}
            <EditorialCardGridSection
                categoryLabel={solutions.eyebrow}
                intro={solutions.description}
                items={items}
                className="[&_.grid]:h-auto [&_.grid]:min-h-0 [&_.grid]:items-start"
            />
        </HomeModule>
    );
}
