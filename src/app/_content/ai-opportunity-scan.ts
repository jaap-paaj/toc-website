
export const scanContent = {
    hero: {
        title: "AI Opportunity Scan: priorities, roadmap and one PoC-ready process in half a day",
        subtitle: "Know where AI pays off. Get a build-ready plan, not a slide deck.",
        outcomes: [
            "Typical outcome 3 prioritised use cases · 1 process mapped for PoC · 90-day roadmap · concrete owners and next steps"
        ],
        cta: {
            label: "Plan 20 minutes",
            href: "/ai-opportunity-scan/book"
        }
    },
    trust: {
        label: "Trusted by the best",
        logos: [
            { name: "Randstad", src: "/images/clients/randstad_logo.png" },
            { name: "AkzoNobel", src: "/images/clients/akzo_logo.png" },
            { name: "Eneco", src: "/images/clients/eneco_logo.png" }
        ]
    },
    statement: {
        eyebrow: "Why now",
        title: "Every month without clarity is a month your competitors use to ship",
        body: [
            "AI is everywhere, but choosing what to do with it is hard. Most organisations end up testing tools or running pilots that don't change who does what. Your best people stay stuck in low-value work. Experiments lead nowhere.",
            "This scan is the opposite of tool shopping. We map where AI makes sense for your organisation and deliver a build-ready plan – so experiments lead to decisions, not theatre."
        ],
        interrupt: "There is no such thing as a last mover advantage",
        goal: {
            title: "One clear goal:",
            description: "Use AI where it actually delivers ROI and shifts human time to higher-value work."
        },
        cta: {
            label: "Plan 20 minutes",
            href: "/ai-opportunity-scan/book"
        }
    },
    howItWorks: {
        eyebrow: "Process",
        title: "Three steps to certainty",
        steps: [
            {
                step: "01",
                duration: "20 minutes",
                title: "Quick intake",
                description: "We align on goals, define scope and prepare tailored sector insights."
            },
            {
                step: "02",
                duration: "Half a day",
                title: "Opportunity session",
                description: "We map where value is created or lost, identify high-impact AI opportunities, prioritise use cases, and redesign one process so a PoC can start immediately."
            },
            {
                step: "03",
                duration: "Same day",
                title: "Delivery",
                description: "You leave with a prioritised list, an impact/feasibility matrix, a 90-day roadmap, and one process documented and PoC-ready."
            }
        ]
    },
    whatYouGet: {
        eyebrow: "What you get",
        title: "Clear outcomes, not experiments",
        description: [
            "A shared understanding of where AI should — and should not — change how work gets done.",
            "A prioritised list of 3–7 AI opportunities with owners and expected impact.",
            "An impact and feasibility matrix to speed decision-making.",
            "A 90-day roadmap with next steps, owners and KPIs.",
            "One process redesigned and documented, PoC-ready with acceptance criteria.",
            "Sector benchmarks and cross-industry examples you can import.",
            "Practical do’s and don’ts: technical notes, privacy and governance guidance."
        ]
    },
    whoThisIsFor: {
        eyebrow: "Who this is for",
        title: "This scan is for",
        subtitle: "heads of operations, marketing, sales or product at organisations that:",
        items: [
            "Have 30+ employees or several repeatable processes",
            "Already expect to use AI — or are under pressure to adopt it — but don't yet know where",
            "Want decisions and measurable progress, not just experiments"
        ]
    },
    pricing: {
        eyebrow: "PRICING",
        title: "Simple, fixed pricing",
        items: [
            {
                title: "AI Opportunity Scan",
                price: "€2,500",
                description: "On-site, half a day",
            },
            {
                title: "Scan + First Automation",
                price: "€6,000",
                description: "Scan followed by a production sprint that delivers your first working automation",
            }
        ]
    },
    introCall: {
        eyebrow: "Intro call",
        title: "The 20-minute intro call",
        body: "Book 20 minutes. You'll get a sector analysis report and a clear next step - even if you don't continue.",
        card: {
            title: "What happens:",
            bullets: [
                "Quick context: your goals and situation (5 min)",
                "We share what we see in your sector and two tailored AI ideas you could test quickly (10 min)",
                "We agree on next steps: scan, scan + build, or something else (5 min)"
            ],
            cta: {
                label: "Plan 20 minutes",
                href: "/ai-opportunity-scan/book"
            }
        }
    },
    faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        items: [
            {
                question: "Who needs to be involved in the scan?",
                answer: "We recommend involving a key decision-maker (COO, Head of Product, or Transformation Lead) and 1-2 subject matter experts who understand the day-to-day operations. The commitment is minimal: 20 minutes for intake and a half-day workshop."
            },
            {
                question: "Do I need to have a technical team?",
                answer: "No. The output of the scan is designed to be actionable whether you have an in-house team or generic IT support. We provide a build-ready plan that can be handed to developers or implemented with low-code tools."
            },
            {
                question: "What happens after the scan?",
                answer: "You walk away with a roadmap and a fully documented process ready for a Proof of Concept (PoC). You can choose to implement this yourself, or partner with us to build the PoC. There is no obligation to continue."
            }
        ]
    },
    features: {
        items: [
            {
                title: "Strategic Assessment",
                description: "We analyze your current workflows and identify high-impact areas for AI integration."
            },
            {
                title: "Proven Use Cases",
                description: "See examples of how similar organizations are already generating value with AI."
            },
            {
                title: "Actionable Roadmap",
                description: "Walk away with a prioritized list of next steps to start your AI journey."
            }
        ]
    },
    footerCta: {
        title: [
            "READY TO START?",
            "BOOK NOW"
        ],
        cta: {
            label: "SCHEDULE SESSION",
            href: "/ai-opportunity-scan/book"
        },
        panelTitle: "NEXT STEPS",
        panelBody: "Select a time that works for you. You'll receive a confirmation email with a Google Meet link and a short pre-session questionnaire to help us prepare.",
        copyright: "© The Only Constant 2025"
    },
    booking: {
        title: "Schedule Your Scan",
        embedUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HBfcp_-gZwOEdeN0WlCgjHeHP1-V8ULrVsEeCpzyluEmmjB9E4HTc5sUbdtiiD6-BEmMdgmLb?gv=true",
        fallback: {
            text: "If booking doesn’t work, use our contact page.",
            cta: {
                label: "Open booking in a new tab",
            },
            contactLink: {
                label: "Contact Page",
                href: "/contact"
            }
        },
        loadingText: "Loading available time slots...",
        backLink: {
            label: "Back to AI Opportunity Scan",
            href: "/ai-opportunity-scan"
        }
    }
} as const;
