"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-white.png"
            alt="Twenty84"
            width={44}
            height={44}
            className="opacity-90"
          />
          <span className="font-mono text-sm tracking-[0.3em] text-white/90 uppercase">
            Twenty84
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/40 hover:text-white/90 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://twenty84.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide bg-white/[0.07] hover:bg-white/[0.12] text-white/70 hover:text-white/95 px-5 py-2 rounded-full transition-all duration-300 border border-white/[0.08]"
          >
            Newsletter
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/[0.04] bg-[#0a0a0a]/95 backdrop-blur-md"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/50 hover:text-white/90 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://twenty84.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white/50 hover:text-white/90 transition-colors"
            >
              Newsletter
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
