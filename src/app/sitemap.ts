import type { MetadataRoute } from "next"
import { MEP_CAREER_ROLES } from "@/data/mepCareersRoles"
import { MEP_PROJECTS } from "@/data/mepProjects"
import { getMepSiteUrl } from "@/lib/seo"

const ACCREDITOR_SLUGS = ["niceic", "gas-safe", "iso-9001", "iso-14001", "iso-45001"] as const

const STATIC_PATHS = [
  "",
  "about",
  "careers",
  "accreditations",
  "contact",
  "cookie-policy",
  "delivery-methodology",
  "methodology",
  "projects",
  "services",
  "services/building-services",
  "services/mechanical",
  "services/plumbing",
  "services/electrical",
  "services/project-management",
  "services/energy-efficiency",
  "services/sustainability",
  "services/electrical-systems",
  "services/mechanical-engineering",
  "services/bms-control-wiring",
  "services/maintenance",
  "services/maintenance-support",
  "services/fire-life-safety",
  "services/security-systems",
  "services/cctv/commercial",
  "services/cctv/domestic",
  "services/cctv/advice",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getMepSiteUrl()
  const urls: MetadataRoute.Sitemap = []

  for (const path of STATIC_PATHS) {
    urls.push({
      url: path ? `${base}/${path}` : base,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  }

  for (const r of MEP_CAREER_ROLES) {
    urls.push({
      url: `${base}/careers/apply/${r.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.55,
    })
  }

  for (const slug of ACCREDITOR_SLUGS) {
    urls.push({
      url: `${base}/accreditations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.65,
    })
  }

  for (const project of MEP_PROJECTS) {
    urls.push({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    })
  }

  return urls
}
