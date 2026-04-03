"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 0,
    label: "The Void",
    title: "",
    subtitle: "",
    showLogo: true,
    bg: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(30,60,120,0.08) 0%, rgba(10,15,30,0.04) 40%, transparent 70%)",
  },
  {
    id: 1,
    label: "Know Yourself",
    title: "Know yourself.",
    subtitle: "Before you can build, you must understand where you stand.",
    showLogo: false,
    bg: "radial-gradient(ellipse 120% 80% at 50% 80%, rgba(40,70,130,0.06) 0%, rgba(255,200,100,0.02) 30%, transparent 60%)",
  },
  {
    id: 2,
    label: "Know Your World",
    title: "Know your world.",
    subtitle: "The market. The opportunity. The gap.",
    showLogo: false,
    bg: "radial-gradient(ellipse 140% 70% at 50% 70%, rgba(50,90,160,0.08) 0%, rgba(200,220,255,0.03) 40%, transparent 65%)",
  },
  {
    id: 3,
    label: "Arrival",
    title: "Then build.",
    subtitle: "Capital. Systems. AI.",
    showLogo: false,
    bg: "radial-gradient(ellipse 160% 60% at 50% 60%, rgba(80,130,200,0.10) 0%, rgba(220,240,255,0.04) 35%, transparent 60%)",
  },
];

const transitions = [
  "/videos/transition-1-2.mp4",
  "/videos/transition-2-3.mp4",
  "/videos/transition-3-4.mov",
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phase, setPhase] = useState<"slide" | "video">("slide");
  const [exiting, setExiting] = useState(false);
  const [canAdvance, setCanAdvance] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounce advancement
  useEffect(() => {
    const timer = setTimeout(() => setCanAdvance(true), 600);
    return () => clearTimeout(timer);
  }, [currentSlide, phase]);

  const advance = useCallback(() => {
    if (!canAdvance) return;
    setCanAdvance(false);

    if (phase === "slide") {
      if (currentSlide < 3) {
        setPhase("video");
      } else {
        setExiting(true);
        setTimeout(onComplete, 900);
      }
    }
  }, [phase, currentSlide, onComplete, canAdvance]);

  const skip = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 900);
  }, [onComplete]);

  const handleVideoEnd = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
    setPhase("slide");
  }, []);

  // Play video when entering video phase
  useEffect(() => {
    if (phase === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // If video fails to play, just advance
        handleVideoEnd();
      });
    }
  }, [phase, handleVideoEnd]);

  // Keyboard + click + scroll handlers
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        phase === "slide" &&
        (e.key === "ArrowRight" ||
          e.key === "ArrowDown" ||
          e.key === "Enter" ||
          e.key === " ")
      ) {
        e.preventDefault();
        advance();
      }
      if (e.key === "Escape") {
        skip();
      }
    };

    let lastWheel = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < 1200) return;
      if (e.deltaY > 20 && phase === "slide") {
        lastWheel = now;
        advance();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (dy > 50 && phase === "slide") {
        advance();
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [advance, skip, phase]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] bg-[#030305] cursor-pointer select-none"
      onClick={() => phase === "slide" && advance()}
    >
      {/* Star field */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.05,
            }}
          />
        ))}
      </div>

      {/* Slide background gradient */}
      <AnimatePresence mode="wait">
        {phase === "slide" && (
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{ background: slide.bg }}
          />
        )}
      </AnimatePresence>

      {/* Video transition layer */}
      <AnimatePresence>
        {phase === "video" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10"
          >
            <video
              ref={videoRef}
              src={transitions[currentSlide]}
              onEnded={handleVideoEnd}
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        {phase === "slide" && (
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-20 flex flex-col items-center justify-center h-full px-6"
          >
            {slide.showLogo ? (
              /* Slide 0 — Logo + tagline */
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  <img
                    src="/logo-white.png"
                    alt="Twenty84"
                    className="w-20 h-20 md:w-24 md:h-24 opacity-80"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="font-mono text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-white/25"
                >
                  Capital &middot; Systems &middot; AI
                </motion.p>
              </div>
            ) : (
              /* Slides 1–3 — Title + subtitle */
              <div className="flex flex-col items-center text-center max-w-3xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white/90"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="mt-5 md:mt-6 text-base md:text-xl text-white/30 font-light leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA on last slide */}
                {currentSlide === 3 && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      skip();
                    }}
                    className="mt-10 md:mt-14 text-sm tracking-[0.2em] uppercase bg-white/[0.06] hover:bg-white/[0.12] text-white/60 hover:text-white/90 px-10 py-3.5 rounded-full transition-all duration-500 border border-white/[0.08] hover:border-white/[0.15]"
                  >
                    Enter
                  </motion.button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className="relative w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor:
                i === currentSlide
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(255,255,255,0.12)",
              transform: i === currentSlide ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* Skip button */}
      {currentSlide < 3 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={(e) => {
            e.stopPropagation();
            skip();
          }}
          className="absolute top-6 right-6 md:top-8 md:right-10 z-30 text-[11px] font-mono tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300"
        >
          Skip
        </motion.button>
      )}

      {/* Scroll hint on first slide */}
      {currentSlide === 0 && phase === "slide" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-6 bg-gradient-to-b from-white/15 to-transparent"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
