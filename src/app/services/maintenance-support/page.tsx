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
  "Planned preventative maintenance (PPM) programmes tailored to asset criticality",
  "Reactive call-out support for distribution, plant, HVAC and controls faults",
  "Condition reporting, thermal checks and asset registers",
  "Small works, upgrades and landlord / tenant variations",
  "Coordination with facilities teams, helpdesks and specialist OEMs",
  "Out-of-hours and SLA-based response where contracts require it",
]

const compliance = [
  "BS 7671 inspection and testing cycles for electrical maintenance",
  "Manufacturer maintenance intervals and warranty conditions",
  "Site-specific RAMS, permits and access arrangements",
  "Log books and statutory inspection evidence (project-specific)",
]

const deliverables = [
  "Maintenance and service reports",
  "Fault records, root-cause notes and repeat-failure tracking",
  "Compliance evidence packs for duty holders",
  "Forward programme recommendations and capex hints",
]

export default function MepMaintenanceSupportPage() {
  return (
    <MepCapabilityPageLayout
      title="Maintenance & support"
      intro={
        <>
          <p>
            Keep building services reliable after handover — structured maintenance, clear reporting, and responsive
            support when issues arise on site. We support commercial, residential-led and mixed-use estates across
            London boroughs and the Home Counties.
          </p>
          <p>
            Our teams work with facilities managers and residents’ management companies to prioritise safety-critical
            plant, minimise downtime, and build a clear picture of asset condition over time — so you can plan upgrades
            with confidence.
          </p>
        </>
      }
      capabilities={capabilities}
      compliance={compliance}
      deliverables={deliverables}
      ctaLabel="Discuss maintenance"
    />
  )
}
