import { RiskLevel } from "./types";
import type { BinaryQuestion, ClassificationResult } from "./types";

export const LEGAL_TEXTS_NL: Record<string, string> = {
    "Art. 2": `Artikel 2 - Toepassingsgebied

De verordening is van toepassing op AI-systemen die in de EU in de handel worden gebracht, in gebruik worden gesteld of waarvan de output in de EU wordt gebruikt. Het bevat uitzonderingen voor militair gebruik, onderzoek en puur persoonlijk, niet-commercieel gebruik.`,
    "Art. 3": `Artikel 3 - Definities

'AI-systeem': een op een machine gebaseerd systeem dat is ontworpen om met verschillende niveaus van autonomie te werken en dat na het inzetten ervan aanpassingsvermogen kan vertonen, en dat, voor expliciete of impliciete doelstellingen, uit de ontvangen input afleidt hoe output te genereren zoals voorspellingen, inhoud, aanbevelingen of beslissingen die van invloed kunnen zijn op fysieke of virtuele omgevingen.`,
    "Art. 3(1)": `Artikel 3, lid 1 - Definitie AI-systeem

Dit artikellid bevat de officiële definitie van een AI-systeem. Cruciaal hierbij is het onderscheid tussen 'statische' software (vaste regels) en AI-systemen die een vorm van autonomie hebben en 'afleidingen' (inferences) maken op basis van data om output te genereren.`,
    "Art. 4": `Artikel 4 - AI-geletterdheid

Aanbieders en gebruiksverantwoordelijken van AI-systemen nemen maatregelen om, zoveel als mogelijk, te zorgen voor een toereikend niveau van AI-geletterdheid bij hun personeel en andere personen die namens hen AI-systemen exploiteren en gebruiken. Dit houdt in dat zij over de nodige kennis en vaardigheden moeten beschikken om de systemen veilig en verantwoord in te zetten.`,
    "Art. 5": `Artikel 5 - Verboden AI-praktijken

Art. 5 bevat acht verboden AI-praktijken: (a) subliminale/manipulatieve technieken, (b) misbruik van kwetsbaarheden, (c) sociale scoring, (d) crime prediction op basis van profilering, (e) ongerichte scraping voor gezichtsherkenning, (f) emotieherkenning op werk/onderwijs, (g) biometrische categorisatie naar gevoelige kenmerken, (h) realtime biometrische identificatie in publieke ruimtes.`,
    "Art. 5(1)(c)(f)(h)": `Artikel 5, lid 1 (c, f, h) - Sociale scoring, emotieherkenning werk/onderwijs, realtime biometrie

Drie van de acht verboden praktijken: scoring van burgers op gedrag, emotieherkenning op werkvloer/school, en realtime gezichtsherkenning in publieke ruimtes (laatste alleen voor rechtshandhaving onder strikte uitzonderingen).`,
    "Art. 5(1)(d)(e)(g)": `Artikel 5, lid 1 (d, e, g) - Profilering, scraping en biometrische categorisatie

(d) Voorspellen van crimineel gedrag op basis van profilering of persoonlijkheidskenmerken. (e) Bouwen of uitbreiden van gezichtsherkenningsdatabases via ongerichte scraping van internet/CCTV. (g) Biometrische categorisatie van mensen om gevoelige kenmerken (ras, religie, seksuele oriëntatie, politieke overtuiging) af te leiden.`,
    "Art. 6": `Artikel 6 - Classificatie van hoogrisico-AI-systemen

Dit artikel bepaalt wanneer een AI-systeem als 'hoog risico' wordt aangemerkt. Dit is het geval als het systeem een veiligheidscomponent is van een product (Annex I) of als het wordt gebruikt in een van de specifiek genoemde gevoelige domeinen (Annex III).`,
    "Art. 6(3)": `Artikel 6, lid 3 - Uitzondering hoog risico

Een Annex III-systeem is niet hoog risico als het alleen smalle procedurele taken uitvoert, het resultaat van menselijk werk verbetert, patronen detecteert zonder menselijk oordeel te vervangen, of voorbereidend werk doet. Profileert het systeem mensen, dan vervalt de uitzondering. Providers moeten hun beoordeling vóór marktintroductie documenteren.`,
    "Art. 25": `Artikel 25 - Wanneer een gebruiker provider wordt

Een deployer wordt zelf provider als hij: het AI-systeem onder eigen naam in de markt zet, het substantieel aanpast, of door beoogd gebruik een niet-hoogrisicosysteem hoog-risico maakt. De originele provider moet meewerken.`,
    "Art. 9–15": `Artikelen 9 t/m 15 - Eisen voor Hoog Risico AI

Deze artikelen vormen de kern van de verplichtingen voor hoog-risico systemen. Ze omvatten regels voor:
- Risicobeheersing (Art 9)
- Datakwaliteit en governance (Art 10)
- Technische documentatie (Art 11)
- Logging en traceerbaarheid (Art 12)
- Transparantie en informatieverstrekking (Art 13)
- Menselijk toezicht (Art 14)
- Nauwkeurigheid, robuustheid en cybersecurity (Art 15).`,
    "Art. 50": `Artikel 50 - Transparantieverplichtingen voor bepaalde AI-systemen

Aanbieders moeten ervoor zorgen dat mensen weten dat ze met AI communiceren (zoals chatbots). Ook moeten deepfakes en AI-gegenereerde teksten die lijken op menselijke verslaglegging duidelijk worden gelabeld, tenzij ze onderdeel zijn van een artistiek of creatief werk waarbij de context duidelijk is.`,
    "Art. 53": `Artikel 53 - Verplichtingen voor GPAI-modellen

Aanbieders van AI-modellen voor algemene doeleinden (General Purpose AI, zoals GPT-4) moeten technische documentatie bijhouden, informatie over trainingsdata publiceren en beleid voeren rondom de eerbiediging van het auteursrecht.`,
    "Annex I": `Bijlage I - EU-harmonisatiewetgeving

Bevat een lijst van productsectoren waarbij het AI-systeem als hoog risico geldt als het een veiligheidscomponent is. Denk aan: machines, speelgoed, liften, drukapparatuur, en medische hulpmiddelen.`,
    "Annex III": `Bijlage III - Hoogrisico-AI-gebieden

Lijst van specifieke domeinen waar AI-gebruik bijna altijd hoog risico is vanwege de impact op grondrechten:
1. Biometrie
2. Kritieke infrastructuur
3. Onderwijs en beroepsopleiding
4. Werkgelegenheid en personeelsbeheer (HR)
5. Toegang tot essentiële diensten (bijv. krediet, uitkeringen)
6. Rechtshandhaving
7. Migratie en asiel
8. Rechtspleging en democratische processen.`,
    "Annex I & III": `Bijlagen I & III - Samenvatting

Deze bijlagen definiëren samen het bereik van 'Hoog Risico' AI. Annex I richt zich op fysieke producten en veiligheid, terwijl Annex III zich richt op software-toepassingen die fundamentele rechten van burgers kunnen aantasten.`,
};

