import React from "react";
import { legalDocs, siteConfig } from "@/data/siteData";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Code AI Technology LLC",
  description: "Privacy policy for Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const doc = legalDocs.privacyPolicy;

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 sm:p-12 rounded-3xl space-y-8 border border-slate-200/90 shadow-md">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Legal Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{doc.title}</h1>
          <p className="text-xs text-slate-500 mt-2 font-medium">Last Updated: {doc.lastUpdated}</p>
        </div>

        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
          <p>{doc.content}</p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-sky-600 font-semibold hover:underline">
              {siteConfig.email}
            </a>.
          </p>
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
