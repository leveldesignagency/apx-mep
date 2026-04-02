import type { MetadataRoute } from "next"
import { getMepSiteUrl } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  const base = getMepSiteUrl()
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
