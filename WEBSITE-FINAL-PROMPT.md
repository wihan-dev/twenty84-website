# Twenty84.ai Website — Final Master Update Prompt

Paste everything below the line into Claude Code. This is the single, complete prompt — ignore any earlier update prompts.

---

I need a comprehensive content and structural update to the Twenty84.ai website. The goal is to align the site with our actual positioning and strategy while keeping the design minimalistic and premium. Do NOT change the overall dark aesthetic, animation system, color scheme, fonts, or visual style. This is purely content, copy, and section structure.

Read the AGENTS.md file first, and check `node_modules/next/dist/docs/` for any Next.js-specific guidance before writing code.

**Important global change:** Everywhere the website currently says "Africa" on its own, change it to "Africa and emerging markets" (or "African and emerging-market" when used as an adjective). This applies across ALL components.

---

## 1. Hero — Sharpen the proposition

The current hero is generic. Replace with copy that clearly states our three core levers and sounds like an operator, not a PE fund.

**Changes to `src/components/Hero.tsx`:**
- Change the tagline (the `<motion.p>` above the h1) to: `Capital. Systems. AI.`
- Change the h1 headline to: `We partner with businesses to grow them using capital, systems, and AI`
- Change the body paragraph to: `Twenty84 is a hybrid venture platform that acquires and scales businesses across Africa and emerging markets. We bring smart capital, operational systems, and AI implementation — not just funding, but the tools to actually grow.`
- Keep the two CTA buttons as-is.

---

## 2. Thesis — Reframe as opportunity, not problems

The current Thesis section is negative (listing problems like "Lack of Capital" and "Funding Inequality"). Reframe it around the massive opportunity and clearly define the two types of businesses we invest in.

**Changes to `src/components/Thesis.tsx`:**

Keep the section subtitle "Thesis" and heading "Diamonds in the rough".

Change the subheading from "Africa doesn't lack talent — it lacks access" to: `Massive opportunity, ready for good execution`

Replace the body paragraph with: `Africa and emerging markets are full of untapped potential — talented operators, growing consumer markets, and businesses ready to scale. What's often missing is the capital, systems, and strategic support to unlock it. That's where we come in.`

Replace the THREE problem cards with TWO cards in a `sm:grid-cols-2` grid (instead of current `sm:grid-cols-3`). Same card styling (rounded-2xl, border, bg-white/[0.02], padding p-8 sm:p-10, hover state). Remove the SVG icons — just use a title and description.

**Card 1:**
- Title: `Cash-Generative Physical Businesses`
- Description: `Businesses rooted in real-world activity — retail, services, property, hospitality. Things people will always need, with a natural moat against disruption. Strong community potential, and they pay for themselves. We layer on systems, brand, and smart capital to accelerate what's already working.`

**Card 2:**
- Title: `Tech & AI Businesses`
- Description: `High-growth, innovation-driven businesses adapted for African and emerging-market context. The same tools available in Silicon Valley are now accessible here. We back founders who take proven global plays, reshape them for local markets, and create outsized value.`

Replace the old "Hidden talent - missed opportunities, slow economic growth" footer text with this centered line below the two cards:
`If you're building something real and generating revenue — regardless of size, industry, or how many people you employ — we want to hear from you.`
Style: `text-sm sm:text-base text-white/40 text-center mt-12 sm:mt-16 max-w-2xl mx-auto leading-relaxed`

---

## 3. Mission — Rewrite as three principles

The Mission section currently has a mission statement and two cards ("Unsexy is underrated" / "We invest in people first"). Replace the content to communicate our three core principles.

**Changes to `src/components/Mission.tsx`:**

Keep the section subtitle "Our Mission" and the Earth/Africa background image.

Change the heading from "We got started 2025 with a single mission" to: `What we believe`

Remove the two large mission statement paragraphs ("To give individuals an opportunity..." and "Our mission is to multiply the seeds...").

Replace with a single intro line (same style as the old tagline — `text-xl sm:text-2xl md:text-3xl text-white/70 leading-relaxed font-light` centered):
`Three principles guide everything we do.`

Replace the two cards with THREE cards in a `sm:grid-cols-3` grid (use `gap-6 sm:gap-8`). Same card styling as before. Each card has a title and description:

**Card 1:**
- Title: `People first`
- Description: `Everything starts with the person. We invest in people before we invest in businesses. Relationships, integrity, and trust are non-negotiable — we back operators we believe in and build alongside them for the long term.`

**Card 2:**
- Title: `We fit in where we're needed`
- Description: `We tailor our involvement to what the business actually needs. Sometimes that's just capital. Sometimes it's a small stake and light guidance. Sometimes we roll up our sleeves and become full partners. There's no formula — just what works.`

**Card 3:**
- Title: `Spread the light`
- Description: `We exist to create opportunity for people who would otherwise be held back. More jobs, more growth, more capability. Africa and emerging markets can't afford to be left behind — and with the right execution, they won't be.`

---

## 4. Investment — Restructure as three value-adds

