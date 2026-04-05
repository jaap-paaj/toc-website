# Instructie: 19 blogs publiceren + site SEO/GEO optimalisatie

Jaap, hieronder alles wat je nodig hebt om de blogs te publiceren en de site vindbaar te maken voor Google en AI zoekmachines. Neem het in volgorde door. De blogs staan als markdown bestanden in dezelfde map als dit document.

---

## Stap 1: Technische basis (doe dit eerst)

### 1.1 Sitemap.xml

Genereer een `sitemap.xml` in de root van de site. Moet alle pagina's bevatten (homepage, /nl/about, /nl/contact, /nl/educate, /nl/innovate, /nl/automate, /nl/blog, en alle blogposts). Moet automatisch updaten als er nieuwe blogposts komen. Voorbeeld:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://theonlyconstant.nl/</loc>
    <lastmod>2026-04-04</lastmod>
  </url>
  <!-- etc voor alle pagina's -->
</urlset>
```

### 1.2 robots.txt

Maak aan in de site root:

```
User-agent: *
Allow: /
Sitemap: https://theonlyconstant.nl/sitemap.xml

# AI Search Crawlers - expliciet toelaten
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot-Extended
Allow: /
```

### 1.3 llms.txt

Maak aan in de site root. Dit maakt de site vindbaar voor AI tools (ChatGPT, Perplexity, Claude):

```
# The Only Constant

> AI consultancy voor marketing en organisatie-innovatie. Werkende prototypes en beslisdata, geen slideware.

## Bedrijfsinformatie
- Naam: The Only Constant (TOC)
- Type: Marketing & Organisation Innovation Studio
- Locatie: Nederland
- Doelgroep: Organisaties met 50+ FTE in retail, manufacturing en high-tech
- Focus: AI-adoptie als managementdiscipline

## Services

