import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { MEP_BUILDING_SERVICES_CAPABILITY } from "@/lib/mep-capability-content"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Integrated Building Services | MEP Contractors London | APX",
  description:
    "Coordinated building services — mechanical, electrical and plumbing interfaces, handover and O&M for projects across London boroughs and the Home Counties.",
  pathname: "/services/building-services",
})

export default function BuildingServicesCapabilityPage() {
  const c = MEP_BUILDING_SERVICES_CAPABILITY
  return (
    <MepCapabilityPageLayout
      title="Building services"
      intro={c.intro}
      capabilities={[...c.capabilities]}
      compliance={[...c.compliance]}
      deliverables={[...c.deliverables]}
      ctaLabel={c.ctaLabel}
    />
  )
}
