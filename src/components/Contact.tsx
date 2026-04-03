"use client";

import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="gradient-line mb-20" />

        <div className="max-w-2xl">
          <FadeIn>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/25 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 leading-[1.2]">
              Let&apos;s build
              <br />
              <span className="text-white/35">something together.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-white/30 leading-relaxed max-w-md">
              Whether you&apos;re looking for a growth partner, need AI implementation,
              or want to explore what&apos;s possible — we&apos;d like to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@twenty84.ai"
                className="inline-flex items-center justify-center text-sm tracking-wide bg-white/[0.06] hover:bg-white/[0.10] text-white/70 hover:text-white/90 px-8 py-3.5 rounded-full transition-all duration-300 border border-white/[0.06]"
              >
                hello@twenty84.ai
              </a>
              <a
                href="https://www.twenty84.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm tracking-wide text-white/40 hover:text-white/70 px-8 py-3.5 transition-colors duration-300"
              >
                www.twenty84.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
