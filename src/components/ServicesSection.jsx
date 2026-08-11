"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/siteData";
import ServiceModal from "@/components/ServiceModal";
import {
  Cpu, Code, Cloud, Shield, BarChart3, Headphones,
  ArrowRight, Monitor
} from "lucide-react";

const serviceIcons = {
  "it-consulting": { icon: Monitor, bg: "bg-purple-100 text-purple-600 border-purple-200" },
  "software-development": { icon: Code, bg: "bg-orange-100 text-orange-600 border-orange-200" },
  "cloud-solutions": { icon: Cloud, bg: "bg-blue-100 text-blue-600 border-blue-200" },
  "cyber-security": { icon: Shield, bg: "bg-pink-100 text-pink-600 border-pink-200" },
  "data-analytics": { icon: BarChart3, bg: "bg-teal-100 text-teal-600 border-teal-200" },
  "it-support": { icon: Headphones, bg: "bg-purple-100 text-purple-600 border-purple-200" },
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="service" className="py-10 lg:py-14 relative overflow-hidden bg-slate-50/60">

      {/* Decorative Dots Pattern Background */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* ── Header matching Image 2 ── */}
        <div className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest">
              WHAT WE DO -
            </span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            We provide end-to-end IT solutions that help businesses stay ahead in the digital world.
          </p>
        </div>

        {/* ── 6 Service Cards Grid matching Image 2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const config = serviceIcons[service.id] || { icon: Cpu, bg: "bg-purple-100 text-purple-600 border-purple-200" };
            const IconComp = config.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Soft Rounded Circle Icon Container */}
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 ${config.bg}`}>
                  <IconComp className="w-8 h-8" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-purple-600 transition-colors">
                  <Link href={`/${service.slug}`}>{service.title}</Link>
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Action Button / Link */}
                <div className="pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
}
