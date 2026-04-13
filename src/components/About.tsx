"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-12">
        <Image
          src="/images/shuttle-launch.png"
          alt="Space shuttle launching with dramatic clouds and smoke"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/70 to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              About us
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs mx-auto" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/90 leading-[1.15] max-w-3xl mx-auto mb-6"
          >
            We are not a traditional PE firm
          </TextReveal>
          <FadeIn anim="blur-up" delay={0.25} duration={0.8}>
            <p className="text-base sm:text-lg md:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed font-light">
              We&apos;re builders and co-owners. Patient, relational, and values-driven. We multiply the seeds of potential already planted across Africa and emerging markets.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          <FadeIn anim="blur-scale" delay={0.15} duration={0.8}>
            <div className="glass-card group h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl">
              <h3 className="text-base sm:text-lg font-semibold text-white/80 group-hover:text-white/95 transition-colors duration-300 mb-3">
                Our Approach
              </h3>
              <p className="text-sm sm:text-[15px] text-white/40 leading-relaxed">
                We allocate capital to the highest-leverage areas: marketing, systems, talent, and expansion. Then we roll up our sleeves and help execute. Our capital accelerates growth, not just extends runway.
              </p>
            </div>
          </FadeIn>
          <FadeIn anim="blur-scale" delay={0.25} duration={0.8}>
            <div className="glass-card group h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl">
              <h3 className="text-base sm:text-lg font-semibold text-white/80 group-hover:text-white/95 transition-colors duration-300 mb-3">
                Our Values
              </h3>
              <p className="text-sm sm:text-[15px] text-white/40 leading-relaxed">
                People first. Humble, capable operators with integrity and long-term ambition. We value stewardship over speed, and we back founders who understand their communities and customers deeply.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
