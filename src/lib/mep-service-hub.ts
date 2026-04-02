/**
 * MEP service lines — header dropdown + /services hub.
 * Canonical list (order): design & build; domestic/new build; commercial/industrial;
 * refurb & fit-out; inspection & testing; solar PV; access & entry; BMS & controls;
 * security, IRS & fire.
 */
export const MEP_SERVICE_HUB_ITEMS = [
  {
    href: "/services/project-management",
    navLabel: "DESIGN & BUILD",
    title: "Design and Build",
    description:
      "End-to-end M&E design and build — coordinated from concept and procurement through installation, commissioning and handover.",
    cta: "Go to design & build",
  },
  {
    href: "/services/electrical",
    navLabel: "DOMESTIC & NEW BUILD",
    title: "Domestic & new builds — 1st & 2nd fix",
    description:
      "Residential and new-build electrical and mechanical first and second fix, with testing, certification and clear documentation.",
    cta: "Go to domestic & new build",
  },
  {
    href: "/services/mechanical-engineering",
    navLabel: "COMMERCIAL & INDUSTRIAL",
    title: "Commercial and industrial installations",
    description:
      "Large-scale mechanical and electrical installation for commercial, education, healthcare and industrial premises — plant, distribution and site delivery.",
    cta: "Go to commercial & industrial",
  },
  {
    href: "/services/building-services",
    navLabel: "REFURB & FIT-OUT",
    title: "Refurbishment and fit-out",
    description:
      "Refurbishment and fit-out where MEP must align with programme, interfaces, tenants and occupied buildings.",
    cta: "Go to refurbishment & fit-out",
  },
  {
    href: "/services/electrical-systems",
    navLabel: "INSPECTION & TESTING",
    title: "Inspection and testing",
    description:
      "Inspection, testing and compliance evidence for electrical installations — EICR, periodic inspection and handover support.",
    cta: "Go to inspection & testing",
  },
  {
    href: "/services/energy-efficiency",
    navLabel: "SOLAR PV",
    title: "Solar PV installations",
    description:
      "Solar PV as part of your electrical and energy strategy — integrated with distribution, metering and protection on commercial and industrial sites.",
    cta: "Go to solar PV",
  },
  {
    href: "/services/security-systems",
    navLabel: "ACCESS & ENTRY",
    title: "Access control and door entry systems",
    description:
      "Access control and door entry coordinated with power, containment, networking and wider building systems.",
    cta: "Go to access control & entry",
  },
  {
    href: "/services/bms-control-wiring",
    navLabel: "BMS & CONTROLS",
    title: "BMS and control wiring",
    description:
      "Field wiring, panels and interfaces for building management systems — aligned with plant, HVAC and specialist controls commissioning.",
    cta: "Go to BMS & controls",
  },
  {
    href: "/services/fire-life-safety",
    navLabel: "SECURITY, IRS & FIRE",
    title: "Security, IRS and fire alarm systems",
    description:
      "Fire alarm, intruder alarm (IRS) and security systems coordinated with MEP interfaces — design, installation and handover.",
    cta: "Go to security, IRS & fire",
  },
] as const
