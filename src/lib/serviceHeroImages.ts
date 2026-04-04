/**
 * MEP service hero & CTA backgrounds — source assets live in the project-root `images/` folder.
 * `npm run dev` / `npm run build` runs `sync-public-images` so `images/` is copied to `public/images`;
 * Next/Image and CSS `url()` use site-root paths (`/images/...`).
 */
const mepImagesRoot = "/images" as const

export const mepHeroImages = {
  panelIndustrialBlue: `${mepImagesRoot}/electrician-inspecting-electrical-panel-industrial-facility-with-blue-lighting.jpg`,
  switchboardCableCopySpace: `${mepImagesRoot}/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg`,
  engineerPlansIndustrial: `${mepImagesRoot}/female-engineer-inspecting-panel-with-plans-industrial-room-woman-energy-engineer.jpg`,
  electricianSwitchboardTablet: `${mepImagesRoot}/male-electrician-switchboard-tablet.jpg`,
  switchboardEmergencyLighting: `${mepImagesRoot}/male-electrician-works-switchboard-overalls-against-backdrop-emergency-lighting.jpg`,
} as const

/**
 * Legacy keys used across service pages — each maps to a different stock photo so heroes vary by topic.
 */
export const serviceHeroImages = {
  /** General / CCTV-style service hero */
  cctv: mepHeroImages.panelIndustrialBlue,
  /** Fire & life safety */
  fireAlarm: mepHeroImages.switchboardEmergencyLighting,
  /** Intruder / field technician */
  intruder: mepHeroImages.electricianSwitchboardTablet,
  /** Access / BMS / coordination */
  accessControl: mepHeroImages.engineerPlansIndustrial,
  /** Video entry / containment / cabling */
  videoDoor: mepHeroImages.switchboardCableCopySpace,
} as const
