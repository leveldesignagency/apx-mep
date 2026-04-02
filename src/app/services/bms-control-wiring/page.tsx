import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "BMS & Control Wiring | Commercial MEP | London | APX",
  description:
    "Building management systems and control wiring — field devices, panels and interfaces coordinated with HVAC, electrical and specialist packages across London and the Home Counties.",
  pathname: "/services/bms-control-wiring",
})

const capabilities = [
  "BMS field wiring, containment and cable schedules",
  "Control panels, marshalling cabinets and terminations",
  "Integration with plant, AHUs, fan coil units and distribution",
  "Interfaces with fire, security and metering packages (where specified)",
  "Point-to-point checks and witness testing with controls specialists",
  "As-installed records and O&M handover for controls scope",
]

const compliance = [
  "Employer’s Requirements and controls specification",
  "Manufacturer and BMS vendor documentation",
  "BS 7671 for electrical aspects of control circuits where applicable",
  "CDM 2015 and site-specific RAMS",
]

const deliverables = ["Cable schedules and point lists", "Test sheets and witness records", "Panel schedules", "Snag closure and training support"]

export default function BmsControlWiringPage() {
  return (
    <MepCapabilityPageLayout
      title="BMS and control wiring"
      intro="We install and terminate the electrical and controls infrastructure that building management systems rely on — coordinated with mechanical plant, distribution and specialist BMS contractors so commissioning and handover stay aligned to programme."
      capabilities={capabilities}
      compliance={compliance}
      deliverables={deliverables}
      ctaLabel="Discuss BMS and controls"
    />
  )
}
