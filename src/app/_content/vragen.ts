import type { Locale } from "@/lib/i18n/config";
import type { ProseBlock } from "@/components/sections/ProseSection";
import { READINESS_SCAN_CHAT_PATH } from "@/app/_content/ai-readiness-scan";

/**
 * GEO answer pages ("vragen").
 *
 * Long-form answers to buying questions people ask AI assistants and search
 * engines. Not blog posts: no dates, no chronology, evergreen by design.
 *
 * Each page closes with one tool CTA. Seven point at the AI First Aid, seven at the
 * AI Readiness Scan.
 */

/**
 * Straight into the chat, not the landing page: the closing copy promises a
 * conversation, and the answer page already did the convincing.
 */
export const EHBO_HREF = "/ai-ehbo/chat";

export const SCAN_HREF = READINESS_SCAN_CHAT_PATH;

/** Block shape is owned by the section that renders it. */
export type AnswerBlock = ProseBlock;

export interface AnswerPage {
    /**
     * Stable identity across locales. The same key is the same question; the
     * slug is the URL and is translated. Never appears in a URL.
     */
    key: string;
    slug: string;
    cluster: string;
    meta: { title: string; description: string };
    question: string;
    lead: string;
    blocks: AnswerBlock[];
    closing: string;
    cta: { label: string; href: string };
}

