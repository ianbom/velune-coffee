"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/content";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { VIEWPORT_CARD } from "@/components/motion/motion-config";

export default function JournalHighlights() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#F8F1EC]">
      <div className="max-w-site mx-auto">
        <FadeIn direction="up" distance={16} duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-velune-border">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-velune-muted block mb-2">
                Stories &amp; Knowledge
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-velune-charcoal">
                From The Journal
              </h2>
            </div>

            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.14em] text-velune-charcoal hover:underline mt-4 md:mt-0 font-medium group"
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerInterval={0.08}
          viewport={VIEWPORT_CARD}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
            <StaggerItem
              key={article.id}
              direction="up"
              distance={20}
              duration={0.65}
            >
              <Link
                href={`/journal/${article.slug}`}
                className="group flex flex-col text-left h-full"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE3DC] mb-4">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-velune-muted">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-medium text-velune-charcoal group-hover:underline underline-offset-4 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-[13px] text-velune-muted line-clamp-2 leading-relaxed pt-1">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
