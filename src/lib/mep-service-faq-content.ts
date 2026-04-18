export type ServiceFaqItem = { question: string; answer: string }

/** Used when a route has no dedicated entry (should be rare). */
export const MEP_SERVICE_FAQ_FALLBACK: ServiceFaqItem[] = [
  {
    question: "What type of MEP projects do you take on?",
    answer:
      "We deliver mechanical, electrical and plumbing services across commercial, industrial, residential and public-sector work in London and the Home Counties — from refurbishments and fit-outs to larger new-build schemes, including design support, installation, testing, commissioning and maintenance.",
  },
  {
    question: "When should we involve your team?",
    answer:
      "Earlier involvement usually reduces rework: we can align loads, routes, plant space and interfaces with structure and architecture during design development, and we’re comfortable joining at feasibility, developed design or as a specialist package when scopes are already defined.",
  },
  {
    question: "Do you work with other consultants and contractors?",
    answer:
      "Yes. We coordinate with architects, engineers, main contractors and specialist trades on programmes, shared models and site interfaces so MEP delivery stays aligned with the wider project.",
  },
  {
    question: "What happens after handover?",
    answer:
      "We offer planned maintenance, reactive support, upgrades and compliance-related testing where required, with reporting and records that support building operators after completion.",
  },
]

const HUB: ServiceFaqItem[] = [
  {
    question: "How do I choose the right MEP service line?",
    answer:
      "Use our services hub to browse mechanical, electrical, plumbing, building services, energy, security interfaces, fire life safety and more. Each page outlines typical scope — if you’re unsure, contact us with your building type and stage and we’ll point you to the right discipline or arrange a conversation.",
  },
  {
    question: "Do you cover domestic as well as commercial work?",
    answer:
      "Yes. We deliver commercial and industrial MEP work at scale, and we also support residential-led schemes, mixed-use developments and domestic new-build / refurbishment packages where our service lines apply.",
  },
  {
    question: "Can you support design-and-build and traditional contracts?",
    answer:
      "We’re used to design-and-build, two-stage tendering and traditional contracts — we can align deliverables to your procurement route, programme and tender documentation.",
  },
  {
    question: "How do I get a quote or site visit?",
    answer:
      "Contact us with a short brief and location. We’ll confirm scope, suggest proportionate next steps — survey, design review or budget indication — and outline timelines for London and Home Counties projects.",
  },
]

const MECHANICAL_PILLAR: ServiceFaqItem[] = [
  {
    question: "What mechanical and HVAC scope do you cover?",
    answer:
      "We cover heating, ventilation, air conditioning and related plant — design and installation for commercial and industrial buildings, aligned with loads, acoustics, containment and electrical capacity across London and the Home Counties.",
  },
  {
    question: "When should mechanical input start on my project?",
    answer:
      "Ideally during early design so plant space, risers, routes and noise criteria are fixed before structure and façades harden — we can still add value at developed design or specialist package stage with a clear interface schedule.",
  },
  {
    question: "Can you work with our architect and structural engineer?",
    answer:
      "Yes. We coordinate spatial requirements, penetrations, loads and sequencing so HVAC plant and distribution fit the architectural and structural intent without late clashes.",
  },
  {
    question: "Do you provide commissioning and handover documentation?",
    answer:
      "We commission systems in line with the specification and provide handover packs, O&M information and training support so operators can run plant safely and efficiently after completion.",
  },
]

const PLUMBING_PILLAR: ServiceFaqItem[] = [
  {
    question: "What plumbing and drainage work do you deliver?",
    answer:
      "We deliver hot and cold water distribution, waste and drainage, and related first- and second-fix installation for commercial and residential-led projects, coordinated with MEP interfaces and testing requirements.",
  },
  {
    question: "Can you support both new-build and refurbishment?",
    answer:
      "Yes — we work on new-build shells and cores as well as fit-out and refurbishment where existing services, shutdowns and phased handover need careful planning.",
  },
  {
    question: "How do you handle water regulations and testing?",
    answer:
      "We align installation and commissioning with applicable water regulations and project-specific testing schedules, with clear records for handover and compliance evidence where required.",
  },
  {
    question: "Do you coordinate with mechanical and electrical packages?",
    answer:
      "Yes. We align routes, containment and plant interfaces with mechanical and electrical trades so plumbing delivery fits the wider MEP strategy on site.",
  },
]

