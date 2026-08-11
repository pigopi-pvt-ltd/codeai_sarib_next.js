"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, TrendingUp, Users, Award, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-2 lg:pt-10 lg:pb-4 overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#F3F6FF] to-white">

      {/* ── Background Dots Pattern & Ambient Blobs ── */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Dots Matrix Decorative Cluster */}
      <div className="absolute top-12 left-[48%] -translate-x-1/2 opacity-40 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Headline & Action Buttons matching Image 2 ── */}
          <div className="lg:col-span-6 space-y-6">

            {/* Sub-tag Badge */}
            <div className="inline-flex items-center gap-2 text-purple-600 font-extrabold text-xs tracking-[0.25em] uppercase">
              <span>WELCOME TO -</span>
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              </span>
            </div>

            {/* Main Headline with Highlighted Orange/Coral Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] font-display leading-[1.1] tracking-tight">
              Code AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316]">Technology</span> <span className="text-[#F97316]">LLC</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Building smart digital solutions that empower businesses, drive innovation and create a better tomorrow.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/service"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-lg shadow-purple-500/25 flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* ── Right Column: High-Tech Desktop Monitor & Floating Interactive Metrics (Exact replica of Image 2) ── */}
          <div className="lg:col-span-6 relative pt-4 pb-12">
            <div className="relative mx-auto w-full max-w-[560px] aspect-[4/3.2] flex items-center justify-center">

              {/* Soft Radial Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-purple-100/30 to-orange-100/30 rounded-full blur-3xl pointer-events-none" />

              {/* ── Desktop Monitor Chassis ── */}
              <div className="relative z-20 w-full max-w-[320px] sm:max-w-[420px] transition-transform duration-500 hover:scale-[1.01]">

                {/* Monitor Bezel Frame */}
                <div className="bg-[#0F172A] rounded-2xl p-2 sm:p-3 shadow-[0_25px_60px_rgba(15,23,42,0.22)] border-2 border-slate-700/80 relative">

                  {/* Camera Web Sensor */}
                  <div className="w-2 h-2 rounded-full bg-slate-700 mx-auto mb-2" />

                  {/* Desktop Screen Content */}
                  <div className="w-full bg-[#FAFAFC] rounded-xl p-2.5 sm:p-3.5 text-slate-800 border border-slate-200 aspect-[16/10] flex flex-col justify-between overflow-hidden relative shadow-inner">

                    {/* Screen Navigation Top Bar */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-200/70 rounded text-[9px] font-semibold text-slate-600 truncate max-w-[120px] sm:max-w-none">
                          dashboard.codeai.io
                        </span>
                      </div>
                    </div>

                    {/* Dashboard Visual Interface */}
                    <div className="grid grid-cols-12 gap-2 sm:gap-3 my-auto items-center">

                      {/* Left Sidebar Menu Simulation */}
                      <div className="col-span-3 bg-white p-1.5 sm:p-2 rounded-xl border border-slate-200/80 space-y-1.5 sm:space-y-2 shadow-sm">
                        <div className="w-full h-2 sm:h-2.5 bg-purple-600 rounded" />
                        <div className="w-3/4 h-1.5 sm:h-2 bg-slate-200 rounded" />
                        <div className="w-5/6 h-1.5 sm:h-2 bg-slate-200 rounded" />
                        <div className="w-2/3 h-1.5 sm:h-2 bg-slate-200 rounded" />
                        <div className="w-full h-1.5 sm:h-2 bg-slate-200 rounded" />
                      </div>

                      {/* Main Chart Display Area */}
                      <div className="col-span-9 bg-white p-2 sm:p-3 rounded-xl border border-slate-200/80 space-y-1.5 sm:space-y-2.5 shadow-sm">
                        <div className="flex justify-between items-center text-[9px] sm:text-[10px]">
                          <span className="font-bold text-slate-700">Analytics Overview</span>
                          <span className="text-[8px] sm:text-[9px] text-purple-600 font-semibold bg-purple-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                            Live Stream
                          </span>
                        </div>

                        {/* Purple Area Wave Graph */}
                        <div className="h-12 sm:h-16 w-full flex items-end">
                          <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,35 Q15,10 35,22 T70,12 T100,28 L100,40 L0,40 Z"
                              fill="url(#purpleGrad)"
                            />
                            <path
                              d="M0,35 Q15,10 35,22 T70,12 T100,28"
                              fill="none"
                              stroke="#8B5CF6"
                              strokeWidth="2.5"
                            />
                          </svg>
                        </div>

                        {/* Mini Bar Chart Bars */}
                        <div className="flex items-end gap-1 sm:gap-1.5 h-5 sm:h-6 pt-1 border-t border-slate-100">
                          <div className="flex-1 bg-purple-200 h-3/5 rounded-t" />
                          <div className="flex-1 bg-purple-400 h-4/5 rounded-t" />
                          <div className="flex-1 bg-purple-600 h-full rounded-t" />
                          <div className="flex-1 bg-purple-300 h-2/3 rounded-t" />
                          <div className="flex-1 bg-orange-400 h-5/6 rounded-t" />
                        </div>
                      </div>

                    </div>

                    {/* Bottom Status Footer */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-400 pt-1 border-t border-slate-200/80">
                      <span>Status: Optimal</span>
                      <span className="text-emerald-500 font-bold">99.9% Uptime</span>
                    </div>

                  </div>

                </div>

                {/* Monitor Stand Base & Neck */}
                <div className="flex flex-col items-center">
                  <div className="w-10 sm:w-12 h-5 sm:h-6 bg-gradient-to-b from-slate-400 to-slate-500 rounded-b-md shadow-inner" />
                  <div className="w-28 sm:w-36 h-2.5 sm:h-3 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 rounded-full shadow-md border-t border-white" />
                </div>
              </div>

              {/* ── Potted Green Plant Next to Monitor ── */}
              <div className="absolute bottom-[40px] right-[1%] sm:right-[4%] z-30 flex items-end">
                <div className="relative group">
                  {/* Leaves SVG */}
                  <div className="w-8 sm:w-10 h-10 sm:h-12 flex flex-col items-center justify-end">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-500 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,3 C10,7 6,10 6,14 C6,17.31 8.69,20 12,20 C15.31,20 18,17.31 18,14 C18,10 14,7 12,3 Z" />
                    </svg>
                    <div className="w-5 sm:w-7 h-5 sm:h-7 bg-slate-200 rounded-b-xl border border-slate-300 shadow-sm" />
                  </div>
                </div>
              </div>

              {/* ── 4 Floating Stat Metric Cards matching Image 2 ── */}

              {/* Card 1: Top Left - Total Projects */}
              <div className="absolute top-[-2%] left-[-2%] sm:top-[2%] sm:left-[-6%] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_12px_30px_rgba(99,102,241,0.14)] border border-purple-100 flex flex-col gap-0.5 sm:gap-1 w-28 sm:w-36 animate-float">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Projects</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-base sm:text-xl font-black text-slate-900 font-display">128</span>
                  <span className="text-[8px] sm:text-[10px] font-extrabold text-emerald-500 bg-emerald-50 px-1 py-0.5 rounded-full">
                    +22.5%
                  </span>
                </div>
                <div className="w-full h-1 bg-purple-100 rounded-full overflow-hidden mt-0.5 sm:mt-1">
                  <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                </div>
              </div>

              {/* Card 2: Top Right - Active Users */}
              <div className="absolute top-[4%] right-[-2%] sm:top-[10%] sm:right-[-6%] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_12px_30px_rgba(99,102,241,0.14)] border border-purple-100 flex items-center gap-1.5 sm:gap-3 animate-float-delayed">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Users</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm sm:text-lg font-black text-slate-900 font-display">2,540</span>
                    <span className="text-[7px] sm:text-[9px] font-bold text-emerald-500">+15.3%</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Middle Left - Happy Clients */}
              <div className="absolute bottom-[26%] left-[-2%] sm:bottom-[32%] sm:left-[-8%] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_12px_30px_rgba(99,102,241,0.14)] border border-purple-100 flex items-center gap-1.5 sm:gap-3 animate-float">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Happy Clients</span>
                  <span className="text-sm sm:text-lg font-black text-slate-900 font-display">98% <span className="text-[8px] sm:text-[10px] text-slate-500 font-normal hidden sm:inline">Satisfaction</span></span>
                </div>
              </div>

              {/* Card 4: Bottom Right - Success Rate */}
              <div className="absolute bottom-[0%] right-[-2%] sm:bottom-[6%] sm:right-[-2%] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_12px_30px_rgba(99,102,241,0.14)] border border-purple-100 flex items-center gap-1.5 sm:gap-3 animate-float-delayed">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full border-2 border-purple-600 border-t-orange-400 flex items-center justify-center text-[8px] sm:text-[10px] font-extrabold text-purple-700 bg-purple-50 shrink-0">
                  99.6%
                </div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Success Rate</span>
                  <span className="text-[9px] sm:text-xs font-extrabold text-emerald-600 flex items-center gap-0.5 sm:gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
