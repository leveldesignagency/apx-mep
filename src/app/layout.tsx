import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TitleFontProvider } from "@/contexts/TitleFontContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import CustomCursor from "@/components/CustomCursor";
import { RootJsonLd } from "@/components/RootJsonLd";
import { MEP_SITE_NAME, getMepSiteUrl, mepDefaultDescription, mepKeywordsMetaString } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const mepSiteUrl = getMepSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(mepSiteUrl),
  title: {
    default: `${MEP_SITE_NAME} | MEP Contractors | London & South East`,
    template: `%s | ${MEP_SITE_NAME}`,
  },
  description: mepDefaultDescription(),
  keywords: mepKeywordsMetaString(),
  applicationName: MEP_SITE_NAME,
  authors: [{ name: MEP_SITE_NAME }],
  creator: MEP_SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: mepSiteUrl,
    siteName: MEP_SITE_NAME,
    title: `${MEP_SITE_NAME} | HVAC, Electrical & Plumbing | London, Kent, Essex`,
    description: mepDefaultDescription(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${MEP_SITE_NAME} | London & Home Counties`,
    description: mepDefaultDescription(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <RootJsonLd />
        <ThemeProvider>
          <TitleFontProvider>
            <ThemeWrapper>
              {/*
                site-shell: header is position:absolute at top so hero can sit underneath (no gap);
                it is NOT position:fixed — it scrolls away with the page because its containing block is this shell.
              */}
              <div className="site-shell relative">
                <Header />
                <div className="relative z-10">
                  <CustomCursor />
                  <main>{children}</main>
                  <Footer />
                  <CookieConsent />
                </div>
              </div>
            </ThemeWrapper>
          </TitleFontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
