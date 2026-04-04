import type { Metadata } from "next"
import { MEP_ACCREDITATION_SEO, MEP_ACCREDITATION_TAB_ORDER, type MepAccreditationSlug } from "@/data/mepAccreditations"
import { buildMepMetadata } from "@/lib/seo-metadata"

export function generateStaticParams() {
  return MEP_ACCREDITATION_TAB_ORDER.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const m = MEP_ACCREDITATION_SEO[slug as MepAccreditationSlug]
  if (!m) {
    return { title: "Accreditation | APX Mechanical & Electrical" }
  }
  return buildMepMetadata({
    title: m.title,
    description: m.description,
    pathname: `/accreditations/${slug}`,
  })
}

export default function AccreditationSlugLayout({ children }: { children: React.ReactNode }) {
  return children
}
