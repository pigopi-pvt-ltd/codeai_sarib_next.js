"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  const features = service.keyFeatures || service.features || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
              IT Capability Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Badge */}
        {service.badge && (
          <div className="mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              {service.badge}
            </span>
          </div>
        )}

        {/* Tagline */}
        <p className="text-blue-700 font-semibold text-sm mb-3 italic">
          "{service.tagline}"
        </p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature List */}
        {features.length > 0 && (
          <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Key Solutions Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{typeof feature === 'string' ? feature : feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl btn-primary text-sm font-bold flex items-center justify-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/${service.slug}`}
            onClick={onClose}
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 font-semibold text-sm text-slate-700 hover:text-blue-700 transition-colors text-center"
          >
            View Full Details
          </Link>
        </div>
      </div>
    </div>
  );
}
