"use client";

import React from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function ClimateContributionCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="bg-gradient-to-r from-emerald-500/15 via-teal-50 to-emerald-500/15 rounded-3xl p-8 sm:p-14 text-slate-900 relative overflow-hidden shadow-xl border-2 border-emerald-400/50">
        
        {/* World Map / Dot Grid Ambient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.12)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Icon & Headline */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
              <Leaf className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-slate-900 leading-tight">
                Know How Much We Are Contributing to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">Climate</span>
              </h3>
              <p className="text-slate-700 text-base sm:text-xl leading-relaxed max-w-2xl font-bold">
                We believe in a sustainable future. Every purchase contributes 0.5% towards carbon removal. Check how our contribution makes a difference!
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <a
            href={siteConfig.climateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white font-black px-10 py-5 rounded-full shadow-xl shadow-emerald-600/30 flex items-center gap-3.5 transition-all hover:scale-105 shrink-0 text-base sm:text-lg border border-emerald-400/40"
          >
            <Leaf className="w-6 h-6 fill-current" />
            <span>Check Our Contribution</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </a>

        </div>
      </div>
    </div>
  );
}
