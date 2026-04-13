"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

const contrasts = [
  {
    statement: "Not a traditional agency.",
    explanation: "We take equity. We have skin in the game. Our success is tied to yours.",
  },
  {
    statement: "Not a traditional investor.",
    explanation: "We don\u2019t sit on boards and wait for reports. We get in the trenches and build alongside you.",
  },
  {
    statement: "Not a first-world copycat.",
    explanation: "We\u2019re building for Africa and emerging markets, with local context. This is not a Western playbook copy-pasted.",
  },
  {
    statement: "Not short-term focused.",
    explanation: "We think in decades, not quarters. We\u2019re building for the long term.",
  },
];

export function Contrast() {
  return (
    <section className="py-20 sm:py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="mb-16 sm:mb-24">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              Positioning
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/90 leading-[1.15] max-w-3xl"
          >
            What we are not
          </TextReveal>
        </div>

        <div className="space-y-0">
          {contrasts.map((item, i) => (
            <FadeIn key={item.statement} delay={i * 0.1} anim="slide-right" duration={0.8}>
              <div className="group grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-14 border-t border-white/[0.05] first:border-t-0">
                <div className="md:col-span-4">
                  <h3 className="text-[15px] sm:text-base md:text-lg font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300">
                    {item.statement}
                  </h3>
                </div>
                <div className="md:col-span-8 pl-0">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/30 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>
      </div>
    </section>
  );
}
