import { RiskLevel } from "./types";
import type { BinaryQuestion, ClassificationResult } from "./types";

export const LEGAL_TEXTS_EN: Record<string, string> = {
    "Art. 2": `Article 2 - Scope

The regulation applies to AI systems placed on the market, put into service, or whose output is used in the EU. It contains exceptions for military use, research, and purely personal, non-commercial use.`,
    "Art. 3": `Article 3 - Definitions

'AI system': a machine-based system designed to operate with varying levels of autonomy, that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments.`,
    "Art. 3(1)": `Article 3(1) - Definition of an AI system

This paragraph contains the official definition of an AI system. The crucial distinction is between 'static' software (fixed rules) and AI systems that have a degree of autonomy and make 'inferences' based on data to generate output.`,
    "Art. 4": `Article 4 - AI literacy

Providers and deployers of AI systems must take measures to ensure, to the best of their ability, a sufficient level of AI literacy among staff and other persons operating and using AI systems on their behalf. They must possess the necessary knowledge and skills to deploy these systems safely and responsibly.`,
    "Art. 5": `Article 5 - Prohibited AI practices

Article 5 lists eight prohibited AI practices: (a) subliminal/manipulative techniques, (b) exploitation of vulnerabilities, (c) social scoring, (d) crime prediction based on profiling, (e) untargeted scraping for facial recognition, (f) emotion recognition in workplaces or schools, (g) biometric categorisation by sensitive attributes, (h) real-time biometric identification in public spaces.`,
    "Art. 5(1)(c)(f)(h)": `Article 5(1)(c)(f)(h) - Social scoring, emotion recognition at work/school, real-time biometrics

Three of the eight prohibited practices: scoring citizens based on behaviour, emotion recognition in the workplace or schools, and real-time facial recognition in public spaces (the last only for law enforcement under strict exceptions).`,
    "Art. 5(1)(d)(e)(g)": `Article 5(1)(d)(e)(g) - Profiling, scraping and biometric categorisation

(d) Predicting criminal behaviour based on profiling or personality traits. (e) Building or expanding facial recognition databases through untargeted scraping of internet/CCTV. (g) Biometric categorisation of people to infer sensitive attributes (race, religion, sexual orientation, political beliefs).`,
    "Art. 6": `Article 6 - Classification of high-risk AI systems

This article determines when an AI system is considered 'high risk'. This is the case when the system is a safety component of a product (Annex I) or when it is used in one of the specific sensitive domains listed (Annex III).`,
    "Art. 6(3)": `Article 6(3) - High-risk exception

An Annex III system is not high risk if it only performs narrow procedural tasks, improves the result of human work, detects patterns without replacing human judgement, or does preparatory work. If the system profiles people, the exception no longer applies. Providers must document their assessment before placing the system on the market.`,
    "Art. 25": `Article 25 - When a deployer becomes a provider

A deployer becomes a provider themselves if they: place the AI system on the market under their own name, substantially modify it, or, through intended use, turn a non-high-risk system into a high-risk one. The original provider must cooperate.`,
    "Art. 9–15": `Articles 9 to 15 - Requirements for High Risk AI

These articles form the core of the obligations for high-risk systems. They include rules for:
- Risk management (Art 9)
- Data quality and governance (Art 10)
- Technical documentation (Art 11)
- Logging and traceability (Art 12)
- Transparency and information provision (Art 13)
- Human oversight (Art 14)
- Accuracy, robustness and cybersecurity (Art 15).`,
    "Art. 50": `Article 50 - Transparency obligations for certain AI systems

Providers must ensure that people know they are communicating with AI (such as chatbots). Deepfakes and AI-generated texts that resemble human reporting must also be clearly labelled, unless they are part of an artistic or creative work where context makes the nature clear.`,
    "Art. 53": `Article 53 - Obligations for GPAI models

Providers of General Purpose AI models (such as GPT-4) must maintain technical documentation, publish information about training data, and have a policy for respecting copyright.`,
    "Annex I": `Annex I - EU harmonisation legislation

Lists product sectors where the AI system counts as high risk if it is a safety component. Examples: machinery, toys, lifts, pressure equipment, and medical devices.`,
    "Annex III": `Annex III - High-risk AI areas

List of specific domains where AI use is almost always high risk because of the impact on fundamental rights:
1. Biometrics
2. Critical infrastructure
3. Education and vocational training
4. Employment and HR management
5. Access to essential services (e.g. credit, benefits)
6. Law enforcement
7. Migration and asylum
8. Administration of justice and democratic processes.`,
    "Annex I & III": `Annexes I & III - Summary

Together these annexes define the scope of 'High Risk' AI. Annex I focuses on physical products and safety, while Annex III focuses on software applications that can affect citizens' fundamental rights.`,
};

