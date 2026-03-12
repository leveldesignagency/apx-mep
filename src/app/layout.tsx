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
  title: "APX MEP - Mechanical, Electrical & Building Services | UK",
  description: "Mechanical, electrical and building services across London and the Home Counties. HVAC, electrical systems, plumbing, design and maintenance. Trusted MEP partner.",
  keywords: "MEP, mechanical electrical plumbing, HVAC, electrical systems, building services, London, Home Counties, APX MEP",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "APX MEP - Mechanical, Electrical & Building Services",
    description: "Mechanical, electrical and building services across London and the Home Counties.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <HeroVideoBackground />
        <div className="relative z-10">
          <ThemeProvider>
            <TitleFontProvider>
              <ThemeWrapper>
                <CustomCursor />
                <Header />
                <main>{children}</main>
                <Footer />
                <CookieConsent />
              </ThemeWrapper>
            </TitleFontProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
