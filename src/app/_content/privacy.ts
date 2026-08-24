import type { Locale } from "@/lib/i18n/config";
import type { ProseBlock } from "@/components/sections/ProseSection";

/**
 * The privacy statement, at /nl/privacy and /en/privacy.
 *
 * The Dutch text is Maarten's draft of 24-08-2026 and is the legally leading
 * version; the English text translates it and follows it on every revision.
 * Swap the whole body when his final version lands — do not patch sentences,
 * or the two languages drift apart on a legal page.
 *
 * EXCEPTIONS to that swap — passages that describe what the site factually
 * does, verified in this repo's code, not Maarten's legal choices. They must
 * survive the swap: put them back after replacing his body, and do not
 * reword them without re-verifying the facts.
 *
 * 1. The "Kaarten en de agenda" / "Maps and the appointment calendar"
 *    subsection. Measured: zero requests to Google from /contact on refusal,
 *    26 to six Google hosts from the booking page, no cookies from either.
 *    If the calendar later goes behind the gate too, only its last sentence
 *    changes.
 * 2. The tools passage. No form asks for a phone number (ToolContactForm:
 *    email/name/company; AiActLeadForm adds role). The AI EHBO and the
 *    Readiness Scan are conversations (ToolChat); the AI Act Check is a
 *    fixed-choice wizard whose answers are stored, and its required
 *    checkbox is stored as consent_marketing, so approach after that tool
 *    rests on consent (art. 6(1)(a)), the other two on legitimate interest.
 *
 * The date in hero.updated is the publication date, not the build date: set it
 * by hand on the day the page actually goes live, together with the cookie
 * banner. The cookie paragraph assumes the banner exists.
 */

/** One processor in the "who we share with" table. */
export interface PrivacyProcessorRow {
    name: string;
    purpose: string;
    region: string;
}

interface PrivacyContent {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        updated: string;
        lead: string;
    };
    beforeProcessors: ProseBlock[];
    processors: PrivacyProcessorRow[];
    afterProcessors: ProseBlock[];
}

