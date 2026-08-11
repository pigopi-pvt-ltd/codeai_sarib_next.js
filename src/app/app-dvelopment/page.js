import React from "react";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { servicesData } from "@/data/siteData";

export const metadata = {
  title: "App Development | Code AI Technology LLC",
  description:
    "Cross-platform, intuitive mobile and web app development services by Code AI Technology LLC.",
  alternates: {
    canonical: "https://codeaitechnology.com/app-dvelopment/",
  },
};

export default function AppDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "app-dvelopment");
  return <ServiceDetailContent service={service} />;
}
