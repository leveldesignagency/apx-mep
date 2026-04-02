export type MepProject = {
  slug: string
  title: string
  sector: string
  location: string
  description: string
  image: string
  summary: string
  /** Extra shots for the projects page gallery; defaults to [image] if omitted */
  gallery?: string[]
}

export const MEP_PROJECTS: MepProject[] = [
  {
    slug: "kings-college-hospital",
    title: "King's College Hospital NHS Trust",
    sector: "Healthcare",
    location: "South London",
    description:
      "Electrical, HVAC and building services across multiple buildings. Distribution, lighting and mechanical systems.",
    image: "/cctv%20systems.jpg",
    gallery: ["/cctv%20systems.jpg", "/access%20control%20systems.jpg", "/intruder%20alarm%20systems.jpg"],
    summary:
      "APX MEP has supported NHS estate requirements with coordinated mechanical, electrical and plumbing delivery — aligned to clinical priorities, infection control and strict programme windows across live hospital environments.",
  },
  {
    slug: "mayfair-townhouse",
    title: "The Mayfair Townhouse",
    sector: "Hospitality",
    location: "Mayfair, London",
    description:
      "Full MEP design and installation for a luxury lifestyle hotel in central London. HVAC, electrical and plumbing.",
    image: "/access%20control%20systems.jpg",
    gallery: ["/access%20control%20systems.jpg", "/video%20door%20entry%20systems.jpg", "/cctv%20systems.jpg"],
    summary:
      "A high-end hospitality fit-out demanding discreet services integration, acoustic sensitivity and resilient plant strategies — delivered with close coordination to interior design and operational handover.",
  },
  {
    slug: "university-west-london",
    title: "University of West London",
    sector: "Education",
    location: "West London",
    description:
      "Mechanical, electrical and plumbing systems across campus premises. Heating, ventilation and compliance.",
    image: "/intruder%20alarm%20systems.jpg",
    gallery: ["/intruder%20alarm%20systems.jpg", "/home-fire-alarm-system-installer-800x533.jpg"],
    summary:
      "Campus-scale MEP upgrades with phased occupation, clear interfaces to estates teams, and documentation suitable for long-term maintenance and compliance.",
  },
  {
    slug: "camden-council",
    title: "Camden Council",
    sector: "Local Authority",
    location: "Camden, London",
    description:
      "MEP installations and maintenance for council buildings. Electrical, HVAC and building services.",
    image: "/cctv%20systems.jpg",
    gallery: ["/cctv%20systems.jpg", "/video%20door%20entry%20systems.jpg"],
    summary:
      "Public-sector delivery with transparent reporting, robust testing and certification, and programmes structured around occupied buildings and civic continuity.",
  },
  {
    slug: "scape-bloomsbury",
    title: "Scape Bloomsbury",
    sector: "Student Accommodation",
    location: "Bloomsbury, London",
    description:
      "Electrical, mechanical and plumbing for student residence. Full design and commissioning.",
    image: "/home-fire-alarm-system-installer-800x533.jpg",
    gallery: ["/home-fire-alarm-system-installer-800x533.jpg", "/access%20control%20systems.jpg", "/intruder%20alarm%20systems.jpg"],
    summary:
      "Dense residential typology with repeatable riser strategies, landlord metering interfaces, and commissioning evidence packaged for operator handover.",
  },
  {
    slug: "greenwood-centre",
    title: "Greenwood Centre",
    sector: "Local Authority",
    location: "Camden, London",
    description:
      "Electrical and mechanical systems for Camden Council. Condition reports and ongoing maintenance.",
    image: "/video%20door%20entry%20systems.jpg",
    gallery: ["/video%20door%20entry%20systems.jpg", "/cctv%20systems.jpg"],
    summary:
      "Condition-led improvements and maintenance pathways that stabilise plant performance and support safe, efficient council operations.",
  },
]

export function getMepProjectBySlug(slug: string): MepProject | undefined {
  return MEP_PROJECTS.find((p) => p.slug === slug)
}
