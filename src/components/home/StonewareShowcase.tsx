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

export default function StonewareShowcase() {
  const ceramics = PRODUCTS.filter(
    (p) => p.category === "ceramics" || p.id === "prod-conical-ceramic-dripper"
  ).slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-8 border-b border-velune-border bg-[#F8F1EC]">
      <div className="max-w-site mx-auto">
        <FadeIn direction="left" distance={18} duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-velune-border">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-2">
                Collaborative Stoneware
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal">
                Atelier Ceramic Collection
              </h2>
              <p className="text-xs md:text-sm text-velune-muted mt-2 max-w-xl">
                Limited wheel-thrown stoneware cups and precision drippers designed to balance thermal retention and tactile comfort.
              </p>
            </div>

            <Link
              href="/collections/ceramics"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] text-velune-charcoal hover:underline mt-4 md:mt-0 font-medium group"
            >
              <span>Explore Stoneware</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        {/* 3 cards with alternating horizontal entrances */}
        <StaggerContainer
          staggerInterval={0.09}
          viewport={VIEWPORT_CARD}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {ceramics.map((product, idx) => (
            <StaggerItem
              key={product.id}
              direction={idx === 0 ? "left" : idx === 1 ? "up" : "right"}
              distance={18}
              duration={0.65}
            >
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
