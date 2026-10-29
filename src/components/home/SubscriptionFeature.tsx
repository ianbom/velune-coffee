"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ImageReveal from "@/components/motion/ImageReveal";
import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { VIEWPORT_CONFIG } from "@/components/motion/motion-config";

const BENEFITS = [
  "15% savings compared to individual retail orders",
  "Complimentary priority domestic shipping included",
  "Customizable dispatch cadence: every 2, 3, or 4 weeks",
  "Modify, pause, or cancel at any moment with a single click",
];

export default function SubscriptionFeature() {
  return (
    <section className="py-20 px-4 md:px-8 border-b border-velune-border bg-[#F1E9E2]">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Soft Scale Reveal */}
          <div className="lg:col-span-6 relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-[#EAE3DC]">
            <ImageReveal initialScale={1.035} duration={0.9} className="w-full h-full relative">
              <Image
                src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop"
                alt="Velune Coffee Subscription Ritual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ImageReveal>
          </div>

          {/* Right Column: Editorial Details with Coordinated Entry */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up" distance={14} duration={0.6}>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block">
                Coffee Subscriptions
              </span>
            </FadeIn>

            <Reveal delay={0.1} duration={0.75} yOffset={24}>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-velune-charcoal leading-tight">
                The Ritual: Exceptional harvests delivered at your pace.
              </h2>
            </Reveal>

            <FadeIn direction="up" distance={16} duration={0.65} delay={0.2}>
              <p className="text-[14px] md:text-[15px] text-velune-muted leading-relaxed">
                Experience the evolution of seasonal coffee. With each delivery, receive distinct single-origin coffees chosen by our head roaster, roasted lightly to preserve vibrant fruit and floral nuance.
              </p>
            </FadeIn>

            {/* Checklist with Sequential Micro-Reveal */}
            <StaggerContainer
              staggerInterval={0.06}
              delayChildren={0.25}
              viewport={VIEWPORT_CONFIG}
              className="space-y-3 pt-2 text-sm text-velune-charcoal"
            >
              {BENEFITS.map((benefit) => (
                <StaggerItem key={benefit} direction="left" distance={14} duration={0.5}>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" distance={14} duration={0.6} delay={0.45}>
              <div className="pt-4">
                <Link
                  href="/subscription"
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium px-7 py-3.5 bg-velune-charcoal text-white hover:bg-black transition-colors"
                >
                  Configure Your Subscription <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