### Educate
- [AI Workshop voor Bedrijven](https://theonlyconstant.nl/nl/educate): AI workshops op locatie voor teams. Prijsrange 1.500-3.500 euro.

### Automate
- [AI Automatisering](https://theonlyconstant.nl/nl/automate): Workflow automatisering met generatieve AI. Intake + eerste build vanaf 5.000 euro.

### Innovate
- [AI Proof of Concept / Innovation Sprint](https://theonlyconstant.nl/nl/innovate): In 2 weken van idee naar werkend prototype. Vanaf 15.000 euro.

## Expertise
- AI-adoptie strategie en implementatie
- Proof of Value trajecten (2-4 weken, meetbaar resultaat)
- Workshop-driven AI readiness
- Workflow automatisering met generatieve AI
- AI voor retail, manufacturing en high-tech

## Kernconcepten
- Follow the Friction: begin bij het werk, niet bij de tool
- Proof before Scale: bewijs waarde voordat je investering vergroot
- Thinnest Viable Slice: begin met het kleinste stuk dat waarde creëert
- Boring is Success: goede AI-automatisering valt niet op
- Shadow AI als strategisch signaal

## Blog
- [Blog overzicht](https://theonlyconstant.nl/nl/blog)

## Contact
- [Contact pagina](https://theonlyconstant.nl/nl/contact)
- Website: https://theonlyconstant.nl
```

### 1.4 Canonical URLs

Elke pagina moet een canonical URL hebben in de `<head>`:

```html
<link rel="canonical" href="https://theonlyconstant.nl/nl/blog/slug-hier" />
```

---

## Stap 2: Meta tags per pagina

Elke pagina moet een unieke `<title>` en `<meta name="description">` hebben.

### Bestaande pagina's

| Pagina | Title tag | Meta description |
|--------|-----------|-----------------|
| Homepage | AI Consultancy Nederland - The Only Constant | AI consultancy voor retail, manufacturing en high-tech. Workshops, automatisering en proof of concepts die beslisdata opleveren. |
| /nl/educate | AI Workshop voor Bedrijven - The Only Constant | AI workshop op locatie voor teams. Van AI-basiskennis tot hands-on werken met AI tools. Voor organisaties met 50+ medewerkers. |
| /nl/automate | AI Automatisering voor Bedrijven - The Only Constant | Workflow automatisering met generatieve AI en tools als n8n en Make. Van intake tot eerste werkende automation in 2-3 weken. |
| /nl/innovate | AI Proof of Concept - The Only Constant | In 2 weken van idee naar werkend prototype. Levert beslisdata op, geen slideware. Voor organisaties die AI willen testen. |
| /nl/about | Over The Only Constant - AI Consultancy | Marketing en organisatie-innovatie studio. Strategie door te doen, niet door te praten. |
| /nl/blog | Blog - The Only Constant | Inzichten over AI-adoptie, marketing innovatie en organisatieverandering. |

### Blog posts

Genereer per blog automatisch:
- **Title tag**: `[Blog titel] - The Only Constant` (max 60 tekens)
- **Meta description**: Eerste zin van de subtitle/inleiding (max 155 tekens)

---

## Stap 3: Schema markup (JSON-LD)

Voeg toe in de `<head>` van elke pagina.

### Homepage - Organization schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Only Constant",
  "url": "https://theonlyconstant.nl",
  "description": "AI consultancy voor marketing en organisatie-innovatie",
  "areaServed": "NL",
  "serviceType": ["AI Consultancy", "AI Workshop", "AI Automatisering", "AI Proof of Concept"]
}
</script>
```

### Service pagina's - Service schema

Per service pagina (/nl/educate, /nl/automate, /nl/innovate):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service naam]",
  "provider": {
    "@type": "Organization",
    "name": "The Only Constant"
  },
  "description": "[Service beschrijving]",
  "areaServed": "NL"
}
</script>
```

### Blog posts - Article + Person schema

Elke blogpost krijgt:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Blog titel]",
  "author": {
    "@type": "Person",
    "name": "Maarten Mantje",
    "jobTitle": "Founder & Strategist",
    "worksFor": {
      "@type": "Organization",
      "name": "The Only Constant"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "The Only Constant",
    "url": "https://theonlyconstant.nl"
  },
  "datePublished": "[datum]",
  "dateModified": "[datum]"
}
</script>
```

### FAQ secties - FAQPage schema

Elke blogpost heeft een "Veelgestelde vragen" sectie. Voeg per blogpost automatisch FAQPage schema toe op basis van de FAQ content:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Vraag tekst]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Antwoord tekst]"
      }
    }
  ]
}
</script>
```

Dit kan automatisch gegenereerd worden door de FAQ sectie in de markdown te parsen: elke **bold** regel is een vraag, de tekst erna tot de volgende bold regel is het antwoord.

---

## Stap 4: Open Graph tags

Per pagina in de `<head>`:

```html
<meta property="og:title" content="[pagina titel]">
<meta property="og:description" content="[pagina beschrijving]">
<meta property="og:type" content="article">
<meta property="og:url" content="[pagina URL]">
<meta property="og:site_name" content="The Only Constant">
```

---

## Stap 5: Bestaande pagina's optimaliseren

### Homepage (target keyword: "ai consultancy", 880 zoekvolume)

- H1 moet bevatten: "AI Consultancy"
- Drie blokken naar de servicepagina's met keyword-rijke anchor tekst:
  - "AI workshops voor bedrijven" (linkt naar /nl/educate)
  - "AI automatisering" (linkt naar /nl/automate)
  - "AI proof of concepts" (linkt naar /nl/innovate)
- Korte beschrijving van doelgroep (retail, manufacturing, high-tech, 50+ FTE)

### /nl/automate (target keyword: "ai automatisering", 590 zoekvolume)

- H1 moet bevatten: "AI Automatisering"
- Eerste alinea moet het keyword "ai automatisering" bevatten in een natuurlijke zin (citeerbare passage voor AI search, 30-50 woorden)
- Voeg een FAQ sectie toe onderaan (gebruik de FAQ uit de blog "AI automatisering begint niet bij de tool")
- Internal link naar homepage met anchor tekst "ai consultancy"
- Internal link naar /nl/educate met anchor tekst "ai workshop"

### /nl/educate (target keyword: "ai workshop", 720 zoekvolume)

- H1 moet bevatten: "AI Workshop voor Bedrijven"
- Voeg prijsindicatie toe (1.500 - 3.500 euro)
- Voeg een FAQ sectie toe (gebruik de FAQ uit de blog "AI workshop voor bedrijven")
- Internal links naar /nl/automate en homepage

---

## Stap 6: Blog posts publiceren

### 6.1 Markdown bestanden

De 19 blogs staan als `.md` bestanden in deze map. De structuur van elk bestand:

```
Titel
Subtitle