const en: PrivacyContent = {
    meta: {
        title: "Privacy statement | The Only Constant",
        description:
            "Which personal data The Only Constant processes, why, how long we keep it and what rights you have.",
    },
    hero: {
        title: "Privacy statement",
        updated: "Last updated: 24 August 2026",
        lead: "The Only Constant B.V. processes personal data of visitors to this website. This statement explains which data that is, why we process it, how long we keep it and what rights you have.",
    },
    beforeProcessors: [
        { kind: "subheading", text: "Who we are" },
        {
            kind: "paragraph",
            text: "The Only Constant B.V., Surinameplein 1 HS, 1058 GL Amsterdam. Chamber of Commerce (KVK) 91800528, VAT NL865775230B01.",
        },
        {
            kind: "paragraph",
            text: "Questions about your data: maarten@theonlyconstant.nl.",
        },
        { kind: "subheading", text: "Which data we process, and why" },
        { kind: "subheading", text: "If you use one of our tools", level: 3 },
        {
            kind: "paragraph",
            text: "This site offers three free tools: the AI First Aid, the AI Readiness Scan and the AI Act Check. What you enter there, we process in order to give you the result.",
        },
        {
            kind: "paragraph",
            text: "What you fill in yourself: your name, email address, company name and role, insofar as a tool asks for them and you provide them. Only the email address is needed to send you the result; the rest is optional.",
        },
        {
            kind: "paragraph",
            text: "What you type in the conversation: the AI First Aid and the AI Readiness Scan work through a conversation. What you write there about your organisation and your question, we store, together with the assessment that follows from it. Do not share confidential business information or other people's data in it.",
        },
        {
            kind: "paragraph",
            text: "The AI Act Check works differently: it is a questionnaire with fixed choices, without free text. Of that, we keep your answers and the outcome.",
        },
        {
            kind: "paragraph",
            text: "What for: to send you the requested report or advice, and to contact you if you ask us to. After the AI Act Check we only approach you if you ticked the box for that; we record that consent. If you use the AI First Aid or the AI Readiness Scan and leave your details, we may approach you about our services on the basis of our legitimate interest. You can always object to this; one email suffices.",
        },
        {
            kind: "paragraph",
            text: "Legal basis: performance of your request, your consent in the case of the AI Act Check, and our legitimate interest in business services (GDPR art. 6(1)(a), (b) and (f)).",
        },
        { kind: "subheading", text: "If you email or call us", level: 3 },
        {
            kind: "paragraph",
            text: "Then we process your contact details and the content of your message, to answer your question and to follow up on the contact.",
        },
        { kind: "subheading", text: "If you visit the site", level: 3 },
        {
            kind: "paragraph",
            text: "We measure how the site is used with Google Analytics, so that we know which pages work and which do not, and where visitors get stuck. For that we set cookies, but only if you consent to it. If you decline, we do not measure your visit.",
        },
        {
            kind: "paragraph",
            text: "You can change or withdraw your choice at any time via the cookie settings at the bottom of the site. Cookies that are strictly necessary for the site to work are always set; those do not collect data about your behaviour.",
        },
        { kind: "subheading", text: "Maps and the appointment calendar", level: 3 },
        {
            kind: "paragraph",
            text: "Our contact page shows a Google Maps map, and the booking page shows a Google calendar. These load from Google rather than from us: the moment they appear, Google receives your IP address, information about your browser, and the page you came from. They do not set cookies.",
        },
        {
            kind: "paragraph",
            text: "We only load the map if you have accepted cookies, or if you click to load it yourself. The calendar on the booking page loads straight away, because it is the service itself: you come to that page to make an appointment.",
        },
        { kind: "subheading", text: "Who we share your data with" },
        {
            kind: "paragraph",
            text: "We do not sell your data and do not share it with third parties for their own purposes. To make our site and tools work, we use the following service providers, who process your data exclusively on our instructions:",
        },
    ],
    processors: [
        {
            name: "Supabase",
            purpose: "storage of the data from the tools",
            region: "European Union",
        },
        {
            name: "Anthropic",
            purpose: "the AI model behind the conversations in the tools",
            region: "United States, with standard contractual clauses",
        },
        {
            name: "Resend",
            purpose: "sending the reports by email",
            region: "United States, with standard contractual clauses",
        },
        {
            name: "Google",
            purpose: "website statistics and our own office environment",
            region: "European Union and United States, with standard contractual clauses",
        },
        {
            name: "OpenAI",
            purpose: "supporting processing within our own systems",
            region: "United States, with standard contractual clauses",
        },
        {
            name: "n8n",
            purpose: "connections between our systems",
            region: "European Union",
        },
    ],
    afterProcessors: [
        {
            kind: "paragraph",
            text: "We have a data processing agreement with all of these parties. Where data is processed outside the European Economic Area, this happens on the basis of the standard contractual clauses of the European Commission.",
        },
        {
            kind: "paragraph",
            text: "We do not use your data to train AI models, and under our agreements with them our suppliers may not do so either.",
        },
        { kind: "subheading", text: "How long we keep your data" },
        {
            kind: "paragraph",
            text: "We keep data from the tools for at most two years after your last contact with us, unless a client relationship follows from it. In that case the retention periods of that engagement apply, and for the administration the statutory period of seven years.",
        },
        {
            kind: "paragraph",
            text: "If you ask for deletion, we do it sooner.",
        },
        { kind: "subheading", text: "Your rights" },
        {
            kind: "paragraph",
            text: "You have the right to access your data, to have it corrected or to have it deleted. You can also object to the processing or ask for your data to be transferred. Send an email to maarten@theonlyconstant.nl; we respond within a month.",
        },
        {
            kind: "paragraph",
            text: "If you disagree with how we handle your data, you can file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).",
        },
        { kind: "subheading", text: "Security" },
        {
            kind: "paragraph",
            text: "We take appropriate measures to protect your data: encrypted connections, access only for those who work on it, and accounts with two-factor authentication. If you suspect something is going wrong with your data, please let us know.",
        },
        { kind: "subheading", text: "Changes" },
        {
            kind: "paragraph",
            text: "We update this statement when our way of working changes. The date at the top indicates when that last happened.",
        },
    ],
};

