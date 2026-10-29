"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Sparkles, RefreshCw, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatIDR } from "@/data/products";

interface SubscriptionTier {
  id: string;
  name: string;
  subtitle: string;
  basePrice: number;
  description: string;
  image: string;
  notes: string[];
}

const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "curated-filter",
    name: "Curated Single Origins",
    subtitle: "Our roaster's monthly rotation",
    basePrice: 195000,
    description: "Exceptional light-roasted micro-lots from Flores, Bali, Sumatra, and East Africa. Discover diverse varietals and experimental processes.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    notes: ["Floral & Fruit Forward", "Light Filter Roast", "Seasonal Micro-Lots"],
  },
  {
    id: "signature-espresso",
    name: "Dusk Espresso Roast",
    subtitle: "Consistent rich daily driver",
    basePrice: 175000,
    description: "Our signature blend crafted for espresso, moka pot, and milk beverages. Deep notes of dark cacao, toasted hazelnut, and brown sugar.",
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1000&auto=format&fit=crop",
    notes: ["Dark Cacao & Praline", "Medium Espresso Roast", "Milk Compatible"],
  },
  {
    id: "roasters-reserve",
    name: "Atelier Roaster's Reserve",
    subtitle: "Ultra rare competitions & geishas",
    basePrice: 245000,
    description: "Extremely limited nano-lots, rare anaerobic fermentations, and high-altitude Geishas reserved strictly for Atelier members.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    notes: ["Rare Varietals (Geisha/Typica)", "Complex Fermentations", "Numbered Batches"],
  },
];

const FAQS = [
  {
    q: "Can I pause, adjust, or cancel my subscription?",
    a: "Yes. You have complete flexibility. You can pause, skip an upcoming delivery, change delivery frequency, or cancel at any time directly through your account with no fees.",
  },
  {
    q: "When is subscription coffee roasted and shipped?",
    a: "We roast for subscribers every Tuesday and Thursday. Your order is packed and dispatched within 24 hours of roasting to ensure peak freshness upon arrival.",
  },
  {
    q: "Do I get free shipping with a subscription?",
    a: "All subscription orders of 2 or more bags qualify for complimentary express delivery across Indonesia.",
  },
  {
    q: "How should I store my subscription coffee?",
    a: "Keep your beans sealed in the original valved bag in a cool, dark cupboard. Avoid freezing or refrigeration once opened.",
  },
];