export const QUESTIONS_NL: Record<string, BinaryQuestion> = {
    q1_ai_or_not: {
        id: "q1_ai_or_not",
        text: "Gebruikt jouw organisatie software die zelfstandig voorspellingen, aanbevelingen, content of beslissingen genereert?",
        legalRef: "Art. 3(1)",
        explanation:
            "Op basis van data/modellen, dus niet alleen vaste regels of simpele automatisering.",
        longExplanation: `**De kern van AI**
Volgens de EU AI Act is AI software die met een zekere mate van autonomie werkt en output genereert die de omgeving beïnvloedt.

**Denk aan:**
*   Generatieve tools (ChatGPT, Midjourney)
*   Aanbevelingsalgoritmes
*   Voorspellende modellen

**Geen AI:**
Simpele Excel-macro's of vaste 'if/then' regels.`,
        yesNextId: "q2_professional_use",
        noNextId: "end_A_out_of_scope",
    },
    q2_professional_use: {
        id: "q2_professional_use",
        text: "Wordt deze software gebruikt voor zakelijke of professionele doeleinden?",
        legalRef: "Art. 2",
        explanation: "Puur privégebruik (hobby) valt buiten de wet.",
        longExplanation: `**Zakelijk vs. Privé**
De AI Act richt zich op de professionele markt. Als je de tool alleen thuis gebruikt voor je eigen plezier, hoef je je geen zorgen te maken over deze wetgeving.

Zodra er een commercieel belang is of de tool binnen een organisatie wordt ingezet, is de wet van toepassing.`,
        yesNextId: "q3_rnd_exception",
        noNextId: "end_A_out_of_scope",
    },
    q3_rnd_exception: {
        id: "q3_rnd_exception",
        text: "Is het systeem uitsluitend voor onderzoek, R&D of interne tests, zonder dat het echt wordt ingezet voor besluiten over mensen?",
        legalRef: "Art. 2",
        explanation:
            "Wetenschappelijk onderzoek en vroege testfasen zijn (tijdelijk) uitgezonderd.",
        longExplanation: `**De R&D Uitzondering**
De EU wil innovatie niet in de weg staan. Daarom zijn systemen die zich nog in de lab-fase bevinden uitgezonderd.

**Let op:** Zodra je de resultaten van je 'test' gebruikt om bijvoorbeeld een sollicitant af te wijzen of een klant te beoordelen, vervalt deze uitzondering direct.`,
        yesNextId: "end_A_out_of_scope_rnd",
        noNextId: "q4_prohibited_manipulation",
    },
    q4_prohibited_manipulation: {
        id: "q4_prohibited_manipulation",
        text: "Wordt AI gebruikt om mensen onbewust te manipuleren of kwetsbare groepen uit te buiten?",
        legalRef: "Art. 5",
        explanation: "Bijv. subliminale beïnvloeding die gedrag wezenlijk verandert.",
        longExplanation: `**Verboden Praktijk: Manipulatie**
De AI Act verbiedt systemen die mensen misleiden of onbewust aanzetten tot gedrag dat schadelijk is.

**Voorbeelden:**
*   AI in speelgoed die kinderen aanzet tot gevaarlijke acties via spraak.
*   Systemen die inspelen op een handicap om iemand te dwingen tot een aankoop of actie.`,
        yesNextId: "end_D_prohibited",
        noNextId: "q5_prohibited_categories",
    },
    q5_prohibited_categories: {
        id: "q5_prohibited_categories",
        text: "Gebruik je AI voor sociale scoring, emotieherkenning op werk of school, of realtime biometrische identificatie in publieke ruimtes?",
        legalRef: "Art. 5(1)(c)(f)(h)",
        explanation: "Drie van de acht verboden praktijken uit Art. 5.",
        longExplanation: `**Verboden Praktijken: Gevoelige Domeinen**
De EU ziet bepaalde toepassingen als een onacceptabel risico voor grondrechten.

**Verboden zijn:**
*   **Sociale scoring:** Burgers een score geven op basis van sociaal gedrag of persoonskenmerken (Art. 5(1)(c)).
*   **Emotieherkenning:** Op de werkvloer of in het onderwijs (Art. 5(1)(f)).
*   **Realtime Biometrie:** Bijv. gezichtsherkenning door de politie op straat (Art. 5(1)(h), behoudens extreme uitzonderingen).

Op de volgende vraag komen nog drie andere verboden praktijken aan bod.`,
        yesNextId: "end_D_prohibited",
        noNextId: "q5b_prohibited_other",
    },
    q5b_prohibited_other: {
        id: "q5b_prohibited_other",
        text: "Gebruik je AI voor het voorspellen van crimineel gedrag op basis van profilering, voor het bouwen van gezichtsherkenningsdatabases via internet/CCTV-scraping, of voor biometrische categorisatie naar gevoelige kenmerken (ras, religie, seksuele oriëntatie, politieke overtuiging)?",
        legalRef: "Art. 5(1)(d)(e)(g)",
        explanation: "De drie overige verboden praktijken uit Art. 5.",
        longExplanation: `**Verboden Praktijken: Profilering en Biometrie**

*   **Crime prediction (Art. 5(1)(d)):** Voorspellen of iemand een misdrijf gaat plegen, uitsluitend op basis van profilering of persoonlijkheidskenmerken. (Uitgezonderd: ondersteuning van menselijke beoordeling op basis van objectieve, verifieerbare feiten.)
*   **Face scraping (Art. 5(1)(e)):** Het ongericht schrapen van gezichten van internet of CCTV om gezichtsherkenningsdatabases mee op te bouwen of uit te breiden.
*   **Sensitive biometric categorisation (Art. 5(1)(g)):** AI die mensen categoriseert op basis van biometrie om gevoelige kenmerken af te leiden (ras, politieke overtuiging, vakbondslidmaatschap, religie, seksleven of seksuele oriëntatie).`,
        yesNextId: "end_D_prohibited",
        noNextId: "q6_annexIII_domains",
    },
    q6_annexIII_domains: {
        id: "q6_annexIII_domains",
        text: "Valt de AI binnen één van de Annex III-domeinen: biometrie, kritieke infrastructuur, onderwijs, werk/HR, essentiële diensten (krediet, verzekering, uitkeringen, 112-triage), rechtshandhaving, migratie/asiel/grenscontrole, of rechtspraak/democratie?",
        legalRef: "Annex III",
        explanation:
            "Dit zijn de acht domeinen waar AI-besluiten grote impact hebben op iemands leven of grondrechten.",
        longExplanation: `**Annex III: Hoog Risico Domeinen**
De AI Act benoemt acht categorieën waarin AI-systemen standaard hoog risico zijn.

**De acht categorieën:**
1. **Biometrie:** identificatie op afstand, biometrische categorisatie, emotieherkenning (buiten verboden contexten).
2. **Kritieke infrastructuur:** verkeer, water, gas, elektriciteit, digitale infra.
3. **Onderwijs:** toelating, beoordeling, examen-toezicht.
4. **Werk/HR:** werving, selectie, promotie, ontslag, taakverdeling, monitoring.
5. **Essentiële diensten:** krediet, verzekering, uitkeringen, 112-triage.
6. **Rechtshandhaving:** risicobeoordeling slachtoffers/daders, polygraaf-achtige tools.
7. **Migratie/asiel/grenscontrole:** risicobeoordelingen, asielaanvragen.
8. **Rechtspraak/democratie:** beslissingsondersteuning rechters, beïnvloeding stemgedrag.`,
        yesNextId: "q6a_art6_3_exception",
        noNextId: "q6b_safety_components",
    },
    q6a_art6_3_exception: {
        id: "q6a_art6_3_exception",
        text: "Vervangt de AI menselijke beoordeling, of doet het profilering van mensen, of neemt het zelf substantiële beslissingen?",
        legalRef: "Art. 6(3)",
        explanation:
            "Annex III-systemen die alleen voorbereidend of ondersteunend werk doen, zijn niet automatisch hoog risico.",
        longExplanation: `**De Art. 6(3) uitzondering**
Niet elk AI-systeem in een Annex III-domein is hoog risico. De wet kent vier uitzonderingen:

*   **Smalle procedurele taak** (bijv. agenda's plannen, mailtjes routeren).
*   **Resultaten van menselijk werk verbeteren** (bijv. spelling/format checken).
*   **Patronen detecteren zonder menselijke beoordeling te vervangen** (bijv. anomaly flagging).
*   **Voorbereidende taken** voor een Annex III use case.

**Belangrijk:** als de AI profilering doet (oordelen over personen op basis van gedrag/kenmerken), blijft het altijd hoog risico, ook als het verder lijkt te kwalificeren voor een uitzondering.

**Antwoord JA** als de AI echt beslist, profileert, of menselijk oordeel vervangt → hoog risico.
**Antwoord NEE** als de AI alleen ondersteunt, voorbereidt, of patronen toont zonder zelf conclusies te trekken over mensen.`,
        yesNextId: "end_C_high_risk",
        noNextId: "end_B_annex3_exception",
    },
    q6b_safety_components: {
        id: "q6b_safety_components",
        text: "Is de AI een veiligheidscomponent van een product dat onder EU-wetgeving valt (zoals machines, liften of medische apparatuur)?",
        legalRef: "Annex I",
        explanation:
            "Inclusief speelgoed en drukapparatuur. Als de AI faalt, is er direct fysiek gevaar.",
        longExplanation: `**Veiligheidscomponenten**
Producten die al streng gereguleerd zijn voor veiligheid (CE-markering onder Annex I) maken de bijbehorende AI automatisch Hoog Risico.

**Voorbeelden:**
*   Software in een MRI-scanner.
*   Aandrijvings-AI in een lift of robotarm.`,
        yesNextId: "end_C_high_risk",
        noNextId: "q9_generative_content",
    },
    q9_generative_content: {
        id: "q9_generative_content",
        text: "Genereert de AI content die mensen kunnen aanzien voor menselijk werk (tekst, beeld, audio of video)?",
        legalRef: "Art. 50",
        explanation: "Denk aan chatbots, AI-art of gegenereerde marketingteksten.",
        longExplanation: `**Generatieve AI & Transparantie**
Zodra AI dingen maakt die 'echt' lijken, moeten mensen beschermd worden tegen misleiding.

Dit geldt voor alle vormen van synthetische media, van AI-voiceovers tot gegenereerde rapporten.`,
        yesNextId: "q10_transparency_ai_content",
        noNextId: "q11_role_provider",
    },
    q10_transparency_ai_content: {
        id: "q10_transparency_ai_content",
        text: "Is voor de eindgebruiker op dit moment duidelijk dat deze content door AI is gegenereerd?",
        legalRef: "Art. 50",
        explanation: "Zijn er labels, watermerken of meldingen aanwezig?",
        longExplanation: `**De Transparantie-check**
De wet eist dat mensen weten wanneer ze met een machine praten of naar AI-werk kijken.

Als je een chatbot hebt zonder te melden dat het een bot is, ben je op dit punt niet compliant.`,
        yesNextId: "q11_role_provider",
        noNextId: "end_B_noncompliant_transparency",
    },
    q11_role_provider: {
        id: "q11_role_provider",
        text: "Ontwikkelt of verkoopt jouw organisatie zelf AI-systemen of AI-modellen?",
        legalRef: "Art. 3",
        explanation: "Ben je de 'maker' (Provider) of alleen de 'gebruiker' (Deployer)?",
        longExplanation: `**Bepaling van je Rol**
Je rol bepaalt de zwaarte van je plichten.

*   **Aanbieder (Provider):** Je bouwt de AI of verkoopt het onder je eigen merk. Je bent verantwoordelijk voor de techniek.
*   **Gebruiker (Deployer):** Je gebruikt software van derden (bijv. een HR-tool van een leverancier). Je bent verantwoordelijk voor hoe je het inzet.`,
        yesNextId: "end_B_allowed_provider",
        noNextId: "end_B_allowed_user",
    },
};

