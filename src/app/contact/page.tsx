"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { CustomPillButton } from "@/components/ui/CustomPillButton";
import { Phone, Mail, MapPin } from "lucide-react";

const CONTACT_SERVICES = [
  { value: "electrical-systems", label: "Electrical Systems" },
  { value: "mechanical-systems", label: "Mechanical Systems" },
  { value: "plumbing-building-services", label: "Plumbing & Building Services" },
  { value: "maintenance-compliance", label: "Maintenance & Compliance" },
  { value: "design-project-management", label: "Design & Project Management" },
  { value: "condition-reports-testing", label: "Condition Reports & Testing" },
] as const;

export default function ContactPage() {
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textClass = isDark ? "text-white" : "text-black";
  const mutedClass = isDark ? "text-gray-300" : "text-gray-600";
  const bgStyle = { backgroundColor: isDark ? "#000000" : "#ffffff" };
  const inputClass = isDark
    ? "bg-black border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:ring-white/20"
    : "bg-white border border-gray-300 text-black placeholder-gray-400 focus:border-black focus:ring-black/20";

  const [service, setService] = useState("");
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState<string>("email");
  useEffect(() => {
    const s = searchParams.get("service");
    if (s && CONTACT_SERVICES.some((opt) => opt.value === s)) setService(s);
  }, [searchParams]);
  const serviceLabel = service ? CONTACT_SERVICES.find((o) => o.value === service)?.label ?? "Select a service" : "Select a service";

  return (
    <div className="min-h-screen overflow-x-hidden" style={bgStyle}>
      <div className="w-full h-[0.75px] bg-black dark:bg-white" />

      <section className="py-16 lg:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold font-title mb-6 ${textClass}`}>
                Contact APX Mechanical & Electrical
              </h1>
              <p className={`text-lg mb-10 ${mutedClass}`}>
                Get in touch for a free quote or to discuss your mechanical, electrical and building services requirements. We cover London and the Home Counties.
              </p>

              <div className="space-y-6">
                <a href="tel:02045685986" className={`flex items-center gap-4 ${mutedClass} hover:opacity-90 transition-opacity`}>
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">020 4568 5986</span>
                </a>
                <a href="mailto:enquiries@apx-mep.co.uk" className={`flex items-center gap-4 ${mutedClass} hover:opacity-90 transition-opacity`}>
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">enquiries@apx-mep.co.uk</span>
                </a>
                <a
                  href="https://maps.google.com/?q=365-369+Bexley+Road+Northumberland+Heath+Erith+Kent+DA8+3EZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 ${mutedClass} hover:opacity-90 transition-opacity`}
                >
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p>365-369 Bexley Road</p>
                    <p>Northumberland Heath, Erith</p>
                    <p>Kent, DA8 3EZ</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <CustomPillButton href="tel:02045685986" size="md" variant={isDark ? "outline" : "onLight"}>Call us</CustomPillButton>
                <CustomPillButton href="mailto:enquiries@apx-mep.co.uk" size="md" variant={isDark ? undefined : "onLight"}>Email us</CustomPillButton>
              </div>
            </div>

            <div className={`rounded-xl border p-8 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
              <h2 className={`text-2xl font-bold font-title mb-6 ${textClass}`}>Send a message</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${textClass}`}>Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${inputClass}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${textClass}`}>Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${inputClass}`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${textClass}`}>Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${inputClass}`}
                    placeholder="020 0000 0000"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="service" className={`block text-sm font-medium mb-2 ${textClass}`}>Service</label>
                  <div className="relative">
                    <button
                      type="button"
                      id="service"
                      onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                      className={`w-full px-4 py-3 rounded-lg text-left flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 ${inputClass}`}
                    >
                      <span>{serviceLabel}</span>
                      <svg
                        className="w-5 h-5 shrink-0 transition-transform duration-200"
                        style={{ transform: serviceDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <input type="hidden" name="service" value={service} />
                    {serviceDropdownOpen && (
                      <div
                        className={`absolute left-0 right-0 top-full mt-1 z-50 py-2 rounded-lg border shadow-lg ${isDark ? "bg-black border-gray-700" : "bg-white border-gray-200"}`}
                      >
                        <button
                          type="button"
                          className={`block w-full py-2 px-4 text-left text-sm transition-colors ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-black/5 text-black"}`}
                          onClick={() => {
                            setService("");
                            setServiceDropdownOpen(false);
                          }}
                        >
                          Select a service
                        </button>
                        {CONTACT_SERVICES.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            className={`block w-full py-2 px-4 text-left text-sm transition-colors ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-black/5 text-black"}`}
                            onClick={() => {
                              setService(opt.value);
                              setServiceDropdownOpen(false);
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="contact-form-preferred-contact">
                  <label className={`block text-sm font-medium mb-2 ${textClass}`}>Preferred contact method</label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact-method"
                        value="phone"
                        checked={contactMethod === "phone"}
                        onChange={() => setContactMethod("phone")}
                        className="shrink-0"
                      />
                      <span className={textClass}>Phone</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact-method"
                        value="email"
                        checked={contactMethod === "email"}
                        onChange={() => setContactMethod("email")}
                        className="shrink-0"
                      />
                      <span className={textClass}>Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact-method"
                        value="text"
                        checked={contactMethod === "text"}
                        onChange={() => setContactMethod("text")}
                        className="shrink-0"
                      />
                      <span className={textClass}>Text message</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${textClass}`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 resize-y ${inputClass}`}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-6 py-3.5 text-base font-bold rounded-tl-2xl rounded-br-2xl border-2 transition-colors inline-flex items-center justify-center ${isDark ? "bg-black text-white border-white hover:bg-white hover:text-black" : "bg-white text-black border-black hover:bg-black hover:text-white border"}`}
                >
                  Send message
                </button>
              </form>
              <p className={`text-sm mt-4 ${mutedClass}`}>
                We aim to respond within one working day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
