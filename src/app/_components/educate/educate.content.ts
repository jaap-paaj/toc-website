export const educateContent = {
    hero: {
        eyebrow: "01",
        title: "EDUCATE",
        description: "We empower teams with the knowledge and skills to navigate the AI landscape effectively. Through workshops, training, and strategic guidance, we build the internal capability needed for sustainable innovation."
    },
    trainingCatalog: {
        aiTraining: {
            eyebrow: "AI TRAINING",
            description: "Hands-on programs that help you use AI to work smarter and explore new possibilities.",
            items: [
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
            ]
        },
        innovationTraining: {
            eyebrow: "INNOVATION TRAINING",
            description: "Human-centered programs that help you explore opportunities and design better products and services.",
            items: [
                {
                    title: "INNOVATION BY DESIGN",
                    description: "Master creative problem-solving with a human-centered approach. This training helps you understand users, reframe challenges, and design solutions that create real impact. You’ll learn practical methods you can apply immediately to any project or team.",
                },
                {
                    title: "EXPERIENCE MAPPING",
                    description: "Learn how to create customer journey maps and service blueprints that reveal how people interact with your product or service. You’ll uncover pain points, spot opportunities and turn insights into practical improvements.",
                }
            ]
        }
    },
    whyUs: {
        header: {
            eyebrow: "WHY US?"
        },
        items: [
            {
                title: "RAPID CAPABILITY BUILDING",
                description: "Sessions are packed with practical insights and tools, giving participants a lot of useful knowledge in just a few hours."
            },
            {
                title: "DIRECT IMPACT ON REAL WORK",
                description: "We use your actual context and challenges so learning directly improves current work."
            },
            {
                title: "LED BY REAL PRACTITIONERS",
                description: "Training is led by experienced AI specialists and innovation leads who apply these methods in real client projects."
            },
            {
                title: "FASTER, MORE ALIGNED TEAMWORK",
                description: "Teams leave with shared tools and methods that help them work faster and more effectively."
            }
        ],
        images: {
            left: "/images/educate/why-us-workshop-audience.png",
            altLeft: "Workshop audience",
            right: "/images/educate/why-us-ai-training-presentation.png",
            altRight: "AI Training presentation"
        }
    },
    testimonials: {
        eyebrow: "TESTIMONIALS",
        items: [
            {
                quote: "Finally, an AI workshop that uses our real data and challenges. I left with actual knowledge I could put to work immediately, not just theoretical knowledge."
            },
            {
                quote: "In 4 hours I went from ChatGPT beginner to building a Custom GPT that saves our team 10 hours per week. The hands-on approach made all the difference."
            },
            {
                quote: "I walked away with more than I expected. It was a lot and at times a bit overwhelming, but I learned more in those hours than in most full-day trainings."
            }
        ]
    }
} as const;
