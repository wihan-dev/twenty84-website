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
    <section id="portfolio" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="gradient-line mb-20" />

        <FadeIn>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/25 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 leading-[1.2] max-w-lg">
            Businesses we&apos;re
            <br />
            <span className="text-white/35">building alongside.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-px">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={i * 0.08}>
              <div className="group grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-lg hover:bg-white/[0.02] transition-colors duration-500 border border-transparent hover:border-white/[0.04]">
                <div className="md:col-span-3 flex items-start justify-between md:block">
                  <h3 className="text-lg font-medium text-white/70 group-hover:text-white/95 transition-colors">
                    {company.name}
                  </h3>
                  <span className="text-[11px] font-mono text-white/20 tracking-wide md:mt-1 md:block">
                    {company.role}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[15px] text-white/30 leading-relaxed">
                    {company.description}
                  </p>
                </div>
                <div className="md:col-span-2 flex items-start justify-end">
                  <span className="text-[11px] font-mono tracking-wider text-white/15 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
                    {company.status}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