const en = {
    index: {
        meta: {
            title: "Questions about AI in your organisation - The Only Constant",
            description:
                "Straight answers to the questions organisations ask before they start with AI: what it costs, who can help, whether it is safe and why projects fail.",
        },
        hero: {
            eyebrow: "Answers",
            title: "Questions about AI in your organisation",
            intro: "Fourteen questions we get asked in almost every first conversation, answered the way we would answer them across the table. No sales pitch, no jargon.",
        },
        listEyebrow: "All questions",
        breadcrumbLabel: "Questions",
    },
    pages: [
        {
            key: "hoe-kies-je-de-juiste-ai-partner",
            slug: "how-to-choose-an-ai-partner",
            cluster: "Who can help us",
            meta: {
                title: "How to choose the right AI partner - The Only Constant",
                description:
                    "Four questions that separate a useful AI partner from a sales pitch, and what the right answers sound like.",
            },
            question: "How do you choose the right AI partner for your organisation?",
            lead: "There are probably ten agencies sitting in your inbox, all with AI transformation in the subject line, and you have to pick one. They all sound the same, because they are all offering the same thing.",
            blocks: [
                { kind: "subheading", text: "How do you approach it?" },
                { kind: "paragraph", text: "Ask every candidate four questions:" },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "where do you start?",
                        "how small can the first step be?",
                        "how will we know in a month whether it works?",
                        "what can we do ourselves once you are done?",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "When you listen to the answers, pay attention to who asks follow-up questions. A partner worth having asks a lot about your work. A salesperson starts talking.",
                },
                { kind: "subheading", text: "Where do you start?" },
                {
                    kind: "paragraph",
                    text: "The only good answer: on the floor. An AI partner who spends a morning watching your customer service team knows more about your process by lunch than a steering committee learns in three months. The wrong answer is easy to spot: a demo of their own platform without a single substantive question about your organisation.",
                },
                { kind: "subheading", text: "How small can the first step be?" },
                {
                    kind: "paragraph",
                    text: "A good partner wants to start on one process quickly, preferably low effort and high value, and wants it working fast. Think sorting and answering incoming customer email, or preparing sales conversations. They do that to get to know you, so that later in the relationship they can judge far better how to help you further. After a first assignment like that, a partner can tell whether your organisation is ready to change and whether the team is ready to adopt it. What you do not want to discuss at the start: an eighteen-month programme with a seven-phase roadmap.",
                },
                { kind: "subheading", text: "How will we know in a month whether it works?" },
                {
                    kind: "paragraph",
                    text: "A partner who genuinely understands that AI is about organisational goals rather than technology will set KPIs with you for every project. Experimenting without KPIs is nothing more than very expensive innovation theatre. Put more sharply: if you do not know what you want to achieve, every experiment is pointless before it starts. Show the agency that wants to define project KPIs in a later phase to the door.",
                },
                { kind: "subheading", text: "What can we do ourselves once you are done?" },
                {
                    kind: "paragraph",
                    text: "Handover is routinely underrated and matters enormously. A good partner moves you forward and works towards making itself unnecessary. Once your AI application is running, your team works in a new way, the KPIs are being met and the documentation is complete, all maintenance should be transferable. Lock-in at the start of your AI adoption is unwise, because you do not yet know what you will need. So: your partner should have to earn the next assignment. A licence, a retainer or a prepaid block of hours up front is a red flag, because that agency and that account manager will not be leaving any time soon. In short, the right partner makes itself redundant.",
                },
            ],
            closing:
                "Want a quick, simple read on whether you are ready for a first AI project? Try our AI Readiness Scan. In five minutes you will know where you stand and what your next steps should be.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "waar-vind-ik-ai-consultants",
            slug: "where-to-find-ai-consultants",
            cluster: "Who can help us",
            meta: {
                title: "Where to find AI consultants in the Netherlands - The Only Constant",
                description:
                    "Four types of AI provider in the Dutch market, what each one is good for, and how to tell which one you actually need.",
            },
            question: "Where do I find AI consultants for the Dutch market?",
            lead: "Search for \"AI consultant Netherlands\" and you get a sea of providers all promising the same thing. The sheer number of them is the problem.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "The Dutch market has roughly four types of AI provider:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "IT companies that build systems",
                        "marketing and communications agencies offering AI as an add-on",
                        "independent AI specialists",
                        "AI adoption agencies that teach your organisation to work with AI itself",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Which kind you need depends on what has to exist a year from now: software, or knowledge and skills in your own people.",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "IT companies are the right choice when you know exactly what needs building and you are only looking for hands. They are not the right first step when you do not yet know which problem you are solving: they will build what you ask for, including the wrong thing.",
                        "Agencies with AI as a side subject are fine for one campaign or advice on which tool to buy, but too thin once it touches your processes, your data or your people.",
                        "Independent specialists are fast and affordable for a well-defined job. Do ask yourself: what happens to your new system when they move on to the next client?",
                        "Adoption agencies start with your organisation. What exactly do you deliver, how do the internal processes work, where is the potential value of AI for you? Technology comes second. That is the category The Only Constant sits in: we help Dutch companies with well-defined AI projects and always transfer the knowledge to their own people.",
                    ],
                },
            ],
            closing:
                "Not sure which type of provider fits you? The free AI First Aid points you in the right direction in a short conversation, including a plan of action for the short term.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-implementatie-mkb",
            slug: "ai-implementation-for-smes",
            cluster: "Who can help us",
            meta: {
                title: "AI implementation for SMEs: who offers it - The Only Constant",
                description:
                    "Four things that separate AI implementation built for SMEs from a programme designed for enterprises.",
            },
            question: "Which companies offer AI implementation for SMEs?",
            lead: "Most AI agencies are built for large enterprises: steering committees, multi-year plans and day rates that suit a bank. You have forty staff, a full order book and no time for phase one of seven.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "AI implementation that fits an SME is recognisable by four things:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "a fixed price up front",
                        "a lead time measured in weeks",
                        "solutions built on software you largely already have",
                        "knowledge transfer to your own people as a fixed part of the job",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Any agency that offers this is a serious candidate. Any agency that opens with a contract and a multi-year plan is built for a different kind of client.",
                },
                {
                    kind: "paragraph",
                    text: "Why these four? A fixed price forces the provider into a small, sharp, well-defined assignment, and a small assignment is exactly what a first AI project needs. Weeks instead of months means you know very quickly whether your AI project delivers anything. Starting from software you already have keeps the solution simpler, and the simplest thing that works is almost always the cheapest. And knowledge transfer determines whether you can move forward yourself, or whether every adjustment sends you back to the supplier. Given the speed at which AI changes everything, that matters more than ever.",
                },
                {
                    kind: "paragraph",
                    text: "The Only Constant is set up along these four lines. A first project with us is short and compact, usually a matter of weeks. After that you have a clear picture of what it delivers and you can decide whether to approach AI adoption more structurally.",
                },
            ],
            closing:
                "Curious which first project would deliver the most for you? You can find out in a few minutes with the free AI First Aid.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-integreren-zonder-technische-kennis",
            slug: "ai-without-technical-knowledge",
            cluster: "Where do we start",
            meta: {
                title: "Integrating AI without technical knowledge - The Only Constant",
                description:
                    "You do not need a data scientist to start with AI. You need three other things, and the technology comes last.",
            },
            question: "How can my company integrate AI without technical knowledge?",
            lead: "You have no real IT department, no data scientist, and when someone says API everyone nods knowingly and then looks away. Meanwhile the board does want something with AI.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "You do not need technical knowledge to start. You do need these three things:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "a view of where your people are already quietly using ChatGPT",
                        "one page describing the problem you are going to solve",
                        "a management team that gives you room for it",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "The technology itself is almost always an existing subscription at the start.",
                },
                {
                    kind: "paragraph",
                    text: "Start with the informal use, the shadow AI. In practically every company the best people have been using ChatGPT or Claude on a personal account for a long time, for emails, summaries and proposal text. Treat that as a compass: their behaviour already shows you exactly where the work gets stuck. Ask about it without judgement, even when it is not allowed, otherwise nobody will tell you what they do, what works and what does not. List who uses what and for which task. That gives you a useful longlist of possible first projects.",
                },
                {
                    kind: "paragraph",
                    text: "Then a one-page project brief. It states which problem you are solving, how the process currently works, which team it sits in, who decides whether it goes ahead, and which KPIs will tell you the new solution works. If it does not fit on one page, your plan is too big. Make it smaller. This costs an afternoon and not a line of code.",
                },
                {
                    kind: "paragraph",
                    text: "Technology last. Nine out of ten AI initiatives are about understanding your own processes. Once that is clear, the technology, certainly for your first projects, is very manageable.",
                },
            ],
            closing:
                "Want to be sure the foundation is in place before you start? The free AI Readiness Scan checks it in five minutes and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "hoe-start-je-met-ai-adoptie",
            slug: "how-to-start-with-ai",
            cluster: "Where do we start",
            meta: {
                title: "How to start with AI adoption in an SME - The Only Constant",
                description:
                    "One process, four weeks. A concrete way to start with AI adoption that tells you within a month whether it works.",
            },
            question: "How do you start with AI adoption in an SME?",
            lead: "All your competitors are already doing something with AI, and somehow you never get round to it. How do you break that pattern?",
            blocks: [
                { kind: "paragraph", text: "Start with one process and four weeks:" },
                {
                    kind: "list",
                    ordered: false,
                    items: [
                        "Week one: watch the work happen and pick a task that costs a lot of time every day. Describe the process as-is and where the bottlenecks are.",
                        "Week two: describe how the task could be done more efficiently. Be as detailed as you can. Set clear KPIs and then build the simplest version, with a partner.",
                        "Weeks three and four: let the team work with it and check whether the KPIs are being met.",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "After that you know whether the AI implementation works, how quickly your organisation can change and where adoption is likely to slow down. That is already more than most AI programmes can say after eighteen months.",
                },
                {
                    kind: "paragraph",
                    text: "Watching the work is the step almost everyone skips and the one that yields the most insight. Sit next to someone for twenty minutes and have them narrate what they are doing. You will see things that appear in no manual: the spreadsheet on the side, the copying between two systems, the five minutes of searching before every email that goes out. You are not doing this to be polite: what you see there decides which process you pick.",
                },
                {
                    kind: "paragraph",
                    text: "Two warnings from practice. Agree KPIs before you build anything, for example the lead time of a quote or how quickly a customer gets an answer. Without that agreement every outcome is fine in hindsight and nobody learns anything. And leave work that should not exist alone: AI only makes a bad process faster. Not better.",
                },
                {
                    kind: "paragraph",
                    text: "Does your solution work after four weeks? Then you expand and your own team takes it over. Does it not work, then you probably have a very good idea why.",
                },
            ],
            closing:
                "Want to be sure your organisation is ready first? The free AI Readiness Scan checks in five minutes whether your foundation is in place and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "wat-kost-ai-adoptie",
            slug: "what-does-ai-adoption-cost",
            cluster: "What does it cost",
            meta: {
                title: "What does AI adoption cost for an SME - The Only Constant",
                description:
                    "Three levels of AI investment, from a 25 euro subscription to custom automation, and which one you should actually start at.",
            },
            question: "What does AI adoption cost for an SME?",
            lead: "You hear numbers flying in every direction, from a few tens of euros a month to programmes of a hundred thousand and up. No wonder you are not starting without clarity.",
            blocks: [
                { kind: "paragraph", text: "Count on three levels:" },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "off-the-shelf tools such as ChatGPT or Claude: from around €25 per person per month",
                        "unlocking your own knowledge and first automations: €3,000 to €5,000, two to six weeks",
                        "custom work that operates independently inside your systems: the sky is the limit",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Nine out of ten SMEs should be starting at level one or two. Plenty of providers will offer you level three straight away.",
                },
                { kind: "subheading", text: "Level 1" },
                {
                    kind: "paragraph",
                    text: "Existing tools (€25 to €30 per person per month). Faster writing, summarising, searching, translating. ChatGPT, Claude or Copilot, plus proper training and one working session on what may and may not be done with company data. Without that training you are mostly buying noise. Done in days. Anyone offering you a build project for this is charging you for something you can arrange yourself in an afternoon.",
                },
                { kind: "subheading", text: "Level 2" },
                {
                    kind: "paragraph",
                    text: "Unlocking your knowledge and first automations (€3,000 to €5,000, two to six weeks). For companies where the value is locked in documents: contracts, manuals, old quotes. Think of a trading company where the sales desk digs through emails and folders for old price agreements before every quote. A secure connection between those documents and an AI model solves that: a manageable build, not a platform. Agree the KPIs up front here too, and you will know within a few weeks what it delivers.",
                },
                { kind: "subheading", text: "Level 3" },
                {
                    kind: "paragraph",
                    text: "AI that performs work inside your systems (custom). A process that independently carries out steps across multiple systems. More expensive and riskier, so you do this only once levels one and two have already paid for themselves.",
                },
                {
                    kind: "paragraph",
                    text: "The order matters more than the budget: the most expensive failed AI project in the SME world is buying level three while the problem sat at level one.",
                },
            ],
            closing:
                "Want to know which level your bottleneck sits at before a single euro goes to technology? The free AI First Aid works it out with you in a short conversation, and you get a first action to take with it.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-voor-klantenservice",
            slug: "ai-for-customer-service",
            cluster: "What can we use AI for",
            meta: {
                title: "How to use AI for customer service - The Only Constant",
                description:
                    "The three customer service tasks where AI actually pays off, and why a chatbot on your mailbox is almost never the answer.",
            },
            question: "How do I use AI for customer service?",
            lead: "The customer emails at 9:02. At 9:27 your colleague is still looking for which folder contains the returns policy.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "In customer service, AI works best on three tasks:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "sorting and labelling incoming messages",
                        "finding the right policy document or the previous agreement",
                        "drafting a reply",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "The employee decides, corrects and sends. With that division of labour the customer gets an answer in minutes instead of hours, without a single unchecked message ever leaving the building.",
                },
                {
                    kind: "paragraph",
                    text: "Start with one well-defined piece of customer contact, for example the first assessment of product complaints by email. Write down which step AI can take, which one the human keeps and where they meet, and agree the KPIs up front: how quickly the customer should have an answer and how satisfied they are. Measure those two before and after.",
                },
                {
                    kind: "paragraph",
                    text: "A chatbot connected to a mailbox is almost never the answer; the bottleneck is nearly always in looking up, sorting and retrieving what was agreed last time.",
                },
                {
                    kind: "paragraph",
                    text: "For knowledge that lives in documents, a connection between those documents and an AI model is usually enough: a week or so of building, not a large custom project. Build the simplest version that can work and let your sceptical colleagues actually use it for four weeks. They will find the mistakes your enthusiasts miss. And ask your people what they think, because if they do not use it the numbers mean nothing.",
                },
            ],
            closing:
                "Where is the biggest time sink in your customer contact? The free AI First Aid tracks it down in a short conversation, and you get a first action to take with it.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-voor-marketing-en-administratie",
            slug: "ai-for-marketing-and-admin",
            cluster: "What can we use AI for",
            meta: {
                title: "How to use AI for marketing or administration - The Only Constant",
                description:
                    "Where AI pays off in marketing and back office work: preparing the work, with a human keeping final control.",
            },
            question: "How do I use AI for marketing or administration?",
            lead: "A quote could be ready in an hour, if the right figures, the previous proposal and the current prices were not spread across five different systems.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "In marketing and administration, AI pays off most in preparing the work:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "drafting copy for four channels from a single campaign idea",
                        "producing a draft quote including a reference to the source data",
                        "recognizing and analysing incoming invoices, and where possible completing them for your accounting system",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "In all of these processes a human ideally keeps final control, so that nothing reaches your customer or your books unseen.",
                },
                { kind: "subheading", text: "How to approach it" },
                {
                    kind: "paragraph",
                    text: "Pick one task where friction shows up every day and write down which step AI can take and which step the human has to keep. That process description gives you a sharp view of how something actually works. You will find that mapping the process tells you a great deal about what to automate and how. The result: AI writes the draft quote in minutes and adds the sources; you check it, adjust it and approve. Or: AI writes the campaign copy for LinkedIn, email and the site based on the original campaign idea and the brand guidelines, and the marketer stays responsible for the message. One more example: AI reads incoming invoices, corrects what it can, asks for extra information where needed, and queues them for review and posting by the finance team. That division on paper, the process description, matters more than which tool you choose, because the process is where you define who stays accountable. For personal work such as emails, reports and summaries, a simple AI subscription is enough and any custom build is usually a waste of money.",
                },
                {
                    kind: "paragraph",
                    text: "Run the system for four weeks and agree the KPIs up front, for example the lead time of a quote. If it gets faster without the quality dropping, you expand. If not, you know exactly where friction shows up, and that is worth something too.",
                },
            ],
            closing:
                "Wondering whether your biggest time sink is in the quotes, the invoices or somewhere else entirely? The free AI First Aid maps it out in a short conversation, with a first action for this week.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-en-bedrijfsgegevens",
            slug: "ai-and-company-data",
            cluster: "Is it safe",
            meta: {
                title: "Is it safe to use AI with company data - The Only Constant",
                description:
                    "Separate the tool from the data and the safety question becomes manageable. Three categories, one working session, one page of rules.",
            },
            question: "Is it safe to use AI with company data?",
            lead: "Someone in the office pastes a client contract into ChatGPT to get a quick summary, and you wonder whether data just left the building that never should have.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Yes, you can use AI safely on company data, provided you separate two things: which tool you use, and which data is allowed into it. A business subscription (ChatGPT Enterprise, Claude for Work, Copilot in your own environment) does not train on what you enter; a free personal account often does. The biggest leaks happen wherever people take the most convenient route without an agreement.",
                },
                {
                    kind: "paragraph",
                    text: "Sort out the basics in one working session. Record which category of data is allowed where:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "public text: anywhere",
                        "internal documents: only in the business environment",
                        "sensitive personal or customer data: for now, nowhere outside your own systems",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Put the rules on one page and stick it on the coffee machine. That single agreement carries more weight than an expensive technical measure, because it steers the behaviour where most of the risk sits. If you want to go further: connect an AI model to your own documents instead of pasting extracts into it. The data then stays inside a protected environment and you can see which source fed the answer. That is usually a manageable few weeks of work, not a major security project.",
                },
                {
                    kind: "paragraph",
                    text: "And the AI Act? Most everyday uses, such as summarising, sorting and drafting, do not fall into the heaviest category. But it is the application that counts, not the action: the moment AI weighs in on decisions about people, the picture changes. So judge it per use case rather than per tool.",
                },
            ],
            closing:
                "Want to know where your real risk sits and where it does not? The free AI Readiness Scan checks your data housekeeping and your shadow AI among other things, and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "team-meekrijgen-met-ai",
            slug: "getting-your-team-on-board-with-ai",
            cluster: "Will the team come along",
            meta: {
                title: "How to get your team on board with AI - The Only Constant",
                description:
                    "People adopt a tool that removes an annoying job. Start with what costs them time, not with what AI can do.",
            },
            question: "How do I get my team on board with AI?",
            lead: "You buy licences, arrange a training session, and three weeks later half the team has stopped using AI. The technology was ready, the people were not.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "You bring a team along by mapping out together what costs them time or energy every day. What AI can do comes later. People embrace a tool that takes away an annoying job; they rarely embrace something imposed from above. So pick one task your people complain about themselves, solve the problem together and let the result do the convincing. One visible success on the floor moves more colleagues than ten presentations about the future.",
                },
                {
                    kind: "paragraph",
                    text: "Start with the people already using AI under the radar, the shadow usage. In practically every team a few front-runners have been using AI on a personal account for a long time. Make them your guides: give them half an hour to show the rest what they do and what it gets them. That works beautifully, because the example comes from their own world and is about their own work.",
                },
                {
                    kind: "paragraph",
                    text: "The resistance that remains is usually an honest question underneath: am I slowly being made redundant? Be open about it. In the projects we run, AI almost never takes over a job, but it does take over the boring part of it: the sorting, the looking up, the collecting, the writing of the first draft. The planner still sets the route, the salesperson still has the conversation. Say that out loud, because the unspoken part is what holds people back.",
                },
                {
                    kind: "paragraph",
                    text: "And keep asking what they think of the new tools. KPIs show whether something got faster; why people keep using it or stop is something you only hear if you ask. It is precisely the sceptics who point out the weak spots your enthusiasts overlook.",
                },
            ],
            closing:
                "Is the brake on your side technology or people? The free AI Readiness Scan checks your sponsor, your middle management and your shared story among other things, and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "waarom-mislukken-ai-projecten",
            slug: "why-ai-projects-fail",
            cluster: "Does it really work",
            meta: {
                title: "Why AI projects fail in SMEs - The Only Constant",
                description:
                    "Three reasons AI projects stall: started too big, no KPIs agreed up front, and the knowledge stayed with the supplier.",
            },
            question: "Why do AI projects fail in SMEs?",
            lead: "The company down the road bought an AI platform last year. There was a project group, there were licences, and a year later there is still nothing anyone uses daily.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Most AI projects in SMEs run aground on three things:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "they started too big",
                        "no KPIs were agreed up front",
                        "the knowledge stayed with an external party instead of the internal team",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "A project that starts small, has a clear measurable goal and leaves its knowledge behind rarely fails outright. At worst it delivers less than hoped, and you know that within weeks.",
                },
                {
                    kind: "paragraph",
                    text: "Starting too big is the most common. An eighteen-month programme with a seven-phase roadmap sounds solid, but you only find out in a year and a half whether it was worth anything. A four-week project on one process tells you now. Cut the plan back until it fits on one page; what does not fit, you keep for later.",
                },
                {
                    kind: "paragraph",
                    text: "The second mistake is everywhere: no KPIs up front. Without a number fixed in advance (the lead time of a quote, say, or how quickly a customer gets an answer) almost any outcome can be presented as a success in hindsight. Everyone talks the project up and nobody learns anything. So agree before you start what has to improve, and measure the same thing at the end.",
                },
                {
                    kind: "paragraph",
                    text: "The third point is the most expensive over time: knowledge that stays with the supplier. If it works but you cannot change anything without calling the builder, you have bought a subscription to dependency. Dependency becomes part of how you operate. Make sure your own people understand the approach and start innovating themselves. That is the difference between a project that stays alive and one that stalls the moment the invoice is paid.",
                },
            ],
            closing:
                "Want to know in advance where your biggest risk sits? The free AI First Aid exposes it in a short conversation, and you get a first action to take with it.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "ai-voor-installatiebedrijven",
            slug: "ai-for-technical-companies",
            cluster: "Technical services",
            meta: {
                title: "AI for installation and technical companies - The Only Constant",
                description:
                    "In technical services the AI gains sit in looking things up and in the admin, not in the work on site.",
            },
            question: "How do I use AI in an installation or technical company?",
            lead: "A service engineer is standing at a customer site, runs into a boiler model they have not seen in two years, and calls the office about something that is written down somewhere in the manual. Five times a day, across the whole team.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "In an installation or technical company the biggest AI gains sit in looking things up and in administering the work, less in carrying out the work on site. Your company's knowledge is locked up in manuals, old job sheets and the heads of your experienced engineers.",
                },
                {
                    kind: "paragraph",
                    text: "An AI model that makes those documents searchable gives the engineer in the field the right answer within seconds. A focused first version is often running within a few weeks.",
                },
                {
                    kind: "paragraph",
                    text: "Three places where friction shows up every day:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "the engineer looking for information that already exists: a searchable knowledge base on your own documents saves the phone call",
                        "the quote that sits waiting because the right prices and the previous proposal live in different systems: AI prepares a draft with the sources attached, you check and sign",
                        "the job sheets that still have to be typed up in the evening: from a few spoken sentences AI produces a tidy report, and the engineer only has to check it",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Important for the trade: let AI do the looking up and the preparing, but never the decision about safety or the installation itself. The qualified professional stays responsible.",
                },
                {
                    kind: "paragraph",
                    text: "In short: start with the knowledge base, because it touches every engineer every day, and agree one simple KPI: how many calls to the office disappear in the first month. And ask your engineers whether they trust the answer, because if they do not use it, the KPI only tells you half the story.",
                },
            ],
            closing:
                "Where does most of your time leak away, in the field or in the office? The free AI First Aid works it out with you in a short chat, and you get a first action to take with it.",
            cta: { label: "Start the free AI First Aid", href: EHBO_HREF },
        },
        {
            key: "is-ai-betrouwbaar",
            slug: "is-ai-reliable",
            cluster: "Reliability",
            meta: {
                title: "Is AI reliable? - The Only Constant",
                description:
                    "AI is reliable for work you check and unreliable for work you send out blind. What that means in practice, and what Air Canada learned the hard way.",
            },
            question: "Is AI reliable?",
            lead: "Try it: ask ChatGPT what your company does and for whom. The answer reads smoothly, sounds convincing, and almost certainly contains something that is not true. A service you do not offer, an office you never had, a founding year that makes no sense.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "That is AI reliability in miniature: reliable for work you check, unreliable for work you send out blind. A language model predicts the next word based on patterns. It does not know what is true, but it can write the answer down very nicely. That is why mistakes sound exactly as confident as the rest of the answer. That is the real risk: an error that looks like a fact.",
                },
                {
                    kind: "paragraph",
                    text: "Air Canada showed how expensive that can get. In 2024 their chatbot told a passenger he could apply for a bereavement fare retroactively. He could not, and the tribunal ruled that the airline simply had to pay: a company is liable for what its chatbot says. The defence that the chatbot was a separate entity did not hold. For you that means: whatever your AI sends to a customer is your promise.",
                },
                { kind: "subheading", text: "How do you prevent hallucinations?" },
                {
                    kind: "paragraph",
                    text: "The intervention that works is organisational, not technical: put a human at the point where the work leaves the building. Alongside that, three things you can arrange today:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "give the model your own sources: an AI drawing on your rate card and your client file invents less than an AI talking from memory",
                        "ask for uncertainty: have the model mark what it is unsure about with a tag such as [VERIFY]; that is one line in your instruction and it puts the check in the right place",
                        "check facts, not language: names, amounts, quantities and dates are where it goes wrong, the phrasing is usually fine. Especially in combination with a clear tone of voice document",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "For tasks where a mistake costs money or trust, build in a hard stop: no quote leaves the building without a human eye, no amounts from a model that does not know your price list. That is the same arrangement you make with a new colleague, and nobody calls that distrust.",
                },
                {
                    kind: "paragraph",
                    text: "And that test at the top? Everything the model invented about your company is a gap you have not filled yet. Internally it works exactly the same way: the better your own information is organized, the less there is to invent. That is why we build the way we do: one process, four weeks, and control stays with the people who know the work.",
                },
            ],
            closing:
                "Want to know whether your organisation has that control in place? The free AI Readiness Scan checks your decision structure and your scope for safe experimentation among other things, and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "custom-gpt-bouwen",
            slug: "how-to-build-a-custom-gpt",
            cluster: "Building it ourselves",
            meta: {
                title: "How to build a custom GPT (and when not to) - The Only Constant",
                description:
                    "Building a custom GPT takes half an hour. Knowing when it is the wrong answer saves you a great deal more.",
            },
            question: "How do you build a custom GPT (and when is that not the answer)?",
            lead: "\u201cHow do you build a GPT?\u201d is a question that comes up at every knowledge session. There is almost always a different question underneath: this work is costing me too much time and I want someone to take it over.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "With a bit of care you can build a custom GPT in half an hour:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "open ChatGPT and choose Create a GPT",
                        "describe in plain language what it should do, and just as importantly, what it should not do",
                        "upload the documents it may draw on",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "No code. The quality comes down to two things: how sharp your instruction is, and how good the material you give it is.",
                },
                {
                    kind: "paragraph",
                    text: "The second is where it usually goes wrong. A GPT handed your entire department drive will answer from outdated files with just as much conviction as from the good ones. Three accurate, current documents produce a better assistant than two hundred files half of which are obsolete. Clean up first, build second.",
                },
                {
                    kind: "paragraph",
                    text: "When a custom GPT is a good idea: the task is essentially a conversation, and the custom GPT is a specialized (read: bounded) chatbot. More concretely: the user asks a question and gets back an answer or a draft text. Think of a writing assistant that knows your tone of voice and templates, or a help desk built on your own employee handbook.",
                },
                {
                    kind: "paragraph",
                    text: "A GPT is not the solution when the task has to run autonomously. A GPT waits until someone opens it. The moment the answer has to land in another system, run every morning, or pull data from your accounting or order software, it stops. Then you are looking for an automation attached to your systems. That is a different kind of project, and building it need not be complex, but it always costs more than building a GPT.",
                },
                {
                    kind: "paragraph",
                    text: "That distinction is about understanding what AI can do. Someone asking how to build a GPT to connect order confirmations to their bookkeeping does not need a GPT but a broader system.",
                },
                {
                    kind: "paragraph",
                    text: "Start with a GPT if you want to learn how AI models behave. It costs half an hour, it produces something usable straight away, and within a week you discover where the work really gets stuck. That discovery is worth more than the GPT itself.",
                },
            ],
            closing:
                "Want to know whether your organisation is ready for the step after that? The free AI Readiness Scan checks your data and your sponsor among other things, and sends you a plan of action.",
            cta: { label: "Take the free Readiness Scan", href: SCAN_HREF },
        },
    ] satisfies AnswerPage[],
};

