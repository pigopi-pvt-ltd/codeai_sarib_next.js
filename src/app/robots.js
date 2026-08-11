import { siteConfig } from "@/data/siteData";

export const dynamic = "force-static";

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
