"use client";

import React from "react";
import { Sparkles, TrendingUp, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/siteData";
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Proven Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Case Studies & <span className="text-gradient-cyan">Results</span>
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md">
            See how our client partners achieve exponential ROI and technical velocity through Code AI Technology LLC solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {cs.category}
                  </span>
                </div>

                {/* Big Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {cs.stat}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {cs.statLabel}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{cs.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-1">Client: {cs.client}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {cs.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {cs.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all"
          >
            Become Our Next Enterprise Success Story <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
