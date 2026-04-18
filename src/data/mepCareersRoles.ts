import type { CareerRole } from "@/components/careers/careers-types"

export const MEP_CAREER_ROLES: CareerRole[] = [
  {
    id: "mechanical-electrical-engineers",
    title: "Mechanical & Electrical Engineers",
    description:
      "Design, installation, testing and commissioning of HVAC, electrical, plumbing and building services. Commercial and residential projects; London and Home Counties.",
    department: "MEP",
    location: "London & Home Counties",
  },
]

export function getMepCareerRoleById(id: string): CareerRole | undefined {
  return MEP_CAREER_ROLES.find((r) => r.id === id)
}
