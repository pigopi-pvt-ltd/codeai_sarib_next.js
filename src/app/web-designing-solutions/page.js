import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "Web Designing Solutions | Code AI Technology LLC",
  description:
    "Strategic web design solutions and digital transformation consulting by Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/web-designing-solutions/",
  },
};

export default function WebDesigningPage() {
  const service = servicesData.find((s) => s.slug === "web-designing-solutions");
  return <ServiceDetailContent service={service} />;
}
