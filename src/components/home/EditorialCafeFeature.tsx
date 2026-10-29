"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageReveal from "@/components/motion/ImageReveal";
import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";
import { VIEWPORT_LARGE_SECTION } from "@/components/motion/motion-config";

export default function EditorialCafeFeature() {
  return (
    <section className="border-b border-velune-border overflow-hidden bg-[#F1E9E2]">
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left: Large Architectural Café Image with soft clip reveal */}
        <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full overflow-hidden">
          <ImageReveal
            initialScale={1.04}
            duration={1.0}
            viewport={VIEWPORT_LARGE_SECTION}
            className="w-full h-full relative min-h-[420px] lg:min-h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
              alt="Velune Roastery and Café Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
          </ImageReveal>
        </div>

        {/* Right: Editorial Narrative with Asymmetrical Entrance */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 bg-[#F8F1EC]">
          <FadeIn direction="right" distance={20} duration={0.6} delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted mb-4 block">
              Our Spaces • Menteng, Jakarta
            </span>
          </FadeIn>

          <Reveal delay={0.2} duration={0.75} yOffset={24} className="mb-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-velune-charcoal leading-tight">
              A sanctuary of light, teak wood, and morning rituals.
            </h2>
          </Reveal>

          <FadeIn direction="up" distance={16} duration={0.65} delay={0.3}>
            <p className="text-[14px] md:text-[15px] text-velune-muted leading-relaxed mb-6">
              VELUNE’s flagship café and roastery takes shape inside a restored 1930s villa along Teuku Cik Ditiro. The space draws from both Nordic functionalism and Indonesian architectural heritage — featuring natural lime-washed walls, pale terrazzo floors, and a monolithic teak brew bar where coffees are weighed and poured with quiet intention.
            </p>
          </FadeIn>

          <FadeIn direction="up" distance={16} duration={0.65} delay={0.4}>
            <p className="text-[13px] text-velune-muted leading-relaxed mb-8">
              An artisan bakery on-site produces sourdough loaves and cardamom buns twice daily, calibrated specifically to complement our light-roasted single origin filter flights.
            </p>
          </FadeIn>

          <FadeIn direction="up" distance={14} duration={0.6} delay={0.5}>
            <div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium px-7 py-3.5 bg-velune-charcoal text-white hover:bg-black transition-colors"
              >
                Explore All Locations <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
