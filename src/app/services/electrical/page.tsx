import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import {
  LOREM_CAPABILITIES,
  LOREM_COMPLIANCE,
  LOREM_DELIVERABLES,
} from "@/lib/mep-capability-placeholders"

export const metadata: Metadata = {
  title: "Electrical | APX MEP",
  description:
    "Placeholder — electrical services overview (copy to be supplied).",
}

export default function ElectricalCapabilityPage() {
  return (
    <MepCapabilityPageLayout
      title="Electrical"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — placeholder intro until final MEP copy is ready."
      capabilities={LOREM_CAPABILITIES}
      compliance={LOREM_COMPLIANCE}
      deliverables={LOREM_DELIVERABLES}
      ctaLabel="Discuss electrical"
    />
  )
}
