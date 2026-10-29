"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Coffee, Sparkles, Navigation } from "lucide-react";
import { CAFE_LOCATIONS } from "@/data/content";

export default function LocationsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");

  const cities = ["All", "Jakarta", "Bali", "Kyoto", "Copenhagen"];

  const filteredLocations = selectedCity === "All"
    ? CAFE_LOCATIONS
    : CAFE_LOCATIONS.filter((loc) => loc.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-velune-muted block mb-3">
          Spatial Destinations
        </span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-velune-charcoal mb-5">
          Our Cafés &amp; Roasteries
        </h1>
        <p className="text-sm md:text-base text-velune-muted leading-relaxed max-w-2xl mx-auto">
          Thoughtfully built architectural environments designed for quiet pause, meticulous pour-overs,
          and warm sourdough hospitality in Jakarta, Bali, Kyoto, and Copenhagen.
        </p>

        {/* City Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 text-xs">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 border transition-colors ${
                selectedCity === city
                  ? "bg-velune-charcoal text-white border-velune-charcoal font-medium"
                  : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Locations Grid */}
      <div className="space-y-16 md:space-y-24">
        {filteredLocations.map((loc, idx) => (
          <div
            key={loc.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-16 border-b border-velune-border ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image (7 cols) */}
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE3DC] border border-velune-border group">
                <Image
                  src={loc.image}
                  alt={`${loc.name} — ${loc.city}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white text-velune-charcoal text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1 border border-velune-border">
                  {loc.city}
                </span>
              </div>
            </div>

            {/* Info Panel (5 cols) */}
            <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-1">
                  {loc.city} • Flagship Space
                </span>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal mb-2">
                  {loc.name}
                </h2>
                <p className="text-xs md:text-sm text-velune-muted leading-relaxed">
                  {loc.description}
                </p>
              </div>

              {/* Address & Hours */}
              <div className="space-y-3 pt-2 text-xs border-t border-velune-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-600 flex-shrink-0 mt-0.5" />
                  <span className="text-velune-charcoal">{loc.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-stone-600 flex-shrink-0 mt-0.5" />
                  <span className="text-velune-charcoal">{loc.hours}</span>
                </div>
              </div>

              {/* Features list */}
              <div className="bg-[#F1E9E2] p-4 border border-velune-border space-y-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-velune-muted font-medium block">
                  Space Amenities &amp; Capabilities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-velune-charcoal">
                  {loc.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-stone-600 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${loc.name} ${loc.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-velune-charcoal hover:bg-black text-white text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" /> Open in Maps
                </a>
                <span className="text-xs text-velune-muted">Walk-ins always welcome</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Private Events & Cupping Note */}
      <div className="mt-20 p-8 md:p-12 bg-white border border-velune-border text-center max-w-3xl mx-auto space-y-4">
        <Coffee className="w-6 h-6 text-velune-charcoal mx-auto" />
        <h3 className="text-xl md:text-2xl font-medium text-velune-charcoal">
          Private Tastings &amp; Spatial Hire
        </h3>
        <p className="text-xs md:text-sm text-velune-muted leading-relaxed max-w-xl mx-auto">
          Our roasteries host sensory cupping workshops, professional barista masterclasses, and
          after-hours architectural gatherings. Inquire for reservations.
        </p>
        <a
          href="mailto:hospitality@velune-coffee.com"
          className="inline-block px-6 py-2.5 border border-velune-border text-xs uppercase tracking-[0.16em] font-medium text-velune-charcoal hover:bg-stone-50 transition-colors"
        >
          Contact Hospitality Team
        </a>
      </div>
    </div>
  );
}
