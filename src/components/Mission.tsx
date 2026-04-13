"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";
import Image from "next/image";

const principles = [
  {
    title: "People first",
    description:
      "Everything starts with the person. We invest in people before we invest in businesses. Relationships, integrity, and trust are non-negotiable \u2014 we back operators we believe in and build alongside them for the long term.",
  },
  {
    title: "We fit in where we\u2019re needed",
    description:
      "We tailor our involvement to what the business actually needs. Sometimes that\u2019s just capital. Sometimes it\u2019s a small stake and light guidance. Sometimes we roll up our sleeves and become full partners. There\u2019s no formula \u2014 just what works.",
  },
  {
    title: "Spread the light",
    description:
      "We exist to create opportunity for people who would otherwise be held back. More jobs, more growth, more capability. Africa and emerging markets can\u2019t afford to be left behind \u2014 and with the right execution, they won\u2019t be.",
  },
];

export function Mission() {
  return (
    <section className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/earth-africa.png"
          alt="Earth from space showing Africa and surrounding continents"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              Our Mission
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs mx-auto" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/90 leading-[1.15] max-w-3xl mx-auto"
          >
            What we believe
          </TextReveal>
          <FadeIn anim="blur-up" delay={0.25} duration={0.8}>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/40 max-w-xl mx-auto leading-relaxed font-light">
              Three principles guide everything we do.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={0.15 + i * 0.12} anim="blur-scale" duration={0.8}>
              <div className="glass-card group h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl">
                <h3 className="text-base sm:text-lg font-semibold text-white/80 group-hover:text-white/95 transition-colors duration-300 mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-white/40 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
