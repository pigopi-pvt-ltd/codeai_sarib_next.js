import React, { Suspense } from "react";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Contact Us & Book Consultation | Code AI Technology LLC",
  description:
    `Get in touch with Code AI Technology LLC. Located at ${siteConfig.address}. Schedule your IT & Web consultation.`,
  alternates: {
    canonical: "https://codeaitechnology.com/contact-us/",
  },
};

export default function ContactPage() {
  return (
    <div className="pb-12 pt-6">
      <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading contact form...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
