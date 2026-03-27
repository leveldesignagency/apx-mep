import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import {
  LOREM_CAPABILITIES,
  LOREM_COMPLIANCE,
  LOREM_DELIVERABLES,
} from "@/lib/mep-capability-placeholders"

export const metadata: Metadata = {
  title: "Mechanical | APX MEP",
  description:
    "Placeholder — mechanical services overview (copy to be supplied).",
}

export default function MechanicalCapabilityPage() {
  return (
    <MepCapabilityPageLayout
      title="Mechanical"
      intro="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat — placeholder intro until final MEP copy is ready."
      capabilities={LOREM_CAPABILITIES}
      compliance={LOREM_COMPLIANCE}
      deliverables={LOREM_DELIVERABLES}
      ctaLabel="Discuss mechanical"
    />
  )
}
