import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "MEP Maintenance | PPM & Reactive Support | London | APX",
  description:
    "Planned and reactive maintenance for mechanical, electrical and plumbing — reliable building services across Greater London and the South East.",
  pathname: "/services/maintenance",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
