"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchModal from "@/components/search/SearchModal";

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavSection {
  title: string;
  href: string;
  columns?: {
    heading?: string;
    items: NavDropdownItem[];
  }[];
}

const NAV_LEFT: NavSection[] = [
  {
    title: "Coffee",
    href: "/collections/coffee",
    columns: [
      {
        heading: "Seasonal Roasts",
        items: [
          { label: "All Coffee Releases", href: "/collections/coffee" },
          { label: "Single Origin Filter", href: "/collections/coffee" },
          { label: "Espresso & Milk Roasts", href: "/collections/coffee" },
          { label: "Indonesian Terroirs", href: "/collections/coffee" },
        ],
      },
      {
        heading: "Formats & Blends",
        items: [
          { label: "Single Serve Drip Bags", href: "/collections/single-serve" },
          { label: "Aurora & Dusk Blends", href: "/collections/coffee" },
          { label: "Coffee Subscriptions", href: "/subscription" },
        ],
      },
    ],
  },
  {
    title: "Subscription",
    href: "/subscription",
    columns: [
      {
        heading: "Programs",
        items: [
          { label: "The Ritual Subscription", href: "/subscription" },
          { label: "Curated Single Origins", href: "/subscription" },
          { label: "Atelier Roaster's Reserve", href: "/subscription" },
        ],
      },
      {
        heading: "Member Perks",
        items: [
          { label: "Free Domestic Express", href: "/subscription" },
          { label: "Complimentary Café Pour", href: "/subscription" },
          { label: "Pause or Cancel Anytime", href: "/subscription" },
        ],
      },
    ],
  },
  {
    title: "Shop",
    href: "/collections/all",
    columns: [
      {
        heading: "Craft & Ceramics",
        items: [
          { label: "Handcrafted Stoneware", href: "/collections/ceramics" },
          { label: "Ceramic Drippers", href: "/collections/equipment" },
          { label: "Borosilicate Servers", href: "/collections/equipment" },
        ],
      },
      {
        heading: "Brewing Tools",
        items: [
          { label: "Precision Hand Grinders", href: "/collections/equipment" },
          { label: "Japanese Filter Papers", href: "/collections/equipment" },
          { label: "All Store Products", href: "/collections/all" },
        ],
      },
    ],
  },
];

const NAV_RIGHT: NavSection[] = [
  {
    title: "Our Story",
    href: "/about",
    columns: [
      {
        heading: "Craft & Philosophy",
        items: [
          { label: "The VELUNE Philosophy", href: "/about" },
          { label: "Sourcing in Flores & Bali", href: "/journal/sourcing-in-the-highlands-of-flores" },
          { label: "Light Roasting Reverence", href: "/journal/light-roasting-as-reverence" },
        ],
      },
      {
        heading: "Education",
        items: [
          { label: "Brewing Guides", href: "/journal" },
          { label: "The Geometry of Pour-Over", href: "/journal/the-geometry-of-pour-over" },
        ],
      },
    ],
  },
  {
    title: "Locations",
    href: "/locations",
    columns: [
      {
        heading: "Cafés & Ateliers",
        items: [
          { label: "Menteng Roastery (Jakarta)", href: "/locations" },
          { label: "Batu Bolong (Bali)", href: "/locations" },
          { label: "Higashiyama Studio (Kyoto)", href: "/locations" },
          { label: "Vesterbro (Copenhagen)", href: "/locations" },
        ],
      },
    ],
  },
  {
    title: "Journal",
    href: "/journal",
    columns: [
      {
        heading: "Stories & Field Notes",
        items: [
          { label: "All Journal Articles", href: "/journal" },
          { label: "Sourcing in Flores", href: "/journal/sourcing-in-the-highlands-of-flores" },
          { label: "Geometry of Pour-Over", href: "/journal/the-geometry-of-pour-over" },
        ],
      },
    ],
  },
];

const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

