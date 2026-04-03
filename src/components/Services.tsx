"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

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
    <section id="services" className="py-20 sm:py-36 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <FadeIn anim="blur-up" duration={0.7}>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4 sm:mb-5">
            What We Do
          </p>
        </FadeIn>
        <LineReveal className="mb-8 sm:mb-10 max-w-xs" delay={0.1} />
        <TextReveal
          as="h2"
          delay={0.15}
          className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15] max-w-2xl mb-12 sm:mb-20 md:mb-28"
        >
          Capital, systems, and AI under one roof.
        </TextReveal>

        <div className="space-y-0">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1} anim="slide-right" duration={0.8}>
              <div className="group grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-14 border-t border-white/[0.05] first:border-t-0">
                {/* Number + Title */}
                <div className="md:col-span-4 flex items-start gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] text-white/15 tracking-wider mt-1 sm:mt-1.5">
                    {service.number}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5 pl-7 sm:pl-0">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/30 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-3 flex flex-wrap md:justify-end gap-2 items-start pl-7 sm:pl-0">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono tracking-wider text-white/20 border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-white/[0.05]" />
        </div>
      </div>
    </section>
  );
}
