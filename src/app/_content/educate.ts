import type { Locale } from "@/lib/i18n/config";

const en = {
    hero: {
        eyebrow: "01",
        title: "EDUCATE",
        description: "We help teams build practical AI capability through hands-on training based on real work. No hype, no theory-first. Expect doing, not listening: practical exercises, workflow mapping, and concrete outputs that make AI usable in daily work. Shared confidence grows around safe and responsible use, including the basics teams need to navigate the EU AI Act. People leave with reusable workflows, working examples, and clear next steps."
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
                    description: "Discover AI's potential for innovation and growth. This training provides executives with the strategic insights to drive smarter decisions and lead change.",
                }
            ]
        },
        innovationTraining: {
            eyebrow: "INNOVATION TRAINING",
            description: "Human-centered programs that help you explore opportunities and design better products and services.",
            items: [
                {
                    title: "INNOVATION BY DESIGN",
                    description: "Master creative problem-solving with a human-centered approach. This training helps you understand users, reframe challenges, and design solutions that create real impact. You'll learn practical methods you can apply immediately to any project or team.",
                },
                {
                    title: "EXPERIENCE MAPPING",
                    description: "Learn how to create customer journey maps and service blueprints that reveal how people interact with your product or service. You'll uncover pain points, spot opportunities and turn insights into practical improvements.",
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
};

const nl: typeof en = {
    hero: {
        eyebrow: "01",
        title: "EDUCATE",
        description: "Wij helpen teams praktische AI-vaardigheden opbouwen door middel van hands-on training op basis van echt werk. Geen hype, geen theorie voorop. Verwacht doen, niet luisteren: praktische oefeningen, workflow mapping en concrete resultaten die AI bruikbaar maken in het dagelijks werk. Gedeeld vertrouwen groeit rond veilig en verantwoord gebruik, inclusief de basis die teams nodig hebben om de EU AI Act te navigeren. Deelnemers vertrekken met herbruikbare workflows, werkende voorbeelden en duidelijke vervolgstappen."
    },
    trainingCatalog: {
        aiTraining: {
            eyebrow: "AI TRAINING",
            description: "Praktijkgerichte programma's die je helpen AI in te zetten om slimmer te werken en nieuwe mogelijkheden te verkennen.",
            items: [
                {
                    title: "AI INTRODUCTIE",
                    description: "Krijg een praktische introductie in generatieve AI, afgestemd op jouw rol en sector. Ontdek hoe het je werk kan transformeren en bouw essentiële vaardigheden op om te innoveren, automatiseren en creëren. Geen ervaring nodig!",
                },
                {
                    title: "CUSTOM GPTs",
                    description: "Een gevorderde, praktische sessie om je expertise met ChatGPT te verdiepen door te ontdekken hoe je Custom GPTs bouwt, aanpast en effectief toepast binnen je projecten.",
                },
                {
                    title: "AI VOOR VISUELE CONTENT CREATIE",
                    description: "Leer verbluffende visuals maken met Midjourney & Runway. Versnel je workflow, verfijn je stijl en innoveer met AI. Hands-on en zonder gedoe.",
                },
                {
                    title: "EXECUTIVE AI STRATEGIE",
                    description: "Ontdek het potentieel van AI voor innovatie en groei. Deze training biedt leidinggevenden de strategische inzichten om slimmere beslissingen te nemen en verandering te leiden.",
                }
            ]
        },
        innovationTraining: {
            eyebrow: "INNOVATIE TRAINING",
            description: "Mensgerichte programma's die je helpen kansen te verkennen en betere producten en diensten te ontwerpen.",
            items: [
                {
                    title: "INNOVATION BY DESIGN",
                    description: "Beheers creatief probleemoplossen met een mensgerichte aanpak. Deze training helpt je gebruikers te begrijpen, uitdagingen te herkaderen en oplossingen te ontwerpen die echte impact maken. Je leert praktische methoden die je direct kunt toepassen in elk project of team.",
                },
                {
                    title: "EXPERIENCE MAPPING",
                    description: "Leer hoe je customer journey maps en service blueprints maakt die onthullen hoe mensen omgaan met je product of dienst. Je ontdekt pijnpunten, signaleert kansen en vertaalt inzichten naar praktische verbeteringen.",
                }
            ]
        }
    },
    whyUs: {
        header: {
            eyebrow: "WAAROM WIJ?"
        },
        items: [
            {
                title: "SNEL VAARDIGHEDEN OPBOUWEN",
                description: "Sessies zitten vol praktische inzichten en tools, waardoor deelnemers in slechts een paar uur veel bruikbare kennis opdoen."
            },
            {
                title: "DIRECTE IMPACT OP ECHT WERK",
                description: "We gebruiken jullie eigen context en uitdagingen, zodat het geleerde direct het huidige werk verbetert."
            },
            {
                title: "GELEID DOOR ECHTE PRAKTIJKMENSEN",
                description: "Training wordt gegeven door ervaren AI-specialisten en innovatieleiders die deze methoden toepassen in echte klantprojecten."
            },
            {
                title: "SNELLER, BETER AFGESTEMD TEAMWORK",
                description: "Teams vertrekken met gedeelde tools en methoden die hen helpen sneller en effectiever samen te werken."
            }
        ],
        images: {
            left: "/images/educate/why-us-workshop-audience.png",
            altLeft: "Workshop publiek",
            right: "/images/educate/why-us-ai-training-presentation.png",
            altRight: "AI Training presentatie"
        }
    },
    testimonials: {
        eyebrow: "ERVARINGEN",
        items: [
            {
                quote: "Eindelijk een AI-workshop die onze eigen data en uitdagingen gebruikt. Ik vertrok met kennis die ik direct kon toepassen, niet alleen theoretische kennis."
            },
            {
                quote: "In 4 uur ging ik van ChatGPT-beginner naar het bouwen van een Custom GPT die ons team 10 uur per week bespaart. De hands-on aanpak maakte het verschil."
            },
            {
                quote: "Ik ging weg met meer dan verwacht. Het was veel en soms wat overweldigend, maar ik leerde meer in die uren dan in de meeste trainingen van een hele dag."
            }
        ]
    }
};

export const educateContent: Record<Locale, typeof en> = { en, nl };
