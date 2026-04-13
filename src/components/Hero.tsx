"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.4, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section ref={containerRef} className="relative h-[140dvh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src="/images/astronaut.png"
            alt="Astronaut floating in space above Earth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent pointer-events-none" />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(100,140,220,0.06)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-5 sm:px-6 md:px-12 text-center pt-28 sm:pt-32 md:pt-36"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white/40 mb-6 sm:mb-8 font-light"
          >
            Capital &middot; Systems &middot; AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-extralight tracking-tight leading-[1.08] text-white/95 mb-8 sm:mb-10"
          >
            We partner with businesses
            <br />
            <span className="text-white/50">to grow them using capital, systems, and AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed font-light mb-10 sm:mb-12"
          >
            Twenty84 is a hybrid venture platform that acquires and scales businesses across Africa and emerging markets. We bring smart capital, operational systems, and AI implementation. Not just funding, but the tools to actually grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center justify-center gap-4 sm:gap-5"
          >
            <a
              href="#thesis"
              className="group text-[13px] tracking-wide text-white/50 hover:text-white/90 transition-colors duration-300 flex items-center gap-2 py-2"
            >
              <span className="border-b border-white/15 group-hover:border-white/40 pb-0.5 transition-colors duration-300">
                Learn more
              </span>
              <svg
                className="w-3.5 h-3.5 opacity-30 group-hover:opacity-60 transition-all duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-[13px] tracking-wide bg-white/[0.08] hover:bg-white/[0.14] text-white/70 hover:text-white/90 px-7 py-3 rounded-full transition-all duration-300 border border-white/[0.08] hover:border-white/[0.15]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
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
