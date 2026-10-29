"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { VIEWPORT_CARD } from "@/components/motion/motion-config";

const CATEGORIES = [
  {
    title: "Seasonal Coffee",
    subtitle: "Single origins & curated blends",
    href: "/collections/coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Ritual Subscription",
    subtitle: "Freshly roasted twice weekly",
    href: "/subscription",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Stoneware Ceramics",
    subtitle: "Tactile vessels for daily coffee",
    href: "/collections/ceramics",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brewing Tools",
    subtitle: "Drippers, grinders, and carafes",
    href: "/collections/equipment",
    image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CollectionShowcase() {
  return (
    <section className="py-20 px-4 md:px-8 border-b border-velune-border bg-[#F8F1EC]">
      <div className="max-w-site mx-auto">
        <FadeIn direction="up" distance={16} duration={0.6}>
          <div className="mb-10 pb-4 border-b border-velune-border">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-2">
              Curated Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal">
              Favourites &amp; Collections
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerInterval={0.09}
          viewport={VIEWPORT_CARD}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <StaggerItem
              key={cat.title}
              direction="scale"
              duration={0.7}
              className="h-full"
            >
              <Link
                href={cat.href}
                className="group relative flex flex-col overflow-hidden text-left h-full"
              >
                {/* Aspect Ratio 4:5 image container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE3DC]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-velune-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-base font-medium text-velune-charcoal group-hover:underline underline-offset-4">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-velune-muted mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
