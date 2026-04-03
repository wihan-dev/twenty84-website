"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

const companies = [
  {
    name: "Fabrikhunter",
    role: "Venture Partner",
    description:
      "High-end curated vintage retail brand. Revenue-generating with strong brand equity. Scaling to Cape Town.",
    status: "Active",
  },
  {
    name: "Yazi Research",
    role: "Strategic Partner",
    description:
      "High-growth SaaS platform. Strategic value through learnings that feed directly into our AI capabilities.",
    status: "Active",
  },
  {
    name: "Sola Labs",
    role: "AI Division",
    description:
      "AI implementation across Sub-Saharan Africa and emerging markets. End-to-end AI audits and deployment.",
    status: "Active",
  },
  {
    name: "Studio 84",
    role: "Brand & Marketing",
    description:
      "The brand and marketing arm. Building Twenty84's reputation as the leading venture platform in Africa.",
    status: "Active",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-36 md:py-48">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <FadeIn anim="blur-up" duration={0.7}>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4 sm:mb-5">
            Portfolio
          </p>
        </FadeIn>
        <LineReveal className="mb-8 sm:mb-10 max-w-xs" delay={0.1} />
        <TextReveal
          as="h2"
          delay={0.15}
          className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-2xl mb-12 sm:mb-20 md:mb-28"
        >
          Businesses we&apos;re building alongside.
        </TextReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={i * 0.1} anim="blur-scale" duration={0.8}>
              <div className="group relative p-6 sm:p-8 md:p-10 rounded-2xl border border-white/[0.05] hover:border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500">
                {/* Status dot */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500/60 transition-colors duration-500" />
                    {company.status}
                  </span>
                </div>

                {/* Content */}
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20">
                  {company.role}
                </span>
                <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] text-white/28 leading-relaxed max-w-sm">
                  {company.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
