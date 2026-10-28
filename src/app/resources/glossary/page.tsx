import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { FileText, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Enterprise Workforce Glossary | SpotSign AI",
  description:
    "Authoritative definitions for workforce terminology: Workforce Planning, STCW rest hours, piece-rate gang cards, Form 12BB, and 9-box calibration.",
  alternates: {
    canonical: "https://spotsign.ai/resources/glossary",
  },
};

export default function GlossaryPage() {
  const terms = [
    {
      term: "Workforce Operating System (WOS)",
      def: "An integrated enterprise software platform that unifies Core HR, workforce management, biometric attendance, statutory payroll, IT assets, and operational workflows in one place.",
    },
    {
      term: "Workforce Planning",
      def: "A non-destructive organizational simulation sandbox that models restructuring, downsizing, or expansion scenarios and computes real-time P&L delta, severance liability, and skill gap deficits before changes are committed.",
    },
    {
      term: "Piece-Rate Gang Card",
      def: "An operational industrial payroll mechanism that associates raw material intake weighments (e.g., seafood peeling kilograms or assembly yield) with worker gangs to calculate daily piece-rate wages.",
    },
    {
      term: "STCW Rest-Hour Mandate",
      def: "International Maritime Organization (IMO) Standards of Training, Certification and Watchkeeping regulations requiring seafarers to receive at least 10 hours of rest in any 24-hour period and 77 hours in any 7-day period.",
    },
    {
      term: "Section 192 TDS (Tax Deducted at Source)",
      def: "Indian statutory income tax mandate requiring employers to withhold estimated income tax on employee salaries, factoring in declarations under Old or New (Section 115BAC) regimes and verified Form 12BB proofs.",
    },
    {
      term: "Electronic Challan cum Return (ECR)",
      def: "The monthly electronic contribution file required by the Employees' Provident Fund Organisation (EPFO) documenting employee and employer PF splits for all active UANs.",
    },
    {
      term: "Form 25 Muster Roll",
      def: "The statutory daily attendance and wage register required by State Factory Inspectorates under the Factories Act, 1948 to audit worker hours, overtime, and leave.",
    },
    {
      term: "9-Box Talent Calibration Matrix",
      def: "A visual performance-and-potential evaluation tool used by HR leadership during calibration cycles to assess leadership bench strength and succession readiness.",
    },
    {
      term: "Workflow Automations",
      def: "Purpose-built background workflows that handle specialized analytics tasks such as attrition risk analysis, payroll anomaly detection, and resume screening.",
    },
  ];

  const glossaryJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "SpotSign AI Enterprise Workforce Glossary",
    "description": "Authoritative definitions for workforce management, statutory compliance, and operational systems.",
    "hasDefinedTerm": terms.map((t) => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.def,
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Workforce Glossary", href: "/resources/glossary" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>DOMAIN TERMINOLOGY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Enterprise Workforce & Compliance Glossary.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Clear, definitive explanations of industrial operations, statutory tax, and workforce simulation terms used across SpotSign AI.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/tech-software.jpg"
                  alt="SpotSign AI enterprise workforce definitions and terminology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[11px]">Workforce Glossary</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Statutory, Operational & Simulation Definitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terms.map((t, idx) => (
              <FloatingCard
                key={idx}
                delay={idx * 0.05}
                className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-base font-bold text-slate-900">{t.term}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.def}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
