export interface AutomateContent {
    hero: {
        index: string;
        title: string;
        intro: string;
    };
    readyToRun: {
        eyebrow: string;
        description: string;
        items: {
            title: string;
            body: string;
        }[];
    };
    approach: {
        eyebrow: string;
        items: {
            badge: string;
            title: string;
            bullets: string[];
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

export const automateContent: AutomateContent = {
    hero: {
        index: "02",
        title: "AUTOMATE",
        intro: "We build and deploy AI agents that do the work. From customer service to internal operations, we automate the repetitive so your team can focus on the exceptional."
    },
    readyToRun: {
        eyebrow: "READY-TO-RUN AI SOLUTIONS",
        description: "Proven modules we can deploy in days, not months.",
        items: [
            {
                title: "DAILY INSIGHT REPORTS",
                body: "AI scans your data and flags trends, anomalies, and opportunities. Ideal for leaders and analysts looking to reduce time spent on reporting."
            },
            {
                title: "CONTENT GENERATION SYSTEMS",
                body: "Automatically turns product specs into marketing-ready copy. Built for e-commerce, marketing, and product teams needing speed and scale."
            },
            {
                title: "SOCIAL MEDIA ASSISTANTS",
                body: "Creates, posts, and analyzes consistent, on-brand content. Great for marketing teams and agencies looking to grow without extra hires."
            },
            {
                title: "CUSTOMER SERVICE AUTOMATION",
                body: "Smart triage and automated replies for faster resolutions and happier customers. Best for support-heavy and service-driven businesses."
            },
            {
                title: "PROCESS OPTIMIZATION ANALYSIS",
                body: "AI maps out inefficiencies in your workflows and suggests improvements. Perfect for operations teams focused on performance gains."
            }
        ]
    },
    approach: {
        eyebrow: "APPROACH",
        items: [
            {
                badge: "WEEK 1",
                title: "AUDIT & DESIGN",
                bullets: [
                    "Analyze current workflows",
                    "Identify high-impact targets",
                    "Design agent architecture"
                ]
            },
            {
                badge: "WEEK 2",
                title: "BUILD & TRAIN",
                bullets: [
                    "Configure agent behaviors",
                    "Integrate with tools",
                    "Rigorous testing/refinement"
                ]
            },
            {
                badge: "WEEK 3",
                title: "DEPLOY & SCALE",
                bullets: [
                    "Live deployment",
                    "Team training",
                    "Performance monitoring"
                ]
            }
        ]
    },
    whyUs: {
        eyebrow: "WHY US?",
        items: [
            {
                title: "Practical, Not Theoretical",
                body: "We don't just advise; we build. You get working software, not just a slide deck."
            },
            {
                title: "Human-in-the-Loop",
                body: "Our agents efficiently hand off to humans when needed. Automation enhances your team, it doesn't replace them."
            },
            {
                title: "Security First",
                body: "Enterprise-grade data protection. We ensure your proprietary data remains yours and stays secure."
            },
            {
                title: "Platform Agnostic",
                body: "We build on the best tools for your stack, whether that's OpenAI, Azure, or open-source models."
            }
        ]
    }
};
