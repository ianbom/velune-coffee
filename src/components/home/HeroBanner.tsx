"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "@/components/motion/motion-config";

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#EAE3DC] border-b border-velune-border overflow-hidden">
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[75vh] lg:min-h-[82vh]">
        {/* Left: Editorial Hero Content */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 order-2 lg:order-1 bg-[#F8F1EC]">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted mb-4 block"
          >
            Seasonal Release • East Nusa Tenggara
          </motion.span>

          {/* Heading with masked reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: shouldReduceMotion ? 0 : 0.2, y: shouldReduceMotion ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-velune-charcoal leading-[1.1]"
            >
              Awan Flores: Crystalline mountain sweetness.
            </motion.h1>
          </div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE_PREMIUM }}
            className="text-[14px] md:text-[15px] text-velune-muted leading-relaxed mb-8 max-w-md"
          >
            Grown at 1,700 meters above sea level in the misty highlands of Manggarai. A delicate, light-roasted lot featuring aromas of night-blooming jasmine, white peach, and sparkling bergamot.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE_PREMIUM }}
            className="flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Link
              href="/products/awan-flores"
              className="inline-flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium px-7 py-3.5 bg-velune-charcoal text-white hover:bg-black transition-colors"
            >
              Discover Awan Flores <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/subscription"
              className="inline-flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium px-7 py-3.5 bg-transparent border border-velune-charcoal text-velune-charcoal hover:bg-white transition-colors"
            >
              Start Subscription
            </Link>
          </motion.div>
        </div>

        {/* Right: Large Editorial Imagery with Smooth Scale-In */}
        <div className="lg:col-span-7 relative min-h-[50vh] lg:min-h-full order-1 lg:order-2 overflow-hidden">
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0.65,
              scale: shouldReduceMotion ? 1 : 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              ease: EASE_PREMIUM,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop"
              alt="Velune Coffee Pour-over and Ceramic Cup"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
