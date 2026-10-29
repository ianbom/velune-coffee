"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, Minus, Plus, Check, ShieldCheck, ArrowRight } from "lucide-react";
import { getProductBySlug, PRODUCTS, formatIDR } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/product/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions?.[0] || product.weight || "Standard"
  );
  const [selectedGrind, setSelectedGrind] = useState(
    product.grindOptions?.[0] || "Whole Bean"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>("brew");

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  // Calculate current price based on weight
  let currentPrice = product.price;
  if (selectedWeight === "1kg") {
    currentPrice = Math.round(product.price * 3.5);
  }

  const handleAddToCart = () => {
    addItem(product, selectedWeight, selectedGrind, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.category === "coffee")
  ).slice(0, 3);

  return (
    <div className="py-10 md:py-16 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-velune-muted mb-8">
        <Link href="/" className="hover:text-velune-charcoal">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.category}`} className="hover:text-velune-charcoal capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-velune-charcoal truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Image Gallery (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-[#EAE3DC] border border-velune-border">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-all duration-500"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#F8F1EC] text-velune-charcoal text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1.5 shadow-sm border border-velune-border">
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 bg-[#EAE3DC] overflow-hidden border transition-all ${
                    activeImageIndex === idx
                      ? "border-velune-charcoal opacity-100"
                      : "border-velune-border opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Sticky Product Info (Col 5) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-1">
                {product.origin} • {product.region}
              </span>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-velune-charcoal mb-2">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-velune-charcoal">
                {formatIDR(currentPrice)}
              </p>
            </div>

            {/* Tasting Notes Pills */}
            {product.tastingNotes && product.tastingNotes.length > 0 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-velune-muted font-medium mb-2">
                  Taste Profile
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs bg-white border border-velune-border px-3 py-1 text-velune-charcoal font-normal"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-[14px] text-velune-muted leading-relaxed pt-1">
              {product.description}
            </p>

            {/* Coffee Specs Table if coffee */}
            {product.category === "coffee" && (
              <div className="bg-[#F1E9E2] p-4 text-xs space-y-2 border border-velune-border">
                {product.altitude && (
                  <div className="flex justify-between py-1 border-b border-velune-border/60">
                    <span className="text-velune-muted uppercase tracking-wider">Altitude</span>
                    <span className="font-medium">{product.altitude}</span>
                  </div>
                )}
                {product.process && (
                  <div className="flex justify-between py-1 border-b border-velune-border/60">
                    <span className="text-velune-muted uppercase tracking-wider">Process</span>
                    <span className="font-medium">{product.process}</span>
                  </div>
                )}
                {product.variety && (
                  <div className="flex justify-between py-1 border-b border-velune-border/60">
                    <span className="text-velune-muted uppercase tracking-wider">Variety</span>
                    <span className="font-medium">{product.variety}</span>
                  </div>
                )}
                {product.roastType && (
                  <div className="flex justify-between py-1">
                    <span className="text-velune-muted uppercase tracking-wider">Roast Profile</span>
                    <span className="font-medium">{product.roastType}</span>
                  </div>
                )}
              </div>
            )}

            {/* Variant: Weight */}
            {product.weightOptions && product.weightOptions.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.14em] text-velune-muted font-medium">Select Size</span>
                  <span className="text-velune-charcoal font-medium">{selectedWeight}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.weightOptions.map((w) => (
                    <button
                      key={w}
                      onClick={() => setSelectedWeight(w)}
                      className={`py-2.5 text-xs font-medium border text-center transition-colors ${
                        selectedWeight === w
                          ? "bg-velune-charcoal text-white border-velune-charcoal"
                          : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variant: Grind */}
            {product.grindOptions && product.grindOptions.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.14em] text-velune-muted font-medium">Grind Style</span>
                  <span className="text-velune-charcoal font-medium">{selectedGrind}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.grindOptions.map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGrind(g)}
                      className={`py-2 text-[11px] font-medium border text-center transition-colors truncate px-2 ${
                        selectedGrind === g
                          ? "bg-velune-charcoal text-white border-velune-charcoal"
                          : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Cart Button */}
            <div className="pt-2 flex gap-3 items-center">
              <div className="flex items-center border border-velune-border bg-white h-12 px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-velune-charcoal hover:opacity-60"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-medium text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-velune-charcoal hover:opacity-60"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-velune-charcoal hover:bg-black text-white text-[12px] uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Bag
                  </>
                ) : (
                  <>
                    Add to Bag • {formatIDR(currentPrice * quantity)}
                  </>
                )}
              </button>
            </div>

            {/* Reassurance banner */}
            <div className="pt-4 border-t border-velune-border flex items-center gap-2.5 text-xs text-velune-muted">
              <ShieldCheck className="w-4 h-4 text-stone-600 flex-shrink-0" />
              <span>Roasted fresh twice weekly in Jakarta &amp; dispatched in airtight valved bags.</span>
            </div>

            {/* Accordions */}
            <div className="pt-6 border-t border-velune-border divide-y divide-velune-border">
              {/* Brewing Guide */}
              {product.brewingNotes && (
                <div>
                  <button
                    onClick={() => toggleAccordion("brew")}
                    className="w-full py-4 flex justify-between items-center text-left text-xs uppercase tracking-[0.14em] font-medium text-velune-charcoal"
                  >
                    <span>Brewing Recommendation</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openAccordion === "brew" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "brew" && (
                    <div className="pb-4 text-xs text-velune-muted space-y-2">
                      <p><strong className="text-velune-charcoal font-medium">Method:</strong> {product.brewingNotes.method}</p>
                      <p><strong className="text-velune-charcoal font-medium">Brew Ratio:</strong> {product.brewingNotes.ratio}</p>
                      <p><strong className="text-velune-charcoal font-medium">Water Temp:</strong> {product.brewingNotes.temperature}</p>
                      <p><strong className="text-velune-charcoal font-medium">Grind:</strong> {product.brewingNotes.grindSize}</p>
                      <p><strong className="text-velune-charcoal font-medium">Extraction Time:</strong> {product.brewingNotes.totalTime}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Origin Story */}
              {product.story && (
                <div>
                  <button
                    onClick={() => toggleAccordion("story")}
                    className="w-full py-4 flex justify-between items-center text-left text-xs uppercase tracking-[0.14em] font-medium text-velune-charcoal"
                  >
                    <span>Producer &amp; Terroir Story</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openAccordion === "story" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === "story" && (
                    <div className="pb-4 text-xs text-velune-muted leading-relaxed">
                      {product.story}
                    </div>
                  )}
                </div>
              )}

              {/* Shipping & Freshness */}
              <div>
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="w-full py-4 flex justify-between items-center text-left text-xs uppercase tracking-[0.14em] font-medium text-velune-charcoal"
                >
                  <span>Packaging &amp; Freshness Guarantee</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordion === "shipping" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === "shipping" && (
                  <div className="pb-4 text-xs text-velune-muted leading-relaxed space-y-2">
                    <p>
                      All coffees are sealed immediately post-roast in multi-layer recyclable pouches fitted with a one-way degassing valve.
                    </p>
                    <p>
                      We recommend resting our light roasts for 7 to 14 days after the roast date stamped on the bag to allow aromatics to peak.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-velune-border">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-2">
                Pairing &amp; Recommendations
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal">
                You May Also Appreciate
              </h2>
            </div>
            <Link
              href="/collections/coffee"
              className="text-xs uppercase tracking-[0.14em] font-medium text-velune-charcoal hover:underline flex items-center gap-1"
            >
              All Coffees <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