const nl: PrivacyContent = {
    meta: {
        title: "Privacyverklaring | The Only Constant",
        description:
            "Welke persoonsgegevens The Only Constant verwerkt, waarom, hoe lang we ze bewaren en welke rechten je hebt.",
    },
    hero: {
        title: "Privacyverklaring",
        updated: "Laatst bijgewerkt: 24 augustus 2026",
        lead: "The Only Constant B.V. verwerkt persoonsgegevens van bezoekers van deze website. In deze verklaring staat welke gegevens dat zijn, waarom we ze verwerken, hoe lang we ze bewaren en welke rechten je hebt.",
    },
    beforeProcessors: [
        { kind: "subheading", text: "Wie wij zijn" },
        {
            kind: "paragraph",
            text: "The Only Constant B.V., Surinameplein 1 HS, 1058 GL Amsterdam. KVK 91800528, BTW NL865775230B01.",
        },
        {
            kind: "paragraph",
            text: "Vragen over je gegevens: maarten@theonlyconstant.nl.",
        },
        { kind: "subheading", text: "Welke gegevens wij verwerken, en waarom" },
        { kind: "subheading", text: "Als je een van onze tools gebruikt", level: 3 },
        {
            kind: "paragraph",
            text: "Op deze site staan drie gratis tools: de AI EHBO, de AI Readiness Scan en de AI Act Check. Wat je daarin invult, verwerken wij om je het resultaat te kunnen geven.",
        },
        {
            kind: "paragraph",
            text: "Wat je zelf invult: je naam, e-mailadres, bedrijfsnaam en functie, voor zover een tool erom vraagt en jij ze opgeeft. Alleen het e-mailadres is nodig om je het resultaat te sturen; de rest is optioneel.",
        },
        {
            kind: "paragraph",
            text: "Wat je in het gesprek typt: de AI EHBO en de AI Readiness Scan werken met een gesprek. Wat je daarin schrijft over je organisatie en je vraagstuk, slaan wij op, samen met de beoordeling die eruit volgt. Deel daarin geen vertrouwelijke bedrijfsinformatie en geen gegevens van anderen.",
        },
        {
            kind: "paragraph",
            text: "De AI Act Check werkt anders: dat is een vragenlijst met vaste keuzes, zonder vrije tekst. Daarvan bewaren wij je antwoorden en de uitkomst.",
        },
        {
            kind: "paragraph",
            text: "Waarvoor: om je het gevraagde rapport of advies te sturen, en om contact met je op te nemen als je daarom vraagt. Bij de AI Act Check benaderen we je daarna alleen als je daarvoor het vakje hebt aangevinkt; die toestemming leggen we vast. Gebruik je de AI EHBO of de AI Readiness Scan en laat je je gegevens achter, dan mogen we je op grond van ons gerechtvaardigd belang benaderen over onze dienstverlening. Je kunt daar altijd bezwaar tegen maken; één mail volstaat.",
        },
        {
            kind: "paragraph",
            text: "Grondslag: uitvoering van je verzoek, jouw toestemming bij de AI Act Check, en ons gerechtvaardigd belang bij zakelijke dienstverlening (AVG art. 6 lid 1 sub a, b en f).",
        },
        { kind: "subheading", text: "Als je ons mailt of belt", level: 3 },
        {
            kind: "paragraph",
            text: "Dan verwerken wij je contactgegevens en de inhoud van je bericht, om je vraag te beantwoorden en het contact te kunnen vervolgen.",
        },
        { kind: "subheading", text: "Als je de site bezoekt", level: 3 },
        {
            kind: "paragraph",
            text: "Wij meten hoe de site gebruikt wordt met Google Analytics, zodat we weten welke pagina's werken en welke niet en waar bezoekers vastlopen. Daarvoor plaatsen wij cookies, maar alleen als je daar toestemming voor geeft. Weiger je, dan meten wij je bezoek niet.",
        },
        {
            kind: "paragraph",
            text: "Je kunt je keuze op elk moment wijzigen of intrekken via de cookie-instellingen onderaan de site. Cookies die strikt nodig zijn om de site te laten werken, plaatsen wij altijd; die verzamelen geen gegevens over je gedrag.",
        },
        { kind: "subheading", text: "Kaarten en de agenda", level: 3 },
        {
            kind: "paragraph",
            text: "Op onze contactpagina staat een kaart van Google Maps, en op de boekingspagina een agenda van Google. Die laden bij Google en niet bij ons: op het moment dat ze verschijnen krijgt Google jouw IP-adres, gegevens over je browser, en de pagina waar je vandaan komt. Ze plaatsen geen cookies.",
        },
        {
            kind: "paragraph",
            text: "De kaart laden we alleen als je cookies hebt geaccepteerd, of als je er zelf op klikt om hem te laden. De agenda op de boekingspagina laadt meteen, omdat die de dienst zelf is: je komt op die pagina om een afspraak te maken.",
        },
        { kind: "subheading", text: "Met wie wij je gegevens delen" },
        {
            kind: "paragraph",
            text: "Wij verkopen je gegevens niet en delen ze niet met derden voor hun eigen doeleinden. Voor het laten werken van onze site en tools maken wij gebruik van de volgende dienstverleners, die je gegevens uitsluitend in onze opdracht verwerken:",
        },
    ],
    processors: [
        {
            name: "Supabase",
            purpose: "opslag van de gegevens uit de tools",
            region: "Europese Unie",
        },
        {
            name: "Anthropic",
            purpose: "het AI-model achter de gesprekken in de tools",
            region: "Verenigde Staten, met standaardcontractsbepalingen",
        },
        {
            name: "Resend",
            purpose: "het versturen van de rapporten per mail",
            region: "Verenigde Staten, met standaardcontractsbepalingen",
        },
        {
            name: "Google",
            purpose: "websitestatistieken en onze eigen kantooromgeving",
            region: "Europese Unie en Verenigde Staten, met standaardcontractsbepalingen",
        },
        {
            name: "OpenAI",
            purpose: "ondersteunende verwerking binnen onze eigen systemen",
            region: "Verenigde Staten, met standaardcontractsbepalingen",
        },
        {
            name: "n8n",
            purpose: "koppelingen tussen onze systemen",
            region: "Europese Unie",
        },
    ],
    afterProcessors: [
        {
            kind: "paragraph",
            text: "Met al deze partijen hebben wij een verwerkersovereenkomst. Waar gegevens buiten de Europese Economische Ruimte worden verwerkt, gebeurt dat op basis van de standaardcontractsbepalingen van de Europese Commissie.",
        },
        {
            kind: "paragraph",
            text: "Wij gebruiken je gegevens niet om AI-modellen te trainen, en onze leveranciers mogen dat op grond van onze afspraken met hen evenmin.",
        },
        { kind: "subheading", text: "Hoe lang wij je gegevens bewaren" },
        {
            kind: "paragraph",
            text: "Gegevens uit de tools bewaren wij maximaal twee jaar na je laatste contact met ons, tenzij er een klantrelatie uit voortkomt. In dat geval gelden de bewaartermijnen van die opdracht, en voor de administratie de wettelijke termijn van zeven jaar.",
        },
        {
            kind: "paragraph",
            text: "Vraag je om verwijdering, dan doen wij dat eerder.",
        },
        { kind: "subheading", text: "Je rechten" },
        {
            kind: "paragraph",
            text: "Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen de verwerking of vragen om je gegevens over te dragen. Stuur een mail naar maarten@theonlyconstant.nl; wij reageren binnen een maand.",
        },
        {
            kind: "paragraph",
            text: "Ben je het oneens met hoe wij met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.",
        },
        { kind: "subheading", text: "Beveiliging" },
        {
            kind: "paragraph",
            text: "Wij nemen passende maatregelen om je gegevens te beschermen: versleutelde verbindingen, toegang alleen voor wie eraan werkt, en accounts met tweefactorauthenticatie. Vermoed je dat er iets misgaat met je gegevens, laat het ons dan weten.",
        },
        { kind: "subheading", text: "Wijzigingen" },
        {
            kind: "paragraph",
            text: "Wij passen deze verklaring aan als onze werkwijze verandert. De datum bovenaan geeft aan wanneer dat voor het laatst gebeurde.",
        },
    ],
};

export const privacyContent: Record<Locale, PrivacyContent> = { en, nl };
