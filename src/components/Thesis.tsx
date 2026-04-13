"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

const cards = [
  {
    title: "Lack of Capital",
    description:
      "Talented founders lack access to capital \u2014 traditional funding is bureaucratic, slow, and inaccessible to most. Potential dies before businesses can even begin.",
    icon: (
      <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Lack of Support",
    description:
      "Visionaries understand their markets but lack operational systems, growth playbooks, and strategic guidance to reach the next stage.",
    icon: (
      <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Untapped Opportunity",
    description:
      "While first-world markets are saturated, Africa and emerging markets are wide open \u2014 massive potential waiting to be capitalised on with good execution.",
    icon: (
      <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.516-3.434 1.404-4.83" />
      </svg>
    ),
  },
];

export function Thesis() {
  return (
    <section id="thesis" className="relative py-20 sm:py-32 md:py-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(60,90,160,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn anim="blur-up" duration={0.7}>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
              Thesis
            </p>
          </FadeIn>
          <LineReveal className="mb-8 sm:mb-10 max-w-xs mx-auto" delay={0.1} />
          <TextReveal
            as="h2"
            delay={0.15}
            className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/90 leading-[1.15] max-w-3xl mx-auto"
          >
            Diamonds in the rough
          </TextReveal>
          <FadeIn anim="blur-up" delay={0.25} duration={0.8}>
            <p className="mt-5 text-lg sm:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed font-light">
              Massive opportunity, ready for good execution
            </p>
          </FadeIn>
        </div>

        <FadeIn anim="blur-up" delay={0.15} duration={0.8}>
          <p className="text-base sm:text-lg md:text-xl text-white/35 max-w-3xl mx-auto text-center leading-relaxed mb-16 sm:mb-20">
            Africa and emerging markets are full of untapped potential. Talented operators, growing consumer markets, and businesses ready to scale. What&apos;s often missing is the right capital, systems, and support to unlock it.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-16 sm:mb-20">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.12} anim="blur-scale" duration={0.8}>
              <div className="glass-card group relative h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl">
                <div className="mb-5">
                  {card.icon}
                </div>
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

        <FadeIn anim="blur-up" delay={0.2} duration={1}>
          <p className="text-[12px] font-mono tracking-[0.15em] uppercase text-white/20 text-center">
            The opportunity is enormous. The talent is here. What&apos;s missing is the right partner.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
