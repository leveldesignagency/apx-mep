import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { MEP_ELECTRICAL_CAPABILITY } from "@/lib/mep-capability-content"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Domestic & New Builds | 1st & 2nd Fix MEP | London | APX",
  description:
    "Domestic and new-build mechanical and electrical — 1st and 2nd fix, distribution, testing and certification across Greater London and the Home Counties.",
  pathname: "/services/electrical",
})

export default function ElectricalCapabilityPage() {
  const c = MEP_ELECTRICAL_CAPABILITY
  return (
    <MepCapabilityPageLayout
      title="Domestic & new builds — 1st & 2nd fix"
      intro={c.intro}
      capabilities={[...c.capabilities]}
      compliance={[...c.compliance]}
      deliverables={[...c.deliverables]}
      ctaLabel={c.ctaLabel}
    />
  )
}
