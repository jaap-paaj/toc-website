import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";

// --- Sub-Module: Value Props ---

const VALUE_PROPS = [
    {
        title: "Expert-Led",
        description: "Learn directly from practitioners who are deploying AI solutions in the field every day, not just theorists."
    },
    {
        title: "Practical Focus",
        description: "We skip the academic theory and focus on actionable skills and workflows you allow teams to apply immediately."
    },
    {
        title: "Tailored Content",
        description: "Every workshop is customized to your industry, your tools, and your specific business challenges."
    },
    {
        title: "Immediate Impact",
        description: "Walk away with working prototypes, refined prompts, and a clear roadmap for next steps."
    }
];

function WhyUsValueProps() {
    const items = VALUE_PROPS.map((item) => ({
        ...item,
        icon: <CheckCircle2 className="w-6 h-6 relative top-1" />
    }));

    return (
        <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
            {/* Header: Matches Home "CLIENTS" pattern exactly (using sectionHeader component token) */}
            <SectionHeader variant="stacked" eyebrow="WHY US?" />

            {/* Grid */}
            <FeatureGridSection items={items} columns={2} className="py-0 md:py-0" />
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
            spacing="standard"
            spacingEdge="bottom"
        >
            <WhyUsValueProps />
        </HomeModule>
    );
}
