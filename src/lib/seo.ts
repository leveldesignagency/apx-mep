/**
 * SEO & local (GEO) configuration — APX Mechanical & Electrical.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.apx-mep.co.uk).
 */

import { HOME_COUNTIES_AND_REGIONS, LONDON_BOROUGHS } from "./seo-geo-areas"

export const MEP_SITE_NAME = "APX Mechanical & Electrical"

export function getMepSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL
  if (u?.trim()) return u.replace(/\/$/, "")
  return "http://localhost:3000"
}

export const MEP_SEO_KEYWORDS = [
  "MEP contractor London",
  "mechanical electrical plumbing London",
  "commercial electrical contractors London",
  "HVAC installation London",
  "electrical testing EICR London",
  "commercial building services London",
  "MEP design and build",
  "refurbishment electrical contractor",
  "BMS installation London",
  "facilities maintenance MEP",
  "solar PV commercial installation",
  "access control electrical contractor",
  "plumbing commercial London",
  "commissioning MEP",
  "London MEP",
  "Home Counties MEP",
  "Kent electrical contractor",
  "Essex mechanical services",
  "Surrey HVAC",
] as const

export { HOME_COUNTIES_AND_REGIONS, LONDON_BOROUGHS } from "./seo-geo-areas"

export function mepKeywordsMetaString(): string {
  const boroughs = LONDON_BOROUGHS.join(", ")
  const regions = HOME_COUNTIES_AND_REGIONS.join(", ")
  const primary = MEP_SEO_KEYWORDS.join(", ")
  return `${primary}, ${boroughs}, ${regions}, Greater London, South East England`
}

export function mepDefaultDescription(): string {
  return `${MEP_SITE_NAME}: mechanical, electrical and plumbing — design, installation, testing, solar PV, BMS, access and fire interfaces for commercial, industrial and residential projects across Greater London, all London boroughs, and the Home Counties including Kent, Essex, Surrey and Hertfordshire.`
}

export function mepJsonLdGraph(): Record<string, unknown> {
  const url = getMepSiteUrl()
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: MEP_SITE_NAME,
        url,
        logo: `${url}/__APX%20Web%20Logo%20MEP.svg`,
        email: "enquiries@apx-mep.co.uk",
        telephone: "+442045685986",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressRegion: "England",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "City", name: "London" },
          { "@type": "AdministrativeArea", name: "Greater London" },
          ...HOME_COUNTIES_AND_REGIONS.map((name) => ({
            "@type": "AdministrativeArea" as const,
            name,
          })),
        ],
        sameAs: [] as string[],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: MEP_SITE_NAME,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "en-GB",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#localbusiness`,
        name: MEP_SITE_NAME,
        image: `${url}/__APX%20Web%20Logo%20MEP.svg`,
        url,
        telephone: "+442045685986",
        email: "enquiries@apx-mep.co.uk",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressRegion: "England",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5074,
          longitude: -0.1278,
        },
        areaServed: [
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 51.5074,
              longitude: -0.1278,
            },
            geoRadius: 120000,
            description: "Greater London, Home Counties and South East — MEP design, installation and maintenance.",
          },
        ],
        serviceType: [
          "Electrical systems",
          "Mechanical and HVAC",
          "Plumbing and drainage",
          "Building services",
          "Inspection and testing",
          "Solar PV",
          "BMS and controls",
          "Maintenance",
        ],
      },
    ],
  }
}
