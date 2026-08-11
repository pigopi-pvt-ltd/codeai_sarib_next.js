"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Zap, Cpu, Code } from "lucide-react";
import { servicesData, siteConfig } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/plans", label: "PLANS" },
  ];

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-1">
        
        {/* ── Brand Logo matching Image 2 ── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-orange-500 p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 via-indigo-600 to-orange-500 text-xl font-display">
              B
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-[#0F172A] font-display uppercase leading-none">
              CODE AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">TECHNOLOGY</span>
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links matching Image 2 ── */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <div key={href} className="relative flex flex-col items-center">
                <Link
                  href={href}
                  className={`px-1 py-1.5 text-xs font-extrabold tracking-wider uppercase transition-colors ${
                    isActive ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <span className="w-6 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mt-0.5" />
                )}
              </div>
            );
          })}

          {/* Services Dropdown */}
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/service"
              className={`px-1 py-1.5 text-xs font-extrabold tracking-wider uppercase transition-colors flex items-center gap-1 ${
                pathname.startsWith("/service") || servicesData.some((s) => pathname === `/${s.slug}`)
                  ? "text-purple-600"
                  : "text-slate-700 hover:text-purple-600"
              }`}
            >
              SERVICES
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-purple-600" : ""
                }`}
              />
            </Link>
            {(pathname.startsWith("/service") || servicesData.some((s) => pathname === `/${s.slug}`)) && (
              <span className="w-6 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mt-0.5" />
            )}

            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-slate-200/80 rounded-2xl shadow-2xl shadow-purple-900/10 overflow-hidden animate-slide-down z-50 p-2">
                <div className="px-4 py-2.5 bg-gradient-to-r from-purple-50 via-indigo-50 to-orange-50 rounded-xl mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    Our Services
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">6 Services</span>
                </div>
                <div className="space-y-1">
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${s.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/60 transition-colors group/item"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover/item:text-purple-700 transition-colors">
                          {s.title}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{s.tagline}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto mt-0.5 text-slate-300 group-hover/item:text-purple-500 group-hover/item:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative flex flex-col items-center">
            <Link
              href="/contact-us"
              className={`px-1 py-1.5 text-xs font-extrabold tracking-wider uppercase transition-colors ${
                pathname === "/contact-us" ? "text-purple-600" : "text-slate-700 hover:text-purple-600"
              }`}
            >
              CONTACT US
            </Link>
            {pathname === "/contact-us" && (
              <span className="w-6 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mt-0.5" />
            )}
          </div>
        </nav>

        {/* ── Right CTA Button matching Image 2 ── */}
        <div className="hidden sm:block">
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-md shadow-purple-600/20 hover:shadow-lg flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Mobile Toggle Button ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-purple-600 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl border border-slate-200 bg-white rounded-3xl p-5 space-y-2 shadow-2xl animate-slide-down">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-xs font-extrabold tracking-wider transition-colors ${
                pathname === href ? "bg-purple-50 text-purple-700 font-extrabold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/service"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-2xl text-xs font-extrabold tracking-wider transition-colors ${
              pathname === "/service" ? "bg-purple-50 text-purple-700 font-extrabold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            SERVICES
          </Link>

          <div className="pl-4 space-y-1">
            {servicesData.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs text-slate-600 hover:text-purple-600 font-semibold transition-colors rounded-lg hover:bg-purple-50"
              >
                → {s.title}
              </Link>
            ))}
          </div>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-2xl text-xs font-extrabold tracking-wider transition-colors ${
              pathname === "/contact-us" ? "bg-purple-50 text-purple-700 font-extrabold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            CONTACT US
          </Link>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md"
            >
              Let's Connect <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
