import type { Metadata } from "next"
import { MethodologyPageContent } from "@/components/MethodologyPageContent"

export const metadata: Metadata = {
  title: "Methodology | APX MEP",
  description:
    "How APX MEP delivers mechanical, electrical and plumbing projects — our delivery methodology.",
}

export default function MethodologyPage() {
  return <MethodologyPageContent />
}
