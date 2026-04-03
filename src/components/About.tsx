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
    <section id="about" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="gradient-line mb-20" />

        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <FadeIn>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/25 mb-4">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 leading-[1.2]">
                More than investors.
                <br />
                <span className="text-white/35">More than operators.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-white/35 leading-relaxed max-w-md">
                Most investors don&apos;t help operationally. Most agencies don&apos;t have
                ownership or alignment. Twenty84 fills that gap — we take equity,
                bring systems, and build alongside the founders we partner with.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <FadeIn key={p.number} delay={i * 0.1}>
                  <div className="group">
                    <span className="font-mono text-[11px] text-white/15 tracking-wider">
                      {p.number}
                    </span>
                    <h3 className="mt-3 text-base font-medium text-white/70 group-hover:text-white/90 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/25 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
