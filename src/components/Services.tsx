"use client";

import { FadeIn } from "./FadeIn";

const services = [
  {
    number: "01",
    title: "AI Implementation",
    description:
      "End-to-end AI audits and implementation. Automation, workflows, and intelligent systems that transform how businesses operate.",
    tags: ["Automation", "Workflows", "Integrations"],
  },
  {
    number: "02",
    title: "Operational Systems",
    description:
      "CRMs, dashboards, and processes that create structure and scalability. We build the infrastructure that lets businesses grow.",
    tags: ["CRM", "Dashboards", "Process Design"],
  },
  {
    number: "03",
    title: "Growth Strategy",
    description:
      "Sales systems, positioning, and funnels designed to move the needle. Strategy backed by execution, not just theory.",
    tags: ["Sales", "Funnels", "Positioning"],
  },
  {
    number: "04",
    title: "Capital & Ventures",
    description:
      "We invest in and acquire businesses with strong operators. Capital meets hands-on partnership for long-term equity creation.",
    tags: ["Investment", "Acquisition", "Partnership"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-36 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-5">
            What We Do
          </p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-2xl mb-20 md:mb-28">
            Capital, systems, and AI
            <span className="text-white/25"> under one roof.</span>
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-t border-white/[0.04] first:border-t-0 hover:bg-white/[0.01] transition-colors duration-500 -mx-6 md:-mx-10 px-6 md:px-10 rounded-lg">
                {/* Number + Title */}
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-[10px] text-white/10 tracking-wider mt-1.5">
                    {service.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-[14px] md:text-[15px] text-white/25 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-3 flex flex-wrap md:justify-end gap-2 items-start">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider text-white/15 border border-white/[0.05] rounded-full px-3 py-1 group-hover:border-white/[0.08] group-hover:text-white/25 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
