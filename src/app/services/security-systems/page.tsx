import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Access Control & Door Entry | MEP London | APX",
  description:
    "Access control and door entry systems with power, containment and commissioning — coordinated MEP delivery across Greater London and the Home Counties.",
  pathname: "/services/security-systems",
})

const capabilities = [
  "Access control and door entry systems",
  "CCTV and structured cabling containment coordination",
  "Intruder alarm interfaces with building power and monitoring",
  "Integration with fire alarm and BMS where required",
  "Commissioning and handover with clear user documentation",
]

const compliance = ["BS EN 50131 (where applicable)", "BS EN 62676 (where applicable)", "GDPR-aware data handling on projects"]
const deliverables = ["Network and head-end schedules", "Test records", "As-built information", "O&M manuals", "Training"]

export default function MepSecuritySystemsPage() {
  return (
    <MepCapabilityPageLayout
      title="Access control and door entry systems"
      intro="We install access control and door entry that fit the wider MEP strategy — power, containment, networking and commissioning handled as one coordinated delivery."
      capabilities={capabilities}
      compliance={compliance}
      deliverables={deliverables}
      ctaLabel="Discuss access & entry"
    />
  )
}
