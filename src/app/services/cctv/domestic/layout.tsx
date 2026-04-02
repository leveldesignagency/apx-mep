import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Residential CCTV | Electrical Integration | APX MEP",
  description:
    "Domestic CCTV with clean electrical integration — homes across London boroughs and the Home Counties.",
  pathname: "/services/cctv/domestic",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
