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
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-light text-white/80 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-mono tracking-wide text-white/20 uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
