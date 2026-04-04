import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "BMS & Control Wiring | Commercial MEP | London | APX",
  description:
    "Building management systems and control wiring — field devices, panels and interfaces coordinated with HVAC, electrical and specialist packages across London and the Home Counties.",
  pathname: "/services/bms-control-wiring",
})

export default function BmsControlWiringLayout({ children }: { children: React.ReactNode }) {
  return children
}