By
The Only Constant
•
Datum
tag1
tag2
tag3

[Body tekst met markdown formatting]

---

[CTA sectie]

---

## Veelgestelde vragen over [onderwerp]

**Vraag?**
Antwoord tekst.

**Vraag?**
Antwoord tekst.
```

### 6.2 URL slugs

Gebruik deze slugs (afgeleid van de bestandsnamen):

| Bestand | URL slug |
|---------|----------|
| 2026-04-03-ai-automatisering.md | /nl/blog/ai-automatisering |
| 2026-04-03-ai-consultancy-kiezen.md | /nl/blog/ai-consultancy-kiezen |
| 2026-04-03-ai-drift.md | /nl/blog/ai-drift |
| 2026-04-03-ai-governance.md | /nl/blog/ai-governance |
| 2026-04-03-ai-proof-of-concept.md | /nl/blog/ai-proof-of-concept |
| 2026-04-03-ai-readiness.md | /nl/blog/ai-readiness |
| 2026-04-03-ai-strategie-90-dagen.md | /nl/blog/ai-strategie-90-dagen |
| 2026-04-03-ai-workshop-bedrijven.md | /nl/blog/ai-workshop-bedrijven |
| 2026-04-03-follow-the-friction.md | /nl/blog/follow-the-friction |
| 2026-04-03-junior-gap.md | /nl/blog/junior-gap |
| 2026-04-03-meaning-test.md | /nl/blog/meaning-test |
| 2026-04-03-proof-before-scale.md | /nl/blog/proof-before-scale |
| 2026-04-03-shadow-ai.md | /nl/blog/shadow-ai |
| 2026-04-03-solutioneering.md | /nl/blog/solutioneering |
| 2026-04-03-zombie-pilots.md | /nl/blog/zombie-pilots |
| 2026-04-04-ai-agents-bedrijven.md | /nl/blog/ai-agents-bedrijven |
| 2026-04-04-ai-eu-ai-act.md | /nl/blog/ai-eu-ai-act |
| 2026-04-04-vier-vormen-ai.md | /nl/blog/vier-vormen-ai |
| 2026-04-04-wat-is-ai-strategie.md | /nl/blog/wat-is-ai-strategie |

**Belangrijk**: de blogs bevatten interne links in het formaat `[tekst](/nl/blog/slug)`. Deze moeten werken als relatieve links op de site. Controleer dat alle 19 slugs correct zijn aangemaakt, anders breken de cross-links.

### 6.3 Tags

Elke blog heeft tags in de header (na de datum). Gebruik deze als blog-categorieën of tags op de site.

### 6.4 Auteur

Alle blogs zijn van "The Only Constant" (met Maarten Mantje als auteur in de schema markup). Voeg een auteur-bio toe onderaan elke blogpost:

> **Maarten Mantje** is oprichter van The Only Constant, een AI consultancy voor marketing en organisatie-innovatie. Hij helpt organisaties ontdekken wat AI mogelijk maakt en bouwt het bewijs dat het werkt.

### 6.5 CTA sectie

Elke blog heeft een CTA sectie tussen twee horizontale lijnen (`---`). Render deze als een visueel onderscheiden blok (andere achtergrondkleur, of een card-achtige styling). De CTA bevat links naar service pagina's. Zorg dat deze links correct verwijzen.

### 6.6 FAQ sectie

Elke blog eindigt met een "Veelgestelde vragen" sectie. Render deze als een accordeon/dropdown component als dat mogelijk is in het framework. Voeg automatisch FAQPage schema markup toe (zie stap 3).

---

## Stap 7: Internal linking structuur

De blogs bevatten cross-links naar andere blogs in het formaat `[anchor tekst](/nl/blog/slug)`. Er zijn ook links naar service pagina's. Overzicht van alle links die moeten werken:

### Service pagina links (in CTA's)
- `https://theonlyconstant.nl/nl/educate` - AI Workshop
- `https://theonlyconstant.nl/nl/automate` - AI Automatisering
- `https://theonlyconstant.nl/nl/innovate` - Innovation Sprint

