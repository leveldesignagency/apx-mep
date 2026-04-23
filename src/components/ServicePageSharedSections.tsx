"use client"

import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/ThemeContext"
import { CustomPillButton } from "@/components/ui/CustomPillButton"
import { MEP_SERVICE_CONTENT_OUTER_CLASS } from "@/lib/mep-service-layout"

const CLIENT_LOGO_PATHS = [
  "/Clients/_-01.png",
  "/Clients/_-02.png",
  "/Clients/_-03.png",
  "/Clients/_-04.png",
  "/Clients/_-05.png",
  "/Clients/_-06.png",
  "/Clients/_-07.png",
  "/Clients/_-08.png",
  "/Clients/_-09.png",
  "/Clients/_-10.png",
  "/Clients/_-11.png",
]

export function OurCustomersMarquee() {
  return (
    <div className="logo-marquee-section our-customers-marquee w-full overflow-hidden py-2">
      <div className="logo-marquee-wrapper max-w-none">
        <div className="logo-marquee">
          <div className="logo-marquee__group">
            {CLIENT_LOGO_PATHS.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element -- seamless CSS marquee; matches FS homepage strip
              <img key={`oc-a-${i}`} src={src} alt="" className="logo-marquee__img" />
            ))}
          </div>
          <div className="logo-marquee__group" aria-hidden="true">
            {CLIENT_LOGO_PATHS.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={`oc-b-${i}`} src={src} alt="" className="logo-marquee__img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function OurCustomers({ serviceTitleShort }: { serviceTitleShort: string }) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = (pathname?.startsWith("/services") ?? false) || theme === "dark"
  const textClass = isDark ? "text-white" : "text-black"
  const bgColor = isDark ? "#000000" : "#ffffff"

  return (
    <>
      <div className="w-full h-[0.75px] bg-black dark:bg-white" />
      <section className="pt-12 pb-20 sm:pb-24 lg:pt-16 lg:pb-32" style={{ backgroundColor: bgColor }}>
        <div className={`${MEP_SERVICE_CONTENT_OUTER_CLASS} mb-10`}>
          <h2 className={`text-left font-title text-4xl font-bold ${textClass}`}>
            Our {serviceTitleShort} customers
          </h2>
        </div>
        <OurCustomersMarquee />
      </section>
    </>
  )
}

type RequestFreeSurveyProps = {
  title?: string
  description?: string
}

const DEFAULT_SURVEY_TITLE = "Request Your Free Survey"
const DEFAULT_SURVEY_DESCRIPTION = "Not sure what kind of system you need? We offer a free, no obligation survey to ascertain the type of system that best suits your needs. This ensures the systems we provide offer the most efficient and convenient way of securing your building and assets. Simply contact us for a no-obligation chat about your individual requirements."

export function RequestFreeSurvey({ title = DEFAULT_SURVEY_TITLE, description = DEFAULT_SURVEY_DESCRIPTION }: RequestFreeSurveyProps) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const isDark = (pathname?.startsWith("/services") ?? false) || theme === "dark"
  const textClass = isDark ? "text-white" : "text-black"
  const mutedClass = isDark ? "text-gray-300" : "text-gray-600"
  const bgColor = isDark ? "#000000" : "#ffffff"

  return (
    <>
      <div className="w-full h-[0.75px] bg-black dark:bg-white" />
      <section className="py-16 lg:py-16" style={{ backgroundColor: bgColor }}>
        <div className={MEP_SERVICE_CONTENT_OUTER_CLASS}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 font-title ${textClass}`}>
              {title}
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${mutedClass}`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomPillButton href="/contact" size="md">
                Get a free quote
              </CustomPillButton>
              <CustomPillButton href="tel:02045685986" size="md" variant="outline">
                Call 020 4568 5986
              </CustomPillButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
