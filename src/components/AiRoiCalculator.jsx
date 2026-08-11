"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, Clock, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AiRoiCalculator() {
  const [selectedService, setSelectedService] = useState("web-designing-solutions");
  const [scale, setScale] = useState("growth");
  const [teamSize, setTeamSize] = useState(15);

  const calculateEstimates = () => {
    let baseCost = 2500;
    let baseTimeSavedHours = 40;
    let roiPercent = 320;

    if (selectedService === "web-designing-solutions") {
      baseCost = scale === "mvp" ? 1500 : scale === "growth" ? 3500 : 8500;
      baseTimeSavedHours = teamSize * 3;
      roiPercent = 290;
    } else if (selectedService === "crm") {
      baseCost = scale === "mvp" ? 2200 : scale === "growth" ? 4800 : 12000;
      baseTimeSavedHours = teamSize * 8;
      roiPercent = 410;
    } else if (selectedService === "app-dvelopment") {
      baseCost = scale === "mvp" ? 3500 : scale === "growth" ? 8500 : 25000;
      baseTimeSavedHours = teamSize * 5;
      roiPercent = 350;
    } else if (selectedService === "it-consultation") {
      baseCost = scale === "mvp" ? 2000 : scale === "growth" ? 5000 : 15000;
      baseTimeSavedHours = teamSize * 6;
      roiPercent = 380;
    } else if (selectedService === "staffing") {
      baseCost = scale === "mvp" ? 1800 : scale === "growth" ? 4500 : 14000;
      baseTimeSavedHours = teamSize * 10;
      roiPercent = 310;
    } else {
      baseCost = scale === "mvp" ? 1200 : scale === "growth" ? 3000 : 9000;
      baseTimeSavedHours = teamSize * 4;
      roiPercent = 340;
    }

    return {
      estCost: `$${baseCost.toLocaleString()}`,
      timeSaved: `${baseTimeSavedHours * 4} hrs / month`,
      roi: `${roiPercent}%`,
    };
  };

  const results = calculateEstimates();

  return (
    <section id="roi-calculator" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Glows inside Dark Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5 text-sky-400" /> Interactive ROI & Cost Estimator
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Calculate Your Potential <span className="text-gradient-cyan">IT Investment & ROI</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Adjust parameters to estimate your potential efficiency gains, projected ROI, and solution investment scope.
              </p>

              {/* Service Capability Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Target Capability
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-slate-950/90 border border-slate-700 text-white font-medium focus:border-sky-400 focus:outline-none transition-colors"
                >
                  <option value="web-designing-solutions">Web Designing Solutions (Responsive & Modern)</option>
                  <option value="crm">CRM & Lead Automation Pipeline</option>
                  <option value="app-dvelopment">App Development (iOS / Android / Web)</option>
                  <option value="it-consultation">IT Consultation & Strategy</option>
                  <option value="staffing">Staffing & Technical Recruitment</option>
                  <option value="digital-marketing">Digital Marketing & Growth Engine</option>
                </select>
              </div>

              {/* Scale Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Select Project Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "mvp", label: "Starter Scope" },
                    { id: "growth", label: "Enterprise Growth" },
                    { id: "custom", label: "Full System Overhaul" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setScale(item.id)}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border text-center ${
                        scale === item.id
                          ? "bg-sky-500/20 border-sky-400 text-sky-300 shadow-sm"
                          : "bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    3. Impacted Team Size
                  </label>
                  <span className="text-sm font-bold text-sky-400">{teamSize} Members</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>
            </div>

            {/* Right Results Display Card */}
            <div className="lg:col-span-5 bg-slate-950/90 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 mb-6">
                  <Sparkles className="w-4 h-4" /> Estimated Impact Overview
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Projected 1-Year ROI</div>
                        <div className="text-xl font-extrabold text-emerald-400">{results.roi}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Operational Hours Saved</div>
                        <div className="text-xl font-extrabold text-sky-400">{results.timeSaved}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Est. Starting Investment</div>
                        <div className="text-xl font-extrabold text-purple-300">{results.estCost}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  href="/contact-us"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 font-bold text-sm text-white shadow-lg shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Schedule Strategy Session <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Includes 0.5% CO₂ carbon removal contribution pledge.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
