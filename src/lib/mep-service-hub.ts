/**
 * MEP “service line” pages (header dropdown + /services hub).
 * Core capability pillar pages (/services/electrical, etc.) are linked only from
 * the homepage Core capabilities section — not from this list.
 */
export const MEP_SERVICE_HUB_ITEMS = [
  {
    href: "/services/project-management",
    navLabel: "PROJECT MANAGEMENT",
    title: "Project management",
    description:
      "End-to-end coordination of design, installation, commissioning and handover so programmes stay on track and interfaces stay clear.",
    cta: "Go to project management",
  },
  {
    href: "/services/energy-efficiency",
    navLabel: "ENERGY EFFICIENCY",
    title: "Energy efficiency",
    description:
      "Practical measures to reduce operational energy use across mechanical and electrical systems without compromising comfort or compliance.",
    cta: "Go to energy efficiency",
  },
  {
    href: "/services/sustainability",
    navLabel: "SUSTAINABILITY",
    title: "Sustainability",
    description:
      "Lifecycle thinking, responsible specification and delivery that supports your environmental targets alongside building performance.",
    cta: "Go to sustainability",
  },
  {
    href: "/services/electrical-systems",
    navLabel: "ELECTRICAL SYSTEMS",
    title: "Electrical systems",
    description:
      "Power, containment, lighting and small power delivered with testing, certification and clear documentation for handover.",
    cta: "Go to electrical systems",
  },
  {
    href: "/services/mechanical-engineering",
    navLabel: "MECHANICAL ENGINEERING",
    title: "Mechanical engineering",
    description:
      "Ventilation, heating, cooling and plant — designed and installed to integrate with controls, commissioning and ongoing maintenance.",
    cta: "Go to mechanical engineering",
  },
  {
    href: "/services/maintenance",
    navLabel: "MAINTENANCE",
    title: "Maintenance",
    description:
      "Planned maintenance, reactive support and upgrades to keep critical building services reliable and compliant.",
    cta: "Go to maintenance",
  },
] as const
