"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Video scales up and fades as you scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.4, 0]);
  // Content fades out faster
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  // Bottom gradient intensifies on scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative h-[130vh]">
      {/* Sticky wrapper — pins the visual while scrolling through the 130vh container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video background */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 origin-center"
        >
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/transition-1-2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/60 via-transparent to-transparent pointer-events-none" />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-transparent pointer-events-none"
        />

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12"
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/30 mb-6"
            >
              Capital &middot; Systems &middot; AI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="text-[clamp(2.5rem,7vw,6rem)] font-extralight tracking-tight leading-[1.05] text-white/95"
            >
              We build businesses
              <br />
              <span className="text-white/40">for the future of Africa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 text-base md:text-[17px] text-white/35 max-w-lg leading-relaxed font-light"
            >
              A hybrid venture platform that acquires and scales businesses by
              combining capital, operational expertise, and AI-driven systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-12 flex items-center gap-5"
            >
              <a
                href="#about"
                className="group text-[13px] tracking-wide text-white/50 hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="text-[13px] tracking-wide bg-white/[0.08] hover:bg-white/[0.14] text-white/70 hover:text-white/90 px-7 py-3 rounded-full transition-all duration-300 border border-white/[0.08] hover:border-white/[0.15]"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
