import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotsign.ai"),
  title: "SpotSign AI — Enterprise Workforce Operating System",
  description:
    "Run your entire workforce on one platform. SpotSign AI unifies HR, payroll, attendance, talent, compliance, finance, IT operations, and workforce analytics.",
  keywords: [
    "HRMS software",
    "enterprise HRMS",
    "workforce operating system",
    "enterprise HRMS",
    "payroll software India",
    "biometric attendance payroll",
    "workforce planning",
    "workforce management platform",
    "workforce analytics",
    "blue collar workforce software",
  ],
  authors: [{ name: "DIMENSHION", url: "https://spotsign.ai" }],
  creator: "Powered by Spotsign Workforce360",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spotsign.ai",
    siteName: "SpotSign AI",
    title: "SpotSign AI — Enterprise Workforce Operating System",
    description:
      "Run your entire workforce on one platform. Unified People, Work, Money, IT Operations, and Insights across 19 specialized industries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpotSign AI Enterprise Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpotSign AI — Enterprise Workforce Operating System",
    description:
      "Run your entire workforce on one unified platform. Unified HR, payroll, shift operations, and executive workforce analytics.",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
    "@id": "https://spotsign.ai/#organization",
    name: "SpotSign AI",
    url: "https://spotsign.ai",
    logo: "https://spotsign.ai/logo.png",
    description:
      "Enterprise Workforce Operating System unifying HR, payroll, attendance, talent, compliance, finance, IT operations, and workforce analytics.",
    parentOrganization: {
      "@type": "Organization",
      name: "DIMENSHION",
    },
    brand: {
      "@type": "Brand",
      name: "SpotSign AI",
      slogan: "The Enterprise Workforce Operating System",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://spotsign.ai/contact",
      availableLanguage: "English",
    },
  };

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://spotsign.ai/#software",
    name: "SpotSign AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web, Progressive Web App (PWA)",
    description:
      "Enterprise Workforce Operating System combining HRIS, workforce management, biometric attendance, Indian statutory payroll, talent, IT assets, and workforce analytics.",
    featureList: [
      "Core HR and Multi-Entity HRIS",
      "Biometric Attendance Sync with eSSL/ZKTeco",
      "Indian Statutory Payroll (TDS, PF, ESIC, Form 16)",
      "Workflow Automation & Workforce Analytics",
      "Executive Workforce Analytics & Reporting",
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
        <ScrollToTop />
      </body>
    </html>
  );
}
