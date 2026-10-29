"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM, VIEWPORT_LARGE_SECTION } from "./motion-config";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  useClipMask?: boolean;
  className?: string;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
}

export default function ImageReveal({
  children,
  delay = 0,
  duration = 0.95,
  initialScale = 1.03,
  useClipMask = true,
  className = "",
  viewport = VIEWPORT_LARGE_SECTION,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0.6,
        scale: initialScale,
        clipPath: useClipMask ? "inset(0 0 6% 0)" : "inset(0 0 0% 0)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        clipPath: "inset(0 0 0% 0)",
      }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
