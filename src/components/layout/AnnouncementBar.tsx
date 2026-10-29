"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-[#F1E9E2] border-b border-velune-border text-velune-charcoal text-[11px] font-normal tracking-[0.06em] py-2 px-4 md:px-8">
      <div className="max-w-site mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            Wholesale & Partnership
          </Link>
        </div>

        <div className="text-center w-full sm:w-auto">
          <Link href="/subscription" className="hover:underline transition-all">
            Complimentary shipping on subscriptions &amp; orders over Rp 500.000
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-3 text-velune-muted">
          <span>IDR (Rp)</span>
          <span>•</span>
          <span>English</span>
        </div>
      </div>
    </aside>
  );
}
