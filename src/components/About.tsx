"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

const principles = [
  {
    number: "01",
    title: "People First",
    description:
      "Relationships are everything. We find good people, bet on them, and empower them to build something meaningful.",
  },
  {
    number: "02",
    title: "Building Africa",
    description:
      "Enormous, untapped potential exists across the continent. We are here to build it — not chase saturated markets.",
  },
  {
    number: "03",
    title: "AI as a Lever",
    description:
      "We are deeply bullish on AI as a transformational layer across every type of business, not just tech companies.",
  },
  {
    number: "04",
    title: "Operator Mindset",
    description:
      "We've built things. We understand the grind. We get our hands dirty and work alongside the people we back.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-36 md:py-48">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Section header */}
        <div className="mb-12 sm:mb-20 md:mb-28">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4 sm:mb-5">
              About
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-3xl"
          >
            More than investors. More than operators.
          </TextReveal>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
          {/* Left — manifesto */}
          <FadeIn delay={0.1} anim="blur-up" duration={1}>
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent hidden lg:block" />
              <blockquote className="text-base sm:text-lg md:text-xl text-white/30 leading-relaxed font-light">
                Most investors don&apos;t help operationally. Most agencies
                don&apos;t have ownership or alignment. Twenty84 fills that gap —
                we take equity, bring systems, and build alongside the founders
                we partner with.
              </blockquote>
              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <LineReveal className="w-8" delay={0.2} />
                <FadeIn anim="blur-up" delay={0.3} duration={0.6}>
                  <p className="text-[12px] font-mono tracking-wide text-white/20">
                    The gap we fill
                  </p>
                </FadeIn>
              </div>
            </div>
          </FadeIn>

          {/* Right — principle cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 sm:gap-y-12">
            {principles.map((p, i) => (
              <FadeIn key={p.number} delay={0.08 + i * 0.1} anim="blur-scale">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-white/15 tracking-wider">
                      {p.number}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.05] group-hover:bg-white/[0.08] transition-colors duration-500" />
                  </div>
                  <h3 className="text-[15px] font-medium text-white/60 group-hover:text-white/85 transition-colors duration-300 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-white/25 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
