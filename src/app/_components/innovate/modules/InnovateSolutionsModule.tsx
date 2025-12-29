import { HomeModule } from "../../home/HomeModule";
import { innovateContent } from "@/app/_content/innovate";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";

export function InnovateSolutionsModule() {
    const { solutions } = innovateContent;

    const items = solutions.items.map(item => ({
        title: `${item.title} (${item.meta})`,
        description: item.body
    }));

    return (
        <HomeModule id="solutions" width="full" tone="light" pad="m" padTop="none" gap="none">
            <CatalogGridSection
                eyebrow={solutions.eyebrow}
                description={solutions.description}
                items={items}
                className="container mx-auto"
            />
        </HomeModule>
    );
}
