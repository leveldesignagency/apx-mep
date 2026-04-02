import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Cookie Policy | APX Mechanical & Electrical",
  description: "How APX MEP uses cookies and similar technologies on this website.",
  pathname: "/cookie-policy",
})

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
