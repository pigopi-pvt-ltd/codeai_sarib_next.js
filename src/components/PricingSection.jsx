"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ArrowRight,
  Star,
  Crown,
  Zap,
  ShieldCheck,
  Building2,
  Cpu,
  CheckCircle2,
  Layers,
  X
} from "lucide-react";
import { plansData } from "@/data/siteData";

const planIcons = {
  silver: Zap,
  gold: Star,
  platinum: Crown,
  "app-development": Cpu,
  "crm-plan": Building2,
  enterprise: ShieldCheck,
};

const categoryTabs = [
  { id: "all", label: "All Packages" },
  { id: "web", label: "Web Solutions" },
  { id: "software", label: "Apps & CRM" },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [showComparison, setShowComparison] = useState(false);

  const filteredPlans = plansData.filter((plan) => {
    if (activeTab === "web") {
      return ["silver", "gold", "platinum"].includes(plan.id);
    }
    if (activeTab === "software") {
      return ["app-development", "crm-plan", "enterprise"].includes(plan.id);
    }
    return true;
  });

  const getPriceDisplay = (plan) => {
    if (plan.id === "enterprise") return { amount: "Custom Quote", note: "Tailored to scope" };
    return { amount: plan.price, note: plan.period ? `/ ${plan.period}` : "" };
  };

  return (
    <section id="plans" className="py-10 lg:py-14 relative overflow-hidden bg-[#FAF9FF]">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-200/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Transparent Investment Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans">
            Flexible & Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">Pricing Plans</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From essential web design to full enterprise software solutions, choose the plan that accelerates your digital growth.
          </p>
        </div>

        {/* ── Category Filter Tabs Bar ── */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-white rounded-2xl border border-slate-200/90 shadow-md shadow-purple-900/5">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/25"
                    : "text-slate-600 hover:text-purple-700 hover:bg-slate-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Plans Grid - 100% Light Theme ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPlans.map((plan) => {
            const PlanIcon = planIcons[plan.id] || Sparkles;
            const isEnterprise = plan.id === "enterprise";
            const isPopular = plan.popular;
            const priceInfo = getPriceDisplay(plan);

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${isPopular
                    ? "bg-gradient-to-b from-white via-purple-50/70 to-indigo-50/40 text-slate-900 border-2 border-purple-400 shadow-xl shadow-purple-600/15 lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-md shadow-purple-900/5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5"
                  }`}
              >
                {/* Popular Ribbon Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-1.5 text-center text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                    ★ Most Popular Choice
                  </div>
                )}

                <div className={isPopular ? "pt-4" : ""}>

                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${isPopular
                          ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30"
                          : "bg-purple-50 text-purple-600 border-purple-100"
                        }`}
                    >
                      <PlanIcon className="w-7 h-7" />
                    </div>

                    <span
                      className={`px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${isPopular
                          ? "bg-purple-100 text-purple-800 border border-purple-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200/70"
                        }`}
                    >
                      {plan.period || "Standard"}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black font-sans text-slate-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Pricing Display */}
                  <div className="mb-6 pb-6 border-b border-slate-200/70 flex flex-col">
                    {isEnterprise ? (
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-sans">
                        Custom Quote
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-4xl sm:text-5xl font-black font-sans tracking-tight ${isPopular ? "text-purple-700" : "text-slate-900"
                            }`}
                        >
                          {priceInfo.amount}
                        </span>
                        {priceInfo.note && (
                          <span className="text-xs font-semibold text-slate-500">
                            {priceInfo.note}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700">
                      Included Deliverables:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPopular
                                ? "bg-purple-600 text-white"
                                : "bg-purple-100 text-purple-600 border border-purple-200"
                              }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Action Button */}
                <Link
                  href={`/contact-us?plan=${encodeURIComponent(plan.name)}`}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${isPopular
                      ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-600/25 hover:scale-[1.02]"
                      : isEnterprise
                        ? "bg-slate-900 hover:bg-purple-600 text-white shadow-md"
                        : "bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/80 shadow-sm"
                    }`}
                >
                  <span>{isEnterprise ? "Contact Sales Team" : "Select Package"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            );
          })}
        </div>

        {/* ── Feature Comparison Trigger Button ── */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200/90 text-purple-700 hover:bg-purple-50 font-extrabold text-xs sm:text-sm shadow-sm transition-all hover:scale-105"
          >
            <Layers className="w-4 h-4 text-purple-600" />
            <span>{showComparison ? "Hide Package Comparison Matrix" : "Compare All Package Features"}</span>
          </button>
        </div>

        {/* ── Expandable Feature Comparison Table - Light Theme ── */}
        {showComparison && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-extrabold text-slate-900 font-sans flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" /> Full Package Comparison Matrix
              </h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4 min-w-[180px]">Feature</th>
                    <th className="py-3.5 px-4">Silver ($49.99)</th>
                    <th className="py-3.5 px-4 text-purple-700 bg-purple-50/60 rounded-t-xl font-extrabold">Gold ($149.99) ★</th>
                    <th className="py-3.5 px-4">Platinum ($199.99)</th>
                    <th className="py-3.5 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Included Pages</td>
                    <td className="py-3.5 px-4">5 Pages</td>
                    <td className="py-3.5 px-4 text-purple-800 bg-purple-50/60 font-bold">10 Pages</td>
                    <td className="py-3.5 px-4">Unlimited Pages</td>
                    <td className="py-3.5 px-4">Custom Architecture</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Websites Managed</td>
                    <td className="py-3.5 px-4">1 Website</td>
                    <td className="py-3.5 px-4 text-purple-800 bg-purple-50/60 font-bold">3 Websites</td>
                    <td className="py-3.5 px-4">5 Websites</td>
                    <td className="py-3.5 px-4">Unlimited Multi-Tenant</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Logo Design</td>
                    <td className="py-3.5 px-4">✓ Included</td>
                    <td className="py-3.5 px-4 text-purple-800 bg-purple-50/60 font-bold">✓ Included</td>
                    <td className="py-3.5 px-4">✓ Included</td>
                    <td className="py-3.5 px-4">✓ Complete Brand Guide</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">WhatsApp & Live Chat</td>
                    <td className="py-3.5 px-4">Basic Chat</td>
                    <td className="py-3.5 px-4 text-purple-800 bg-purple-50/60 font-bold">✓ WhatsApp Chat</td>
                    <td className="py-3.5 px-4">✓ WhatsApp + CRM Integration</td>
                    <td className="py-3.5 px-4">✓ Custom Bot & Live Desk</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Payment Gateway</td>
                    <td className="py-3.5 px-4">-</td>
                    <td className="py-3.5 px-4 text-purple-800 bg-purple-50/60 font-bold">✓ Included</td>
                    <td className="py-3.5 px-4">✓ Included</td>
                    <td className="py-3.5 px-4">✓ Multi-Currency & Stripe</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Climate Contribution</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">0.5% CO₂ Pledge</td>
                    <td className="py-3.5 px-4 text-emerald-700 bg-purple-50/60 font-bold">0.5% CO₂ Pledge</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">0.5% CO₂ Pledge</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">0.5% CO₂ Pledge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Bottom Custom Quote Banner - Light Theme ── */}
        <div className="bg-gradient-to-r from-purple-50/70 via-white to-blue-50/70 rounded-3xl p-8 border border-purple-100 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-sans">Need a custom tailored package?</h4>
              <p className="text-slate-600 text-xs sm:text-sm">We construct dedicated enterprise architecture tailored specifically to your business goals.</p>
            </div>
          </div>
          <Link
            href="/contact-us"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-extrabold shadow-md shadow-purple-600/20 shrink-0 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
