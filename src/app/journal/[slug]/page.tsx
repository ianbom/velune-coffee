import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Coffee } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/content";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function JournalArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id);

  // Recommended coffee product
  const pairedCoffee = PRODUCTS.find((p) => p.category === "coffee") || PRODUCTS[0];

  return (
    <article className="py-12 md:py-20 px-4 md:px-8 max-w-site mx-auto min-h-screen">
      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-velune-muted hover:text-velune-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.16em] text-velune-muted mb-4">
          <span className="text-velune-charcoal font-medium">{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-velune-charcoal mb-6 leading-tight">
          {article.title}
        </h1>

        <p className="text-base md:text-lg text-velune-muted leading-relaxed font-normal">
          {article.excerpt}
        </p>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-velune-muted">
          <span>Words &amp; Photography by</span>
          <span className="text-velune-charcoal font-medium">{article.author}</span>
        </div>
      </header>

      {/* Hero Panoramic Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-5xl mx-auto overflow-hidden bg-[#EAE3DC] border border-velune-border mb-16 md:mb-20">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      {/* Article Reading Layout */}
      <div className="max-w-2xl mx-auto space-y-8 text-base md:text-lg text-velune-charcoal/90 leading-[1.8] font-normal">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="first-letter:text-4xl first-letter:font-medium first-letter:mr-1 first-letter:float-left first-letter:leading-none">
            {paragraph}
          </p>
        ))}

        {/* Pull Quote */}
        <blockquote className="my-12 p-8 bg-[#F1E9E2] border-l-2 border-velune-charcoal italic text-lg md:text-xl text-velune-charcoal font-serif leading-relaxed">
          &ldquo;Our duty as roasters is not to add our own fingerprint, but to step out of the way. Every floral nuance was forged by soil and altitude.&rdquo;
        </blockquote>

        {/* Interactive Recipe Table if Pour-Over Article */}
        {article.slug === "the-geometry-of-pour-over" && (
          <div className="my-10 bg-white border border-velune-border p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-velune-charcoal mb-2">
              <Coffee className="w-4 h-4" />
              <span>Standard VELUNE Conical V60 Master Recipe</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border-y border-velune-border py-4">
              <div>
                <span className="text-velune-muted block">Dose</span>
                <span className="text-sm font-medium">15.0g</span>
              </div>
              <div>
                <span className="text-velune-muted block">Water</span>
                <span className="text-sm font-medium">250g (93°C)</span>
              </div>
              <div>
                <span className="text-velune-muted block">Ratio</span>
                <span className="text-sm font-medium">1:16.6</span>
              </div>
              <div>
                <span className="text-velune-muted block">Target Time</span>
                <span className="text-sm font-medium">2:45 – 3:00</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-velune-muted">
              <div className="flex gap-4">
                <span className="font-mono text-velune-charcoal font-medium w-16">0:00 – 0:45</span>
                <span>Bloom with 45g of water. Swirl gently twice to saturate all grounds.</span>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-velune-charcoal font-medium w-16">0:45 – 1:15</span>
                <span>Second pour in steady concentric circles up to 150g total weight.</span>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-velune-charcoal font-medium w-16">1:15 – 1:45</span>
                <span>Final pour center-focused up to 250g. Allow complete gravity drawdown.</span>
              </div>
            </div>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-16 pt-8 border-t border-velune-border flex items-center gap-4 text-xs text-velune-muted">
          <div className="w-12 h-12 rounded-full bg-[#EAE3DC] border border-velune-border flex items-center justify-center font-medium text-velune-charcoal text-sm">
            VC
          </div>
          <div>
            <p className="font-medium text-velune-charcoal text-sm">{article.author}</p>
            <p>Curator &amp; Coffee Lead at VELUNE Coffee Roasters, Jakarta &amp; Copenhagen.</p>
          </div>
        </div>
      </div>

      {/* Featured Pair Coffee */}
      {pairedCoffee && (
        <div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-velune-border">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-4 text-center">
            Featured Tasting Companion
          </span>
          <div className="max-w-sm mx-auto">
            <ProductCard product={pairedCoffee} />
          </div>
        </div>
      )}

      {/* Related Reading Carousel */}
      {otherArticles.length > 0 && (
        <div className="mt-24 pt-16 border-t border-velune-border max-w-site mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-velune-charcoal">
              Related Field Stories
            </h3>
            <Link
              href="/journal"
              className="text-xs uppercase tracking-[0.14em] font-medium text-velune-charcoal hover:underline flex items-center gap-1"
            >
              All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((other) => (
              <Link
                key={other.id}
                href={`/journal/${other.slug}`}
                className="group flex gap-4 bg-white border border-velune-border p-4 hover:border-velune-charcoal transition-colors"
              >
                <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden bg-[#EAE3DC] border border-velune-border">
                  <Image
                    src={other.coverImage}
                    alt={other.title}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-velune-muted block mb-1">
                      {other.category} • {other.readTime}
                    </span>
                    <h4 className="text-sm font-medium text-velune-charcoal group-hover:underline line-clamp-2">
                      {other.title}
                    </h4>
                  </div>
                  <span className="text-xs text-velune-muted">{other.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
