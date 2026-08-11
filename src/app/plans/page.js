import React, { Suspense } from "react";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Service Plans & Packages | Code AI Technology LLC",
  description:
    "Explore service investment plans for Web Design, CRM, App Development, Staffing, and IT Consulting at Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/plans/",
  },
};

export default function PlansPage() {
  return (
    <div className="pb-12 pt-6">
      <PricingSection />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading contact form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
