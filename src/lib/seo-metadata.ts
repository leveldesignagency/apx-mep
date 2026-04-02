import type { Metadata } from "next"
import { MEP_SITE_NAME, getMepSiteUrl, mepKeywordsMetaString } from "./seo"

type BuildMepOpts = {
  title: string
  description: string
  pathname: string
  keywords?: string
  robots?: Metadata["robots"]
}

export function buildMepMetadata({
  title,
  description,
  pathname,
  keywords,
  robots,
}: BuildMepOpts): Metadata {
  const base = getMepSiteUrl()
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  const url = `${base}${path}`
  return {
    title,
    description,
    keywords: keywords ?? mepKeywordsMetaString(),
    robots: robots ?? { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_GB",
      siteName: MEP_SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: path,
    },
  }
}
