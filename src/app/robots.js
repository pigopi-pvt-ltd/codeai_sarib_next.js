import { siteConfig } from "@/data/siteData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteConfig.websiteUrl}/sitemap.xml`,
  };
}
