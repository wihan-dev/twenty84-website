"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 h-14 sm:h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group py-2">
          <Image
            src="/logo-white.png"
            alt="Twenty84"
            width={32}
            height={32}
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 sm:w-9 sm:h-9"
          />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.35em] text-white/70 uppercase hidden sm:inline">
            Twenty84
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] tracking-wide text-white/35 hover:text-white/80 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/[0.08] mx-2" />
          <a
            href="https://twenty84.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] tracking-wide bg-white/[0.06] hover:bg-white/[0.12] text-white/60 hover:text-white/90 px-5 py-2 rounded-full transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12]"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile toggle — 44px touch target */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-11 h-11 flex items-center justify-center -mr-1.5"
          aria-label="Menu"
        >
          <span
            className={`absolute block w-[18px] h-px bg-white/60 transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`absolute block w-[18px] h-px bg-white/60 transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/[0.04] bg-[#060608]/95 backdrop-blur-xl"
        >
          <div className="px-5 sm:px-6 py-6 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/45 hover:text-white/80 active:text-white/80 transition-colors py-2.5"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/[0.06] my-2" />
            <a
              href="https://twenty84.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white/45 hover:text-white/80 active:text-white/80 transition-colors py-2.5"
            >
              Newsletter
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
