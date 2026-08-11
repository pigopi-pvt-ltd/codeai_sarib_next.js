import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "CRM Solutions | Code AI Technology LLC",
  description:
    "Organize customer data, automate workflows, and boost sales with CRM solutions from Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/crm/",
  },
};

export default function CrmPage() {
  const service = servicesData.find((s) => s.slug === "crm");
  return <ServiceDetailContent service={service} />;
}