export default function Header() {
  const pathname = usePathname();
  const { openCart, itemCount } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#F8F1EC]/95 backdrop-blur-md border-velune-border shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-[#F8F1EC] border-velune-border"
        }`}
      >
        <div className="max-w-site mx-auto px-4 md:px-8 h-14 md:h-16 grid grid-cols-3 items-center">
          {/* Left: Mobile Menu Trigger + Desktop Nav Left */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1.5 -ml-1.5 text-velune-charcoal hover:opacity-60"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Desktop Left Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-7">
              {NAV_LEFT.map((nav) => (
                <div
                  key={nav.title}
                  className="relative group py-4"
                  onMouseEnter={() => setActiveDropdown(nav.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={nav.href}
                    className="text-[12px] uppercase tracking-[0.14em] font-medium text-velune-charcoal hover:text-velune-muted transition-colors inline-flex items-center gap-1"
                  >
                    {nav.title}
                  </Link>

                  {/* Dropdown */}
                  {nav.columns && activeDropdown === nav.title && (
                    <div className="absolute top-full left-0 w-max min-w-[320px] bg-[#F8F1EC] border border-velune-border shadow-xl p-6 grid grid-cols-2 gap-8 z-50">
                      {nav.columns.map((col, idx) => (
                        <div key={idx} className="space-y-3">
                          {col.heading && (
                            <p className="text-[10px] uppercase tracking-[0.18em] text-velune-muted font-medium pb-1 border-b border-velune-border">
                              {col.heading}
                            </p>
                          )}
                          <ul className="space-y-2">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-[13px] text-velune-charcoal hover:underline transition-all block"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center">
            <Link
              href="/"
              className="text-base md:text-xl font-semibold tracking-[0.24em] uppercase text-velune-charcoal hover:opacity-80 transition-opacity inline-block"
            >
              VELUNE
            </Link>
          </div>

          {/* Right: Desktop Nav Right + Search + Cart */}
          <div className="flex items-center justify-end space-x-4 md:space-x-6">
            {/* Desktop Right Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-7">
              {NAV_RIGHT.map((nav) => (
                <div
                  key={nav.title}
                  className="relative group py-4"
                  onMouseEnter={() => setActiveDropdown(nav.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={nav.href}
                    className="text-[12px] uppercase tracking-[0.14em] font-medium text-velune-charcoal hover:text-velune-muted transition-colors inline-flex items-center gap-1"
                  >
                    {nav.title}
                  </Link>

                  {/* Dropdown */}
                  {nav.columns && activeDropdown === nav.title && (
                    <div className="absolute top-full right-0 w-max min-w-[300px] bg-[#F8F1EC] border border-velune-border shadow-xl p-6 grid grid-cols-2 gap-8 z-50">
                      {nav.columns.map((col, idx) => (
                        <div key={idx} className="space-y-3">
                          {col.heading && (
                            <p className="text-[10px] uppercase tracking-[0.18em] text-velune-muted font-medium pb-1 border-b border-velune-border">
                              {col.heading}
                            </p>
                          )}
                          <ul className="space-y-2">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-[13px] text-velune-charcoal hover:underline transition-all block"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 text-velune-charcoal hover:opacity-60 transition-opacity p-1.5"
              aria-label="Open search"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden xl:inline text-[11px] uppercase tracking-[0.14em]">Search</span>
            </button>

            <button
              onClick={openCart}
              className="flex items-center gap-2 text-velune-charcoal hover:opacity-60 transition-opacity p-1.5"
              aria-label={`Shopping bag with ${itemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[11px] uppercase tracking-[0.14em] font-medium">
                Bag ({itemCount})
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#F8F1EC] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-velune-border">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-[0.24em] uppercase"
                >
                  VELUNE
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-velune-charcoal hover:opacity-60"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <div className="mt-6 divide-y divide-velune-border">
                {ALL_NAV.map((nav) => (
                  <div key={nav.title} className="py-3">
                    <Link
                      href={nav.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm uppercase tracking-[0.14em] font-medium text-velune-charcoal block py-1"
                    >
                      {nav.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-velune-border text-xs text-velune-muted space-y-2">
              <p>Specialty Coffee Roastery &amp; Bakery</p>
              <p>Jakarta • Bali • Kyoto • Copenhagen</p>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
