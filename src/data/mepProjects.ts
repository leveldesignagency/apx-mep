import { mepHeroImages } from "@/lib/serviceHeroImages"

/** Optional client testimonial — same shape as FS `FsProjectClientReview` */
export type MepProjectClientReview = {
  paragraphs: string[]
  author: string
  role: string
  organization: string
  organizationUrl?: string
}

/**
 * Dedicated project / case study — aligned with FS `FsProject` for shared page layout.
 * Copy is mock until real case studies are supplied.
 */
export type MepProject = {
  slug: string
  title: string
  sector: string
  location: string
  scope: string
  systems: string
  status: string
  shortDescription: string
  /** Hero intro paragraph (under title on detail page) */
  summary: string
  challenge: string
  solution: string
  outcome: string
  heroImage: string
  gallery: string[]
  clientReview?: MepProjectClientReview
  heroTitleLinkUrl?: string
  heroLocationLinkUrl?: string
}

export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/**
 * Mechanical / electrical / HVAC / plumbing photography and service imagery for case studies.
 * Paths are URL-safe (spaces encoded where needed).
 */
export const MEP_PROJECT_IMAGE_POOL: readonly string[] = [
  mepHeroImages.panelIndustrialBlue,
  mepHeroImages.switchboardCableCopySpace,
  mepHeroImages.engineerPlansIndustrial,
  mepHeroImages.electricianSwitchboardTablet,
  mepHeroImages.switchboardEmergencyLighting,
  "/service%20images/ELECTRICAL.jpg",
  "/service%20images/HVAC.jpg",
  "/service%20images/PLUMBING.jpg",
  "/service%20images/MAINTAINENCE%20AND%20SUPPORT.jpg",
  "/male-electrician-overalls-focused-work-switchboard-with-fuses-using-tablet.jpg",
  "/floorplan.jpg",
]

export function mepProjectImageAt(index: number): string {
  const pool = MEP_PROJECT_IMAGE_POOL
  const n = pool.length
  return pool[((index % n) + n) % n]
}

export function mepProjectGalleryImages(startIndex: number): string[] {
  return [mepProjectImageAt(startIndex), mepProjectImageAt(startIndex + 1), mepProjectImageAt(startIndex + 2)]
}

