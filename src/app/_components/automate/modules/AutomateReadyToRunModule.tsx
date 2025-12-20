import { HomeModule } from "../../home/HomeModule";
import { EditorialCardGridSection } from "@/components/sections/EditorialCardGridSection";
import { automateContent } from "@/app/_content/automate";

export function AutomateReadyToRunModule() {
    const { readyToRun } = automateContent;

    const items = readyToRun.items.map(item => ({
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="ready-to-run" width="full" tone="light" spacing="standard" spacingEdge="bottom">
            {/* EditorialCardGridSection provides internal top inset (pt-16+) for the divider */}
            <EditorialCardGridSection
                categoryLabel={readyToRun.eyebrow}
                intro={readyToRun.description}
                items={items}
            />
        </HomeModule>
    );
}
