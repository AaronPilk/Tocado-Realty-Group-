import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { realEstateAgencySchema } from "@/lib/seo/schema";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | North Carolina Real Estate`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.heroBody,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourfirm.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Fallback: if JS is disabled, show everything (don't leave it hidden) */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={realEstateAgencySchema()} />
        <ScrollReveal />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
