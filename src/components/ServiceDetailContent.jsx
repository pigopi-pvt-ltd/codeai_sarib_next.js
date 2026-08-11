"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layout,
  Users,
  Smartphone,
  UserCheck,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  Building2,
  Stethoscope,
  ChevronRight,
  Check,
  Star,
  Award,
} from "lucide-react";

const iconMap = {
  Layout,
  Users,
  Smartphone,
  UserCheck,
  TrendingUp,
  Cpu,
};

export default function ServiceDetailContent({ service }) {
  const IconComponent = iconMap[service.iconName] || Cpu;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24 bg-[#FAF9FF] text-slate-900">

      {/* Top Breadcrumb Navigation */}
      <nav className="inline-flex items-center flex-wrap gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200/80 px-3.5 sm:px-4 py-2 rounded-2xl sm:rounded-full shadow-sm max-w-full">
        <Link href="/" className="hover:text-purple-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link href="/service" className="hover:text-purple-600 transition-colors">
          Services
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-purple-700 font-bold break-words">{service.title}</span>
      </nav>

      {/* Hero Header Card - Premium Light Theme */}
      <div className="relative rounded-3xl bg-gradient-to-br from-white via-purple-50/60 to-indigo-50/40 p-8 md:p-16 border border-purple-100/80 shadow-xl shadow-purple-900/5 overflow-hidden">

        {/* Soft Decorative Ambient Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>{service.badge || "Core Service"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight font-sans">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-extrabold text-base shadow-lg shadow-purple-600/25 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-slate-800 hover:bg-slate-50 font-bold text-base border border-slate-200/90 shadow-sm transition-all"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Floating Visual Card */}
          <div className="lg:col-span-4 hidden lg:flex justify-center">
            <div className="w-full max-w-sm p-8 rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-900/10 space-y-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                <IconComponent className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enterprise Scale</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tailored solutions engineered for high performance, top security, and seamless scalability.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-purple-700 font-bold">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-600" />
                  0.5% Climate Pledge Included
                </span>
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Special IT Consultation Split View (Tech & Healthcare) */}
      {service.id === "it-consultation" ? (
        <div className="space-y-16">

          {/* Tech Industry Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl shadow-purple-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Vertical Strategy</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                  🔹 For the Tech Industry
                </h2>
              </div>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              Tech companies move fast-and so should their IT strategy. Our consultants work closely with startups, SaaS providers, software developers, and enterprises to align technology initiatives with business goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.techIndustryServices.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/50 hover:border-purple-200 transition-all space-y-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-7.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Healthcare Industry Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xl shadow-purple-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Stethoscope className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">HealthTech & Compliance</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                  🔹 For the Healthcare Industry
                </h2>
              </div>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              Healthcare IT demands precision, privacy, and regulatory compliance. We provide specialized IT consulting to medical providers, healthtech startups, hospitals, and insurers to support clinical operations and patient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.healthcareIndustryServices.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all space-y-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-7.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Standard Features Grid - Clean Light Cards */
        <div id="features" className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-widest">
              Key Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Features & Benefits
            </h2>
            <p className="text-slate-600 text-base">
              Explore the core advantages and engineered capabilities included with our {service.title} services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyFeatures?.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-purple-900/5 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md shadow-purple-600/25 group-hover:scale-105 transition-transform">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Our Process / Approach Section - Light Gradient Box */}
      {service.approach && (
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50/50 to-blue-50 p-8 md:p-14 border border-purple-200/80 shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Our Strategic Approach</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-sans leading-tight">
            Our Engineered Process
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-4xl">
            {service.approach}
          </p>
        </div>
      )}

      {/* Why Choose Us Section */}
      <div className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200/80 shadow-xl shadow-purple-900/5 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-700">The Competitive Advantage</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-sans">
            Why Choose Code AI Technology?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.whyChooseUs?.map((reason, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-purple-50/40 border border-purple-100 hover:bg-purple-50 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-slate-900 leading-snug">{reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA Section - Elegant Light Theme Integration */}
      <div className="bg-white rounded-3xl p-10 md:p-14 border border-purple-100/80 shadow-xl shadow-purple-900/5 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans leading-tight">
            Ready to Elevate Your Business with {service.title}?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            {service.ctaText}
          </p>

          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-extrabold text-base shadow-lg shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
