"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { VIEWPORT_CARD } from "@/components/motion/motion-config";

export default function FeaturedReleases() {
  const featuredCoffees = PRODUCTS.filter((p) => p.category === "coffee").slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-8 border-b border-velune-border">
      <div className="max-w-site mx-auto">
        {/* Header */}
        <FadeIn direction="up" distance={16} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-velune-border">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-2">
                Fresh Roasts
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal">
                Latest Releases
              </h2>
            </div>

            <Link
              href="/collections/coffee"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] text-velune-charcoal hover:underline mt-4 md:mt-0 font-medium group"
            >
              <span>View All Coffees</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        {/* 3-Column Product Grid with Sequential Stagger */}
        <StaggerContainer
          staggerInterval={0.08}
          viewport={VIEWPORT_CARD}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {featuredCoffees.map((product, idx) => (
            <StaggerItem key={product.id} direction="up" distance={22} duration={0.6}>
              <ProductCard product={product} priority={idx === 0} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
