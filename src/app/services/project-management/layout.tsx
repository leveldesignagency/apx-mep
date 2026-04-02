import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Design & Build | MEP | London | APX",
  description:
    "Design and build for mechanical and electrical — programme, coordination and handover for projects across London boroughs and the South East.",
  pathname: "/services/project-management",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
