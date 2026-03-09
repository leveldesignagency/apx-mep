"use client"

import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    
    setIsAnimating(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email,
          message: `New subscription request from: ${email}`,
          _subject: 'APX MEP - Website Coming Soon Subscription'
        })
      })
      if (!response.ok) throw new Error('Failed')
      
        setTimeout(() => {
          setIsSubscribed(true)
          setIsAnimating(false)
        }, 800)
    } catch (err) {
      const subject = encodeURIComponent('APX MEP - Website Coming Soon Subscription')
      const body = encodeURIComponent(`Hello APX MEP Team,\n\nPlease add the following email to your mailing list for updates about your website launch:\n\nEmail: ${email}\n\nThank you!\n\nBest regards,\n${email}`)
      window.location.href = `mailto:info@apx-mep.co.uk?subject=${subject}&body=${body}`
      setTimeout(() => {
        setIsSubscribed(true)
        setIsAnimating(false)
      }, 800)
    }
  }

  return (
    <div className="h-screen text-white flex flex-col overflow-hidden relative z-10">
      {/* Logo at top with lines */}
      <div className="pt-8 pb-8">
        <div className="flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-1 h-px bg-white mr-8"></div>
          
          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/apx-logo.svg"
              alt="APX MEP Logo"
              width={280}
              height={280}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
            />
          </div>
          
          {/* Right Line */}
          <div className="flex-1 h-px bg-white ml-8"></div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">

        {/* Main Text Content */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4 tracking-tighter" style={{ fontFamily: 'Arial Black, sans-serif', letterSpacing: '-0.02em' }}>
            WEBSITE COMING SOON
          </h1>
          <h2 className="text-3xl font-semibold mb-6 tracking-wider opacity-70">
            MECHANICAL • ELECTRICAL • PLUMBING
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-0 opacity-60">
            As a trusted partner, we guide industries in their transition to sustainable energy with:
          </p>
          <p className="text-base text-gray-300 leading-relaxed mb-0 opacity-60">
            Trusted Mechanical & Electrical Solutions for Every Project.
          </p>
          <p className="text-base text-gray-300 leading-relaxed opacity-60">
            Expert installation, maintenance, and emergency support.
          </p>
        </div>

        {/* Email Subscription Form */}
        <div className="mb-20 w-full max-w-md">
          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL HERE"
                required
                className={`flex-1 px-4 py-3 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-all duration-500 ease-in-out ${isAnimating ? 'pr-32' : 'pr-4'}`}
              />
              <button
                type="submit"
                className={`px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-500 ease-in-out ${isAnimating ? 'absolute opacity-0 scale-95' : 'relative opacity-100 scale-100'}`}
              >
                SUBMIT
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-medium text-sm w-full">
              <CheckCircle className="h-4 w-4 text-green-600" />
              You&apos;re now subscribed to be notified when we launch!
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-12 mb-12 text-center">
          {/* Phone */}
          <a 
            href="tel:+441234567890"
            className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
            title="+44 (0) 1234 567890"
          >
            <Phone className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors" />
          </a>

          {/* Email */}
          <a 
            href="mailto:info@apx-mep.co.uk"
            className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
            title="info@apxmep.co.uk"
          >
            <Mail className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors" />
          </a>

          {/* Address */}
          <a 
            href="https://maps.google.com/?q=365-369+Bexley+Road+Northumberland+Heath+Erith,+Kent,+DA8+3EZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
            title="365-369 Bexley Road Northumberland Heath Erith, Kent, DA8 3EZ"
          >
            <MapPin className="h-8 w-8 text-white group-hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>

      {/* Social Icons - Right Center */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="py-4 border-t border-white flex-shrink-0">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 APX MEP. All rights reserved. | Professional MEP Services UK
          </p>
        </div>
      </footer>
    </div>
  )
}