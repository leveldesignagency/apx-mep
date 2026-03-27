import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import {
  LOREM_CAPABILITIES,
  LOREM_COMPLIANCE,
  LOREM_DELIVERABLES,
} from "@/lib/mep-capability-placeholders"

export const metadata: Metadata = {
  title: "Building services | APX MEP",
  description:
    "Placeholder — building services overview (copy to be supplied).",
}

export default function BuildingServicesCapabilityPage() {
  return (
    <MepCapabilityPageLayout
      title="Building services"
      intro="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — placeholder intro until final MEP copy is ready."
      capabilities={LOREM_CAPABILITIES}
      compliance={LOREM_COMPLIANCE}
      deliverables={LOREM_DELIVERABLES}
      ctaLabel="Discuss building services"
    />
  )
}
