import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "MEP Services | HVAC, Electrical, Plumbing | London & South East | APX",
  description:
    "Design, installation, testing, solar PV, BMS, access, fire interfaces and maintenance — APX MEP across Greater London, every borough, Kent, Essex, Surrey and the Home Counties.",
  pathname: "/services",
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