const MAINTENANCE_SUPPORT: ServiceFaqItem[] = [
  {
    question: "What does your MEP maintenance and support include?",
    answer:
      "Planned preventative maintenance, reactive call-outs, condition reporting and small works — focused on keeping distribution, plant, HVAC and controls reliable across commercial and mixed-use estates in London and the Home Counties.",
  },
  {
    question: "Can you align with our SLAs and out-of-hours needs?",
    answer:
      "Yes. We structure response and reporting around your contract SLAs, access arrangements and critical assets, including out-of-hours where the building requires it.",
  },
  {
    question: "How do you evidence compliance for duty holders?",
    answer:
      "We provide maintenance reports, fault records, inspection evidence and forward recommendations so facilities teams can demonstrate upkeep and plan upgrades with confidence.",
  },
  {
    question: "Can you work with OEMs and specialist controls vendors?",
    answer:
      "Yes. We coordinate with manufacturers, BMS and controls specialists for warranty conditions, firmware updates and fault diagnostics while keeping a clear single point of contact for the site.",
  },
]

const FIRE_LIFE_SAFETY: ServiceFaqItem[] = [
  {
    question: "What fire and life safety systems do you install as MEP?",
    answer:
      "We deliver fire alarm, intruder (IRS) and related security interfaces coordinated with MEP routes and power — design, installation, testing and handover aligned with the project fire strategy and specialist packages.",
  },
  {
    question: "How do you interface fire systems with other building services?",
    answer:
      "We agree cause-and-effect, monitoring paths and power supplies with the wider MEP design so interfaces to HVAC, access and BMS are documented, tested and commissioned consistently.",
  },
  {
    question: "Which standards do you work to?",
    answer:
      "We align delivery with BS 5839-1 and related guidance where applicable, plus project-specific specifications — with certification and documentation structured for handover.",
  },
  {
    question: "Can you support existing estates and upgrades?",
    answer:
      "Yes. We can survey existing systems, plan phased upgrades and minimise disruption to occupation while keeping clear records for operators and duty holders.",
  },
]

const ELECTRICAL_SYSTEMS: ServiceFaqItem[] = [
  {
    question: "What electrical systems work do you cover?",
    answer:
      "We cover distribution, containment, lighting and power for commercial and industrial schemes — from containment strategy and cable sizing through to installation, testing and handover across London and the Home Counties.",
  },
  {
    question: "Do you provide BS 7671 testing and certification?",
    answer:
      "Yes. We deliver inspection and testing in line with BS 7671 and project requirements, with clear certification and records for handover and ongoing compliance.",
  },
  {
    question: "Can you coordinate with mechanical and specialist packages?",
    answer:
      "Yes. We align supplies, containment and commissioning with mechanical, fire, security and BMS packages so electrical delivery matches the wider MEP programme.",
  },
  {
    question: "How do you approach energy and load management?",
    answer:
      "We align supplies and sub-mains with load diversity, metering and future flexibility — including interfaces to renewables or EV infrastructure where the brief requires it.",
  },
]

const SUSTAINABILITY_MEP: ServiceFaqItem[] = [
  {
    question: "How do you align MEP with sustainability goals?",
    answer:
      "We align mechanical, electrical and plumbing delivery with your carbon, efficiency and indoor environmental targets — coordinating plant selection, controls strategy and metering so systems perform as designed in use.",
  },
  {
    question: "Can you support Part L and building performance requirements?",
    answer:
      "Yes. We work with the design team to align loads, efficiencies and evidence for building regulations and performance targets, with commissioning focused on real-world operation.",
  },
  {
    question: "Do you integrate renewables or low-carbon plant?",
    answer:
      "Where the project includes heat pumps, solar PV interfaces or hybrid plant, we coordinate electrical and mechanical interfaces, protection and handover testing with the wider strategy.",
  },
  {
    question: "What happens after handover for performance?",
    answer:
      "We can support seasonal commissioning, tuning and maintenance planning so efficiency measures are preserved and operators have clear operating guidance.",
  },
]

