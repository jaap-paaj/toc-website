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
        intro: "What to automate is the decision that makes or breaks ROI. Our projects start with an opportunity scan: together with your team we map automation candidates across workflows, plot them on a value versus effort matrix, and turn the outcome into a practical roadmap. We also agree how each automation should work in your context, so the build fits your ways of working. Then we design and build the first automation, prove value fast, and scale what works."
    },
    readyToRun: {
        eyebrow: "READY-TO-RUN AI SOLUTIONS",
        description: "Modular solutions we adapt to your context. First value in days, production-ready in mere weeks.",
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
                    "Build automation",
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
                title: "FAST, MEASURABLE ROI",
                body: "Our automations typically pay for themselves within 3–6 months, driven by 40–70% reductions in manual workload."
            },
            {
                title: "AUTOMATE WHAT MATTERS MOST",
                body: "We prioritise the processes with the highest impact, avoiding the waste that sinks most automation projects."
            },
            {
                title: "LOW-RISK, PREDICTABLE DELIVERY",
                body: "Clear scoping, iterative validation and predictable costs prevent surprises and overruns."
            },
            {
                title: "DESIGNED TO FIT YOUR WORKFLOW",
                body: "Fit beats fancy. We use our AI capability cards to shape workflows together, from inputs and decisions to checks, exceptions, and escalations, so automations fit the organisation, not the other way around."
            }
        ]
    }
};
