import React, { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import ClimateContributionCard from "@/components/ClimateContributionCard";

export const metadata = {
  title: "Code AI Technology LLC | IT Consultancy & Digital Solutions",
  description:
    "Code AI Technology LLC - Empowering businesses by delivering innovative, reliable, and scalable IT solutions. IT Consulting, Software Development, Cloud Solutions, Cyber Security, Data & Analytics, and IT Support.",
  alternates: {
    canonical: "https://codeaitechnology.com",
  },
};

export default function HomePage() {
  return (
    <div className="overflow-hidden pb-10 lg:pb-14">
      <HeroSection />
      <AboutSection isPreview={true} />
      <ServicesSection />
      <ClimateContributionCard />
      <PricingSection />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading contact form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
