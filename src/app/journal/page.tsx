"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/content";

export default function JournalIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Origin & Sourcing", "Brew Guide", "Philosophy"];

  const filteredArticles = selectedCategory === "All"
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle = JOURNAL_ARTICLES[0];

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-velune-muted block mb-3">
          The VELUNE Journal
        </span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-velune-charcoal mb-5">
          Stories, Terroir &amp; Craft
        </h1>
        <p className="text-sm md:text-base text-velune-muted leading-relaxed max-w-2xl mx-auto">
          Field journals from Indonesian coffee origins, deep dives into extraction geometry,
          and essays on Scandinavian roasting philosophy.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border transition-colors ${
                selectedCategory === cat
                  ? "bg-velune-charcoal text-white border-velune-charcoal font-medium"
                  : "bg-white text-velune-charcoal border-velune-border hover:border-velune-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Featured Article (when viewing All or matching category) */}
      {selectedCategory === "All" && featuredArticle && (
        <div className="mb-16 md:mb-24 pb-16 border-b border-velune-border">
          <Link
            href={`/journal/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden bg-[#EAE3DC] border border-velune-border">
              <Image
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-white text-velune-charcoal text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1 border border-velune-border">
                Featured Editorial
              </span>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-velune-muted">
                <span>{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal group-hover:underline underline-offset-4 decoration-1">
                {featuredArticle.title}
              </h2>

              <p className="text-xs md:text-sm text-velune-muted leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center text-xs uppercase tracking-[0.16em] font-medium text-velune-charcoal gap-2">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredArticles.map((article) => (
          <article key={article.id} className="group flex flex-col bg-white border border-velune-border">
            <Link
              href={`/journal/${article.slug}`}
              className="relative aspect-[16/11] overflow-hidden bg-[#EAE3DC] border-b border-velune-border block"
            >
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-white/95 text-velune-charcoal text-[10px] uppercase tracking-[0.16em] font-medium px-2.5 py-1">
                {article.category}
              </span>
            </Link>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] text-velune-muted">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-medium text-velune-charcoal group-hover:underline underline-offset-2">
                  <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-xs text-velune-muted leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-velune-border flex items-center justify-between text-xs text-velune-muted">
                <span className="truncate">{article.author}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="text-velune-charcoal font-medium hover:underline flex items-center gap-1"
                >
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
