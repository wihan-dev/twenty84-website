"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_rgba(40,80,160,0.04)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/20 mb-6">
              Venture Platform
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-extralight tracking-tight leading-[1.05] text-white/90"
          >
            We build businesses
            <br />
            <span className="text-white/30">for the future of Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 text-base md:text-[17px] text-white/25 max-w-lg leading-relaxed font-light"
          >
            A hybrid venture platform that acquires and scales businesses by
            combining capital, operational expertise, and AI-driven systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex items-center gap-5"
          >
            <a
              href="#about"
              className="group text-[13px] tracking-wide text-white/50 hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
            >
              <span className="border-b border-white/10 group-hover:border-white/30 pb-0.5 transition-colors duration-300">
                Learn more
              </span>
              <svg
                className="w-3.5 h-3.5 opacity-30 group-hover:opacity-60 transition-all duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-[13px] tracking-wide bg-white/[0.05] hover:bg-white/[0.10] text-white/60 hover:text-white/90 px-7 py-3 rounded-full transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12]"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/15 to-transparent"
        />
      </motion.div>
    </section>
  );
}
