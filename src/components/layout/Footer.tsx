"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { VIEWPORT_CARD } from "@/components/motion/motion-config";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#F1E9E2] border-t border-velune-border text-velune-charcoal pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-site mx-auto">
        <StaggerContainer
          staggerInterval={0.08}
          viewport={VIEWPORT_CARD}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-velune-border"
        >
          {/* Column 1: Brand Manifesto */}
          <StaggerItem direction="up" distance={16} duration={0.6}>
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase block">
                VELUNE COFFEE
              </span>
              <p className="text-[13px] text-velune-muted leading-relaxed">
                A contemporary specialty coffee roastery and café dedicated to thoughtfully sourced coffees, light Scandinavian-profile roasting, and handcrafted everyday ceramics.
              </p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-velune-muted pt-2">
                Jakarta • Bali • Kyoto • Copenhagen
              </p>
            </div>
          </StaggerItem>

          {/* Column 2: Shop & Offerings */}
          <StaggerItem direction="up" distance={16} duration={0.6}>
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-velune-charcoal">
                Collection
              </h4>
              <ul className="space-y-2 text-[13px] text-velune-muted">
                <li>
                  <Link href="/collections/coffee" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Single Origin Coffees
                  </Link>
                </li>
                <li>
                  <Link href="/subscription" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Coffee Subscription
                  </Link>
                </li>
                <li>
                  <Link href="/collections/ceramics" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Stoneware Ceramics
                  </Link>
                </li>
                <li>
                  <Link href="/collections/equipment" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Brewing Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/collections/single-serve" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Single Serve Drip Bags
                  </Link>
                </li>
                <li>
                  <Link href="/collections/all" className="hover:text-velune-charcoal hover:underline transition-colors">
                    All Store Products
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Editorial & Company */}
          <StaggerItem direction="up" distance={16} duration={0.6}>
            <div className="space-y-3">
              <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-velune-charcoal">
                Journal &amp; Spaces
              </h4>
              <ul className="space-y-2 text-[13px] text-velune-muted">
                <li>
                  <Link href="/about" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Our Story &amp; Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Café &amp; Roastery Locations
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Brew Guides &amp; Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/journal/sourcing-in-the-highlands-of-flores" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Origin Travelogue
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-velune-charcoal hover:underline transition-colors">
                    Wholesale &amp; Office Supply
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 4: Newsletter Signup */}
          <StaggerItem direction="up" distance={16} duration={0.6}>
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-velune-charcoal">
                Newsletter
              </h4>
              <p className="text-[13px] text-velune-muted leading-relaxed">
                Receive notifications for fresh harvest releases, limited stoneware editions, and brewing techniques.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative border-b border-velune-charcoal flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent text-[13px] py-2 focus:outline-none placeholder:text-stone-400"
                  />
                  <button
                    type="submit"
                    className="p-1.5 text-velune-charcoal hover:opacity-60 transition-opacity"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-emerald-800 flex items-center gap-1 mt-1">
                    <Check className="w-3.5 h-3.5" /> Thank you for subscribing.
                  </p>
                )}
              </form>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <FadeIn direction="none" duration={0.5} delay={0.2}>
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-velune-muted space-y-4 md:space-y-0">
            <p>© 2026 VELUNE COFFEE. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="hover:text-velune-charcoal cursor-pointer">Privacy Policy</span>
              <span className="hover:text-velune-charcoal cursor-pointer">Terms of Service</span>
              <span className="hover:text-velune-charcoal cursor-pointer">Shipping &amp; Returns</span>
              <span className="hover:text-velune-charcoal cursor-pointer">Accessibility</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
