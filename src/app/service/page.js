import React, { Suspense } from "react";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Service Portfolio & Capabilities | Code AI Technology LLC",
  description:
    "Explore IT Consulting, Software Development, Cloud Solutions, Cyber Security, Data & Analytics, and IT Support at Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/service",
  },
};

export default function ServicesPage() {
  return (
    <div className="pb-12 pt-6">
      <ServicesSection />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
