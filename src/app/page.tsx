import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedReleases from "@/components/home/FeaturedReleases";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import EditorialCafeFeature from "@/components/home/EditorialCafeFeature";
import StonewareShowcase from "@/components/home/StonewareShowcase";
import SubscriptionFeature from "@/components/home/SubscriptionFeature";
import JournalHighlights from "@/components/home/JournalHighlights";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <FeaturedReleases />
      <CollectionShowcase />
      <EditorialCafeFeature />
      <StonewareShowcase />
      <SubscriptionFeature />
      <JournalHighlights />
    </div>
  );
}
