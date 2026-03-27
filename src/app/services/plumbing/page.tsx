import type { Metadata } from "next"
import { MepCapabilityPageLayout } from "@/components/MepCapabilityPageLayout"
import {
  LOREM_CAPABILITIES,
  LOREM_COMPLIANCE,
  LOREM_DELIVERABLES,
} from "@/lib/mep-capability-placeholders"

export const metadata: Metadata = {
  title: "Plumbing | APX MEP",
  description:
    "Placeholder — plumbing services overview (copy to be supplied).",
}

export default function PlumbingCapabilityPage() {
  return (
    <MepCapabilityPageLayout
      title="Plumbing"
      intro="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur — placeholder intro until final MEP copy is ready."
      capabilities={LOREM_CAPABILITIES}
      compliance={LOREM_COMPLIANCE}
      deliverables={LOREM_DELIVERABLES}
      ctaLabel="Discuss plumbing"
    />
  )
}
