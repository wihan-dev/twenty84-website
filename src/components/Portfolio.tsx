"use client";

import { FadeIn } from "./FadeIn";

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
    <section id="portfolio" className="py-36 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-5">
            Portfolio
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-2xl mb-20 md:mb-28">
            Businesses we&apos;re
            <span className="text-white/25"> building alongside.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={i * 0.08}>
              <div className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500">
                {/* Status dot */}
                <div className="absolute top-8 right-8 md:top-10 md:right-10">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500/50 transition-colors duration-500" />
                    {company.status}
                  </span>
                </div>

                {/* Content */}
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/15">
                  {company.role}
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="mt-4 text-[14px] text-white/22 leading-relaxed max-w-sm">
                  {company.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-4 h-4 text-white/25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
