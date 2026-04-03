"use client";

import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Callback ref — fires the instant the <video> mounts.
  // Sets .muted as a DOM *property* (not just HTML attribute)
  // which is what iOS checks before allowing autoplay.
  const videoCallbackRef = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return;
    el.muted = true;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      el.play().catch(() => {});
    };

    // Try immediately
    attemptPlay();

    // Also try when enough data is buffered
    el.addEventListener("loadeddata", attemptPlay, { once: true });
    el.addEventListener("canplay", attemptPlay, { once: true });

    // Last resort: play on first user gesture
    const gesturePlay = () => {
      el.play().catch(() => {});
      document.removeEventListener("touchstart", gesturePlay);
      document.removeEventListener("click", gesturePlay);
    };
    document.addEventListener("touchstart", gesturePlay, { once: true });
    document.addEventListener("click", gesturePlay, { once: true });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.4, 0]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative h-[130dvh]">
      {/* Sticky wrapper — uses dvh so mobile browser chrome is accounted for */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Video background */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 origin-center"
        >
          {/* Fallback gradient — always visible behind video */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#060608] to-[#060608]" />
          <video
            ref={videoCallbackRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/transition-1-2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/60 via-transparent to-transparent pointer-events-none" />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-transparent pointer-events-none"
        />

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12"
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/30 mb-4 sm:mb-6"
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
              className="text-[clamp(2rem,8vw,6rem)] font-extralight tracking-tight leading-[1.08] text-white/95"
            >
              We build businesses
              <br />
              <span className="text-white/40">for the future of Africa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-10 text-[15px] md:text-[17px] text-white/35 max-w-lg leading-relaxed font-light"
            >
              A hybrid venture platform that acquires and scales businesses by
              combining capital, operational expertise, and AI-driven systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-5"
            >
              <a
                href="#about"
                className="group text-[13px] tracking-wide text-white/50 hover:text-white/90 active:text-white/90 transition-colors duration-300 flex items-center gap-2 py-2"
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
                className="text-[13px] tracking-wide bg-white/[0.08] hover:bg-white/[0.14] active:bg-white/[0.14] text-white/70 hover:text-white/90 px-6 sm:px-7 py-3 rounded-full transition-all duration-300 border border-white/[0.08] hover:border-white/[0.15]"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator — hide on very short screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