const BMS_CONTROL: ServiceFaqItem[] = [
  {
    question: "What BMS and control wiring scope do you provide?",
    answer:
      "We install control wiring, field devices and interfaces between plant, sensors and BMS head ends — coordinated with MEP commissioning so controls strategy matches the specification.",
  },
  {
    question: "Can you work with our controls vendor or integrator?",
    answer:
      "Yes. We align cable schedules, terminations and FAT/SAT expectations with the nominated BMS partner so site installation and commissioning stay on programme.",
  },
  {
    question: "How do you document points and interfaces?",
    answer:
      "We support points schedules, cable schedules and as-built records so operators and future contractors can trace circuits, devices and responsibility boundaries.",
  },
  {
    question: "Do you test end-to-end before handover?",
    answer:
      "Yes — we coordinate point-to-point checks and witnessed testing with the controls team so plant responds correctly under normal and fault scenarios defined in the spec.",
  },
]

const cctvMep = (variant: "commercial" | "domestic" | "advice"): ServiceFaqItem[] => {
  const place =
    variant === "commercial"
      ? "offices, retail, logistics and multi-site operations"
      : variant === "domestic"
        ? "homes and residential-led schemes"
        : "clients reviewing CCTV options and obligations"
  return [
    {
      question: "What CCTV scope do you deliver as part of MEP coordination?",
      answer: `We design and install CCTV cabling, supplies and containment coordinated with the wider electrical package for ${place} — aligned with network, access and security interfaces across London and the Home Counties.`,
    },
    {
      question: "How do you handle data, GDPR and retention?",
      answer:
        "We align camera placement, signage, network segregation and retention settings with your policies and project requirements — with handover documentation that reflects lawful use and operator responsibilities.",
    },
    {
      question: "Can CCTV integrate with access control and intruder systems?",
      answer:
        "Yes. We coordinate interfaces and commissioning with access and intruder packages so events, alarms and monitoring paths work together as specified.",
    },
    {
      question: "What commissioning and training do you provide?",
      answer:
        "We commission image quality, recording and user access, then support structured handover and training so estates teams can operate and export footage confidently.",
    },
  ]
}

const SECURITY_SYSTEMS: ServiceFaqItem[] = [
  {
    question: "What security and IRS scope do you cover?",
    answer:
      "We deliver intruder and related security systems coordinated with MEP routes and power — installation, testing and handover aligned with graded systems and monitoring paths where required.",
  },
  {
    question: "How do you coordinate with fire and access systems?",
    answer:
      "We agree interfaces for monitoring, release and cause-and-effect with fire and access packages so security signalling and life-safety behaviour stay consistent on site.",
  },
  {
    question: "Can you support police response and ARC set-up?",
    answer:
      "Where the design requires it, we align signalling, documentation and commissioning with ARC and police response expectations for the graded system.",
  },
  {
    question: "What documentation is provided at handover?",
    answer:
      "We provide commissioning records, user guidance and as-built information so operators can manage codes, zones and maintenance without guesswork.",
  },
]

const BUILDING_SERVICES: ServiceFaqItem[] = [
  {
    question: "What building services packages do you deliver?",
    answer:
      "We deliver coordinated mechanical, electrical and plumbing installation for refurbishment, fit-out and shell-and-core projects — structured around programme, interfaces and testing across London and the Home Counties.",
  },
  {
    question: "How do you manage phased handover and occupation?",
    answer:
      "We plan shutdowns, temporary supplies and commissioning windows with the contractor so completed areas can be handed over safely while work continues elsewhere.",
  },
  {
    question: "Can you work within landlord and tenant splits?",
    answer:
      "Yes. We align risers, landlord plant and tenant fit-out scopes with clear demarcation and metering where the lease or employer’s requirements define split responsibilities.",
  },
  {
    question: "What snagging and defects support do you offer?",
    answer:
      "We support structured snagging, retesting and seasonal checks so systems meet the specification before final completion and operator training.",
  },
]

const ENERGY_EFFICIENCY: ServiceFaqItem[] = [
  {
    question: "What energy and electrical upgrade work do you cover?",
    answer:
      "We support solar PV and wider electrical upgrades on commercial and industrial sites — aligning generation, protection, metering and MEP strategy with grid and operational constraints.",
  },
  {
    question: "When should generation and loads be reviewed together?",
    answer:
      "Early review avoids stranded capacity — we align inverter locations, cable routes and future loads with the mechanical and electrical brief before containment and plant space are fixed.",
  },
  {
    question: "Can you coordinate DNO and connection requirements?",
    answer:
      "We work with your team and specialists to align technical submissions with connection agreements, protection and metering so installation matches the approved design.",
  },
  {
    question: "What handover evidence do you provide?",
    answer:
      "We provide test records, as-builts and performance checks so operators and asset teams can operate and maintain the installation with clear baselines.",
  },
]

