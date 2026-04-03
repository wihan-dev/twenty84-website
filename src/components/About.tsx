"use client";

import { FadeIn } from "./FadeIn";

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
    <section id="about" className="relative py-36 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <FadeIn>
          <div className="mb-20 md:mb-28">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-5">
              About
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-3xl">
              More than investors.
              <span className="text-white/25"> More than operators.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left — manifesto */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent hidden lg:block" />
              <blockquote className="text-lg md:text-xl text-white/30 leading-relaxed font-light">
                Most investors don&apos;t help operationally. Most agencies
                don&apos;t have ownership or alignment. Twenty84 fills that gap —
                we take equity, bring systems, and build alongside the founders
                we partner with.
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-px bg-white/10" />
                <p className="text-[12px] font-mono tracking-wide text-white/15">
                  The gap we fill
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — principle cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {principles.map((p, i) => (
              <FadeIn key={p.number} delay={0.1 + i * 0.08}>
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-white/12 tracking-wider">
                      {p.number}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors duration-500" />
                  </div>
                  <h3 className="text-[15px] font-medium text-white/60 group-hover:text-white/85 transition-colors duration-300 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-white/20 leading-relaxed">
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
