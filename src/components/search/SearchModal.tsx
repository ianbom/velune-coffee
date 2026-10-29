"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS, formatIDR } from "@/data/products";
import { JOURNAL_ARTICLES } from "@/data/content";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.tastingNotes.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return JOURNAL_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[3px] transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen px-4 pt-16 pb-20 flex justify-center">
        <div className="relative w-full max-w-2xl bg-[#F8F1EC] text-velune-charcoal border border-velune-border shadow-2xl p-6 md:p-8 rounded-none">
          {/* Search Input Bar */}
          <div className="relative border-b border-velune-charcoal pb-3 flex items-center">
            <Search className="w-5 h-5 text-velune-muted mr-3 stroke-[1.5]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coffee, stoneware, equipment, or brew guides..."
              autoFocus
              className="w-full bg-transparent text-base md:text-lg focus:outline-none placeholder:text-stone-400 placeholder:font-normal font-medium tracking-tight"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-velune-muted hover:text-velune-charcoal px-2"
              >
                Clear
              </button>
            ) : null}
            <button
              onClick={onClose}
              className="ml-2 p-1 text-velune-muted hover:text-velune-charcoal"
              aria-label="Close search"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Search Body */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto pr-1">
            {!query.trim() ? (
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-velune-muted mb-3 font-medium">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Awan Flores", "Kintamani", "Stoneware Cup", "Ceramic Dripper", "Single Serve", "Subscription"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="text-xs px-3 py-1.5 bg-white border border-velune-border hover:border-velune-charcoal transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>

                <p className="text-[11px] uppercase tracking-[0.16em] text-velune-muted mb-3 font-medium">
                  Collections
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href="/collections/coffee"
                    onClick={onClose}
                    className="p-3 bg-white border border-velune-border hover:border-velune-charcoal flex justify-between items-center transition-colors"
                  >
                    <span>All Coffees</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-velune-muted" />
                  </Link>
                  <Link
                    href="/collections/ceramics"
                    onClick={onClose}
                    className="p-3 bg-white border border-velune-border hover:border-velune-charcoal flex justify-between items-center transition-colors"
                  >
                    <span>Stoneware & Ceramics</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-velune-muted" />
                  </Link>
                  <Link
                    href="/collections/equipment"
                    onClick={onClose}
                    className="p-3 bg-white border border-velune-border hover:border-velune-charcoal flex justify-between items-center transition-colors"
                  >
                    <span>Brewing Equipment</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-velune-muted" />
                  </Link>
                  <Link
                    href="/subscription"
                    onClick={onClose}
                    className="p-3 bg-white border border-velune-border hover:border-velune-charcoal flex justify-between items-center transition-colors"
                  >
                    <span>Coffee Subscriptions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-velune-muted" />
                  </Link>
                </div>
              </div>
            ) : filteredProducts.length === 0 && filteredArticles.length === 0 ? (
              <div className="py-12 text-center text-velune-muted text-sm">
                No results found for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.length > 0 && (
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.16em] text-velune-muted mb-3 font-medium">
                      Products ({filteredProducts.length})
                    </h4>
                    <div className="divide-y divide-velune-border border-t border-b border-velune-border">
                      {filteredProducts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/products/${p.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 py-3 hover:bg-white/60 px-2 transition-colors group"
                        >
                          <div className="relative w-12 h-14 bg-stone-200 flex-shrink-0 overflow-hidden">
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium group-hover:underline truncate">
                              {p.name}
                            </p>
                            <p className="text-xs text-velune-muted truncate">
                              {p.subtitle} • {p.tastingNotes.slice(0, 2).join(", ")}
                            </p>
                          </div>
                          <span className="text-xs font-semibold flex-shrink-0">
                            {formatIDR(p.price)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredArticles.length > 0 && (
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.16em] text-velune-muted mb-3 font-medium">
                      Journal & Brew Guides ({filteredArticles.length})
                    </h4>
                    <div className="divide-y divide-velune-border border-t border-b border-velune-border">
                      {filteredArticles.map((a) => (
                        <Link
                          key={a.id}
                          href={`/journal/${a.slug}`}
                          onClick={onClose}
                          className="block py-3 hover:bg-white/60 px-2 transition-colors group"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-velune-muted">
                            {a.category} • {a.readTime}
                          </span>
                          <p className="text-sm font-medium group-hover:underline mt-0.5">
                            {a.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
