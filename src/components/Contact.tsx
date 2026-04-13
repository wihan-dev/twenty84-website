"use client";

import { FadeIn, TextReveal, LineReveal } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 md:py-40 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[400px] bg-[radial-gradient(ellipse,_rgba(40,80,160,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <FadeIn anim="blur-up" duration={0.7}>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 mb-4 sm:mb-5">
                Contact
              </p>
            </FadeIn>
            <LineReveal className="mb-8 sm:mb-10 max-w-xs" delay={0.1} />
            <TextReveal
              as="h2"
              delay={0.15}
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-extralight tracking-tight text-white/90 leading-[1.15]"
            >
              Share Your Business Idea
            </TextReveal>

            <FadeIn delay={0.3} anim="blur-up" duration={0.8}>
              <p className="mt-6 sm:mt-8 text-base md:text-lg text-white/35 leading-relaxed max-w-md font-light">
                We&apos;re looking for exceptional founders and operators. Whether you need capital, systems, or a growth partner, we&apos;d like to hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} anim="blur-up" duration={0.8}>
              <div className="mt-8 sm:mt-12 space-y-3">
                <a
                  href="mailto:hello@twenty84.ai"
                  className="group flex items-center gap-3 text-[13px] text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hello@twenty84.ai
                </a>
                <a
                  href="https://www.twenty84.ai"
                  className="group flex items-center gap-3 text-[13px] text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.516-3.434 1.404-4.83" />
                  </svg>
                  www.twenty84.ai
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-center">
            <FadeIn anim="blur-scale" delay={0.2} duration={0.8}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="glass-card space-y-5 p-7 sm:p-9 rounded-2xl"
              >
                <div>
                  <label htmlFor="name" className="block text-[12px] font-mono tracking-wide text-white/30 mb-2">
                    Your full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/15 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[12px] font-mono tracking-wide text-white/30 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/15 focus:bg-white/[0.05] transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="idea" className="block text-[12px] font-mono tracking-wide text-white/30 mb-2">
                    Your business idea
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    rows={5}
                    placeholder="Tell us about your business idea, the problem you're solving, and your vision..."
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white/80 placeholder:text-white/15 focus:outline-none focus:border-white/15 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white/[0.08] hover:bg-white/[0.14] text-white/70 hover:text-white/90 py-3 rounded-lg text-[13px] tracking-wide font-medium transition-all duration-300 border border-white/[0.08] hover:border-white/[0.15]"
                >
                  Submit Your Idea
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