export const QUESTIONS_EN: Record<string, BinaryQuestion> = {
    q1_ai_or_not: {
        id: "q1_ai_or_not",
        text: "Does your organisation use software that independently generates predictions, recommendations, content or decisions?",
        legalRef: "Art. 3(1)",
        explanation:
            "Based on data/models, not just fixed rules or simple automation.",
        longExplanation: `**The core of AI**
Under the EU AI Act, AI is software that operates with a degree of autonomy and produces output that influences its environment.

**Examples:**
*   Generative tools (ChatGPT, Midjourney)
*   Recommendation algorithms
*   Predictive models

**Not AI:**
Simple Excel macros or fixed if/then rules.`,
        yesNextId: "q2_professional_use",
        noNextId: "end_A_out_of_scope",
    },
    q2_professional_use: {
        id: "q2_professional_use",
        text: "Is this software used for business or professional purposes?",
        legalRef: "Art. 2",
        explanation: "Purely private use (hobby) falls outside the law.",
        longExplanation: `**Business vs. private use**
The AI Act targets the professional market. If you only use the tool at home for your own enjoyment, you don't need to worry about this regulation.

As soon as there is a commercial interest or the tool is used inside an organisation, the law applies.`,
        yesNextId: "q3_rnd_exception",
        noNextId: "end_A_out_of_scope",
    },
    q3_rnd_exception: {
        id: "q3_rnd_exception",
        text: "Is the system used solely for research, R&D or internal testing, without being actually deployed to make decisions about people?",
        legalRef: "Art. 2",
        explanation:
            "Scientific research and early test phases are (temporarily) exempted.",
        longExplanation: `**The R&D exception**
The EU does not want to stand in the way of innovation. That is why systems still in the lab phase are exempted.

**Note:** As soon as you use the results of your 'test' to, for example, reject a candidate or assess a customer, this exception lapses immediately.`,
        yesNextId: "end_A_out_of_scope_rnd",
        noNextId: "q4_prohibited_manipulation",
    },
    q4_prohibited_manipulation: {
        id: "q4_prohibited_manipulation",
        text: "Is AI used to manipulate people subliminally or to exploit vulnerable groups?",
        legalRef: "Art. 5",
        explanation: "E.g. subliminal influence that materially changes behaviour.",
        longExplanation: `**Prohibited practice: manipulation**
The AI Act prohibits systems that mislead people or unconsciously push them into harmful behaviour.

**Examples:**
*   AI in toys that encourages children to perform dangerous actions through speech.
*   Systems that exploit a disability to force someone into a purchase or action.`,
        yesNextId: "end_D_prohibited",
        noNextId: "q5_prohibited_categories",
    },
    q5_prohibited_categories: {
        id: "q5_prohibited_categories",
        text: "Do you use AI for social scoring, emotion recognition at work or school, or real-time biometric identification in public spaces?",
        legalRef: "Art. 5(1)(c)(f)(h)",
        explanation: "Three of the eight prohibited practices in Art. 5.",
        longExplanation: `**Prohibited practices: sensitive domains**
The EU considers certain applications an unacceptable risk to fundamental rights.

**These are prohibited:**
*   **Social scoring:** giving citizens a score based on social behaviour or personal characteristics (Art. 5(1)(c)).
*   **Emotion recognition:** in the workplace or in education (Art. 5(1)(f)).
*   **Real-time biometrics:** e.g. facial recognition by police on the street (Art. 5(1)(h), barring extreme exceptions).

The next question covers three more prohibited practices.`,
        yesNextId: "end_D_prohibited",
        noNextId: "q5b_prohibited_other",
    },
    q5b_prohibited_other: {
        id: "q5b_prohibited_other",
        text: "Do you use AI to predict criminal behaviour based on profiling, to build facial recognition databases via internet/CCTV scraping, or to perform biometric categorisation by sensitive attributes (race, religion, sexual orientation, political beliefs)?",
        legalRef: "Art. 5(1)(d)(e)(g)",
        explanation: "The three remaining prohibited practices in Art. 5.",
        longExplanation: `**Prohibited practices: profiling and biometrics**

*   **Crime prediction (Art. 5(1)(d)):** Predicting whether someone will commit a crime based solely on profiling or personality traits. (Exception: supporting human assessment based on objective, verifiable facts.)
*   **Face scraping (Art. 5(1)(e)):** Untargeted scraping of faces from the internet or CCTV to build or expand facial recognition databases.
*   **Sensitive biometric categorisation (Art. 5(1)(g)):** AI that categorises people based on biometrics to infer sensitive attributes (race, political belief, trade union membership, religion, sex life or sexual orientation).`,
        yesNextId: "end_D_prohibited",
        noNextId: "q6_annexIII_domains",
    },
    q6_annexIII_domains: {
        id: "q6_annexIII_domains",
        text: "Does the AI fall within any of the Annex III domains: biometrics, critical infrastructure, education, employment/HR, essential services (credit, insurance, benefits, 112-triage), law enforcement, migration/asylum/border control, or justice/democracy?",
        legalRef: "Annex III",
        explanation:
            "These are the eight domains where AI decisions have major impact on lives or fundamental rights.",
        longExplanation: `**Annex III: high-risk domains**
The AI Act lists eight categories where AI systems are high risk by default.

**The eight categories:**
1. **Biometrics:** remote identification, biometric categorisation, emotion recognition (outside prohibited contexts).
2. **Critical infrastructure:** traffic, water, gas, electricity, digital infra.
3. **Education:** admission, assessment, exam supervision.
4. **Employment/HR:** recruitment, selection, promotion, dismissal, task allocation, monitoring.
5. **Essential services:** credit, insurance, benefits, 112-triage.
6. **Law enforcement:** risk assessment of victims/perpetrators, polygraph-like tools.
7. **Migration/asylum/border control:** risk assessments, asylum applications.
8. **Justice/democracy:** decision support for judges, influencing voting behaviour.`,
        yesNextId: "q6a_art6_3_exception",
        noNextId: "q6b_safety_components",
    },
    q6a_art6_3_exception: {
        id: "q6a_art6_3_exception",
        text: "Does the AI replace human judgement, profile people, or make substantial decisions on its own?",
        legalRef: "Art. 6(3)",
        explanation:
            "Annex III systems that only perform preparatory or supporting work are not automatically high risk.",
        longExplanation: `**The Art. 6(3) exception**
Not every AI system in an Annex III domain is high risk. The law contains four exceptions:

*   **Narrow procedural task** (e.g. scheduling, routing emails).
*   **Improving the results of human work** (e.g. spell- or format-checking).
*   **Detecting patterns without replacing human assessment** (e.g. anomaly flagging).
*   **Preparatory tasks** for an Annex III use case.

**Important:** if the AI performs profiling (judging people based on behaviour or characteristics), it always remains high risk, even if it otherwise seems to qualify for an exception.

**Answer YES** if the AI actually decides, profiles or replaces human judgement → high risk.
**Answer NO** if the AI only supports, prepares or surfaces patterns without drawing conclusions about people itself.`,
        yesNextId: "end_C_high_risk",
        noNextId: "end_B_annex3_exception",
    },
    q6b_safety_components: {
        id: "q6b_safety_components",
        text: "Is the AI a safety component of a product covered by EU legislation (such as machinery, lifts or medical devices)?",
        legalRef: "Annex I",
        explanation:
            "Including toys and pressure equipment. If the AI fails, there is direct physical danger.",
        longExplanation: `**Safety components**
Products that are already strictly regulated for safety (CE marking under Annex I) make the associated AI automatically High Risk.

**Examples:**
*   Software in an MRI scanner.
*   Drive AI in a lift or robot arm.`,
        yesNextId: "end_C_high_risk",
        noNextId: "q9_generative_content",
    },
    q9_generative_content: {
        id: "q9_generative_content",
        text: "Does the AI generate content that people might mistake for human work (text, image, audio or video)?",
        legalRef: "Art. 50",
        explanation: "Think chatbots, AI art or generated marketing copy.",
        longExplanation: `**Generative AI & transparency**
Once AI produces things that 'look real', people must be protected from being misled.

This applies to all kinds of synthetic media, from AI voice-overs to generated reports.`,
        yesNextId: "q10_transparency_ai_content",
        noNextId: "q11_role_provider",
    },
    q10_transparency_ai_content: {
        id: "q10_transparency_ai_content",
        text: "Is it currently clear to the end user that this content was generated by AI?",
        legalRef: "Art. 50",
        explanation: "Are labels, watermarks or notifications in place?",
        longExplanation: `**The transparency check**
The law requires people to know when they are talking to a machine or looking at AI work.

If you have a chatbot without disclosing that it's a bot, you are not compliant on this point.`,
        yesNextId: "q11_role_provider",
        noNextId: "end_B_noncompliant_transparency",
    },
    q11_role_provider: {
        id: "q11_role_provider",
        text: "Does your organisation develop or sell AI systems or AI models itself?",
        legalRef: "Art. 3",
        explanation: "Are you the 'maker' (provider) or only the 'user' (deployer)?",
        longExplanation: `**Determining your role**
Your role determines the weight of your obligations.

*   **Provider:** you build the AI or sell it under your own brand. You are responsible for the technology.
*   **Deployer:** you use software from third parties (e.g. an HR tool from a vendor). You are responsible for how you deploy it.`,
        yesNextId: "end_B_allowed_provider",
        noNextId: "end_B_allowed_user",
    },
};

