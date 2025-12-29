import { HomeModule } from "../../home/HomeModule";
import { automateContent } from "@/app/_content/automate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";

export function AutomateReadyToRunModule() {
    const { readyToRun } = automateContent;

    const items = readyToRun.items.map(item => ({
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="ready-to-run" width="full" tone="light" pad="m" gap="s">
            <CatalogGridSection
                eyebrow={readyToRun.eyebrow}
                description={readyToRun.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
