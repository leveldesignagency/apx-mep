/**
 * MEP site accreditations — artwork in `/public/Accreditations/` (capital A).
 */
const ACC = "/Accreditations"

/** NICEIC mark for dark backgrounds (hero, footer). Use `NICEIC.svg` on light sections via {@link mepAccreditationLogoSrc}. */
export const MEP_NICEIC_ICON_ON_DARK = `${ACC}/NICEIC-02.svg`

/** ISO UKAS marks on dark surfaces: flat white line work (source SVGs use grey “stencil” fills that disappear on black). */
const MEP_ISO_UKAS_ON_DARK: Record<"iso-9001" | "iso-14001" | "iso-45001", string> = {
  "iso-9001": `${ACC}/ISO_9001_UKAS_Hero_On_Dark.svg`,
  "iso-14001": `${ACC}/ISO_14001_UKAS_Hero_On_Dark.svg`,
  "iso-45001": `${ACC}/ISO_45001_UKAS_Hero_On_Dark.svg`,
}

export const MEP_ACCREDITATIONS = {
  niceic: {
    name: "NICEIC",
    title: "About NICEIC",
    shortLabel: "NICEIC — electrical contractor certification",
    icon: `${ACC}/NICEIC.svg`,
    intro:
      "NICEIC is one of the UK’s leading certification bodies for electrical contractors. Registration demonstrates that our work is regularly assessed against recognised technical and safety standards.",
    sections: [
      {
        heading: "What NICEIC certification means",
        body:
          "NICEIC assesses the competence of contractors undertaking electrical installation work. It provides assurance that businesses have the right skills, processes and governance to deliver safe, compliant installations — from initial design through to inspection, testing and certification.",
      },
      {
        heading: "Why it matters on site",
        body:
          "On live projects, electrical work interfaces with structure, containment, fire strategy and commissioning. Third-party certification gives clients, consultants and principal contractors confidence that installations are carried out by qualified people and verified against current wiring regulations and industry practice.",
      },
      {
        heading: "Documentation and compliance",
        body:
          "Certification-backed delivery supports clearer traceability: test records, certification of electrical installations, and consistent handover packs. That reduces ambiguity at completion and helps FM teams and insurers understand what has been installed and verified.",
      },
      {
        heading: "How APX MEP applies this",
        body:
          "We align site practices, supervision and handover documentation with NICEIC expectations so electrical packages are delivered safely, coherently with wider MEP works, and with evidence that stands up to audit and handover.",
      },
    ],
  },
  "gas-safe": {
    name: "Gas Safe Register",
    title: "About Gas Safe Register",
    shortLabel: "Gas Safe — registered gas engineers",
    icon: `${ACC}/gas-safe-1.svg`,
    intro:
      "Gas Safe Register is the official list of engineers legally allowed to work on gas appliances in the United Kingdom. Only registered businesses and engineers may undertake gas work in domestic and commercial premises.",
    sections: [
      {
        heading: "Legal requirement for gas work",
        body:
          "Gas work must be carried out by competent Gas Safe registered engineers. Registration confirms that individuals have the qualifications and ongoing competence to work safely on gas appliances, pipework and associated systems.",
      },
      {
        heading: "Why it matters for MEP projects",
        body:
          "Mechanical packages often include heating plant, hot water distribution and gas-fired equipment. Using Gas Safe registered engineers ensures installations meet safety standards, are properly commissioned, and are documented for compliance and handover.",
      },
      {
        heading: "Commercial and domestic contexts",
        body:
          "Whether work is in plant rooms, risers, tenant areas or residential schemes, gas safety requirements apply throughout. Registration provides assurance that the right people are on the right tasks and that systems are left safe and certifiable.",
      },
      {
        heading: "How APX MEP applies this",
        body:
          "We ensure gas-related work is carried out under Gas Safe registration, with clear records, commissioning evidence and coordination with electrical, controls and wider building services so systems operate safely after handover.",
      },
    ],
  },
  "iso-9001": {
    name: "ISO 9001",
    title: "About ISO 9001",
    shortLabel: "ISO 9001 — quality management (UKAS)",
    icon: `${ACC}/ISO_9001_UKAS_White_On_Black.svg`,
    intro:
      "ISO 9001 sets out requirements for a quality management system. UKAS-accredited certification shows our organisation is audited against internationally recognised standards for consistent delivery and continuous improvement.",
    sections: [
      {
        heading: "Quality management focus",
        body:
          "ISO 9001 centres on customer expectations, risk-based thinking, leadership commitment and documented processes. It helps organisations control how work is planned, delivered, reviewed and improved.",
      },
      {
        heading: "Why clients care",
        body:
          "For construction and building services, a certified quality management system supports predictable outcomes: clearer responsibilities, better control of changes, and fewer gaps between what was specified and what was delivered.",
      },
      {
        heading: "Project and programme alignment",
        body:
          "Structured processes support coordination across trades, clearer interfaces with subcontractors, and more reliable handover documentation — helping teams manage programme, quality and client expectations together.",
      },
      {
        heading: "How APX MEP applies this",
        body:
          "We use our quality management framework to align site delivery, technical records and review cycles with ISO 9001 principles so clients receive consistent, traceable and well-governed MEP services.",
      },
    ],
  },
  "iso-14001": {
    name: "ISO 14001",
    title: "About ISO 14001",
    shortLabel: "ISO 14001 — environmental management (UKAS)",
    icon: `${ACC}/ISO_14001_UKAS_White_On_Black.svg`,
    intro:
      "ISO 14001 specifies requirements for an environmental management system. UKAS-accredited certification demonstrates our commitment to managing environmental impacts and legal compliance in how we deliver projects.",
    sections: [
      {
        heading: "Environmental management",
        body:
          "The standard helps organisations identify environmental aspects, comply with obligations, and set objectives for improvement. It applies to operations, supply chain influence and lifecycle thinking where relevant.",
      },
      {
        heading: "Relevance to building services",
        body:
          "MEP installations affect energy use, emissions, waste and resource use. An environmental management system supports disciplined planning, waste reduction, and alignment with client and regulatory expectations on site.",
      },
      {
        heading: "Delivery and handover",
        body:
          "Clear environmental controls and records support better commissioning data, operational handover, and ongoing maintenance planning — helping clients run buildings more efficiently after completion.",
      },
      {
        heading: "How APX MEP applies this",
        body:
          "We align delivery practices with ISO 14001 expectations so environmental considerations are embedded in how we plan, execute and hand over MEP packages across London and the Home Counties.",
      },
    ],
  },
  "iso-45001": {
    name: "ISO 45001",
    title: "About ISO 45001",
    shortLabel: "ISO 45001 — occupational health & safety (UKAS)",
    icon: `${ACC}/ISO_45001_UKAS_White_On_Black.svg`,
    intro:
      "ISO 45001 sets requirements for occupational health and safety management systems. UKAS-accredited certification shows our organisation is audited for systematic risk management and worker protection.",
    sections: [
      {
        heading: "Health and safety management",
        body:
          "The standard promotes hazard identification, risk assessment, participation of workers, and continual improvement. It helps organisations embed safety into everyday operations rather than treating it as a separate add-on.",
      },
      {
        heading: "Why it matters in construction",
        body:
          "Building services sites involve multiple trades, plant, working at height, and live services. A certified OH&S management system supports consistent controls, communication, and learning from incidents and near misses.",
      },
      {
        heading: "Assurance for project teams",
        body:
          "Clients and principal contractors expect contractors to demonstrate mature safety systems. ISO 45001 certification provides independent evidence that health and safety is managed in a structured, auditable way.",
      },
      {
        heading: "How APX MEP applies this",
        body:
          "We align site leadership, supervision, risk controls and review with ISO 45001 expectations so MEP delivery is carried out safely in line with programme and project requirements.",
      },
    ],
  },
} as const