The current Investment section has abstract pillars. Replace with the three concrete things Twenty84 brings to a business.

**Changes to `src/components/Investment.tsx`:**

Keep the section subtitle "Investment Approach" and heading "How we invest".

Replace the intro paragraph with: `When we partner with a business, we bring three things to the table — depending on what the business needs.`

Replace the three pillars with these three:

**01 — Capital**
`We invest capital into businesses that need it to grow. Smart, targeted capital allocated to the highest-leverage areas — whether that's expansion, inventory, hiring, or product development. Our capital is designed to accelerate growth, not just extend runway.`

**02 — Consulting & Operations**
`Through our consulting arm, we help operators get their structures and systems right so they can scale. Finance, operations, workflows, AI implementation — we work hands-on to build the infrastructure that turns a good business into a great one.`

**03 — Distribution & Brand (Studio 84)**
`Through Studio 84, our marketing and brand division, we help portfolio companies grow their presence — marketing, ads, content, websites, and brand strategy. We help businesses look and operate at a premium standard, and actually reach the customers they deserve.`

Keep the "We get in the trenches" quote and supporting paragraph at the bottom. Update the supporting paragraph to: `We bring more than funding. We bring operational expertise, AI capability, and a full marketing engine. We're in the trenches with our partners — working side by side to solve problems, execute strategy, and unlock the next stage of growth.`

---

## 5. Remove Portfolio section

Do NOT add the Portfolio component to the main page. Remove any Portfolio import if present in `src/app/page.tsx`. We're keeping this off the site for now.

Do NOT add "Portfolio" to the navigation links or footer links.

---

## 6. About section — Operator tone + founder line

**Changes to `src/components/About.tsx`:**

Change the subtitle paragraph to: `We're builders and co-owners — patient, relational, and values-driven. We multiply the seeds of potential already planted across Africa and emerging markets.`

In the "Our Approach" card, change the text to: `We allocate capital to the highest-leverage areas — marketing, systems, talent, and expansion. Then we roll up our sleeves and help execute. Our capital accelerates growth, not just extends runway.`

In the "Our Values" card, change the text to: `People first. Humble, capable operators with integrity and long-term ambition. We value stewardship over speed, and we back founders who understand their communities and customers deeply.`

After the two cards, add a centered line below them:
`Founded by Wihan Joubert — a 23-year-old operator building from South Africa.`
Style: `text-sm sm:text-base text-white/30 text-center mt-12 sm:mt-16 font-light`
Wrap it in a `<FadeIn anim="blur-up" delay={0.35} duration={0.8}>`.

---

## 7. New "What We're Not" section

Create a new component at `src/components/Contrast.tsx`. Place it between the About section and the Contact section on the page.

Use the same layout pattern as the Investment pillars (left/right grid with `md:grid-cols-12`, border-t dividers, same spacing). Use "use client", import FadeIn and TextReveal, same conventions as other components.

**Content:**
- Subtitle: `Positioning`
- Heading: `What we are not`
- Four contrast rows:
  1. **Not a traditional agency.** → `We take equity. We have skin in the game. Our success is tied to yours.`
  2. **Not a traditional investor.** → `We don't sit on boards and wait for reports. We get in the trenches and build alongside you.`
  3. **Not a first-world copycat.** → `We're building for Africa and emerging markets, with local context. This is not a Western playbook copy-pasted.`
  4. **Not short-term focused.** → `We think in decades, not quarters. We're building a modern African Berkshire Hathaway.`

No cards, no icons — just typography, spacing, and border dividers.

---

## 8. Footer — Add vision statement

**Changes to `src/components/Footer.tsx`:**

Add a line ABOVE the scripture blockquote:
`Building a modern African Berkshire Hathaway.`
Style: `text-lg sm:text-xl md:text-2xl font-light text-white/50 mb-8 sm:mb-10`
Wrap in `<FadeIn anim="blur-up" duration={1}>`.

---

## 9. Navigation — Keep clean

**Changes to `src/components/Navigation.tsx`:**
The nav links should be: Home, Thesis, Investment, About us, Contact. No Portfolio link.

**Changes to `src/components/Footer.tsx`:**
Footer links should be: Home, Thesis, Investment, Contact. No Portfolio link.

---

## Final section order on the page (`src/app/page.tsx`):

```tsx
<Navigation />
<main>
  <Hero />
  <Thesis />
  <Mission />
  <Investment />
  <About />
  <Contrast />
  <Contact />
</main>
<Footer />
```

Import the new Contrast component. Do NOT import Portfolio.

---

## Rules:
- Do NOT change the color scheme, fonts, animation library, or overall dark aesthetic
- Do NOT change the FadeIn / TextReveal / LineReveal animation components in `src/components/FadeIn.tsx`
- Do NOT change the Contact section or form
- Match existing component patterns for the new Contrast.tsx
- Replace "Africa" with "Africa and emerging markets" everywhere across ALL components
- Run `npm run build` after all changes to verify no TypeScript or build errors
