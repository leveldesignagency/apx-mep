import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { MEP_PLUMBING_CAPABILITY } from "@/lib/mep-capability-content"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Commercial Plumbing & Drainage | MEP London | APX",
  description:
    "Hot and cold water, drainage and sanitary systems — commercial and residential-scale plumbing across London and the Home Counties.",
  pathname: "/services/plumbing",
})

export default function PlumbingCapabilityPage() {
  const c = MEP_PLUMBING_CAPABILITY
  return (
    <MepCapabilityPageLayout
      title="Plumbing"
      intro={c.intro}
      capabilities={[...c.capabilities]}
      compliance={[...c.compliance]}
      deliverables={[...c.deliverables]}
      ctaLabel={c.ctaLabel}
    />
  )
}
