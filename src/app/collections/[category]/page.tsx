"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/content";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CollectionPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const collection = COLLECTIONS.find((c) => c.slug === categorySlug);
  if (!collection) {
    notFound();
  }

  const [selectedRoast, setSelectedRoast] = useState<string>("All");
  const [selectedProcess, setSelectedProcess] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products by category
  const baseProducts = useMemo(() => {
    if (categorySlug === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === categorySlug);
  }, [categorySlug]);

  // Available filter options based on current category products
  const availableRoasts = useMemo(() => {
    const roasts = new Set<string>();
    baseProducts.forEach((p) => {
      if (p.roastType) roasts.add(p.roastType);
    });
    return ["All", ...Array.from(roasts)];
  }, [baseProducts]);

  const availableProcesses = useMemo(() => {
    const processes = new Set<string>();
    baseProducts.forEach((p) => {
      if (p.process) processes.add(p.process);
    });
    return ["All", ...Array.from(processes)];
  }, [baseProducts]);

  // Apply filters & sorting
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    if (selectedRoast !== "All") {
      result = result.filter((p) => p.roastType === selectedRoast);
    }

    if (selectedProcess !== "All") {
      result = result.filter((p) => p.process === selectedProcess);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [baseProducts, selectedRoast, selectedProcess, sortBy]);

  const hasActiveFilters = selectedRoast !== "All" || selectedProcess !== "All";

  const clearFilters = () => {
    setSelectedRoast("All");
    setSelectedProcess("All");
  };

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Category Header */}
      <div className="mb-12 pb-6 border-b border-velune-border">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-velune-muted mb-3">
          <Link href="/" className="hover:text-velune-charcoal">Home</Link>
          <span>/</span>
          <span className="text-velune-charcoal">Collections</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-velune-charcoal mb-4">
          {collection.title}
        </h1>

        <p className="text-sm md:text-base text-velune-muted max-w-2xl leading-relaxed">
          {collection.description}
        </p>
      </div>

      {/* Filter and Sorting Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-velune-border gap-4">
        {/* Desktop Filter Pills */}
        <div className="hidden md:flex items-center flex-wrap gap-4 text-xs">
          {availableRoasts.length > 2 && (
            <div className="flex items-center space-x-1.5">
              <span className="text-velune-muted uppercase tracking-wider mr-1">Roast:</span>
              {availableRoasts.map((roast) => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`px-3 py-1.5 border transition-colors ${
                    selectedRoast === roast
                      ? "bg-velune-charcoal text-white border-velune-charcoal font-medium"
                      : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                  }`}
                >
                  {roast}
                </button>
              ))}
            </div>
          )}

          {availableProcesses.length > 2 && (
            <div className="flex items-center space-x-1.5">
              <span className="text-velune-muted uppercase tracking-wider mr-1">Process:</span>
              {availableProcesses.map((proc) => (
                <button
                  key={proc}
                  onClick={() => setSelectedProcess(proc)}
                  className={`px-3 py-1.5 border transition-colors ${
                    selectedProcess === proc
                      ? "bg-velune-charcoal text-white border-velune-charcoal font-medium"
                      : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
                  }`}
                >
                  {proc}
                </button>
              ))}
            </div>
          )}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-velune-muted hover:text-velune-charcoal flex items-center gap-1 underline underline-offset-2 ml-2"
            >
              <X className="w-3.5 h-3.5" /> Clear filters
            </button>
          )}
        </div>

        {/* Mobile Filter Button */}
        <div className="flex md:hidden items-center justify-between w-full">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium px-4 py-2 border border-velune-border bg-white"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters {hasActiveFilters && "• Active"}
          </button>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center space-x-2 text-xs self-end md:self-auto">
          <span className="text-velune-muted uppercase tracking-wider">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-velune-border px-3 py-1.5 text-velune-charcoal focus:outline-none focus:border-velune-charcoal text-xs cursor-pointer"
          >
            <option value="featured">Featured Releases</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Alphabetical: A – Z</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Panel Accordion */}
      {showMobileFilters && (
        <div className="md:hidden bg-white p-5 border border-velune-border mb-8 space-y-4 text-xs">
          {availableRoasts.length > 2 && (
            <div>
              <p className="font-medium text-velune-muted uppercase tracking-wider mb-2">Roast Profile</p>
              <div className="flex flex-wrap gap-2">
                {availableRoasts.map((roast) => (
                  <button
                    key={roast}
                    onClick={() => setSelectedRoast(roast)}
                    className={`px-3 py-1.5 border ${
                      selectedRoast === roast
                        ? "bg-velune-charcoal text-white border-velune-charcoal"
                        : "border-velune-border bg-stone-50"
                    }`}
                  >
                    {roast}
                  </button>
                ))}
              </div>
            </div>
          )}

          {availableProcesses.length > 2 && (
            <div>
              <p className="font-medium text-velune-muted uppercase tracking-wider mb-2">Process</p>
              <div className="flex flex-wrap gap-2">
                {availableProcesses.map((proc) => (
                  <button
                    key={proc}
                    onClick={() => setSelectedProcess(proc)}
                    className={`px-3 py-1.5 border ${
                      selectedProcess === proc
                        ? "bg-velune-charcoal text-white border-velune-charcoal"
                        : "border-velune-border bg-stone-50"
                    }`}
                  >
                    {proc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full py-2 bg-stone-100 text-center font-medium"
            >
              Reset All Filters
            </button>
          )}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-base font-medium text-velune-charcoal mb-2">No products match your criteria.</p>
          <p className="text-xs text-velune-muted mb-6">Try clearing active filters to see all available lots.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2.5 bg-velune-charcoal text-white text-xs uppercase tracking-wider"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
