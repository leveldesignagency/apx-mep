import { permanentRedirect } from "next/navigation"

export default function MaintenancePage() {
  permanentRedirect("/services/maintenance-support")
}
