import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";

import { educateContent } from "../educate.content";

// --- Sub-Module: Value Props ---

function WhyUsValueProps() {
    const items = educateContent.whyUs.items.map((item) => ({
        ...item,
        icon: <CheckCircle2 className="w-6 h-6 relative top-1" />
    }));

    return (
        <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
            {/* Header: Matches Home "CLIENTS" pattern exactly (using sectionHeader component token) */}
            <SectionHeader variant="stacked" eyebrow={educateContent.whyUs.header.eyebrow} />

            {/* Grid */}
            <FeatureGridSection items={items} columns={2} />
        </div>
    );
}

// --- Main Module ---
export function EducateWhyUsModule() {
    return (
        <HomeModule
            id="why-train-with-us"
            width="full"
            tone="dark"
            pad="m"
            padTop="none"
            gap="s"
        >
            <WhyUsValueProps />
        </HomeModule>
    );
}
