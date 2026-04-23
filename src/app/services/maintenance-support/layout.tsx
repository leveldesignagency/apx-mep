import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "MEP Maintenance & Support | PPM London & Home Counties | APX",
  description:
    "Planned and reactive maintenance for mechanical, electrical and building services — compliance evidence and call-outs across Greater London, Kent, Essex and Surrey.",
  pathname: "/services/maintenance-support",
})

export default function MepMaintenanceSupportLayout({ children }: { children: React.ReactNode }) {
  return children
}
