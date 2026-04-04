import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Domestic & New Builds | 1st & 2nd Fix MEP | London | APX",
  description:
    "Domestic and new-build mechanical and electrical — 1st and 2nd fix, distribution, testing and certification across Greater London and the Home Counties.",
  pathname: "/services/electrical",
})

export default function ElectricalLayout({ children }: { children: React.ReactNode }) {
  return children
}