export const MEP_PROJECTS: MepProject[] = [
  {
    slug: "kings-college-hospital",
    title: "King's College Hospital NHS Trust",
    sector: "Healthcare",
    location: "South London",
    scope: "Multiple clinical and support buildings across the main estate",
    systems: "Electrical distribution, HVAC, BMS interfaces, medical gases coordination",
    status: "Delivered — phased handovers",
    shortDescription:
      "Coordinated mechanical, electrical and public health upgrades across live hospital environments, aligned to infection control and strict access windows.",
    summary:
      "APX MEP supported NHS estate teams with electrical distribution, ventilation strategy and building services integration across occupied clinical space — planned to minimise disruption to patients and staff while maintaining compliance with healthcare standards.",
    challenge:
      "Delivering plant and distribution upgrades in live wards and critical departments, with noise, access and infection-control constraints, while keeping essential services available.",
    solution:
      "We phased works out of hours where required, coordinated isolations with estates and clinical teams, and used off-site prefabrication for containment and risers where it reduced time on site.",
    outcome:
      "Structured handover packages, test records and as-built documentation suitable for NHS estates, with commissioning witnessed and signed off against employer requirements.",
    heroTitleLinkUrl: "https://www.kch.nhs.uk/",
    heroLocationLinkUrl: mapsSearchUrl("King's College Hospital, Denmark Hill, London"),
    heroImage: mepProjectImageAt(0),
    gallery: [
      mepProjectImageAt(0),
      mepProjectImageAt(1),
      mepProjectImageAt(2),
      mepProjectImageAt(3),
      mepProjectImageAt(4),
    ],
    clientReview: {
      paragraphs: [
        "APX MEP has supported several of our capital and refurbishment programmes. Their team understands hospital environments — from isolations to witness testing — and communicates clearly with our estates engineers.",
        "Programme slip is always a risk in occupied buildings; they worked with us to sequence work around clinical priorities and kept documentation tight for audit.",
      ],
      author: "Placeholder contact",
      role: "Estates & Facilities (mock)",
      organization: "King's College Hospital NHS Foundation Trust",
      organizationUrl: "https://www.kch.nhs.uk/",
    },
  },
  {
    slug: "mayfair-townhouse",
    title: "The Mayfair Townhouse",
    sector: "Hospitality",
    location: "Mayfair, London",
    scope: "Guest floors, back-of-house plant and public areas",
    systems: "HVAC, LTHW, ventilation, electrical distribution, controls",
    status: "Delivered",
    shortDescription:
      "Full MEP design-and-build package for a luxury central London hotel — discreet services, acoustic-sensitive plant and coordinated commissioning.",
    summary:
      "A high-end hospitality fit-out requiring close coordination with interior design and operator standards. APX MEP delivered HVAC, electrical distribution and water services with commissioning evidence aligned to handover and O&M expectations.",
    challenge:
      "Tight ceiling voids, strict noise criteria and a fixed opening date meant services routes and plant positions had to be resolved early and protected through fit-out.",
    solution:
      "Early clash coordination, modular plant where possible, and resident engineer cover through commissioning to stabilise systems before soft launch.",
    outcome:
      "Successful witness testing, balanced systems within tolerance, and a clean handover to hotel operations with structured O&M data.",
    heroTitleLinkUrl: "https://www.firmdalehotels.com/hotels/the-mayfair-townhouse",
    heroLocationLinkUrl: mapsSearchUrl("The Mayfair Townhouse, London"),
    heroImage: mepProjectImageAt(4),
    gallery: [mepProjectImageAt(4), mepProjectImageAt(5), mepProjectImageAt(6), mepProjectImageAt(7), mepProjectImageAt(8)],
  },
  {
    slug: "university-west-london",
    title: "University of West London",
    sector: "Education",
    location: "West London",
    scope: "Teaching blocks and student-facing facilities",
    systems: "Heating and ventilation upgrades, electrical sub-mains, lighting",
    status: "Phased — multiple academic years",
    shortDescription:
      "Campus-scale MEP improvements with phased occupation, clear interfaces to estates, and documentation for long-term maintenance.",
    summary:
      "APX MEP delivered mechanical and electrical upgrades aligned to academic timetables. Works were sequenced to avoid critical exam periods and to maintain safe access for students and staff.",
    challenge:
      "Working in occupied campus buildings with varied room uses, limited shutdown windows, and strict sign-off from university stakeholders.",
    solution:
      "Phased packages with agreed isolations, temporary supplies where needed, and weekly coordination with the client team.",
    outcome:
      "Completed installations with test sheets, labelling and handover files formatted for the university’s FM team.",
    heroLocationLinkUrl: mapsSearchUrl("University of West London"),
    heroImage: mepProjectImageAt(8),
    gallery: [mepProjectImageAt(8), mepProjectImageAt(9), mepProjectImageAt(10), mepProjectImageAt(11), mepProjectImageAt(0)],
  },
  {
    slug: "camden-council",
    title: "Camden Council",
    sector: "Local Authority",
    location: "Camden, London",
    scope: "Civic buildings — offices and public service centres",
    systems: "Electrical testing and upgrades, HVAC maintenance-led replacements",
    status: "Ongoing framework-style delivery (mock)",
    shortDescription:
      "Public-sector MEP installations and improvements with transparent reporting, testing and certification for civic estates.",
    summary:
      "APX MEP supports Camden with electrical and mechanical works structured around occupied buildings, statutory compliance and clear reporting for council officers.",
    challenge:
      "Minimising downtime in public-facing buildings while replacing ageing plant and improving energy performance within budget.",
    solution:
      "Condition surveys, staged replacements and out-of-hours cutovers where necessary, with single points of contact for estates.",
    outcome:
      "Reliable documentation, reduced reactive call-outs on targeted systems, and systems operating within specification after handover.",
    heroLocationLinkUrl: mapsSearchUrl("Camden Town Hall, London"),
    heroImage: mepProjectImageAt(2),
    gallery: [mepProjectImageAt(2), mepProjectImageAt(3), mepProjectImageAt(4), mepProjectImageAt(5), mepProjectImageAt(6)],
  },
  {
    slug: "scape-bloomsbury",
    title: "Scape Bloomsbury",
    sector: "Student Accommodation",
    location: "Bloomsbury, London",
    scope: "Residential clusters, risers and landlord areas",
    systems: "LTHW, ventilation, electrical distribution, metering interfaces",
    status: "Delivered",
    shortDescription:
      "Dense student residential typology with repeatable riser strategies, metering interfaces and commissioning for operator handover.",
    summary:
      "APX MEP delivered electrical and mechanical systems for high-occupancy student rooms and shared facilities, with commissioning records packaged for the operator.",
    challenge:
      "High density of small units, coordinated fire-stopping and containment routes, and a fixed academic intake date.",
    solution:
      "Standardised details for typical floors, off-site wiring assemblies where agreed, and early BMS points list for witness testing.",
    outcome:
      "Signed-off commissioning, training for building staff, and O&M aligned to operator requirements.",
    heroTitleLinkUrl: "https://www.scape.com/student-accommodation-bloomsbury/",
    heroLocationLinkUrl: mapsSearchUrl("Scape Bloomsbury, London"),
    heroImage: mepProjectImageAt(6),
    gallery: [mepProjectImageAt(6), mepProjectImageAt(7), mepProjectImageAt(8), mepProjectImageAt(9), mepProjectImageAt(10)],
  },
  {
    slug: "greenwood-centre",
    title: "Greenwood Centre",
    sector: "Local Authority",
    location: "Camden, London",
    scope: "Office and community-use building",
    systems: "Condition-led electrical upgrades, ventilation improvements",
    status: "Maintenance and small works (mock)",
    shortDescription:
      "Condition-led improvements and maintenance pathways that stabilise plant performance for council operations.",
    summary:
      "APX MEP provides ongoing mechanical and electrical support for the Greenwood Centre — prioritising safety, reliability and clear reporting for council FM.",
    challenge:
      "Ageing distribution and intermittent plant faults affecting comfort and energy use.",
    solution:
      "Targeted replacements based on condition reports, with short programmes and verification testing after each package.",
    outcome:
      "More predictable operation, fewer emergency call-outs on addressed systems, and up-to-date records for future capital planning.",
    heroLocationLinkUrl: mapsSearchUrl("Greenwood Centre, Camden, London"),
    heroImage: mepProjectImageAt(10),
    gallery: [mepProjectImageAt(10), mepProjectImageAt(11), mepProjectImageAt(0), mepProjectImageAt(1), mepProjectImageAt(2)],
  },
]

export function getMepProjectBySlug(slug: string): MepProject | undefined {
  return MEP_PROJECTS.find((p) => p.slug === slug)
}
