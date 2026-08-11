import { siteConfig } from "@/data/siteData";

export default function sitemap() {
  const baseUrl = siteConfig.websiteUrl;

  const routes = [
    "",
    "/service",
    "/plans",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/return-and-refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
