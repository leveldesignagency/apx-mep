import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "MEP Maintenance & Support | PPM London & Home Counties | APX",
  description:
    "Planned and reactive maintenance for mechanical, electrical and building services — compliance evidence and call-outs across Greater London, Kent, Essex and Surrey.",
  pathname: "/services/maintenance-support",
})

const capabilities = [
  "Planned preventative maintenance (PPM) programmes",
  "Reactive call-out support for critical plant and distribution",
  "Condition reporting and asset registers",
  "Small works and upgrades aligned to compliance",
  "Coordination with facilities teams and tenants",
]

const compliance = ["BS 7671 inspection and testing cycles", "Manufacturer maintenance requirements", "Site-specific RAMS"]
const deliverables = ["Maintenance reports", "Fault records", "Compliance evidence", "Programme recommendations"]

export default function MepMaintenanceSupportPage() {
  return (
    <MepCapabilityPageLayout
      title="Maintenance & support"
      intro="Keep building services reliable after handover — structured maintenance, clear reporting, and responsive support when issues arise on site."
      capabilities={capabilities}
      compliance={compliance}
      deliverables={deliverables}
      ctaLabel="Discuss maintenance"
    />
  )
}
