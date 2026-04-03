"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

// Premium easing curves
const ease = {
  smooth: [0.22, 1, 0.36, 1] as const,
  decel: [0.0, 0.0, 0.2, 1] as const,
  luxe: [0.16, 1, 0.3, 1] as const,
};

type AnimStyle = "fade-up" | "blur-up" | "blur-scale" | "slide-left" | "slide-right" | "scale";

const variants: Record<AnimStyle, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "blur-scale": {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function FadeIn({
  children,
  delay = 0,
  anim = "fade-up",
  duration = 0.9,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  anim?: AnimStyle;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[anim]}
      transition={{ duration, delay, ease: ease.luxe }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Split text into individually animated words
export function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.04,
  as: Tag = "h2",
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = children.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: ease.luxe },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      <Tag className={className}>
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            variants={word}
            className="inline-block mr-[0.3em] last:mr-0"
          >
            {w}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

// Horizontal line that extends on scroll
export function LineReveal({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay, ease: ease.smooth }}
      className={`origin-left h-px bg-gradient-to-r from-white/[0.08] to-transparent ${className}`}
    />
  );
}
