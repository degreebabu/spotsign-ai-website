import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Transparent Pricing & Plans | Workforce360",
  description:
    "Explore Workforce360's transparent enterprise pricing tiers tailored by workforce size, legal entities, and specialized industry vertical pack requirements.",
  alternates: {
    canonical: "https://workforce360.dimension.com/pricing",
  },
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      badge: "MID-MARKET ESSENTIALS",
      target: "Growing enterprises with single-entity operations (Up to 250 headcount)",
      features: [
        "Core HRMS & Employee Records",
        "Biometric & Mobile Attendance Sync",
        "Indian Statutory Payroll & TDS Engine",
        "EPFO ECR & ESIC Challan Generators",
        "Employee Self-Service PWA Portal",
        "Standard Email & Helpdesk Support",
      ],
      ctaText: "Request Starter Pricing",
      popular: false,
    },
    {
      name: "Professional",
      badge: "MOST POPULAR",
      target: "Multi-branch companies with corporate & shift operations (250 – 1,000 headcount)",
      features: [
        "Everything in Starter, plus:",
        "24/7 Shift Scheduling & Overtime Guardrails",
        "AI Recruitment & ATS Candidate Scoring",
        "Performance Management & Continuous OKRs",
        "IT Asset Governance & Offboarding Return Lock",
        "1 Specialized Industry Vertical Pack Included",
        "20 Production Genkit AI Flows",
      ],
      ctaText: "Request Professional Pricing",
      popular: true,
    },
    {
      name: "Enterprise WOS",
      badge: "COMPLETE OPERATING SYSTEM",
      target: "Complex, multi-entity, or multinational workforces (1,000+ headcount)",
      features: [
        "Everything in Professional, plus:",
        "Workforce Digital Twin Scenario Simulator",
        "All 40 Production Genkit AI Flows Active",
        "General Ledger Journal Sync (SAP, Oracle, NetSuite)",
        "Blue-Collar Piece-Rate Gang Cards (Weighment Sync)",
        "Multiple Industry Vertical Packs",
        "19 Granular RBAC Permission Tiers",
        "Dedicated Enterprise Solutions Architect & 99.9% SLA",
      ],
      ctaText: "Request Enterprise Pricing",
      popular: false,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Pricing", href: "/pricing" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>TRANSPARENT ENTERPRISE LICENSING</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Predictable Pricing Scaled to Your Workforce Footprint.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Workforce360 licensing is tailored based on your active headcount, number of operational shift workers, legal entities, and specialized industry vertical packs. Zero hidden implementation fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.popular
                    ? "bg-slate-900 text-white shadow-2xl border-2 border-blue-500 relative"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    {!tier.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {tier.badge}
                      </span>
                    )}
                    <h2 className="text-2xl font-extrabold">{tier.name}</h2>
                    <p className={`text-xs mt-2 ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                      {tier.target}
                    </p>
                  </div>

                  <div className="pt-2 pb-4 border-b border-slate-200/40">
                    <div className="text-xl font-bold font-mono">Custom Enterprise Quote</div>
                    <span className={`text-[11px] block mt-0.5 ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                      Billed annually per employee per month (PEPM)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <span className={`font-bold uppercase tracking-wider block ${tier.popular ? "text-slate-300" : "text-slate-700"}`}>
                      Included Capabilities:
                    </span>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.popular ? "text-cyan-400" : "text-emerald-600"}`} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-200/40">
                  <Link
                    href="/demo"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                      tier.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing FAQ Card */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">How Does Workforce360 Pricing Work?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
              <div>
                <strong className="text-slate-900 block mb-1">Per Employee Per Month (PEPM)</strong>
                You only pay for active employee records. Terminated and alumni profiles in your talent directory are retained with zero extra license costs.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Industry Vertical Presets Included</strong>
                Access pre-built department structures, shift rules, and statutory templates for your industry without paying for expensive third-party custom development.
              </div>
              <div>
                <strong className="text-slate-900 block mb-1">Zero Hidden Infrastructure Surcharges</strong>
                Multi-tenant data isolation, regular security upgrades, mobile PWA access, and standard statutory tax updates are included in your subscription.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
