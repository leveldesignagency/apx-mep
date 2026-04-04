import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Accreditations | NSI, BAFE, Constructionline & FIA | APX Mechanical & Electrical",
  description:
    "Independent certifications and industry affiliations that underpin how APX MEP delivers building services across London and the Home Counties.",
  pathname: "/accreditations",
})

export default function AccreditationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
