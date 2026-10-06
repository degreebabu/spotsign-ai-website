import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://workforce360.dimension.com"),
  title: {
    default: "Workforce360 — AI-Native Workforce Operating System",
    template: "%s | Workforce360",
  },
  description:
    "Run your entire workforce on one intelligent platform. Workforce360 brings HR, payroll, attendance, talent, compliance, finance, IT operations, and workforce intelligence together — powered by AI.",
  keywords: [
    "AI HRMS software",
    "AI-powered HRMS",
    "workforce operating system",
    "enterprise HRMS",
    "payroll software India",
    "biometric attendance payroll",
    "workforce digital twin",
    "workforce management platform",
    "blue collar workforce software",
  ],
  authors: [{ name: "DIMENSHION", url: "https://workforce360.dimension.com" }],
  creator: "Powered by Spotsign • A DIMENSHION Product",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workforce360.dimension.com",
    siteName: "Workforce360",
    title: "Workforce360 — AI-Native Workforce Operating System",
    description:
      "Run your entire workforce on one intelligent platform. Unified People, Work, Money, IT Operations, and AI across 19 specialized industries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Workforce360 Enterprise Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce360 — AI-Native Workforce Operating System",
    description:
      "Run your entire workforce on one intelligent platform. Unified HR, payroll, shift operations, and embedded Digital Twin intelligence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Workforce360",
    url: "https://workforce360.dimension.com",
    logo: "https://workforce360.dimension.com/logo.png",
    parentOrganization: {
      "@type": "Organization",
      name: "DIMENSHION",
    },
    brand: {
      "@type": "Brand",
      name: "Workforce360",
      slogan: "The AI-Native Workforce Operating System",
    },
    sameAs: [],
  };

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Workforce360",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web, Progressive Web App (PWA)",
    description:
      "AI-native, multi-tenant Workforce Operating System combining HRIS, workforce management, biometric attendance, Indian statutory payroll, talent, IT assets, and Workforce Digital Twin.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Enterprise pricing tailored by workforce size and industry pack.",
    },
    featureList: [
      "Core HR and Multi-Entity HRIS",
      "Biometric Attendance Sync with eSSL/ZKTeco",
      "Indian Statutory Payroll (TDS, PF, ESIC, Form 16)",
      "40 Genkit AI Flows & Digital Brain",
      "Workforce Digital Twin Scenario Simulator",
      "19 Pre-Built Industry Vertical Packs",
      "General Ledger & Payroll Journal Integration",
      "IT Asset Management & Offboarding Recovery Lock",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