### Blog cross-links (relatieve links)
Elke blog linkt naar 2-3 andere blogs. Totaal 45+ interne links. Deze werken alleen als de slugs exact overeenkomen met de tabel in stap 6.2.

---

## Stap 8: Pillar pages (drie overzichtspagina's)

Maak drie vaste pagina's (geen blogposts) die fungeren als hub voor de blog clusters:

### Pillar 1: AI-strategie: van vraag naar bewijs
- URL: `/nl/ai-strategie`
- Korte intro over AI-strategie
- Links naar: wat-is-ai-strategie, ai-strategie-90-dagen, ai-readiness, follow-the-friction, solutioneering, shadow-ai
- Link naar /nl/educate en /nl/innovate

### Pillar 2: AI-automatisering: van frictie naar werkende oplossing
- URL: `/nl/ai-automatisering-gids`
- Korte intro over AI-automatisering
- Links naar: ai-automatisering, ai-agents-bedrijven, vier-vormen-ai, proof-before-scale, zombie-pilots, ai-drift
- Link naar /nl/automate

### Pillar 3: AI en mensen: werk beter maken
- URL: `/nl/ai-en-mensen`
- Korte intro over de menselijke kant van AI
- Links naar: meaning-test, junior-gap, ai-governance, ai-eu-ai-act, ai-workshop-bedrijven, ai-consultancy-kiezen, ai-proof-of-concept
- Link naar /nl/educate

Elke blog moet op zijn beurt ook teruglinken naar de relevante pillar page. Dit kan automatisch door onderaan elke blog een "Meer over dit onderwerp" blok te tonen met een link naar de pillar page.

---

## Stap 9: Blog overzichtspagina

De /nl/blog pagina moet alle 19 blogs tonen met:
- Titel
- Subtitle (eerste regel na de titel)
- Datum
- Tags
- Link naar het volledige artikel

Sorteer op datum (nieuwste eerst). Optioneel: filter op tag.

---

## Stap 10: Google Search Console

Als dit nog niet gekoppeld is:
1. Ga naar search.google.com/search-console
2. Voeg theonlyconstant.nl toe als property
3. Verifieer via DNS of HTML tag
4. Dien de sitemap in (sitemap.xml)

---

## Checklist

### Technisch (stap 1-4)
- [ ] sitemap.xml gegenereerd en automatisch updatend
- [ ] robots.txt aangemaakt met AI crawler toegang
- [ ] llms.txt aangemaakt in site root
- [ ] Canonical URLs op alle pagina's
- [ ] Unieke title tags per pagina
- [ ] Unieke meta descriptions per pagina
- [ ] Organization schema op homepage
- [ ] Service schema op service pagina's
- [ ] Article + Person schema op blog posts
- [ ] FAQPage schema op blog posts (automatisch uit FAQ sectie)
- [ ] Open Graph tags op alle pagina's

### Bestaande pagina's (stap 5)
- [ ] Homepage H1 bevat "AI Consultancy"
- [ ] Homepage linkt naar services met keyword anchor tekst
- [ ] /nl/automate H1 bevat "AI Automatisering" + FAQ sectie
- [ ] /nl/educate H1 bevat "AI Workshop" + prijzen + FAQ sectie

### Blog publicatie (stap 6-7)
- [ ] 19 blogs gepubliceerd met correcte slugs
- [ ] Alle interne cross-links werken
- [ ] Alle service pagina links in CTA's werken
- [ ] FAQ secties renderen als accordeon/dropdown
- [ ] Auteur-bio onderaan elke blog
- [ ] CTA sectie visueel onderscheiden

### Pillar pages (stap 8)
- [ ] /nl/ai-strategie aangemaakt met links naar relevante blogs
- [ ] /nl/ai-automatisering-gids aangemaakt met links
- [ ] /nl/ai-en-mensen aangemaakt met links
- [ ] Blogs linken terug naar pillar pages

### Overig (stap 9-10)
- [ ] Blog overzichtspagina toont alle 19 blogs
- [ ] Google Search Console gekoppeld
- [ ] Sitemap ingediend bij Google

---

Vragen? Ping Maarten.
