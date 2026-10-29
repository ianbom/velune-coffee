"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatIDR } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const currentImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative flex flex-col text-left transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image Container with 1:1 or 4:5 Aspect Ratio */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#EAE3DC]">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#F8F1EC] text-velune-charcoal text-[10px] uppercase tracking-[0.14em] font-medium px-2 py-1 shadow-sm">
              {product.badge}
            </span>
          )}

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
            <button
              onClick={handleQuickAdd}
              className="w-full py-2.5 bg-[#F8F1EC]/95 backdrop-blur-sm hover:bg-white text-velune-charcoal text-[11px] uppercase tracking-[0.14em] font-medium border border-velune-border transition-colors shadow-sm"
            >
              {added ? "Added to Bag" : "Quick Add"}
            </button>
          </div>
        </div>

        {/* Content Details */}
        <div className="pt-4 space-y-1">
          <div className="flex justify-between items-baseline gap-2">
            <h3 className="text-[15px] font-medium text-velune-charcoal group-hover:underline underline-offset-4 decoration-stone-400">
              {product.name}
            </h3>
            <span className="text-[14px] text-velune-charcoal font-medium whitespace-nowrap">
              {formatIDR(product.price)}
            </span>
          </div>

          <p className="text-[12px] text-velune-muted">
            {product.subtitle}
          </p>

          {/* Tasting Notes */}
          {product.tastingNotes && product.tastingNotes.length > 0 && (
            <p className="text-[11px] text-stone-500 pt-0.5 line-clamp-1">
              {product.tastingNotes.slice(0, 3).join(" • ")}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
