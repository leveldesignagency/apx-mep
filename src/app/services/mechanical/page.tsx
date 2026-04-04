import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { MEP_MECHANICAL_CAPABILITY } from "@/lib/mep-capability-content"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Mechanical & HVAC Services | London MEP | APX",
  description:
    "Mechanical engineering, ventilation and plant — design and installation for commercial and industrial buildings across Greater London, Kent, Essex and Surrey.",
  pathname: "/services/mechanical",
})

export default function MechanicalCapabilityPage() {
  const c = MEP_MECHANICAL_CAPABILITY
  return (
    <MepCapabilityPageLayout
      variant="pillar"
      title="Mechanical"
      intro={c.intro}
      capabilities={[...c.capabilities]}
      compliance={[...c.compliance]}
      deliverables={[...c.deliverables]}
      ctaLabel={c.ctaLabel}
    />
  )
}
