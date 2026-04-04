import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Refurbishment & Fit-Out MEP | London & Home Counties | APX",
  description:
    "Refurbishment and fit-out where mechanical, electrical and plumbing align with programme, interfaces, tenants and occupied buildings — Greater London and the Home Counties.",
  pathname: "/services/building-services",
})

export default function BuildingServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
