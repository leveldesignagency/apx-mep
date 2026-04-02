import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Mechanical & HVAC | BMS & Controls | London MEP | APX",
  description:
    "Ventilation, heating, cooling, plant and BMS — mechanical engineering for commercial and industrial buildings across London, Kent, Essex and Surrey.",
  pathname: "/services/mechanical-engineering",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