const nl: typeof en = {
    index: {
        meta: {
            title: "Vragen over AI in je organisatie - The Only Constant",
            description:
                "Eerlijke antwoorden op de vragen die organisaties stellen voordat ze met AI beginnen: wat het kost, wie kan helpen, of het veilig is en waarom projecten mislukken.",
        },
        hero: {
            eyebrow: "Antwoorden",
            title: "Vragen over AI in je organisatie",
            intro: "Veertien vragen die in vrijwel elk eerste gesprek langskomen, beantwoord zoals we ze aan tafel zouden beantwoorden. Geen verkoopverhaal, geen jargon.",
        },
        listEyebrow: "Alle vragen",
        breadcrumbLabel: "Vragen",
    },
    pages: [
        {
            key: "hoe-kies-je-de-juiste-ai-partner",
            slug: "hoe-kies-je-de-juiste-ai-partner",
            cluster: "Wie kan me helpen",
            meta: {
                title: "Hoe kies je de juiste AI-partner - The Only Constant",
                description:
                    "Vier vragen die een bruikbare AI-partner scheiden van een verkoopverhaal, en hoe de goede antwoorden klinken.",
            },
            question: "Hoe kies je de juiste AI-partner voor je organisatie?",
            lead: "Er zitten waarschijnlijk zo'n tien partijen in je inbox, allemaal mails met AI-transformatie in de onderwerpregel, en jij moet er één uitkiezen. Ze klinken allemaal hetzelfde, omdat ze ook allemaal hetzelfde aanbieden.",
            blocks: [
                { kind: "subheading", text: "Hoe pak je het aan?" },
                { kind: "paragraph", text: "Stel elke kandidaat vier vragen:" },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "waar beginnen jullie?",
                        "hoe klein kan de eerste stap?",
                        "hoe weten we over een maand of het werkt?",
                        "wat kunnen wij zelf als jullie klaar zijn?",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Let bij de antwoorden vooral op wie er verdiepingsvragen stelt. Een partij waar je wat aan hebt stelt veel vragen over jouw werk. Een verkoper begint te vertellen.",
                },
                { kind: "subheading", text: "Waar beginnen jullie?" },
                {
                    kind: "paragraph",
                    text: "Het enige goede antwoord: op de werkvloer. Een AI-partner die eerst een ochtend meekijkt bij je klantenservice weet 's middags meer over je proces dan een stuurgroep in drie maanden. Het verkeerde antwoord herken je meteen: een demo van hun eigen platform zonder ook maar een echt inhoudelijke vraag over je eigen organisatie te hebben gesteld.",
                },
                { kind: "subheading", text: "Hoe klein kan de eerste stap?" },
                {
                    kind: "paragraph",
                    text: "Je potentiële partner wil snel bij één proces beginnen, bij voorkeur een low effort, high value project, en wil dat snel werkend hebben. Denk dan bijvoorbeeld aan het sorteren en beantwoorden van inkomende klantmails of het voorbereiden van salesgesprekken. Dat doen ze om je beter te leren kennen, zodat ze later in de samenwerking veel beter kunnen inschatten hoe ze je verder kunnen helpen. Je potentiële partner kan na zo'n eerste opdracht goed inschatten of je organisatie klaar is voor verandering en weet of de medewerkers er zin in hebben. Waar je het in het begin nog niet over wil hebben is een programma van achttien maanden met een routekaart in zeven fases.",
                },
                { kind: "subheading", text: "Hoe weten we over een maand of het werkt?" },
                {
                    kind: "paragraph",
                    text: "Een partij die echt snapt dat de inzet van AI gaat over het behalen van organisatiedoelen en niet over techniek stelt samen voor ieder project de KPI's vast. Experimenteren zonder KPI's is namelijk niets anders dan heel duur innovatietheater. Scherper: als je niet weet wat je wil bereiken, dan is ieder experiment bij voorbaat onzin. De club die de project-KPI's in een volgende fase wil vaststellen moet je direct de deur wijzen.",
                },
                { kind: "subheading", text: "Wat kunnen wij zelf, als jullie klaar zijn?" },
                {
                    kind: "paragraph",
                    text: "Oplevering wordt vaak onderschat, maar is erg belangrijk. Een goede partner helpt je vooruit en streeft ernaar zelf overbodig te worden. Als je AI-toepassing draait en je team werkt op een nieuwe manier, KPI's worden gehaald en de documentatie compleet is, zou alle beheer en onderhoud overdraagbaar moeten zijn. Een lock-in is in de beginfase van je AI-adoptie heel onverstandig, je weet immers nog niet wat je nodig hebt. Dus: je potentiële partner moet de volgende klus verdienen. Direct een licentie, een retainer of zelfs een strippenkaart is een red flag, want die club en die accountmanager raak je voorlopig niet meer kwijt. Kortom, de juiste partner maakt zichzelf overbodig.",
                },
            ],
            closing:
                "Wil je simpel en snel onderzoeken of je al klaar bent voor een eerste AI-project? Probeer dan onze AI Readiness Scan. Binnen 5 minuten weet je waar je staat en wat je volgende stappen moeten zijn.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "waar-vind-ik-ai-consultants",
            slug: "waar-vind-ik-ai-consultants",
            cluster: "Wie kan me helpen",
            meta: {
                title: "Waar vind ik AI-consultants in Nederland - The Only Constant",
                description:
                    "Vier soorten AI-aanbieders op de Nederlandse markt, waar elk type goed in is, en hoe je weet welke je nodig hebt.",
            },
            question: "Waar vind ik AI-consultants voor de Nederlandse markt?",
            lead: "Googelen op AI consultant Nederland levert een zee van aanbieders op die allemaal hetzelfde beloven. Het aanbod is het probleem geworden.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "De Nederlandse markt kent grofweg vier soorten AI-aanbieders:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "IT-bedrijven die systemen bouwen",
                        "marketing- en communicatiebureaus met AI als extra dienst",
                        "zelfstandige AI-specialisten",
                        "AI-adoptiebureaus die je organisatie leren zelf met AI te werken",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Wat voor aanbieder je nodig hebt hangt af van wat er over een jaar moet staan: software, of kennis en vaardigheden bij je eigen mensen.",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "IT-bedrijven zijn de juiste keuze als je precies weet wat er gebouwd moet worden en alleen nog handen zoekt. Ze zijn niet de juiste eerste stap als je nog niet weet wélk probleem je oplost: dan bouwen ze wat je vraagt, ook als je het verkeerde vraagt.",
                        "Bureaus met AI als bijvak zijn prima voor één campagne of een advies over welk programma je moet nemen, maar te dun als het over je processen, je gegevens of je mensen gaat.",
                        "Zelfstandige specialisten zijn snel en betaalbaar voor een afgebakende klus. Vraag je wel af: wat gebeurt er met je nieuwe systeem als ze naar de volgende klant gaan?",
                        "Adoptiebureaus beginnen bij je eigen organisatie. Wat lever je precies, hoe werken de interne processen, waar zit de potentiële meerwaarde van AI voor jouw organisatie? De techniek komt pas op de tweede plaats. Dat is de categorie waar The Only Constant in zit: wij helpen Nederlandse bedrijven met afgebakende AI-projecten en dragen de kennis altijd over aan de eigen mensen.",
                    ],
                },
            ],
            closing:
                "Weet je nog niet welk type aanbieder bij je past? De gratis AI EHBO wijst je in een korte chat de goede richting. Compleet met plan van aanpak voor de korte termijn.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-implementatie-mkb",
            slug: "ai-implementatie-mkb",
            cluster: "Wie kan me helpen",
            meta: {
                title: "AI-implementatie voor het MKB: wie biedt het aan - The Only Constant",
                description:
                    "Vier kenmerken die AI-implementatie voor het MKB onderscheiden van een programma dat voor grote bedrijven is gemaakt.",
            },
            question: "Welke bedrijven bieden AI-implementatie voor het MKB?",
            lead: "De meeste AI-bureaus zijn ingericht op grote bedrijven: stuurgroepen, meerjarenplannen en dagtarieven die passen bij een bank. Jij hebt veertig man, een vol orderboek en geen tijd voor fase één van zeven.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "AI-implementatie die bij het MKB past, herken je aan vier dingen:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "een vaste prijs vooraf",
                        "een doorlooptijd in weken",
                        "oplossingen op basis van software die je grotendeels al hebt",
                        "kennisoverdracht aan je eigen mensen als vast onderdeel van de klus",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Elk bureau dat dit biedt is een serieuze kandidaat. Elk bureau dat opent met een contract en een meerjarenplan is voor een ander soort klant.",
                },
                {
                    kind: "paragraph",
                    text: "Waarom deze vier? Een vaste prijs dwingt de aanbieder tot een kleine, scherpe en goed afgebakende opdracht, en een kleine opdracht is precies wat een eerste AI-project nodig heeft. Weken in plaats van maanden betekent dat je razendsnel weet of je AI-project iets oplevert. Bestaande software als startpunt, omdat de eenvoudigste oplossing die werkt bijna altijd de goedkoopste is. En kennisoverdracht bepaalt of je straks zelf vooruit kunt, of dat je voor elke aanpassing terug moet naar de leverancier. Gezien de snelheid waarmee AI alles verandert is dit belangrijker dan ooit.",
                },
                {
                    kind: "paragraph",
                    text: "The Only Constant is volgens deze vier punten ingericht. Een eerste project is bij ons kort en compact, meestal een kwestie van weken. Daarna heb je een helder beeld van wat het oplevert en kun je besluiten of je de adoptie van AI structureler wilt aanpakken.",
                },
            ],
            closing:
                "Benieuwd welk eerste project bij jou het meeste oplevert? Dat ontdek je in een paar minuten met de gratis AI EHBO.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-integreren-zonder-technische-kennis",
            slug: "ai-integreren-zonder-technische-kennis",
            cluster: "Hoe begin ik",
            meta: {
                title: "AI integreren zonder technische kennis - The Only Constant",
                description:
                    "Je hebt geen data scientist nodig om met AI te beginnen. Wel drie andere dingen, en de techniek komt als laatste.",
            },
            question: "Hoe kan mijn bedrijf AI integreren zonder technische kennis?",
            lead: "Je hebt geen echte IT-afdeling, geen data scientist, en als iemand API zegt knikt iedereen wijselijk om daarna snel weg te kijken. Ondertussen wil de directie wél iets met AI.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Technische kennis heb je voor de start niet nodig. Wel deze drie dingen:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "zicht op waar je mensen al stilletjes ChatGPT gebruiken",
                        "één A4 met het probleem dat je gaat oplossen",
                        "een directie die daar ruimte voor geeft",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "De techniek zelf is bij de start bijna altijd een bestaand abonnement.",
                },
                {
                    kind: "paragraph",
                    text: "Begin bij het stille gebruik, de shadow AI. In vrijwel elk bedrijf gebruiken de beste mensen allang ChatGPT of Claude op een privéaccount, voor mails, samenvattingen en offerteteksten. Zie dat als kompas: zij hebben het onderzoek al voor je gedaan en wijzen precies aan waar het werk stroef loopt. Vraag ernaar zonder te veroordelen, zelfs als het niet mag, anders vertelt niemand wat ze doen, wat werkt en wat niet. Zet op een rij wie wat gebruikt en waarvoor. Dat lijstje is meteen je longlist met eerste projecten.",
                },
                {
                    kind: "paragraph",
                    text: "Dan een project-A4. Daarop staat: welk probleem we oplossen, hoe het proces nu in elkaar zit, in welk team het proces plaatsvindt, wie beslist of het doorgaat, en aan welke KPI's we zien of de nieuwe oplossing werkt. Past het niet op één A4, dan is je plan te groot. Maak het kleiner. Dit kost een middag en geen regel code.",
                },
                {
                    kind: "paragraph",
                    text: "Techniek als laatste. Negen van de tien AI-initiatieven draaien om het begrijpen van je eigen processen. Heb je dat helder, dan is de techniek, zeker bij je eerste projecten, heel overzichtelijk.",
                },
            ],
            closing:
                "Wil je zeker weten dat de basis staat voordat je begint? De gratis AI Readiness Scan checkt het in vijf minuten en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "hoe-start-je-met-ai-adoptie",
            slug: "hoe-start-je-met-ai-adoptie",
            cluster: "Hoe begin ik",
            meta: {
                title: "Hoe start je met AI-adoptie in het MKB - The Only Constant",
                description:
                    "Eén proces, vier weken. Een concrete manier om met AI-adoptie te beginnen die je binnen een maand vertelt of het werkt.",
            },
            question: "Hoe start je met AI-adoptie in een MKB-bedrijf?",
            lead: "Al je concurrenten doen al iets met AI, en bij jou komt het er maar niet van. Hoe doorbreek je dat?",
            blocks: [
                { kind: "paragraph", text: "Begin met één proces en vier weken:" },
                {
                    kind: "list",
                    ordered: false,
                    items: [
                        "Week één: kijk mee op de werkvloer en kies een taak die dagelijks veel tijd kost. Beschrijf het proces as-is en waar de bottlenecks zitten.",
                        "Week twee: beschrijf hoe de taak efficiënter kan worden uitgevoerd. Wees zo gedetailleerd mogelijk. Stel heldere KPI's vast en bouw daarna, met een partner, de eenvoudigste versie.",
                        "Week drie en vier: laat het team ermee werken en check of de KPI's gehaald worden.",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Daarna weet je of de AI-implementatie werkt, hoe snel je organisatie kan veranderen en waar de weerstand zit. Dat is al meer dan de meeste AI-programma's na achttien maanden kunnen zeggen.",
                },
                {
                    kind: "paragraph",
                    text: "Het meekijken is de stap die vrijwel iedereen overslaat en die het meeste inzicht oplevert. Ga twintig minuten naast iemand zitten en laat ze hardop vertellen wat ze doen. Je ziet dan dingen die in geen enkel handboek staan: het Excelletje ernaast, het kopiëren tussen twee systemen, de vijf minuten zoeken voor elke mail die de deur uit gaat. Dat meekijken doe je niet voor de gezelligheid: wat je daar ziet bepaalt welk proces je kiest.",
                },
                {
                    kind: "paragraph",
                    text: "Twee waarschuwingen uit de praktijk. Spreek voordat je gaat bouwen KPI's af, bijvoorbeeld de doorlooptijd van een offerte of hoe snel een klant antwoord krijgt. Zonder die afspraak is elke uitkomst achteraf wel aardig, en leert niemand iets. Tot slot, laat werk dat eigenlijk niet zou moeten bestaan met rust: AI maakt een slecht proces alleen maar sneller. Niet beter.",
                },
                {
                    kind: "paragraph",
                    text: "Werkt je oplossing na vier weken? Dan breid je uit en neemt je eigen team het over. Werkt het niet, dan heb je waarschijnlijk een heel goed idee waarom dat zo is.",
                },
            ],
            closing:
                "Wil je eerst zeker weten dat je organisatie er klaar voor is? De gratis AI Readiness Scan checkt in vijf minuten of je basis staat en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "wat-kost-ai-adoptie",
            slug: "wat-kost-ai-adoptie",
            cluster: "Wat kost het",
            meta: {
                title: "Wat kost AI-adoptie voor het MKB - The Only Constant",
                description:
                    "Drie niveaus van AI-investering, van een abonnement van 25 euro tot maatwerk, en op welk niveau je hoort te beginnen.",
            },
            question: "Wat kost AI-adoptie voor het MKB?",
            lead: "Je hoort bedragen die alle kanten op vliegen: van een paar tientjes per maand tot trajecten van een ton en meer. Logisch dat je er niet aan begint zonder duidelijkheid.",
            blocks: [
                { kind: "paragraph", text: "Reken op drie niveaus:" },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "kant-en-klare tools zoals ChatGPT of Claude: vanaf zo'n €25 per persoon per maand",
                        "je eigen kennis ontsluiten en eerste automations: 3 tot 5K, twee tot zes weken",
                        "maatwerk dat zelfstandig in je systemen werkt: the sky is the limit",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Negen van de tien MKB-bedrijven horen te beginnen op niveau één of twee. Veel aanbieders bieden je meteen niveau drie aan.",
                },
                { kind: "subheading", text: "Niveau 1" },
                {
                    kind: "paragraph",
                    text: "Bestaande tools (€25 tot €30 per persoon per maand). Sneller schrijven, samenvatten, zoeken, vertalen. ChatGPT, Claude of Copilot, plus goede training en één werksessie over wat wel en niet mag met bedrijfsgegevens. Zonder die training koop je vooral ruis. Klaar in dagen. Wie je hiervoor een bouwtraject aanbiedt, laat je betalen voor iets dat je in een middag zelf regelt.",
                },
                { kind: "subheading", text: "Niveau 2" },
                {
                    kind: "paragraph",
                    text: "Je kennis ontsluiten en eerste automations (3 tot 5K, twee tot zes weken). Voor bedrijven waar de waarde vastzit in documenten: contracten, handleidingen, oude offertes. Denk aan een handelsbedrijf waar de binnendienst voor elke offerte oude prijsafspraken bij elkaar zoekt uit mails en mappen. Een veilige koppeling tussen die documenten en een AI-model lost dat op: overzichtelijk bouwwerk, geen platform. Spreek ook hier vooraf de KPI's af, dan weet je na een paar weken wat het oplevert.",
                },
                { kind: "subheading", text: "Niveau 3" },
                {
                    kind: "paragraph",
                    text: "AI die werk uitvoert in je systemen (maatwerk). Een proces dat zelfstandig stappen uitvoert in meerdere systemen. Duurder én risicovoller, dus dit doe je pas als niveau één en twee hun geld al hebben opgebracht.",
                },
                {
                    kind: "paragraph",
                    text: "De volgorde is belangrijker dan het budget: het duurste mislukte AI-project van het MKB is niveau drie kopen terwijl het probleem op niveau één zat.",
                },
            ],
            closing:
                "Wil je weten op welk niveau jouw knelpunt zit voordat er een euro naar techniek gaat? De gratis AI EHBO zoekt het in een kort gesprek met je uit, en je krijgt er direct een eerste actie bij.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-voor-klantenservice",
            slug: "ai-voor-klantenservice",
            cluster: "Waarvoor kan ik AI inzetten",
            meta: {
                title: "Hoe zet je AI in voor klantenservice - The Only Constant",
                description:
                    "De drie klantenservicetaken waar AI echt loont, en waarom een chatbot op je mailbox bijna nooit het antwoord is.",
            },
            question: "Hoe zet ik AI in voor klantenservice?",
            lead: "De klant mailt om 9:02. Om 9:27 zoekt je medewerker nog in welke map het retourbeleid staat.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "AI werkt in klantenservice het best op drie taken:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "inkomende berichten sorteren en labelen",
                        "het juiste beleidsstuk of de vorige afspraak erbij zoeken",
                        "een conceptantwoord klaarzetten",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "De medewerker beslist, corrigeert en verstuurt. Met die rolverdeling krijgt de klant in minuten antwoord in plaats van in uren, zonder dat er ooit een ongecontroleerd bericht de deur uit gaat.",
                },
                {
                    kind: "paragraph",
                    text: "Begin met één afgebakend stuk klantcontact, bijvoorbeeld de eerste beoordeling van productklachten per mail. Zet op papier welke stap AI kan uitvoeren, welke de mens houdt en waar ze elkaar raken, en spreek vooraf de KPI's af: hoe snel de klant antwoord moet hebben en hoe tevreden die is. Meet die twee vooraf en achteraf.",
                },
                {
                    kind: "paragraph",
                    text: "Een chatbot gekoppeld aan een mailbox is bijna nooit het antwoord; het knelpunt zit vrijwel altijd in het opzoeken, sorteren en terugvinden van wat er de vorige keer is afgesproken.",
                },
                {
                    kind: "paragraph",
                    text: "Voor kennis die leeft in documenten volstaat meestal een koppeling tussen die documenten en een AI-model: een week of wat bouwwerk, geen groot maatwerktraject. Bouw de simpelste versie die kan en laat juist je sceptische medewerkers er vier weken echt mee werken. Zij vinden de fouten die je enthousiaste mensen missen. En vraag je medewerkers wat ze ervan vinden, want als zij het niet gebruiken zeggen de cijfers niks.",
                },
            ],
            closing:
                "Waar zit in jouw klantcontact de grootste tijdvreter? De gratis AI EHBO spoort hem in een kort gesprek op, en je krijgt er direct een eerste actie bij.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-voor-marketing-en-administratie",
            slug: "ai-voor-marketing-en-administratie",
            cluster: "Waarvoor kan ik AI inzetten",
            meta: {
                title: "Hoe zet je AI in voor marketing of administratie - The Only Constant",
                description:
                    "Waar AI loont in marketing en administratie: bij het voorbereiden van werk, met een mens op de eindcontrole.",
            },
            question: "Hoe zet ik AI in voor marketing of administratie?",
            lead: "Een offerte zou in een uur klaar kunnen zijn, als de juiste cijfers, het vorige voorstel en de actuele prijzen niet over vijf verschillende systemen waren verspreid.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "In marketing en administratie levert AI veel op bij de voorbereiding van werk:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "conceptteksten schrijven voor vier kanalen uit één campagne-idee",
                        "een conceptofferte maken inclusief een verwijzing naar de brongegevens",
                        "inkomende facturen die worden herkend, geanalyseerd en waar mogelijk aangevuld voor je boekhoudsysteem",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "In al deze processen houdt idealiter een mens de eindcontrole, zodat er niets ongezien naar je klant of de boekhouding gaat.",
                },
                { kind: "subheading", text: "Hoe pak je dat aan" },
                {
                    kind: "paragraph",
                    text: "Kies één taak waar het dagelijks wringt en zet op papier welke stap AI kan doen en welke stap de mens moet blijven doen. Die procesbeschrijving zorgt voor een scherp inzicht in hoe iets precies werkt. Je zult zien dat zo'n systeembeschrijving veel inzicht geeft in wat en hoe te automatiseren. Het gevolg: de AI schrijft de conceptofferte in minuten en zet de bronnen erbij; jij controleert, past aan en geeft akkoord. Of: AI schrijft de campagnetekst voor LinkedIn, mail en site op basis van het oorspronkelijke campagne-idee en de huisstijlregels; de marketeer bewaakt de boodschap. Een laatste voorbeeld: AI leest inkomende facturen, corrigeert waar mogelijk, vraagt om extra info waar nodig, en zet ze klaar waarna de administratie inboekt. Die verdeling op papier, de procesbeschrijving, is belangrijker dan welk programma je kiest, want in het proces leg je vast waar de controle zit. Voor persoonlijk werk zoals mails, verslagen en samenvattingen volstaat een simpel AI-abonnement en is elk maatwerk meestal zonde van je geld.",
                },
                {
                    kind: "paragraph",
                    text: "Laat het systeem vier weken draaien en spreek vooraf de KPI's af, bijvoorbeeld de doorlooptijd van een offerte. Gaat het sneller zonder dat de kwaliteit slechter wordt, dan breid je uit. Zo niet, dan weet je precies waar het wringt, en ook dat is winst.",
                },
            ],
            closing:
                "Benieuwd of jouw grootste tijdvreter in de offertes, de facturen of ergens anders zit? De gratis AI EHBO brengt het in een kort gesprek in kaart, met een eerste actie voor deze week erbij.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-en-bedrijfsgegevens",
            slug: "ai-en-bedrijfsgegevens",
            cluster: "Is het veilig",
            meta: {
                title: "Is het veilig om AI te gebruiken met bedrijfsgegevens - The Only Constant",
                description:
                    "Scheid het gereedschap van de gegevens en de veiligheidsvraag wordt behapbaar. Drie categorieën, één werksessie, één A4 met regels.",
            },
            question: "Is het veilig om AI te gebruiken met bedrijfsgegevens?",
            lead: "Iemand op kantoor plakt een klantcontract in ChatGPT om er snel een samenvatting uit te halen, en jij vraagt je af of daar net gegevens zijn gedeeld die de deur nooit uit hadden gemogen.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Ja, je kunt AI veilig inzetten op bedrijfsgegevens, mits je twee dingen scheidt: welk gereedschap je gebruikt, en welke gegevens erin mogen. Een zakelijk abonnement (ChatGPT Enterprise, Claude for Work, Copilot in je eigen omgeving) traint niet op wat je invoert; een gratis privéaccount doet dat vaak wel. De grootste lekken ontstaan waar mensen zonder afspraak de handigste route kiezen.",
                },
                {
                    kind: "paragraph",
                    text: "Regel de basis in één werksessie. Leg vast welke categorie gegevens waar wel en niet in mag:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "openbare tekst: overal",
                        "interne stukken: alleen in de zakelijke omgeving",
                        "gevoelige persoons- of klantdata: voorlopig nergens buiten je eigen systemen",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Zet de regels op één A4 en plak ze op de koffieautomaat. Die ene afspraak weegt zwaarder dan een dure technische maatregel, want het stuurt het gedrag waar de meeste risico's zitten. Voor wie verder wil: koppel een AI-model aan je eigen documenten in plaats van er stukken in te plakken. Dan blijft de data binnen een afgeschermde omgeving en zie je terug welke bron het antwoord voedt. Dat is meestal een overzichtelijke koppeling van een paar weken, geen groot beveiligingsproject.",
                },
                {
                    kind: "paragraph",
                    text: "En de AI Act? De meeste alledaagse toepassingen, zoals samenvatten, sorteren en concepten schrijven, vallen niet in de zwaarste categorie. Maar het is de toepassing die telt, niet de handeling: zodra AI meeweegt in beslissingen over mensen, verandert het plaatje. Beoordeel dus per gebruikssituatie, niet per tool.",
                },
            ],
            closing:
                "Wil je weten waar bij jou het echte risico zit en waar niet? De gratis AI Readiness Scan checkt onder meer je datahuishouding en je shadow AI, en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "team-meekrijgen-met-ai",
            slug: "team-meekrijgen-met-ai",
            cluster: "Krijg ik mijn mensen mee",
            meta: {
                title: "Hoe krijg ik mijn team mee met AI - The Only Constant",
                description:
                    "Mensen omarmen een hulpmiddel dat een vervelende klus wegneemt. Begin bij wat hen tijd kost, niet bij wat AI kan.",
            },
            question: "Hoe krijg ik mijn team mee met AI?",
            lead: "Je koopt licenties, regelt een training, en drie weken later gebruikt de helft geen AI meer. De techniek stond klaar, de mensen niet.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Je krijgt een team mee door samen in kaart te brengen wat hen dagelijks tijd of energie kost. Wat AI allemaal kan, komt later wel. Mensen omarmen een hulpmiddel dat een vervelende klus wegneemt; voor iets dat van bovenaf wordt opgelegd geldt dat zelden. Kies daarom één taak waar je mensen zelf over klagen, los het probleem samen op en laat het resultaat het overtuigen. Eén zichtbaar succes op de werkvloer beweegt meer collega's dan tien presentaties over de toekomst.",
                },
                {
                    kind: "paragraph",
                    text: "Begin bij de mensen die AI al onder de radar gebruiken, het schaduwgebruik. In vrijwel elk team gebruiken een paar koplopers AI allang op een privéaccount. Maak van hen je gidsen: laat ze in een half uur aan de rest zien wat ze doen en wat het ze oplevert. Dat werkt fantastisch omdat het voorbeeld uit hun eigen wereld komt en over hun eigen werk gaat.",
                },
                {
                    kind: "paragraph",
                    text: "De weerstand die overblijft is meestal een eerlijke vraag die eronder schuilt: word ik stapje voor stapje overbodig? Wees daar open over. In de projecten die wij begeleiden neemt AI eigenlijk nooit een baan over, wel het saaie deel ervan: het sorteren, het opzoeken, het verzamelen, het maken van het eerste concept. De planner bepaalt nog steeds de route, de verkoper voert nog steeds het gesprek. Benoem dat hardop, want het onuitgesproken deel is wat mensen tegenhoudt.",
                },
                {
                    kind: "paragraph",
                    text: "Vergeet niet regelmatig te vragen wat ze van de nieuwe oplossingen vinden. De KPI's laten zien óf iets sneller gaat; waarom mensen het wel of niet blijven gebruiken, hoor je alleen als je het vraagt. Juist de sceptici wijzen de zwakke plekken aan die je enthousiaste mensen over het hoofd zien.",
                },
            ],
            closing:
                "Zit de rem bij jou op de techniek of bij de mensen? De gratis AI Readiness Scan checkt onder meer je sponsor, je middenmanagement en het gedeelde verhaal, en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "waarom-mislukken-ai-projecten",
            slug: "waarom-mislukken-ai-projecten",
            cluster: "Werkt het echt",
            meta: {
                title: "Waarom mislukken AI-projecten in het MKB - The Only Constant",
                description:
                    "Drie redenen waarom AI-projecten stranden: te groot begonnen, geen KPI's vooraf, en de kennis bleef bij de leverancier.",
            },
            question: "Waarom mislukken AI-projecten in het MKB?",
            lead: "Het bedrijf verderop kocht vorig jaar een AI-platform. Er kwam een projectgroep, er kwamen licenties, en er is een jaar later nog niets dat iemand er dagelijks gebruikt.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "De meeste AI-projecten in het MKB stranden op drie dingen:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "er is te groot begonnen",
                        "er zijn vooraf geen KPI's afgesproken",
                        "de kennis bleef bij een externe partij in plaats van bij het eigen team",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Een project dat klein start, een heldere, meetbare doelstelling heeft en zijn kennis achterlaat, mislukt zelden helemaal. Hooguit levert het minder op dan gehoopt, en dat weet je dan binnen weken.",
                },
                {
                    kind: "paragraph",
                    text: "Te groot begonnen komt het meest voor. Een programma van achttien maanden met een routekaart in zeven fases klinkt degelijk, maar je weet pas over anderhalf jaar of het iets waard was. Een project van vier weken op één proces vertelt het je nu. Snijd het plan terug zodat het op één A4 past; wat niet past, bewaar je voor later.",
                },
                {
                    kind: "paragraph",
                    text: "De tweede fout zien we echt overal: geen KPI's vooraf. Zonder een getal dat je van tevoren vastlegt (denk aan de doorlooptijd van een offerte of hoe snel een klant antwoord krijgt) is elke uitkomst achteraf wel ergens goed voor. Dan praat iedereen het project mooi en leert niemand iets. Spreek dus vóór de start af wat beter moet worden, en meet hetzelfde aan het eind.",
                },
                {
                    kind: "paragraph",
                    text: "Het derde punt is op termijn het duurst: kennis die bij de leverancier blijft. Werkt het, maar kun je niets aanpassen zonder de bouwer te bellen, dan heb je een abonnement op afhankelijkheid gekocht. Die club raak je niet meer kwijt. Zorg dat je eigen mensen de aanpak snappen en zelf gaan innoveren. Dat is het verschil tussen een project dat blijft leven en een dat stilvalt zodra de factuur betaald is.",
                },
            ],
            closing:
                "Wil je van tevoren weten waar bij jou het grootste risico zit? De gratis AI EHBO legt het in een kort gesprek bloot, en je krijgt er direct een eerste actie bij.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "ai-voor-installatiebedrijven",
            slug: "ai-voor-installatiebedrijven",
            cluster: "Voor mijn sector",
            meta: {
                title: "AI voor een installatie- of technisch bedrijf - The Only Constant",
                description:
                    "In de technische dienstverlening zit de AI-winst in het opzoeken en administreren, niet in het werk op locatie.",
            },
            question: "Hoe zet ik AI in voor een installatie- of technisch bedrijf?",
            lead: "Een servicemonteur staat bij de klant, komt een type ketel tegen dat hij al twee jaar niet heeft gezien en belt de binnendienst voor iets dat ergens in het handboek staat. En dat vijf keer per dag, verspreid over het hele team.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "In een installatie- of technisch bedrijf zit de grootste AI-winst in het opzoeken en administreren van het werk, minder in het uitvoeren van het werk op locatie zelf. De kennis van je bedrijf zit vast in handleidingen, oude werkbonnen en het hoofd van je ervaren monteurs.",
                },
                {
                    kind: "paragraph",
                    text: "Een AI-model dat die documenten doorzoekbaar maakt, geeft de monteur in het veld binnen seconden het juiste antwoord. Een dergelijk systeem staat meestal binnen een paar weken.",
                },
                { kind: "paragraph", text: "Drie plekken waar het dagelijks wringt:" },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "de monteur die informatie zoekt die al bestaat: een doorzoekbare kennisbank op je eigen documenten scheelt het bellen",
                        "de offerte die blijft liggen omdat de juiste prijzen en het vorige voorstel in verschillende systemen staan: AI zet een concept klaar met de bronnen erbij, jij controleert en tekent",
                        "de werkbonnen die 's avonds nog uitgetypt moeten worden: van een paar gesproken zinnen maakt AI een net verslag, de monteur hoeft alleen nog maar te controleren",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Belangrijk voor het vak: laat AI het opzoeken en voorbereiden doen, maar nooit de beslissing over de veiligheid of de installatie zelf nemen. De vakman is en blijft de vakman.",
                },
                {
                    kind: "paragraph",
                    text: "Kortom: begin met de kennisbank, want die raakt elke monteur elke dag, en spreek één simpele KPI af: hoeveel belletjes naar de binnendienst verdwijnen er in de eerste maand. En vraag je monteurs of ze het antwoord vertrouwen, want als zij het niet gebruiken, telt geen enkele KPI.",
                },
            ],
            closing:
                "Waar lekt bij jullie de meeste tijd weg, in het veld of op kantoor? De gratis AI EHBO zoekt het in een korte chat met je uit, en je krijgt er direct een eerste actie bij.",
            cta: { label: "Start de gratis AI EHBO", href: EHBO_HREF },
        },
        {
            key: "is-ai-betrouwbaar",
            slug: "is-ai-betrouwbaar",
            cluster: "Betrouwbaarheid",
            meta: {
                title: "Is AI betrouwbaar? - The Only Constant",
                description:
                    "AI is betrouwbaar voor werk dat je nakijkt en onbetrouwbaar voor werk dat je blind wegstuurt. Wat dat in de praktijk betekent.",
            },
            question: "Is AI betrouwbaar?",
            lead: "Doe de test: vraag ChatGPT wat jouw bedrijf doet en voor wie. Het antwoord leest soepel, klinkt overtuigend, en er zit vrijwel zeker iets in dat niet klopt. Een dienst die je niet levert, een vestiging die je nooit had, een oprichtingsjaar dat nergens op slaat.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Dat is AI-betrouwbaarheid in het klein: betrouwbaar voor werk dat je nakijkt, onbetrouwbaar voor werk dat je blind wegstuurt. Een taalmodel voorspelt het volgende woord op basis van patronen. Het weet niet wat waar is, maar kan het antwoord wel heel lekker opschrijven. Daarom klinken fouten net zo zelfverzekerd als de rest van het antwoord. Dat is het echte risico: een fout die eruitziet als een feit.",
                },
                {
                    kind: "paragraph",
                    text: "Hoe duur dat kan worden, liet Air Canada zien. Hun chatbot vertelde in 2024 een passagier dat hij een rouwtarief achteraf kon aanvragen. Dat kon helemaal niet, en de rechter oordeelde dat de luchtvaartmaatschappij gewoon moest betalen: een bedrijf is aansprakelijk voor wat zijn chatbot zegt. Het verweer dat de chatbot een aparte entiteit was, haalde het niet. Voor jou betekent dat: wat jouw AI naar een klant stuurt, is jouw belofte.",
                },
                { kind: "subheading", text: "Hoe voorkom je hallucinaties?" },
                {
                    kind: "paragraph",
                    text: "De werkende ingreep is organisatorisch, geen techniek: zet een mens op de plek waar het werk de deur uit gaat. Daarnaast drie dingen die je vandaag kunt regelen:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "geef het model je eigen bronnen: een AI die uit je tarievenlijst en je klantdossier put, verzint minder dan een AI die uit zijn geheugen praat",
                        "vraag om onzekerheid: laat het model markeren wat het niet zeker weet, met een tag als [VERIFIEER]; dat is één regel in je instructie en zorgt voor controle op de juiste plek",
                        "check feiten, geen taal: namen, bedragen, aantallen en datums zijn waar het misgaat, de formulering is meestal prima. Zeker in combinatie met een duidelijk tone-of-voicedocument",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Voor taken waar een fout geld of vertrouwen kost, bouw je een harde stop in: geen offerte de deur uit zonder een menselijke blik, geen bedragen uit een model dat je prijslijst niet kent. Dat is dezelfde afspraak die je met een nieuwe collega maakt, en dat noemt niemand wantrouwen.",
                },
                {
                    kind: "paragraph",
                    text: "En die test van hierboven? Alles wat het model over je bedrijf verzon, zijn de gaten die jij nog niet hebt gevuld. Intern werkt het precies zo: hoe beter je eigen informatie op orde is, hoe minder er te verzinnen valt. Wij bouwen daarom zo: één proces, vier weken, en de controle blijft bij de mensen die het werk kennen.",
                },
            ],
            closing:
                "Wil je weten of jouw organisatie die controle heeft staan? De gratis AI Readiness Scan checkt onder meer je beslisstructuur en je faalruimte, en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
        {
            key: "custom-gpt-bouwen",
            slug: "custom-gpt-bouwen",
            cluster: "Zelf bouwen",
            meta: {
                title: "Hoe bouw je een custom GPT (en wanneer niet) - The Only Constant",
                description:
                    "Een custom GPT bouw je in een half uur. Weten wanneer het níét het antwoord is, scheelt je een stuk meer.",
            },
            question: "Hoe bouw je een custom GPT (en wanneer is dat niet het antwoord)?",
            lead: "Hoe bouw je een GPT is een vraag die op elke kennissessie gesteld wordt. Bijna altijd zit er een andere vraag onder: dit werk kost me te veel tijd en ik wil dat iemand het overneemt.",
            blocks: [
                {
                    kind: "paragraph",
                    text: "Een custom GPT bouw je met een beetje aandacht in een half uur:",
                },
                {
                    kind: "list",
                    ordered: true,
                    items: [
                        "open ChatGPT en kies Create a GPT",
                        "beschrijf in gewone taal wat het ding moet doen, en net zo belangrijk: wat niet",
                        "upload de documenten waaruit het mag putten",
                    ],
                },
                {
                    kind: "paragraph",
                    text: "Geen code. De kwaliteit zit in twee dingen: hoe scherp je instructie is, en hoe goed het materiaal is dat je meegeeft.",
                },
                {
                    kind: "paragraph",
                    text: "Dat tweede is waar het meestal misgaat. Een GPT die je hele afdelingsschijf meekrijgt, geeft antwoorden uit verouderde bestanden met evenveel overtuiging als uit de goede. Drie kloppende, actuele documenten leveren een betere assistent op dan tweehonderd bestanden waarvan de helft achterhaald is. Ruim eerst op, bouw daarna.",
                },
                {
                    kind: "paragraph",
                    text: "Wanneer een custom GPT een goed idee is: de taak is in essentie een conversatie, en de custom GPT is een gespecialiseerde (lees: begrensde) chatbot. Concreter: de gebruiker stelt een vraag en krijgt een antwoord of een concepttekst terug. Denk aan een schrijfassistent die je tone of voice en templates kent, of een vraagbaak op je eigen personeelshandboek.",
                },
                {
                    kind: "paragraph",
                    text: "Een GPT is geen oplossing als de taak autonoom moet worden uitgevoerd. Een GPT wacht tot iemand hem opent. Zodra het antwoord in een ander systeem moet landen, elke ochtend moet draaien, of gegevens moet ophalen uit je boekhouding of je orderpakket, houdt het op. Dan zoek je een automatisering die aan je systemen hangt. Dat is een ander soort project, en het ontwikkelen hoeft niet complex te zijn maar kost altijd meer dan het bouwen van een GPT.",
                },
                {
                    kind: "paragraph",
                    text: "Die tweedeling gaat over begrip van de mogelijkheden van AI. Wie vraagt hoe hij een GPT bouwt om orderbevestigingen aan zijn boekhouding te koppelen, heeft geen GPT nodig maar een uitgebreider systeem.",
                },
                {
                    kind: "paragraph",
                    text: "Begin met een GPT als je wilt leren hoe AI-modellen zich gedragen. Het kost een half uur, het levert direct iets bruikbaars op, en je ontdekt binnen een week waar het werk echt vastzit. Die ontdekking is meer waard dan de GPT zelf.",
                },
            ],
            closing:
                "Wil je weten of jouw organisatie klaar is voor de stap erna? De gratis AI Readiness Scan checkt onder meer je data en je sponsor, en stuurt je een plan van aanpak.",
            cta: { label: "Doe de gratis Readiness Scan", href: SCAN_HREF },
        },
    ] satisfies AnswerPage[],
};

