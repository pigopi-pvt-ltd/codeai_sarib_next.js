"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, Building2, Leaf, ArrowRight } from "lucide-react";
import { siteConfig, servicesData } from "@/data/siteData";

export default function ContactSection() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "it-consulting",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (planParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about the ${planParam.toUpperCase()} plan options.`,
      }));
    }
  }, [planParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Corporate Office",
      value: siteConfig.name,
      sub: siteConfig.address,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      icon: Phone,
      label: "Telephone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      color: "text-orange-600 bg-orange-50 border-orange-100",
    },
  ];

  return (
    <section id="contact" className="py-10 lg:py-14 relative overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* ── Section Header matching Design System ── */}
        <div className="text-left space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#F97316] uppercase tracking-widest">
              GET IN TOUCH -
            </span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500">Digital Transformation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our expert team for consultation, service inquiries, or custom enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left Panel ── */}
          <div className="lg:col-span-4 space-y-6">

            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3 font-display">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                Corporate Headquarters
              </h3>

              <div className="space-y-5 pt-2">
                {contactItems.map(({ icon: Icon, label, value, sub, href, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-bold text-slate-900">{value}</div>
                      )}
                      {sub && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{sub}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Climate Pledge Mini Card */}
            <div className="bg-gradient-to-br from-[#0F0826] to-[#1A0C38] rounded-3xl p-7 text-white border border-purple-500/30 shadow-lg relative overflow-hidden">
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider mb-1">
                    0.5% Climate Pledge
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {siteConfig.climatePledge}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right Form ── */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-2xl shadow-purple-900/5">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Inquiry Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team at Code AI Technology LLC will respond to your message promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white text-xs font-bold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">Send Us A Message</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Fill out the form below and we will get back to you within 24 hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Select Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Details *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-purple-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
