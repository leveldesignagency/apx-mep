import type { MetadataRoute } from "next"
import { getMepSiteUrl } from "@/lib/seo"
import { MEP_PROJECTS } from "@/data/mepProjects"

const ACCREDITOR_SLUGS = ["bafe", "nsi", "constructionline", "fia"] as const

const STATIC_PATHS = [
  "",
  "about",
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
