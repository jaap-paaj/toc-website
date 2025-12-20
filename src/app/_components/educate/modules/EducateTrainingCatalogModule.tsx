import { HomeModule } from "../../home/HomeModule";
import { EditorialCardGridSection, EditorialItem } from "@/components/sections/EditorialCardGridSection";

const AI_TRAINING_ITEMS: EditorialItem[] = [
    {
        title: "AI INTRODUCTION",
        description: "Get a hands-on introduction to generative AI, tailored to your role and industry. Learn how it can transform your work, and build essential skills to innovate, automate, and create. No experience needed!",
    },
    {
        title: "CUSTOM GPTs",
        description: "Advanced, practical session designed to deepen your expertise with ChatGPT by exploring how to build, customize, and effectively apply Custom GPTs within your projects.",
    },
    {
        title: "AI FOR VISUAL CONTENT CREATION",
        description: "Learn to create stunning visuals with Midjourney & Runway. Fast-track your workflow, refine your style, and innovate with AI. Hands-on and hassle-free.",
    },
    {
        title: "EXECUTIVE AI STRATEGY",
        description: "Discover AI’s potential for innovation and growth. This training provides executives with the strategic insights to drive smarter decisions and lead change.",
    }
];

const INNOVATION_TRAINING_ITEMS: EditorialItem[] = [
    {
        title: "INNOVATION BY DESIGN",
        description: "Master creative problem-solving with a human-centered approach. This training helps you understand users, reframe challenges, and design solutions that create real impact. You’ll learn practical methods you can apply immediately to any project or team.",
    },
    {
        title: "EXPERIENCE MAPPING",
        description: "Learn how to create customer journey maps and service blueprints that reveal how people interact with your product or service. You’ll uncover pain points, spot opportunities and turn insights into practical improvements.",
    }
];

export function EducateTrainingCatalogModule() {
    return (
        <HomeModule id="training-catalog" width="full" tone="light" spacing="standard" spacingEdge="bottom">
            {/* EditorialCardGridSection provides internal top inset (pt-16+) for the divider */}
            <EditorialCardGridSection
                categoryLabel="AI TRAINING"
                intro="Hands-on programs that help you use AI to work smarter and explore new possibilities."
                items={AI_TRAINING_ITEMS}
            // className="pb-16 md:pb-24" // removed to avoid double spacing with next section's internal top padding
            />
            <EditorialCardGridSection
                categoryLabel="INNOVATION TRAINING"
                intro="Human-centered programs that help you explore opportunities and design better products and services."
                items={INNOVATION_TRAINING_ITEMS}
            // className="" // No padding needed
            />
        </HomeModule>
    );
}