export const RESULTS_EN: Record<string, ClassificationResult> = {
    end_A_out_of_scope: {
        id: "end_A_out_of_scope",
        outcome: "A",
        level: RiskLevel.NO_REGULATION,
        title: "Currently outside the EU AI Act",
        why: [
            "Not an AI system within the meaning of the law, or",
            "Purely private use (non-professional).",
        ],
        whatNext: [
            "If you start using AI for business purposes, repeat this check.",
            "Note: other rules may still apply (e.g. GDPR), even outside the AI Act.",
        ],
        legalRefs: [
            { type: "article", ref: "Art. 2", label: "Scope" },
            { type: "article", ref: "Art. 3", label: "Definitions" },
        ],
        deadline: "N/A",
    },
    end_A_out_of_scope_rnd: {
        id: "end_A_out_of_scope_rnd",
        outcome: "A",
        level: RiskLevel.NO_REGULATION,
        title: "Temporarily out of scope (research/R&D)",
        why: [
            "The AI is used solely for research or internal testing/R&D, is not yet operationally deployed, and is not used for actual decision-making.",
        ],
        whatNext: [
            "As soon as you deploy AI operationally (internally or externally), repeat this check.",
            "Start arranging AI literacy and basic governance now; it prevents surprises later.",
        ],
        legalRefs: [{ type: "article", ref: "Art. 2", label: "Exceptions" }],
        deadline: "N/A",
    },
    end_D_prohibited: {
        id: "end_D_prohibited",
        outcome: "D",
        level: RiskLevel.PROHIBITED,
        title: "Prohibited AI (not allowed)",
        why: [
            "Your use case falls under prohibited AI practices. This is not allowed, regardless of company size or intent.",
        ],
        whatNext: [
            "Stop using it or redesign the application so it does not fall under the prohibition.",
            "Document the decision and adjust your processes before rolling out again.",
        ],
        legalRefs: [{ type: "article", ref: "Art. 5", label: "Prohibited AI practices" }],
        deadline: "2 February 2025",
    },
    end_C_high_risk: {
        id: "end_C_high_risk",
        outcome: "C",
        level: RiskLevel.HIGH,
        title: "High-risk AI",
        why: [
            "The AI falls under Annex III (high-risk application area) or is a safety component under EU harmonisation legislation (Annex I).",
            "This brings additional obligations for both providers and deployers.",
        ],
        whatNext: {
            asUser: [
                "Arrange demonstrable human oversight and do not blindly act on AI output.",
                "Limit use to the intended purpose and monitor performance and incidents.",
            ],
            asProvider: [
                "Set up risk management, data quality/bias controls, technical documentation and logging/monitoring.",
                "Ensure CE marking, conformity assessment and registration in the EU database.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 6", label: "Classification" },
            { type: "annex", ref: "Annex I & III", label: "Domains" },
            { type: "article", ref: "Art. 9–15", label: "Requirements" },
        ],
        deadline: "Annex III: 2 Aug 2026. Annex I (safety components): 2 Aug 2027.",
    },
    end_B_noncompliant_transparency: {
        id: "end_B_noncompliant_transparency",
        outcome: "B",
        level: RiskLevel.TRANSPARENCY,
        title: "Not compliant (transparency obligation)",
        why: [
            "You generate AI content without making it clear that it was made by AI.",
        ],
        whatNext: [
            "Add clear disclosure in UI/UX (labels, watermarks, notifications) where relevant.",
            "Define internally when and how AI output is communicated to customers/users.",
        ],
        legalRefs: [
            { type: "article", ref: "Art. 50", label: "Transparency obligations" },
        ],
        deadline: "2 August 2026",
    },
    end_B_allowed_user: {
        id: "end_B_allowed_user",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "AI allowed (deployer)",
        why: [
            "No prohibited AI practice and no high-risk classification based on this self-check.",
            "Basic obligations still apply, such as AI literacy and transparency where relevant.",
        ],
        whatNext: {
            asUser: [
                "Arrange AI literacy (training) for everyone working with AI. Already mandatory since 2 February 2025.",
                "Set up oversight, escalation for errors and checks for misleading outputs.",
                "Make AI use clear to customers where relevant.",
                "Note: if you bring the AI to market under your own brand or substantially modify it, you become a provider yourself with extra obligations (Art. 25).",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 4", label: "AI literacy" },
            { type: "article", ref: "Art. 50", label: "Transparency" },
        ],
        deadline: "Art. 4 (literacy): active from 2 Feb 2025. Art. 50 (transparency): 2 Aug 2026.",
    },
    end_B_allowed_provider: {
        id: "end_B_allowed_provider",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "AI allowed (provider)",
        why: [
            "No prohibited AI practice and no high-risk classification based on this self-check.",
            "As a provider you have additional obligations around information, instructions and governance.",
        ],
        whatNext: {
            asProvider: [
                "Provide clear instructions and limitations to your users.",
                "Ensure transparency towards end users where relevant. For synthetic content, machine-readable marking applies (Art. 50(2)).",
                "Are you developing a GPAI model (foundation model, broadly applicable)? Then additional rules from Art. 53 apply: technical documentation, transparency about training data, copyright policy.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 4", label: "AI literacy" },
            { type: "article", ref: "Art. 50", label: "Transparency" },
            { type: "article", ref: "Art. 53", label: "GPAI" },
        ],
        deadline: "Art. 4 (literacy): active from 2 Feb 2025. Art. 50 (transparency): 2 Aug 2026. GPAI (Art. 53): 2 Aug 2025.",
    },
    end_B_annex3_exception: {
        id: "end_B_annex3_exception",
        outcome: "B",
        level: RiskLevel.MINIMAL,
        title: "Annex III domain, but exempt from high risk",
        why: [
            "The AI appears to fall within an Annex III domain, but qualifies for the Art. 6(3) exception: the system only performs narrow procedural tasks, preparatory work, pattern detection, or improves human work, without making substantial decisions on its own or profiling people.",
        ],
        whatNext: {
            asUser: [
                "Ensure the AI stays within that narrow task. If it scales to profiling or decision-making, you fall under high risk after all.",
                "Arrange AI literacy and human oversight.",
                "Document why you believe the exception applies.",
            ],
            asProvider: [
                "Providers have a documentation obligation: record why your system falls under the Art. 6(3) exception, before placing it on the market.",
                "Register the system according to the rules for exempted Annex III systems.",
            ],
        },
        legalRefs: [
            { type: "article", ref: "Art. 6(3)", label: "High-risk exception" },
            { type: "article", ref: "Art. 4", label: "AI literacy" },
        ],
        deadline: "Provider documentation: before placing on the market. Other obligations: 2 Aug 2026.",
    },
};
