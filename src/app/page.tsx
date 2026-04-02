import type { Metadata } from "next"
import HomePage from "./home-page"
import { MEP_SITE_NAME, mepDefaultDescription } from "@/lib/seo"
import { buildMepMetadata } from "@/lib/seo-metadata"

const HOME_TITLE = `${MEP_SITE_NAME} | MEP Contractors | London & South East`

const baseMeta = buildMepMetadata({
  title: HOME_TITLE,
  description: mepDefaultDescription(),
  pathname: "/",
})

export const metadata: Metadata = {
  ...baseMeta,
  title: {
    absolute: HOME_TITLE,
  },
}

export default function Page() {
  return <HomePage />
}