export default function SubscriptionPage() {
  const { addItem } = useCart();

  const [selectedTier, setSelectedTier] = useState<string>("curated-filter");
  const [bagCount, setBagCount] = useState<number>(2);
  const [frequency, setFrequency] = useState<string>("Every 2 Weeks");
  const [grind, setGrind] = useState<string>("Whole Bean");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [subscribed, setSubscribed] = useState(false);

  const activeTier = SUBSCRIPTION_TIERS.find((t) => t.id === selectedTier) || SUBSCRIPTION_TIERS[0];

  // Pricing formula with volume discount
  const discountMultiplier = bagCount === 1 ? 1 : bagCount === 2 ? 0.95 : 0.9;
  const totalPrice = Math.round(activeTier.basePrice * bagCount * discountMultiplier);

  const handleSubscribe = () => {
    // Add to cart as a subscription item
    const mockProduct = {
      id: `sub-${activeTier.id}`,
      slug: `subscription-${activeTier.id}`,
      name: `${activeTier.name} (Subscription)`,
      subtitle: `${bagCount}x 250g • ${frequency}`,
      origin: "Curated Roasters Selection",
      region: "Indonesia & East Africa",
      price: totalPrice,
      category: "subscription" as const,
      tastingNotes: activeTier.notes,
      images: [activeTier.image],
      description: `${bagCount} bag(s) (${bagCount * 250}g) delivered ${frequency.toLowerCase()}. Grind: ${grind}.`,
      inStock: true,
    };

    addItem(mockProduct, `${bagCount}x 250g (${frequency})`, grind, 1);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
  };

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-velune-muted block mb-3">
          The Ritual of Origin
        </span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-velune-charcoal mb-5">
          Coffee on Your Terms
        </h1>
        <p className="text-sm md:text-base text-velune-muted leading-relaxed max-w-2xl mx-auto">
          Freshly roasted, sustainably sourced single-origin coffees and seasonal espresso blends,
          delivered to your door with complete schedule autonomy and member-only pricing.
        </p>
      </div>

      {/* Subscription Configurator Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive Configuration Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-12">
          {/* STEP 1: Choose Coffee Profile */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-velune-charcoal text-white text-xs flex items-center justify-center font-medium">
                1
              </span>
              <h2 className="text-lg md:text-xl font-medium tracking-tight text-velune-charcoal">
                Select Your Coffee Profile
              </h2>
            </div>

            <div className="space-y-4">
              {SUBSCRIPTION_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-5 cursor-pointer border transition-all ${
                    selectedTier === tier.id
                      ? "border-velune-charcoal bg-white shadow-sm"
                      : "border-velune-border bg-[#F5ECE5]/60 hover:border-velune-muted"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-base font-medium text-velune-charcoal">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-velune-muted">{tier.subtitle}</p>
                    </div>
                    <span className="text-sm font-medium text-velune-charcoal">
                      From {formatIDR(tier.basePrice)} / bag
                    </span>
                  </div>

                  <p className="text-xs text-velune-muted leading-relaxed mb-3">
                    {tier.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tier.notes.map((n) => (
                      <span
                        key={n}
                        className="text-[11px] bg-[#F1E9E2] border border-velune-border px-2.5 py-0.5 text-velune-charcoal"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 2: Choose Bag Quantity */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-6 rounded-full bg-velune-charcoal text-white text-xs flex items-center justify-center font-medium">
                2
              </span>
              <h2 className="text-lg md:text-xl font-medium tracking-tight text-velune-charcoal">
                Choose Bag Quantity
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { count: 1, label: "1 Bag (250g)", benefit: "Single Drinker" },
                { count: 2, label: "2 Bags (500g)", benefit: "5% Off + Free Delivery", popular: true },
                { count: 4, label: "4 Bags (1kg)", benefit: "10% Off + Free Delivery" },
              ].map((b) => (
                <button
                  key={b.count}
                  onClick={() => setBagCount(b.count)}
                  className={`p-4 text-left border transition-all relative ${
                    bagCount === b.count
                      ? "border-velune-charcoal bg-white"
                      : "border-velune-border bg-white/60 hover:border-velune-charcoal"
                  }`}
                >
                  {b.popular && (
                    <span className="absolute -top-2.5 right-3 bg-velune-charcoal text-white text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium">
                      Most Popular
                    </span>
                  )}
                  <p className="text-sm font-medium text-velune-charcoal mb-1">{b.label}</p>
                  <p className="text-xs text-velune-muted">{b.benefit}</p>
                </button>
              ))}
            </div>
          </section>

          {/* STEP 3: Frequency & Grind */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-velune-charcoal text-white text-xs flex items-center justify-center font-medium">
                3
              </span>
              <h2 className="text-lg md:text-xl font-medium tracking-tight text-velune-charcoal">
                Delivery Schedule &amp; Grind
              </h2>
            </div>

            {/* Frequency options */}
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-velune-muted font-medium block mb-2">
                Delivery Frequency
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["Every Week", "Every 2 Weeks", "Every Month"].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`py-2.5 text-xs font-medium border text-center transition-colors ${
                      frequency === freq
                        ? "bg-velune-charcoal text-white border-velune-charcoal"
                        : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Grind Style options */}
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-velune-muted font-medium block mb-2">
                Grind Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Whole Bean", "Filter / V60", "Espresso", "French Press"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGrind(g)}
                    className={`py-2.5 text-xs font-medium border text-center transition-colors ${
                      grind === g
                        ? "bg-velune-charcoal text-white border-velune-charcoal"
                        : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary & Checkout Card (5 Cols Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-white border border-velune-border p-6 md:p-8 space-y-6 shadow-sm">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE3DC] border border-velune-border">
              <Image
                src={activeTier.image}
                alt={activeTier.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="border-b border-velune-border pb-5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-1">
                Your Customized Subscription
              </span>
              <h3 className="text-2xl font-medium text-velune-charcoal mb-1">
                {activeTier.name}
              </h3>
              <p className="text-xs text-velune-muted">
                {bagCount}x 250g bag(s) • {frequency} • {grind}
              </p>
            </div>

            {/* Price breakdown */}
            <div className="text-xs space-y-2 border-b border-velune-border pb-5">
              <div className="flex justify-between">
                <span className="text-velune-muted">Base Price</span>
                <span>{formatIDR(activeTier.basePrice * bagCount)}</span>
              </div>

              {bagCount > 1 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Volume Savings ({bagCount === 2 ? "5%" : "10%"})</span>
                  <span>
                    -{formatIDR(activeTier.basePrice * bagCount - totalPrice)}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-velune-muted">Estimated Shipping</span>
                <span className="font-medium text-velune-charcoal">
                  {bagCount >= 2 ? "Free Express" : "Calculated at checkout"}
                </span>
              </div>

              <div className="flex justify-between pt-3 text-base font-medium text-velune-charcoal border-t border-velune-border">
                <span>Per Delivery</span>
                <span>{formatIDR(totalPrice)}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleSubscribe}
              className="w-full h-12 bg-velune-charcoal hover:bg-black text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" /> Subscription Added to Bag
                </>
              ) : (
                <>
                  Start Subscription • {formatIDR(totalPrice)}
                </>
              )}
            </button>

            {/* Guarantees */}
            <div className="pt-2 space-y-2 text-xs text-velune-muted">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-stone-600 flex-shrink-0" />
                <span>Pause, skip, or cancel anytime with 1 click.</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-stone-600 flex-shrink-0" />
                <span>Dispatched within 24 hours of small-batch roasting.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stone-600 flex-shrink-0" />
                <span>100% taste guarantee. We replace bags you don&apos;t love.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perks Showcase */}
      <div className="mt-24 pt-16 border-t border-velune-border">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal text-center mb-12">
          Member Privileges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 border border-velune-border space-y-3">
            <Sparkles className="w-6 h-6 text-velune-charcoal" />
            <h3 className="text-base font-medium text-velune-charcoal">First Access to Micro-Lots</h3>
            <p className="text-xs text-velune-muted leading-relaxed">
              Subscribers receive priority allocation on competition coffees, rare Geishas, and
              experimental honey-processed lots before public launch.
            </p>
          </div>

          <div className="bg-white p-6 border border-velune-border space-y-3">
            <RefreshCw className="w-6 h-6 text-velune-charcoal" />
            <h3 className="text-base font-medium text-velune-charcoal">Curated Roast Notes</h3>
            <p className="text-xs text-velune-muted leading-relaxed">
              Each delivery includes head roaster tasting notes, water recipe recommendations, and
              pour-over brew ratios tailored to that harvest&apos;s density.
            </p>
          </div>

          <div className="bg-white p-6 border border-velune-border space-y-3">
            <Truck className="w-6 h-6 text-velune-charcoal" />
            <h3 className="text-base font-medium text-velune-charcoal">Complimentary Café Pour</h3>
            <p className="text-xs text-velune-muted leading-relaxed">
              Show your active subscriber pass at any VELUNE Roastery in Jakarta, Bali, Kyoto, or
              Copenhagen for a complimentary single-origin filter brew each month.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mt-20 max-w-3xl mx-auto pt-16 border-t border-velune-border">
        <h2 className="text-2xl font-medium tracking-tight text-velune-charcoal text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-velune-border border-y border-velune-border">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-velune-charcoal py-1"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <p className="text-xs text-velune-muted leading-relaxed pt-2 pb-1">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
