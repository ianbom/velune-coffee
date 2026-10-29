"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VIEWPORT_CONFIG } from "./motion-config";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerInterval?: number;
  delayChildren?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  };
}

export default function StaggerContainer({
  children,
  staggerInterval = 0.08,
  delayChildren = 0.05,
  className = "",
  viewport = VIEWPORT_CONFIG,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerInterval,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