export const vragenContent: Record<Locale, typeof en> = { en, nl };

/**
 * The answers index, per locale. The Dutch site keeps the path it has always
 * had; the English site gets an English one, because a Dutch word in the URL is
 * the part of an English page a search engine cannot read.
 */
export const ANSWERS_BASE_PATH: Record<Locale, string> = {
    nl: "/vragen",
    en: "/questions",
};

/** The full path to one answer, in one locale. */
export function answerPath(lang: Locale, slug: string): string {
    return `${ANSWERS_BASE_PATH[lang]}/${slug}`;
}

/**
 * Every ({lang, slug}) pair that has a page.
 *
 * Not one list reused for both locales: the slugs differ per language now, so a
 * shared list would prerender half the site under paths that do not exist.
 */
export function getAnswerParams(): { lang: Locale; slug: string }[] {
    return (Object.keys(vragenContent) as Locale[]).flatMap((lang) =>
        vragenContent[lang].pages.map((page) => ({ lang, slug: page.slug })),
    );
}

/** The path to one answer in every locale, for hreflang and canonical. */
export function getAnswerPaths(key: string): Record<Locale, string> | null {
    const paths = {} as Record<Locale, string>;

    for (const lang of Object.keys(vragenContent) as Locale[]) {
        const page = vragenContent[lang].pages.find((p) => p.key === key);
        if (!page) return null;
        paths[lang] = answerPath(lang, page.slug);
    }

    return paths;
}

/**
 * Look up an answer by the slug in its URL, within one locale. Deliberately no
 * cross-locale fallback: a miss in Dutch is a Dutch 404, not a licence to serve
 * the English text under a Dutch URL.
 */
export function getAnswerPage(lang: Locale, slug: string): AnswerPage | null {
    return vragenContent[lang].pages.find((page) => page.slug === slug) ?? null;
}
