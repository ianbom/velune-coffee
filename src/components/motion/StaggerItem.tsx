"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "./motion-config";

interface StaggerItemProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}

export default function StaggerItem({
  children,
  direction = "up",
  distance = 20,
  duration = 0.6,
  className = "",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const getHiddenVariant = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.96 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  const itemVariants = {
    hidden: getHiddenVariant(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