export const RESULTS_NL: Record<string, ClassificationResult> = {
    end_A_out_of_scope: {
        id: "end_A_out_of_scope",
        outcome: "A",
        level: RiskLevel.NO_REGULATION,
        title: "Valt (nu) niet onder de EU AI Act",
        why: [
            "Geen AI-systeem in de zin van de wet, of",
            "Alleen privégebruik (niet-professioneel).",
        ],
        whatNext: [
            "Als je AI zakelijk gaat inzetten, herhaal deze check.",
            "Let op: andere regels kunnen wél gelden (bijv. AVG), ook buiten de AI Act.",
        ],
        legalRefs: [
            { type: "article", ref: "Art. 2", label: "Toepassingsgebied" },
            { type: "article", ref: "Art. 3", label: "Definities" },
        ],
        deadline: "N.v.t.",
    },
    end_A_out_of_scope_rnd: {
        id: "end_A_out_of_scope_rnd",
        outcome: "A",
        level: RiskLevel.NO_REGULATION,
        title: "Tijdelijk buiten scope (onderzoek/R&D)",
        why: [
            "De AI wordt uitsluitend gebruikt voor onderzoek of interne test/R&D, is nog niet operationeel ingezet en wordt niet gebruikt voor echte besluitvorming.",
        ],
        whatNext: [
            "Zodra je AI operationeel inzet (intern of extern), herhaal deze check.",
            "Borg nu alvast AI-geletterdheid en basale governance; dat voorkomt verrassingen later.",
        ],
        legalRefs: [{ type: "article", ref: "Art. 2", label: "Uitzonderingen" }],
        deadline: "N.v.t.",
    },
    end_D_prohibited: {
        id: "end_D_prohibited",
        outcome: "D",
        level: RiskLevel.PROHIBITED,
        title: "Verboden AI (niet toegestaan)",
        why: [
            "Je use case valt onder verboden AI-praktijken. Dit is niet toegestaan, ongeacht bedrijfsgrootte of intentie.",
        ],
        whatNext: [
            "Stop het gebruik of herontwerp de toepassing zodat het niet onder het verbod valt.",
            "Documenteer de beslissing en pas je processen aan voordat je opnieuw uitrolt.",
        ],
        legalRefs: [{ type: "article", ref: "Art. 5", label: "Verboden AI-praktijken" }],
        deadline: "2 februari 2025",
    },
    end_C_high_risk: {
        id: "end_C_high_risk",
        outcome: "C",
        level: RiskLevel.HIGH,
        title: "Hoog risico AI",
        why: [
            "De AI valt onder Annex III (hoog-risico toepassingsgebied) of is een veiligheidscomponent onder EU-harmonisatiewetgeving (Annex I).",
            "Dit brengt aanvullende verplichtingen mee voor aanbieders en gebruiksverantwoordelijken.",
        ],
        whatNext: {
            asUser: [
                "Organiseer aantoonbaar menselijk toezicht en neem geen besluiten blind op AI-output.",
                "Beperk gebruik tot het bedoelde doel en monitor prestaties en incidenten.",
            ],
            asProvider: [
                "Richt risicomanagement, datakwaliteit/bias-beheersing, technische documentatie en logging/monitoring in.",
                "Zorg voor CE-markering, conformiteitsbeoordeling en registratie in de EU-database.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 6", label: "Classificatie" },
            { type: "annex", ref: "Annex I & III", label: "Domeinen" },
            { type: "article", ref: "Art. 9–15", label: "Eisen" },
        ],
        deadline: "Annex III: 2 aug 2026. Annex I (veiligheidscomponenten): 2 aug 2027.",
    },
    end_B_noncompliant_transparency: {
        id: "end_B_noncompliant_transparency",
        outcome: "B",
        level: RiskLevel.TRANSPARENCY,
        title: "Niet compliant (transparantieplicht)",
        why: [
            "Je genereert AI-content zonder duidelijk te maken dat het door AI is gemaakt.",
        ],
        whatNext: [
            "Voeg duidelijke disclosure toe in UI/UX (labels, watermarks, meldingen) waar relevant.",
            "Leg intern vast wanneer en hoe AI-output wordt gecommuniceerd naar klanten/gebruiker.",
        ],
        legalRefs: [
            { type: "article", ref: "Art. 50", label: "Transparantieverplichtingen" },
        ],
        deadline: "2 augustus 2026",
    },
    end_B_allowed_user: {
        id: "end_B_allowed_user",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "AI toegestaan (gebruiker)",
        why: [
            "Geen verboden AI-praktijk en geen hoog-risico classificatie op basis van deze zelfcheck.",
            "Wel basisverplichtingen zoals AI-geletterdheid en transparantie waar van toepassing.",
        ],
        whatNext: {
            asUser: [
                "Zorg voor AI-geletterdheid (training) voor iedereen die met AI werkt. Al verplicht sinds 2 februari 2025.",
                "Organiseer toezicht, escalatie bij fouten en controle op misleiding.",
                "Maak AI-gebruik duidelijk richting klanten waar relevant.",
                "Let op: zet je de AI onder eigen merk in de markt of pas je hem substantieel aan? Dan word je zelf provider met extra verplichtingen (Art. 25).",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 4", label: "AI-geletterdheid" },
            { type: "article", ref: "Art. 50", label: "Transparantie" },
        ],
        deadline: "Art. 4 (geletterdheid): per 2 feb 2025 actief. Art. 50 (transparantie): 2 aug 2026.",
    },
    end_B_allowed_provider: {
        id: "end_B_allowed_provider",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "AI toegestaan (aanbieder)",
        why: [
            "Geen verboden AI-praktijk en geen hoog-risico classificatie op basis van deze zelfcheck.",
            "Als aanbieder heb je extra verplichtingen rond informatie, instructies en governance.",
        ],
        whatNext: {
            asProvider: [
                "Lever duidelijke instructies en beperkingen aan je gebruikers.",
                "Borg transparantie richting eindgebruikers waar relevant. Voor synthetische content geldt machine-readable markering (Art. 50(2)).",
                "Ontwikkel je een GPAI-model (foundation model, breed inzetbaar)? Dan gelden aanvullende regels uit Art. 53: technische documentatie, transparantie over trainingsdata, copyright-beleid.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 4", label: "AI-geletterdheid" },
            { type: "article", ref: "Art. 50", label: "Transparantie" },
            { type: "article", ref: "Art. 53", label: "GPAI" },
        ],
        deadline: "Art. 4 (geletterdheid): per 2 feb 2025 actief. Art. 50 (transparantie): 2 aug 2026. GPAI (Art. 53): 2 aug 2025.",
    },
    end_B_annex3_exception: {
        id: "end_B_annex3_exception",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "Annex III-domein, maar uitgezonderd van hoog risico",
        why: [
            "De AI valt op het oog binnen een Annex III-domein, maar voldoet aan de Art. 6(3)-uitzondering: het systeem doet alleen smalle procedurele taken, voorbereidend werk, patroondetectie of het verbetert menselijk werk, zonder zelf substantiële beslissingen te nemen of mensen te profileren.",
        ],
        whatNext: {
            asUser: [
                "Borg dat de AI binnen die smalle taak blijft. Schaalt het naar profilering of besluitvorming, dan val je alsnog onder hoog risico.",
                "Zorg voor AI-geletterdheid en menselijk toezicht.",
                "Documenteer waarom je inschat dat de uitzondering van toepassing is.",
            ],
            asProvider: [
                "Voor providers geldt een documentatieplicht: leg vast waarom je systeem onder de Art. 6(3)-uitzondering valt, vóór marktintroductie.",
                "Registreer het systeem volgens de regels voor uitgezonderde Annex III-systemen.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 6(3)", label: "Uitzondering hoog risico" },
            { type: "article", ref: "Art. 4", label: "AI-geletterdheid" },
        ],
        deadline: "Documentatieplicht provider: vóór marktintroductie. Overige verplichtingen: 2 aug 2026.",
    },
};
