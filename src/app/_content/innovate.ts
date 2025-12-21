export interface InnovateContent {
    hero: {
        index: string;
        title: string;
        intro: string;
    };
    propositions: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            meta: string;
            body: string;
        }[];
    };
    solutions: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            meta: string;
            body: string;
        }[];
    };
    whyUs: {
        eyebrow: string;
        items: {
            title: string;
            body: string;
        }[];
    };
}

export const innovateContent: InnovateContent = {
    hero: {
        index: "03",
        title: "INNOVATE",
        intro: "Our AI-powered sprints combine human creativity with machine intelligence to rapidly turn bold ideas into working prototypes with proven business cases."
    },
    propositions: {
        eyebrow: "NEW PROPOSITIONS & PRODUCTS",
        description: "",
        items: [
            {
                title: "Opportunity Sprint",
                meta: "5 days",
                body: "AI-supported research to uncover and validate new market opportunities. Ends with a roadmap and prioritization of high-value ideas."
            },
            {
                title: "Design Sprint",
                meta: "5 days",
                body: "From problem to tested prototype in five days. Accelerated with AI to support ideation, prototyping, and user testing."
            }
        ]
    },
    solutions: {
        eyebrow: "AI-DRIVEN SOLUTIONS",
        description: "",
        items: [
            {
                title: "AI Exploration Sprint",
                meta: "5 days",
                body: "A deep dive into your organization’s AI readiness and opportunities, including feasibility analysis, roadmap, and ROI insights."
            },
            {
                title: "AI Build Sprint",
                meta: "10 days",
                body: "Design and deliver a working AI solution from scratch. Includes development, testing, training, and a plan for scaling."
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        items: [
            {
                title: "Fast Validation",
                body: "Test real ideas with real users in days, not months."
            },
            {
                title: "Low Risk",
                body: "Small, predictable investments with clear outcomes."
            },
            {
                title: "Human + AI",
                body: "Creativity amplified by AI — not replaced."
            },
            {
                title: "Built to Scale",
                body: "Every sprint ends with production-ready insights."
            }
        ]
    }
};