const ELECTRICAL_DOMESTIC: ServiceFaqItem[] = [
  {
    question: "What domestic and new-build electrical work do you do?",
    answer:
      "We deliver first and second-fix electrical installation for residential and new-build projects — supplies, containment, accessories and testing aligned with the architectural programme.",
  },
  {
    question: "How do you coordinate with other trades on site?",
    answer:
      "We align routes and openings with structure, fit-out and mechanical trades so electrical installation stays on programme without late rework.",
  },
  {
    question: "What certification do you provide?",
    answer:
      "We complete inspection and testing to BS 7671 with certification and schedules suitable for building control and handover.",
  },
  {
    question: "Can you support smart home or EV interfaces?",
    answer:
      "Where specified, we coordinate supplies and containment for smart controls, EV chargers and related equipment with the wider electrical design.",
  },
]

const MECHANICAL_ENGINEERING: ServiceFaqItem[] = [
  {
    question: "What mechanical engineering services do you offer?",
    answer:
      "We deliver HVAC and mechanical plant — design support, installation, commissioning and handover for commercial and industrial buildings, with clear documentation and training for operators.",
  },
  {
    question: "When should we book a mechanical survey or design review?",
    answer:
      "Before you lock plant space, risers and acoustic criteria — early review reduces rework on loads, routes and electrical provision for major equipment.",
  },
  {
    question: "Can you work with our manufacturer or specialist vendor?",
    answer:
      "Yes. We align installation, builderswork and commissioning with OEM requirements so warranties and performance criteria are met.",
  },
  {
    question: "Do you offer maintenance after completion?",
    answer:
      "We can structure planned maintenance and reactive support for mechanical plant so performance and records stay aligned with operational needs.",
  },
]

const PROJECT_MANAGEMENT: ServiceFaqItem[] = [
  {
    question: "How do you run MEP project management on site?",
    answer:
      "We coordinate programme, quality and interfaces for MEP packages — lookahead planning, RAMS alignment, commissioning windows and clear reporting for contractors and clients.",
  },
  {
    question: "Can you align multiple specialist subcontractors?",
    answer:
      "Yes. We chair coordination meetings, track dependencies and manage interface registers so trades hand over clean scopes to the next package.",
  },
  {
    question: "How do you manage changes and variations?",
    answer:
      "We assess impact on programme, cost and commissioning, document decisions and keep testing and handover criteria visible to the whole team.",
  },
  {
    question: "What reporting do clients receive?",
    answer:
      "Structured progress, risk and commissioning readiness reporting — tailored to your governance so stakeholders see blockers and milestones clearly.",
  },
]

const MEP_FAQ_BY_PATH: Record<string, ServiceFaqItem[]> = {
  "/services": HUB,
  "/services/mechanical": MECHANICAL_PILLAR,
  "/services/plumbing": PLUMBING_PILLAR,
  "/services/maintenance-support": MAINTENANCE_SUPPORT,
  "/services/fire-life-safety": FIRE_LIFE_SAFETY,
  "/services/electrical-systems": ELECTRICAL_SYSTEMS,
  "/services/sustainability": SUSTAINABILITY_MEP,
  "/services/bms-control-wiring": BMS_CONTROL,
  "/services/cctv/commercial": cctvMep("commercial"),
  "/services/cctv/domestic": cctvMep("domestic"),
  "/services/cctv/advice": cctvMep("advice"),
  "/services/security-systems": SECURITY_SYSTEMS,
  "/services/building-services": BUILDING_SERVICES,
  "/services/energy-efficiency": ENERGY_EFFICIENCY,
  "/services/electrical": ELECTRICAL_DOMESTIC,
  "/services/mechanical-engineering": MECHANICAL_ENGINEERING,
  "/services/project-management": PROJECT_MANAGEMENT,
}

export function normalizeServicePathname(pathname: string): string {
  let p = pathname.split("?")[0] || "/"
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1)
  return p
}

export function getMepServiceFaqItems(pathname: string): ServiceFaqItem[] {
  const p = normalizeServicePathname(pathname)
  return MEP_FAQ_BY_PATH[p] ?? MEP_SERVICE_FAQ_FALLBACK
}

/** Re-export default items for hub (e.g. tests). */
export { HUB as MEP_SERVICE_FAQ_HUB }
