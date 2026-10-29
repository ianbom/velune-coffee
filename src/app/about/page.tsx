import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, HeartHandshake, Coffee } from "lucide-react";

export const metadata = {
  title: "Our Story & Roasting Philosophy — VELUNE COFFEE",
  description:
    "Discover VELUNE's approach to light roasting, ethical origin relationships across Indonesia, and architectural coffee spaces.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Editorial Headline */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-velune-muted block mb-3">
          Our Philosophy
        </span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-velune-charcoal mb-6 leading-[1.15]">
          A Reverence for Origin, Lightness &amp; Clarity
        </h1>
        <p className="text-base md:text-lg text-velune-muted leading-relaxed max-w-2xl mx-auto font-normal">
          We exist to present coffee in its purest form. By sourcing exceptional harvests and roasting
          with gentle restraint, we preserve the transparent identity of soil, altitude, and producer.
        </p>
      </div>

      {/* Hero Panoramic Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#EAE3DC] border border-velune-border mb-20 md:mb-32">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2000&auto=format&fit=crop"
          alt="Coffee farm mountain landscape at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[11px] uppercase tracking-wider text-velune-charcoal border border-velune-border">
          Manggarai Highlands • Flores, Indonesia
        </div>
      </div>

      {/* Section 1: The Sourcing Philosophy (Split Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-36">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block">
            Direct Terroir Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-velune-charcoal">
            Sourcing Beyond Commodities
          </h2>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            Specialty coffee is agricultural artistry. We bypass conventional green coffee auctions in
            favour of long-term partnerships directly with independent smallholders and co-operatives
            across the Indonesian archipelago—from the mineral-rich slopes of Flores to the volcanic valleys of Kintamani.
          </p>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            By paying transparent premiums averaging 300% above Fair Trade minimums, our partners
            invest in raised drying beds, closed-loop water recirculation, and heirloom varietal preservation.
          </p>
          <div className="pt-2 flex items-center gap-6 text-xs text-velune-charcoal font-medium">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-stone-700" />
              <span>Multi-Year Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-stone-700" />
              <span>100% Traceable Nano-Lots</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE3DC] border border-velune-border">
            <Image
              src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1200&auto=format&fit=crop"
              alt="Harvested coffee cherries being sorted by hand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Light Roasting Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-36">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE3DC] border border-velune-border">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
              alt="Roasting drum inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block">
            Roast Profile Manifesto
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-velune-charcoal">
            The Scandinavian Influence: Brightness Over Ash
          </h2>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            Dark roasting masks inferior coffee behind roasty, caramelized bitters. Our roasting team,
            inspired by modern Nordic roasting traditions, aims for the opposite: complete transparency.
          </p>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            Using custom convection drum profiles on our customized Loring roaster, we apply heat swiftly
            and drop the batch before the cellular structure breaks down. The result in your cup is
            remarkable cleanliness: sparkling stone-fruit acidity, floral jasmine aromatics, and tea-like sweetness.
          </p>
          <div className="pt-2 flex items-center gap-6 text-xs text-velune-charcoal font-medium">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Preserved Acidity &amp; Florals</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-stone-700" />
              <span>Convection Roasting Discipline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Architecture & Sourdough Bakery */}
      <div className="bg-[#F1E9E2] border border-velune-border p-8 md:p-16 mb-24 md:mb-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-velune-muted block">
            Spatial Sanctuary &amp; Bakery
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-velune-charcoal">
            Architecture for the Senses
          </h2>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            Our cafés are conceived as quiet counterpoints to chaotic urban rhythm. We design each space
            in harmony with Scandinavian architectural sensibilities: untreated light oak, monolithic poured terrazzo,
            natural lime wash, and acoustic softness.
          </p>
          <p className="text-sm md:text-base text-velune-muted leading-relaxed">
            Beside our coffee bars, our in-house bakeries work with slow 36-hour sourdough fermentations
            and wild levain, producing cardamom buns, rustic country loaves, and seasonal viennoiserie
            that pair naturally with our light-roasted filter brews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3DC] border border-velune-border">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="Minimalist wooden café interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3DC] border border-velune-border">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
              alt="Freshly baked artisan sourdough loaf"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="text-center py-12 border-t border-velune-border">
        <h3 className="text-2xl md:text-3xl font-medium text-velune-charcoal mb-4">
          Experience the Clarity in Your Cup
        </h3>
        <p className="text-sm text-velune-muted mb-8 max-w-lg mx-auto">
          Explore our current seasonal releases or visit our roasteries in Jakarta, Bali, Kyoto, or Copenhagen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/collections/coffee"
            className="px-8 py-3.5 bg-velune-charcoal hover:bg-black text-white text-xs uppercase tracking-[0.16em] font-medium transition-colors"
          >
            Explore Coffee Lots
          </Link>
          <Link
            href="/locations"
            className="px-8 py-3.5 bg-white hover:bg-stone-50 border border-velune-border text-velune-charcoal text-xs uppercase tracking-[0.16em] font-medium transition-colors"
          >
            Find Our Cafés
          </Link>
        </div>
      </div>
    </div>
  );
}
