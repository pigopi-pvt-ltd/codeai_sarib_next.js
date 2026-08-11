"use client";

import React from "react";
import { Target, Compass, Globe2, Building2, CheckCircle2 } from "lucide-react";
import { siteConfig, aboutContent } from "@/data/siteData";

export default function AboutSection({ isPreview = false }) {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      text: aboutContent.mission,
      accent: "purple",
      footer: "Digital Transformation & Scalability",
    },
    {
      icon: Compass,
      title: "Our Purpose",
      text: aboutContent.purpose,
      accent: "indigo",
      footer: "Future-Ready IT Guidance",
    },
    {
      icon: Globe2,
      title: "Our Vision",
      text: aboutContent.vision,
      accent: "orange",
      footer: "Global Technology Leadership",
    },
  ];

  const accentMap = {
    purple: {
      icon: "bg-purple-50 text-purple-600 border-purple-100",
      hover: "hover:border-purple-300 hover:shadow-purple-500/10",
      footer: "text-purple-700",
      footerIcon: "text-purple-500",
      top: "from-purple-500 to-indigo-600",
    },
    indigo: {
      icon: "bg-indigo-50 text-indigo-600 border-indigo-100",
      hover: "hover:border-indigo-300 hover:shadow-indigo-500/10",
      footer: "text-indigo-700",
      footerIcon: "text-indigo-500",
      top: "from-indigo-500 to-purple-600",
    },
    orange: {
      icon: "bg-orange-50 text-orange-600 border-orange-100",
      hover: "hover:border-orange-300 hover:shadow-orange-500/10",
      footer: "text-orange-700",
      footerIcon: "text-orange-500",
      top: "from-orange-400 to-amber-500",
    },
  };

  const introParagraphs = Array.isArray(aboutContent.intro)
    ? aboutContent.intro
    : [aboutContent.intro];

  return (
    <section id="about" className="pt-4 pb-10 lg:pt-6 lg:pb-14 relative overflow-hidden bg-white">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-50/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* ── Featured "About The Company" Card ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-2xl shadow-purple-900/5 relative overflow-hidden">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100/70 text-purple-600 border border-purple-200/80 flex items-center justify-center shrink-0 shadow-sm">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  About The Company
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal pt-2">
              {introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission / Purpose / Vision Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, text, accent, footer }) => {
            const a = accentMap[accent];
            return (
              <div
                key={title}
                className={`card flex flex-col ${a.hover} hover:shadow-xl group relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-sm`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.top} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${a.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{text}</p>
                  <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold ${a.footer}`}>
                    <CheckCircle2 className={`w-4 h-4 ${a.footerIcon} shrink-0`} />
                    {footer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
