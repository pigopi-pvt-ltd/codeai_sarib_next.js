"use client";

import React, { useState } from "react";
import { Leaf, ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function ClimateBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const pledgeText =
    siteConfig.climatePledge ||
    "CODE AI TECHNOLOGY LLC will contribute 0.5% of your purchase to removing CO₂ from the atmosphere.";

  return (
    <div className="bg-emerald-500/10 backdrop-blur-md text-slate-900 border-b border-emerald-500/20 py-3 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 relative">
        
        {/* Left Green Leaf Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-900 font-black text-xs uppercase tracking-wider shrink-0 border border-emerald-500/40">
          <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center">
            <Leaf className="w-2.5 h-2.5 text-white" />
          </div>
          <span>Climate Pledge</span>
        </div>

        {/* Marquee Center Ticker with Larger Font */}
        <div className="overflow-hidden flex-1 relative py-0.5 mx-2">
          <div className="animate-marquee flex items-center gap-16 font-extrabold tracking-wide text-slate-900 text-sm sm:text-base md:text-lg">
            <span className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0 shadow-sm" />
              {pledgeText}
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0 shadow-sm" />
              {pledgeText}
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0 shadow-sm" />
              {pledgeText}
            </span>
          </div>
        </div>

        {/* Right CTA + Dismiss */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-1 sm:pl-3 z-10">
          <a
            href={siteConfig.climateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-900 hover:text-emerald-950 font-black transition-colors flex items-center gap-1 text-[11px] sm:text-sm hover:underline bg-emerald-500/20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-emerald-500/40 shadow-sm whitespace-nowrap"
          >
            <span className="hidden sm:inline">Know How Much</span>
            <span className="sm:hidden">Know More</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800 stroke-[3]" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-600 hover:text-slate-950 p-1 sm:p-1.5 rounded-full hover:bg-emerald-500/20 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
}
