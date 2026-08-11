import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "IT Consultation | Code AI Technology LLC",
  description:
    "Strategic IT consulting for modern tech and healthcare enterprises by Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/it-consultation/",
  },
};

export default function ItConsultationPage() {
  const service = servicesData.find((s) => s.slug === "it-consultation");
  return <ServiceDetailContent service={service} />;
}
