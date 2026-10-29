"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM, VIEWPORT_CONFIG } from "./motion-config";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.75,
  yOffset = 24,
  className = "",
  viewport = VIEWPORT_CONFIG,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          opacity: shouldReduceMotion ? 0 : 0.4,
          y: shouldReduceMotion ? 0 : yOffset,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={viewport}
        transition={{
          duration: shouldReduceMotion ? 0.2 : duration,
          delay,
          ease: EASE_PREMIUM,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
