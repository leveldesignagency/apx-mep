import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TitleFontProvider } from "@/contexts/TitleFontContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apx-mep.co.uk"),
  title: "APX - Professional Fire & Security | Mechanical & Electrical Services",
  description: "Professional fire safety, security systems, and mechanical & electrical services across the UK. Trusted by businesses for over 20 years.",
  keywords: "fire safety, security systems, mechanical services, electrical services, UK, professional",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "APX - Professional Fire & Security Services",
    description: "Professional fire safety, security systems, and mechanical & electrical services across the UK.",
    type: "website",
    url: "https://www.apx-mep.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLanding = process.env.NEXT_PUBLIC_SITE_MODE === "landing";

  if (isLanding) {
    return (
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <TitleFontProvider>
          <ThemeWrapper>
        <CustomCursor />
        <HeroVideoBackground />
        <Header />
            <main>{children}</main>
        <Footer />
            <CookieConsent />
          </ThemeWrapper>
          </TitleFontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
