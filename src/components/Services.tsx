"use client";

import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "AI Implementation",
    description:
      "End-to-end AI audits and implementation. Automation, workflows, and intelligent systems that transform how businesses operate.",
    tags: ["Automation", "Workflows", "Integrations"],
  },
  {
    title: "Operational Systems",
    description:
      "CRMs, dashboards, and processes that create structure and scalability. We build the infrastructure that lets businesses grow.",
    tags: ["CRM", "Dashboards", "Process Design"],
  },
  {
    title: "Growth Strategy",
    description:
      "Sales systems, positioning, and funnels designed to move the needle. Strategy backed by execution, not just theory.",
    tags: ["Sales", "Funnels", "Positioning"],
  },
  {
    title: "Capital & Ventures",
    description:
      "We invest in and acquire businesses with strong operators. Capital meets hands-on partnership for long-term equity creation.",
    tags: ["Investment", "Acquisition", "Partnership"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="gradient-line mb-20" />

        <FadeIn>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/25 mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 leading-[1.2] max-w-lg">
            Capital, systems, and AI
            <br />
            <span className="text-white/35">under one roof.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="group p-8 md:p-10 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors duration-500 h-full">
                <h3 className="text-xl font-light text-white/80 group-hover:text-white/95 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-white/25 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono tracking-wide text-white/20 border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
