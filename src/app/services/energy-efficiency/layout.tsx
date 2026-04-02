import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Solar PV & Energy Efficiency | Commercial MEP | APX",
  description:
    "Solar PV and energy-efficiency measures for mechanical and electrical systems — commercial and industrial sites across London, Kent, Essex and the Home Counties.",
  pathname: "/services/energy-efficiency",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
