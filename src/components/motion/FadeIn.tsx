"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM, VIEWPORT_CONFIG } from "./motion-config";

export interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 22,
  className = "",
  viewport = VIEWPORT_CONFIG,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={viewport}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
