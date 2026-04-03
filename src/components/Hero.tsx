"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="font-mono text-[13px] tracking-[0.4em] uppercase text-white/30 mb-8">
            Capital &middot; Systems &middot; AI
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-white/95"
        >
          We build businesses
          <br />
          <span className="text-white/40">for the future of Africa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 text-lg md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-light"
        >
          A hybrid venture platform that acquires and scales businesses
          by combining capital, operational expertise, and AI-driven systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="text-sm tracking-wide text-white/50 hover:text-white/90 transition-colors duration-300 border-b border-white/10 hover:border-white/30 pb-1"
          >
            Learn more
          </a>
          <a
            href="#contact"
            className="text-sm tracking-wide bg-white/[0.06] hover:bg-white/[0.10] text-white/70 hover:text-white/90 px-7 py-3 rounded-full transition-all duration-300 border border-white/[0.06]"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
