import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "IT Staffing & Recruitment | Code AI Technology LLC",
  description:
    "Technical staffing, recruitment, and engineering talent placement by Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/staffing/",
  },
};

export default function StaffingPage() {
  const service = servicesData.find((s) => s.slug === "staffing");
  return <ServiceDetailContent service={service} />;
}
