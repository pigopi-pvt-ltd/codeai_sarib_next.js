import React from "react";
import { siteConfig, servicesData } from "@/data/siteData";

export default function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "legalName": siteConfig.parentCompany,
    "url": siteConfig.websiteUrl,
    "logo": `${siteConfig.websiteUrl}/favicon.ico`,
    "description": siteConfig.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service",
      "email": siteConfig.email,
      "availableLanguage": ["English"]
    },
    "sameAs": [
      siteConfig.climateUrl,
      siteConfig.websiteUrl
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.fullName,
    "image": `${siteConfig.websiteUrl}/favicon.ico`,
    "priceRange": "$$$",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise IT & Web Services",
      "itemListElement": servicesData.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${siteConfig.name} - ${siteConfig.parentCompany}`,
    "url": siteConfig.websiteUrl,
    "description": siteConfig.tagline
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
