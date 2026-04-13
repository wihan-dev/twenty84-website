"use client";

import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <FadeIn anim="blur-up" duration={1}>
            <div className="mb-8 sm:mb-10" />
          </FadeIn>
          <FadeIn anim="blur-up" duration={1} delay={0.1}>
            <blockquote className="text-[14px] sm:text-[15px] md:text-base text-white/25 leading-relaxed italic font-light px-4">
              &ldquo;The kingdom of heaven is like a mustard seed, which a man took and planted in his field. Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants and becomes a tree, so that the birds come and perch in its branches.&rdquo;
            </blockquote>
            <p className="mt-4 text-[11px] font-mono tracking-wide text-white/15">Matthew 13:31-32</p>
          </FadeIn>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/20 uppercase">
              Twenty84
            </p>
            <p className="mt-1 text-[11px] text-white/12">
              &copy; {new Date().getFullYear()} Twenty84ai (Pty) Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            {[
              { label: "Home", href: "#" },
              { label: "Thesis", href: "#thesis" },
              { label: "Investment", href: "#investment" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-[12px] text-white/20 hover:text-white/45 transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
