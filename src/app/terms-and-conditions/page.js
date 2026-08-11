import React from "react";
import { legalDocs, siteConfig } from "@/data/siteData";
import Link from "next/link";
import { Scale, MapPin } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Code AI Technology LLC",
  description: "Terms and conditions for Code AI Technology LLC website.",
  alternates: {
    canonical: "https://codeaitechnology.com/terms-and-conditions",
  },
};

export default function TermsConditionsPage() {
  const doc = legalDocs.termsConditions;

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-12 rounded-3xl space-y-8 border border-slate-200/90 shadow-md">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase mb-3">
            <Scale className="w-3.5 h-3.5 text-sky-600" /> User Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{doc.title}</h1>
          <p className="text-xs text-slate-500 mt-2 font-medium">Last Updated: {doc.lastUpdated}</p>
        </div>

        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
          <p>{doc.content}</p>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            {siteConfig.parentCompany} • {siteConfig.address}
          </span>
          <Link href="/contact-us" className="text-sky-600 font-bold hover:underline">
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
}
