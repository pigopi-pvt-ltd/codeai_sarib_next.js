import React, { Suspense } from "react";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "About Us | Code AI Technology LLC",
  description:
    "Learn about our mission, purpose, vision, and climate pledge at Code AI Technology LLC IT Consultancy.",
  alternates: {
    canonical: "https://codeaitechnology.com/about-us/",
  },
};

export default function AboutPage() {
  return (
    <div className="pb-12 pt-6">
      <AboutSection isPreview={false} />
      <ServicesSection />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
