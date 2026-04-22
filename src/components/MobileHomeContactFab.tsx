"use client"

import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { Phone, Mail, X } from "lucide-react"

type Props = {
  logoSrc: string
  logoAlt: string
  phoneDisplay: string
  phoneHref: string
  email: string
}

export function MobileHomeContactFab({ logoSrc, logoAlt, phoneDisplay, phoneHref, email }: Props) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close])

  return (
    <>
      <button
        type="button"
        className="md:hidden fixed right-6 z-[9990] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-[transform,background-color] hover:bg-[#111] active:scale-95 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
        style={{ bottom: "calc(6rem + env(safe-area-inset-bottom, 0px))" }}
        aria-label="Open contact"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Image src={logoSrc} alt={logoAlt} width={44} height={44} className="h-9 w-9 object-contain" />
      </button>

      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[9995] bg-black/65 backdrop-blur-sm"
            aria-hidden
            onClick={close}
          />
          <div className="fixed left-1/2 top-1/2 z-[9996] md:hidden -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={close}
              className="absolute -right-1 -top-[3.25rem] z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-lg transition-colors hover:bg-[#111] focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Contact"
              className="flex items-center justify-center gap-5 rounded-tl-2xl rounded-br-2xl border-2 border-white bg-black px-8 py-6 text-white shadow-xl"
            >
              <a
                href={phoneHref}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black transition-colors hover:bg-white/10 active:bg-white/15"
                aria-label={`Call ${phoneDisplay}`}
              >
                <Phone className="h-6 w-6 text-white" strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${email}`}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black transition-colors hover:bg-white/10 active:bg-white/15"
                aria-label={`Email ${email}`}
              >
                <Mail className="h-6 w-6 text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