export type MepAccreditationSlug = keyof typeof MEP_ACCREDITATIONS

/** Order of tab pills on detail pages; static generation order. */
export const MEP_ACCREDITATION_TAB_ORDER: MepAccreditationSlug[] = [
  "niceic",
  "gas-safe",
  "iso-9001",
  "iso-14001",
  "iso-45001",
]

/** Hub: first row — NICEIC + Gas Safe; second row — three ISO marks side by side. */
export const MEP_ACCREDITATION_HUB_TOP: MepAccreditationSlug[] = ["niceic", "gas-safe"]
export const MEP_ACCREDITATION_HUB_BOTTOM: MepAccreditationSlug[] = ["iso-9001", "iso-14001", "iso-45001"]

/** Hero strip: NICEIC, then ISO trio (always grouped), then Gas Safe. */
export const MEP_ACCREDITATION_HERO_STRIP: {
  slug: MepAccreditationSlug
  /** When true, render in the middle “ISO” group with siblings always side-by-side on sm+. */
  isoGroup?: boolean
}[] = [
  { slug: "niceic" },
  { slug: "iso-9001", isoGroup: true },
  { slug: "iso-14001", isoGroup: true },
  { slug: "iso-45001", isoGroup: true },
  { slug: "gas-safe" },
]

export function getMepAccreditation(slug: string) {
  return MEP_ACCREDITATIONS[slug as MepAccreditationSlug]
}

/** Logo path: NICEIC uses `NICEIC-02.svg` on dark surfaces; ISO UKAS uses hero monochrome SVGs on dark; others use `icon`. */
export function mepAccreditationLogoSrc(slug: MepAccreditationSlug, surface: "light" | "dark"): string {
  if (slug === "niceic" && surface === "dark") {
    return MEP_NICEIC_ICON_ON_DARK
  }
  if (surface === "dark" && slug in MEP_ISO_UKAS_ON_DARK) {
    return MEP_ISO_UKAS_ON_DARK[slug as keyof typeof MEP_ISO_UKAS_ON_DARK]
  }
  return MEP_ACCREDITATIONS[slug].icon
}

export const MEP_ACCREDITATION_SEO: Record<MepAccreditationSlug, { title: string; description: string }> = {
  niceic: {
    title: "NICEIC Electrical Contractors | APX Mechanical & Electrical | London",
    description:
      "NICEIC-registered electrical delivery for MEP projects across London and the Home Counties — APX Mechanical & Electrical.",
  },
  "gas-safe": {
    title: "Gas Safe Registered Engineers | MEP & Heating | APX",
    description:
      "Gas Safe registered engineers for mechanical and electrical projects — London, Kent, Essex, Surrey and the Home Counties — APX MEP.",
  },
  "iso-9001": {
    title: "ISO 9001 Quality Management | APX Mechanical & Electrical",
    description:
      "UKAS-accredited ISO 9001 quality management for building services delivery across Greater London and the South East — APX MEP.",
  },
  "iso-14001": {
    title: "ISO 14001 Environmental Management | APX MEP",
    description:
      "UKAS-accredited ISO 14001 environmental management for MEP projects across London and the Home Counties — APX Mechanical & Electrical.",
  },
  "iso-45001": {
    title: "ISO 45001 Health & Safety | APX Mechanical & Electrical",
    description:
      "UKAS-accredited ISO 45001 occupational health and safety management for site delivery — APX MEP, London and South East.",
  },
}
