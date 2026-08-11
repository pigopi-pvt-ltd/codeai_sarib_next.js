import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "Digital Marketing Services | Code AI Technology LLC",
  description:
    "Data-driven digital marketing, SEO, and targeted ad growth by Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/digital-marketing/",
  },
};

export default function DigitalMarketingPage() {
  const service = servicesData.find((s) => s.slug === "digital-marketing");
  return <ServiceDetailContent service={service} />;
}
