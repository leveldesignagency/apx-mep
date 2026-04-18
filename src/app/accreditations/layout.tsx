import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Accreditations | NICEIC, Gas Safe, ISO 9001/14001/45001 | APX Mechanical & Electrical",
  description:
    "NICEIC, Gas Safe Register and UKAS ISO certifications that underpin how APX MEP delivers building services across London and the Home Counties.",
  pathname: "/accreditations",
})

export default function AccreditationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
