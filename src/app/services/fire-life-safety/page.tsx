import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Security, IRS & Fire Alarm Systems | MEP London | APX",
  description:
    "Intruder alarm (IRS), security and fire alarm systems coordinated with mechanical, electrical and BMS interfaces — installation and handover across London and the Home Counties.",
  pathname: "/services/fire-life-safety",
})

const capabilities = [
  "Fire alarm and detection systems (addressable and conventional)",
  "Intruder alarm (IRS) and security systems where in scope",
  "Cause-and-effect coordination with MEP and BMS interfaces",
  "Sounders, VADs and manual call points",
  "Integration with access control and building management",
  "Commissioning, certification and handover documentation",
  "Coordination with wider APX fire & security capability where required",
]

const compliance = ["BS 5839-1 (where applicable)", "BS 7671 (electrical interfaces)", "Project-specific fire strategy requirements"]
const deliverables = ["Zone charts", "As-built drawings", "Commissioning records", "O&M information", "Client training"]

export default function MepFireLifeSafetyPage() {
  return (
    <MepCapabilityPageLayout
      title="Security, IRS and fire alarm systems"
      intro="We deliver fire alarm, intruder alarm (IRS) and security systems as part of coordinated building services — aligned to programme, specification and the interfaces that matter alongside mechanical, electrical and controls packages."
      capabilities={capabilities}
      compliance={compliance}
      deliverables={deliverables}
      ctaLabel="Discuss security, IRS & fire"
    />
  )
}
