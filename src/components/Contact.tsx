"use client";

import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-36 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="relative">
          {/* Ambient glow — clipped by overflow-hidden on section */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[400px] bg-[radial-gradient(ellipse,_rgba(40,80,160,0.03)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
            {/* Left — heading */}
            <div>
              <FadeIn>
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4 sm:mb-5">
                  Contact
                </p>
                <h2 className="text-[clamp(1.75rem,5vw,4rem)] font-extralight tracking-tight text-white/85 leading-[1.15]">
                  Let&apos;s build
                  <span className="text-white/25"> something together.</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="mt-6 sm:mt-8 text-[15px] md:text-[17px] text-white/30 leading-relaxed max-w-md font-light">
                  Whether you&apos;re looking for a growth partner, need AI
                  implementation, or want to explore what&apos;s possible —
                  we&apos;d like to hear from you.
                </p>
              </FadeIn>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col justify-center">
              <FadeIn delay={0.2}>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:hello@twenty84.ai"
                    className="group flex items-center justify-between p-5 sm:p-6 rounded-xl border border-white/[0.05] hover:border-white/[0.10] active:border-white/[0.10] bg-white/[0.01] hover:bg-white/[0.03] active:bg-white/[0.03] transition-all duration-500"
                  >
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 mb-1">
                        Email
                      </p>
                      <p className="text-[15px] sm:text-base text-white/60 group-hover:text-white/85 transition-colors duration-300">
                        hello@twenty84.ai
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.twenty84.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 sm:p-6 rounded-xl border border-white/[0.05] hover:border-white/[0.10] active:border-white/[0.10] bg-white/[0.01] hover:bg-white/[0.03] active:bg-white/[0.03] transition-all duration-500"
                  >
                    <div>
                      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 mb-1">
                        Website
                      </p>
                      <p className="text-[15px] sm:text-base text-white/60 group-hover:text-white/85 transition-colors duration-300">
                        www.twenty84.ai
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
