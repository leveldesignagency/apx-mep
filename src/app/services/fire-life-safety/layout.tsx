import type { Metadata } from "next"
import { buildMepMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = buildMepMetadata({
  title: "Security, IRS & Fire Alarm Systems | MEP London | APX",
  description:
    "Intruder alarm (IRS), security and fire alarm systems coordinated with mechanical, electrical and BMS interfaces — installation and handover across London and the Home Counties.",
  pathname: "/services/fire-life-safety",
})

export default function FireLifeSafetyLayout({ children }: { children: React.ReactNode }) {
  return children
}
