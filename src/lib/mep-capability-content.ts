/**
 * Copy for MEP pillar pages (Electrical / Mechanical / Plumbing / Building services)
 * used with MepCapabilityPageLayout — single source to keep tone aligned.
 */

export const MEP_ELECTRICAL_CAPABILITY = {
  intro:
    "APX MEP delivers electrical design and installation for new builds, fit-outs and upgrades across Greater London and the Home Counties. We coordinate containment, distribution, lighting and small power with programme, testing and handover documentation.",
  capabilities: [
    "First and second fix wiring for domestic and commercial projects",
    "Distribution boards, sub-mains and circuit design",
    "Lighting, emergency lighting and small power",
    "Containment, cable management and cable scheduling",
    "Coordination with mechanical, fire and security interfaces",
    "Inspection, testing, certification and client handover",
  ],
  compliance: [
    "BS 7671 (IET Wiring Regulations) where applicable",
    "Building Regulations Part P (where domestic work applies)",
    "CDM 2015 and site-specific RAMS",
    "Manufacturer and warranty requirements",
  ],
  deliverables: [
    "Test certificates and schedules",
    "As-installed drawings and cable schedules",
    "O&M and handover packs",
    "Witnessed testing and snag support",
  ],
  ctaLabel: "Discuss electrical",
} as const

export const MEP_MECHANICAL_CAPABILITY = {
  intro:
    "We design and install mechanical systems — ventilation, heating, cooling and plant — for commercial, education, healthcare and industrial buildings. Work is coordinated with electrical, BMS and fire interfaces from setting out through commissioning.",
  capabilities: [
    "HVAC distribution, ductwork and terminal devices",
    "Heat emitters, AHUs, fan coil units and extract systems",
    "Plant room installation and builders work in connection",
    "BMS field wiring and control panel interfaces (with specialist packages as required)",
    "Thermal insulation, access and maintenance provisions",
    "Pre-commissioning cleaning, balancing support and witness tests",
  ],
  compliance: [
    "Building Regulations Part L and ventilation guidance (project-specific)",
    "CIBSE / manufacturer design criteria where specified",
    "Pressure testing and cleanliness standards for ductwork (project-specific)",
    "CDM 2015 and site-specific RAMS",
  ],
  deliverables: [
    "Installation records and plant schedules",
    "As-installed drawings and O&M structure",
    "Commissioning progress and snag lists",
    "Training and handover to facilities teams",
  ],
  ctaLabel: "Discuss mechanical",
} as const

export const MEP_PLUMBING_CAPABILITY = {
  intro:
    "APX MEP provides hot and cold water, drainage and sanitary services for new work, refurbishments and occupied buildings. We align with architects, structure and other trades to deliver tested, leak-free systems and clear handover.",
  capabilities: [
    "Hot and cold water distribution and boosted supplies",
    "Above-ground drainage, wastes and sanitary pipework",
    "Plant and equipment connections (calorifiers, pumps, etc.)",
    "Testing, flushing and disinfection where specified",
    "Penetrations, fire-stopping coordination and builders work",
    "Snagging, records and handover documentation",
  ],
  compliance: [
    "Water Supply (Water Fittings) Regulations and project water strategy",
    "Building Regulations Part G / H as applicable",
    "L8 / legionella control measures where the project specifies them",
    "CDM 2015 and site-specific RAMS",
  ],
  deliverables: [
    "Pressure test and flushing records",
    "As-installed drawings and valve charts",
    "O&M information for installed packages",
    "Witness and sign-off support",
  ],
  ctaLabel: "Discuss plumbing",
} as const

export const MEP_BUILDING_SERVICES_CAPABILITY = {
  intro:
    "Building services integration is how MEP, fabric and specialist packages stay on programme. We lead or support coordination, clash resolution and handover so mechanical, electrical and plumbing deliverables match the employer’s requirements.",
  capabilities: [
    "Integrated MEP coordination and installation sequencing",
    "Riser and service zone strategy with other trades",
    "Interface management with fire, security and controls contractors",
    "Refurbishment and fit-out delivery in live buildings",
    "Commissioning management support and witness planning",
    "As-builts, H&S files and training aligned to O&M",
  ],
  compliance: [
    "Employer’s Requirements and contract specifications",
    "CDM 2015 — design and construction coordination",
    "Building Regulations and statutory interfaces (project-specific)",
    "Digital handover and asset data requirements where BIM is used",
  ],
  deliverables: [
    "Coordination notes and resolution logs",
    "Combined services drawings (where in scope)",
    "Handover dossiers and training plans",
    "Snag closure and defects period support",
  ],
  ctaLabel: "Discuss building services",
} as const
