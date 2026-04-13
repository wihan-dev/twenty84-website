"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

const pillars = [
  {
    number: "01",
    title: "Capital",
    description:
      "We invest capital into businesses that need it to grow. Smart, targeted capital allocated to the highest-leverage areas, whether that\u2019s expansion, inventory, hiring, or product development. Our capital is designed to accelerate growth, not just extend runway.",
  },
  {
    number: "02",
    title: "Consulting & Operations",
    description:
      "Through our consulting arm, we help operators get their structures and systems right so they can scale. Finance, operations, workflows, AI implementation. We work hands-on to build the infrastructure that turns a good business into a great one.",
  },
  {
    number: "03",
    title: "Distribution & Brand (Studio 84)",
    description:
      "Through Studio 84, our marketing and brand division, we help portfolio companies grow their presence. Marketing, ads, content, websites, and brand strategy. We help businesses look and operate at a premium standard, and actually reach the customers they deserve.",
  },
];

const mandateCards = [
  {
    title: "Cash-Generative Physical Businesses",
    description:
      "Businesses rooted in real-world activity: retail, services, property, hospitality. Things people will always need, with a natural moat against disruption. We layer on systems, brand, and smart capital to accelerate what\u2019s already working.",
  },
  {
    title: "Tech & AI Businesses",
    description:
      "High-growth, innovation-driven businesses adapted for African and emerging-market context. We back founders who take proven global plays, reshape them for local markets, and create outsized value.",
  },
];

export function Investment() {
  return (
    <section id="investment" className="py-20 sm:py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              Investment Approach &amp; Mandate
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs mx-auto" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/90 leading-[1.15] max-w-2xl mx-auto mb-6"
          >
            How we invest
          </TextReveal>
          <FadeIn anim="blur-up" delay={0.25} duration={0.8}>
            <p className="text-base sm:text-lg md:text-xl text-white/35 max-w-3xl mx-auto leading-relaxed font-light">
              When we partner with a business, we bring three things to the table, depending on what the business needs.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-0 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1} anim="slide-right" duration={0.8}>
              <div className="group grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-14 border-t border-white/[0.05] first:border-t-0">
                <div className="md:col-span-4 flex items-start gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] text-white/15 tracking-wider mt-1 sm:mt-1.5">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                </div>
                <div className="md:col-span-8 pl-7 sm:pl-0">
                  <p className="text-sm sm:text-[15px] md:text-base text-white/35 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>

        <div className="mt-20 sm:mt-28 text-center">
          <FadeIn anim="blur-up" delay={0.1} duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              What we look for
            </p>
          </FadeIn>
          <LineReveal className="mb-10 sm:mb-12 max-w-xs mx-auto" delay={0.15} />

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {mandateCards.map((card, i) => (
              <FadeIn key={card.title} delay={0.15 + i * 0.12} anim="blur-scale" duration={0.8}>
                <div className="glass-card group relative h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl">
                  <h3 className="text-base sm:text-lg font-semibold text-white/80 group-hover:text-white/95 transition-colors duration-300 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-white/40 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn anim="blur-up" delay={0.3} duration={0.8}>
            <p className="text-sm sm:text-base text-white/35 mt-10 sm:mt-14 max-w-lg mx-auto leading-relaxed">
              Building something real? Generating revenue? We want to hear from you.
            </p>
          </FadeIn>
        </div>

        <FadeIn anim="blur-up" delay={0.3} duration={0.8}>
          <div className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center">
            <blockquote className="text-base sm:text-lg md:text-xl text-white/30 leading-relaxed font-light italic">
              &ldquo;We get in the trenches.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm sm:text-[15px] text-white/25 leading-relaxed max-w-lg mx-auto">
              Operational expertise, AI capability, and a full marketing engine. Side by side with our partners.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
