/**
 * Homepage Core capabilities — card structure matches FS site (title + 3 bullets + Learn more).
 */
import type { LucideIcon } from "lucide-react"
import {
  Building2,
  ClipboardCheck,
  Cpu,
  DoorOpen,
  DraftingCompass,
  Home,
  Paintbrush,
  ShieldAlert,
  Sun,
} from "lucide-react"

export type MepCoreCapability = {
  title: string
  bullets: readonly string[]
  href: string
  icon: LucideIcon
}

export const MEP_CORE_CAPABILITIES: MepCoreCapability[] = [
  {
    title: "Mechanical & electrical design & build",
    bullets: [
      "End-to-end M&E coordination from design intent",
      "Installation, commissioning & structured handover",
      "Programme alignment with principal contractor packages",
    ],
    href: "/services/project-management",
    icon: DraftingCompass,
  },
  {
    title: "Domestic & new builds: 1st & 2nd fix",
    bullets: [
      "1st and 2nd fix electrical and mechanical",
      "New-build and residential-scale installations",
      "Testing, certification and clear documentation",
    ],
    href: "/services/electrical",
    icon: Home,
  },
  {
    title: "Commercial & industrial installations",
    bullets: [
      "Large-scale distribution, plant & containment",
      "Offices, logistics, manufacturing & public estate",
      "Coordinated installation & commissioning on site",
    ],
    href: "/services/mechanical-engineering",
    icon: Building2,
  },
  {
    title: "Refurbishment & fit-out",
    bullets: [
      "Phased works in live & occupied buildings",
      "Coordination with interior packages & programme",
      "Snagging, testing & handover to operations",
    ],
    href: "/services/building-services",
    icon: Paintbrush,
  },
  {
    title: "Inspection & testing",
    bullets: [
      "Electrical inspection, testing & compliance evidence",
      "Periodic & project-specific certification support",
      "Clear records for landlords, FM & duty-holders",
    ],
    href: "/services/electrical-systems",
    icon: ClipboardCheck,
  },
  {
    title: "Solar PV installations",
    bullets: [
      "Commercial & industrial PV integration",
      "Electrical interfaces & energy strategy alignment",
      "Commissioning & handover documentation",
    ],
    href: "/services/energy-efficiency",
    icon: Sun,
  },
  {
    title: "Access control & door entry",
    bullets: [
      "Access, door entry & reader infrastructure",
      "Power, containment & commissioning with MEP",
      "Integration with security & building systems",
    ],
    href: "/services/security-systems",
    icon: DoorOpen,
  },
  {
    title: "BMS & control wiring",
    bullets: [
      "BMS field devices, panels & control cabling",
      "Coordination with HVAC & plant strategies",
      "Testing & witness support at handover",
    ],
    href: "/services/bms-control-wiring",
    icon: Cpu,
  },
  {
    title: "Security, IRS & fire alarm systems",
    bullets: [
      "Fire alarm & life-safety interfaces with MEP",
      "Intruder alarm (IRS) & security coordinated with wider packages",
      "Commissioning evidence aligned to specification",
    ],
    href: "/services/fire-life-safety",
    icon: ShieldAlert,
  },
]
