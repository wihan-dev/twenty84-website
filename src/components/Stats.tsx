"use client";

import { FadeIn } from "./FadeIn";

const stats = [
  { value: "5+", label: "Portfolio companies" },
  { value: "100%", label: "AI-first approach" },
  { value: "10yr", label: "Vision horizon" },
  { value: "Africa", label: "Built for the continent" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative border-y border-white/[0.04] py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="relative text-center group">
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/[0.05] hidden md:block" />
                  )}
                  <p className="text-3xl md:text-4xl font-extralight text-white/75 tracking-tight group-hover:text-white/90 transition-colors duration-500">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[10px] font-mono tracking-[0.25em] text-white/15 uppercase">
                    {stat.label}
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
