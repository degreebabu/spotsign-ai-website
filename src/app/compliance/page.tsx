import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Statutory & Labor Law Compliance | Workforce360 Enterprise",
  description:
    "Explore Workforce360's automated statutory compliance: Indian Income Tax Section 192, EPFO ECR, ESIC, State PT, Factories Act muster rolls, and Maritime STCW rest rules.",
  alternates: {
    canonical: "https://workforce360.dimension.com/compliance",
  },
};

export default function CompliancePage() {
  const complianceAreas = [
    {
      title: "Indian Income Tax (Section 192)",
      desc: "Automated TDS withholding under Section 115BAC (New Regime) and Old Regime with Form 12BB investment verification and bulk Form 16 Part A/B generation.",
    },
    {
      title: "EPFO & Electronic Challans (ECR)",
      desc: "One-click generation of validated ECR text files formatted for the EPFO unified employer portal, handling 12% employee and employer contribution splits.",
    },
    {
      title: "ESIC (Employee State Insurance)",
      desc: "Automatic wage threshold monitoring (₹21,000 ceiling), monthly contribution schedule exports, and digital health card generation.",
    },
    {
      title: "State-Wise Professional Tax (PT)",
      desc: "Pre-configured tax slabs across all Indian states with automated monthly deductions and half-yearly state government returns.",
    },
    {
      title: "Factories Act, 1948 & Form 25 Muster Rolls",
      desc: "Strict enforcement of 48-hour statutory weekly caps, double-rate overtime formulas, and automated export of adult worker registers.",
    },
    {
      title: "International Maritime STCW 2010 & MLC 2006",
      desc: "Seafarer rest-hour rule engines mandating minimum 10 hours rest per 24-hour cycle and 77 hours per 7 days with Port State Control audit logs.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Compliance", href: "/compliance" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>LABOR LAW & STATUTORY MANDATES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Automated Statutory Compliance Across Desk, Field, and Factory Floor.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Workforce360 eliminates manual compliance risks by embedding labor regulations directly into daily time capture, shift rostering, and payroll processing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceAreas.map((area, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">{area.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Stay 100% Audit-Ready for Labor Inspectorates
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Schedule a demonstration to review our statutory Form 25 muster rolls, EPFO ECR generators, and automated Form 16 workflows.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request Compliance Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
