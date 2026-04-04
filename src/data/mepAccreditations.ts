export const MEP_ACCREDITATIONS = {
  bafe: {
    name: "BAFE",
    title: "About BAFE",
    shortLabel: "BAFE — fire equipment certification",
    icon: "/accreditations%20mono/Coloured/BAFE-01.svg",
    intro:
      "BAFE (British Approvals for Fire Equipment) is an independent, UKAS-accredited certification body focused on competence and quality across fire safety services.",
    sections: [
      {
        heading: "BAFE In The Built Environment",
        body:
          "BAFE maintains third-party certification schemes for organisations delivering life-safety services. These schemes are structured to verify competence, management controls and technical consistency. For project stakeholders, this provides stronger confidence that provider capability has been independently assessed rather than self-declared.",
      },
      {
        heading: "Why It Matters To MEP Projects",
        body:
          "On complex projects, fire and life-safety systems must integrate cleanly with wider mechanical and electrical packages. BAFE-aligned delivery expectations help teams maintain robust records, dependable commissioning controls and clear evidence at handover. This improves risk management through design, build and operational readiness.",
      },
      {
        heading: "Assurance Through Documentation",
        body:
          "Certification-driven practices encourage stronger audit trails, clearer test evidence and improved accountability throughout delivery. That becomes especially valuable where multiple parties rely on the same compliance pack, including principal contractors, duty holders and facilities teams.",
      },
      {
        heading: "How APX MEP Applies This",
        body:
          "We align our coordination, commissioning and handover processes with recognised quality frameworks so clients receive clear, traceable and operationally useful documentation — not just paperwork for completion.",
      },
    ],
  },
  nsi: {
    name: "NSI",
    title: "About NSI",
    shortLabel: "NSI Gold — security & fire certification",
    icon: "/accreditations%20mono/NSI-01.svg",
    intro:
      "NSI (National Security Inspectorate) is one of the UK’s most recognised independent certification bodies for security and fire safety providers.",
    sections: [
      {
        heading: "What NSI Certifies",
        body:
          "NSI approval frameworks assess technical competence, process control, quality systems and operational performance. These standards are widely trusted by insurers, consultants, procurement teams and clients because they provide independent assurance of delivery capability.",
      },
      {
        heading: "Project And Operational Relevance",
        body:
          "Security and life-safety systems frequently sit at the centre of risk, compliance and continuity planning. NSI-recognised standards support more consistent outcomes from design through maintenance. They also improve confidence that installed systems will perform as intended in live operation.",
      },
      {
        heading: "Benefits For Multi-Discipline Teams",
        body:
          "In MEP contexts, systems often cross package boundaries. NSI-aligned process discipline helps improve interface control, test evidence quality and handover consistency. This supports better coordination between project teams and FM teams after completion.",
      },
      {
        heading: "APX MEP Delivery Approach",
        body:
          "Our teams focus on structured quality checks, clear technical records and transparent communication at each stage. The result is stronger delivery confidence for clients managing programme, safety and asset performance objectives.",
      },
    ],
  },
  constructionline: {
    name: "Constructionline",
    title: "About Constructionline",
    shortLabel: "Constructionline — pre-qualification",
    icon: "/accreditations%20mono/Coloured/ConstructionOnline-01.svg",
    intro:
      "Constructionline is a UK pre-qualification and supplier assurance platform that supports better-informed contractor selection and procurement control.",
    sections: [
      {
        heading: "Purpose Of Constructionline",
        body:
          "Constructionline centralises pre-qualification information so buyers can review supplier capability and compliance data efficiently. It streamlines due diligence, reduces duplicated checks and supports more consistent procurement governance across projects and frameworks.",
      },
      {
        heading: "Why This Helps Delivery",
        body:
          "When programme timelines are tight, procurement certainty becomes critical. Using suppliers with robust pre-qualification profiles can accelerate onboarding and reduce risk exposure at mobilisation. It also supports stronger confidence during package award and early-stage delivery planning.",
      },
      {
        heading: "Commercial And Compliance Value",
        body:
          "For clients and principal contractors, pre-validated records improve auditability and reduce ambiguity around supplier readiness. This contributes to stronger decision-making and fewer avoidable delays linked to missing or inconsistent assurance information.",
      },
      {
        heading: "APX MEP Perspective",
        body:
          "We view procurement readiness as part of project quality. Maintaining clear and current assurance information helps us support clients from bid stage through delivery and handover with fewer administrative bottlenecks.",
      },
    ],
  },
  fia: {
    name: "FIA",
    title: "About FIA",
    shortLabel: "FIA — fire industry association",
    icon: "/accreditations%20mono/Coloured/FIA-01.svg",
    intro:
      "The Fire Industry Association (FIA) is a leading UK trade association that supports technical standards, training and best practice in fire safety.",
    sections: [
      {
        heading: "FIA’s Industry Role",
        body:
          "The FIA contributes to technical guidance, competency development and standards engagement across the fire sector. Its work helps members keep pace with evolving requirements and supports more informed technical decision-making in project and service environments.",
      },
      {
        heading: "Importance For Building Services Projects",
        body:
          "In MEP-led environments, fire systems must be coordinated with electrical, controls and broader building interfaces. Alignment with high-quality technical guidance helps teams reduce specification gaps and improve commissioning confidence at completion.",
      },
      {
        heading: "Competence And Continuous Learning",
        body:
          "Association-led development supports stronger engineering capability, better quality control and more reliable delivery consistency. For clients, this improves confidence that systems are not only installed correctly but also documented and handed over effectively.",
      },
      {
        heading: "How APX MEP Applies This",
        body:
          "We emphasise technical consistency, compliance awareness and disciplined project communication to help clients manage risk through design, installation, commissioning and operational handover.",
      },
    ],
  },
} as const

export type MepAccreditationSlug = keyof typeof MEP_ACCREDITATIONS

export const MEP_ACCREDITATION_TAB_ORDER: MepAccreditationSlug[] = ["bafe", "nsi", "constructionline", "fia"]

export function getMepAccreditation(slug: string) {
  return MEP_ACCREDITATIONS[slug as MepAccreditationSlug]
}

/** SEO for `/accreditations/[slug]` */
export const MEP_ACCREDITATION_SEO: Record<MepAccreditationSlug, { title: string; description: string }> = {
  bafe: {
    title: "BAFE Fire Certification | MEP & Life Safety | London & South East",
    description:
      "How BAFE-aligned fire safety expectations support coordinated mechanical and electrical delivery across Greater London, Kent, Essex, Surrey and the Home Counties — APX Mechanical & Electrical.",
  },
  nsi: {
    title: "NSI Gold | Certified Building Services | London & Home Counties",
    description:
      "NSI certification for security and fire interfaces with MEP: quality, compliance and assurance for installations across London boroughs and the South East — APX MEP.",
  },
  constructionline: {
    title: "Constructionline Registered MEP Contractor | APX",
    description:
      "Constructionline pre-qualification for MEP procurement — verified contractor data for principal contractors across London and the Home Counties.",
  },
  fia: {
    title: "Fire Industry Association (FIA) | MEP & Fire Interfaces | APX",
    description:
      "FIA standards and fire-system coordination with mechanical and electrical services — delivery across London, Kent, Essex and Surrey — APX Mechanical & Electrical.",
  },
}
