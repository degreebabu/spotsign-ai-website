import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { FileSpreadsheet, Download, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Shift, Roster & Payroll Policy Templates | SpotSign AI",
  description:
    "Download operational templates for 3-shift rosters, Indian salary structures, Form 12BB reviews, and IT asset offboarding handovers.",
  alternates: {
    canonical: "https://spotsign.ai/resources/templates",
  },
};

export default function TemplatesPage() {
  const templates = [
    {
      category: "ROSTERING & SHIFTS",
      title: "24/7 3-Shift Plant Rotational Roster Matrix",
      desc: "Standardized rotational 8-hour shift calendar with built-in rest interval formulas, weekly off balancing, and Factories Act 50-hour overtime cap guardrails.",
      format: "Excel & SpotSign AI Import Template",
    },
    {
      category: "STATUTORY PAYROLL",
      title: "Indian Dual-Regime Salary CTC Structuring Model",
      desc: "Dynamic compensation breakdown balancing Basic, HRA, Special Allowance, PF statutory limits, Gratuity, and State Professional Tax across both Old and New 115BAC regimes.",
      format: "Excel Compensation Model",
    },
    {
      category: "IT & SECURITY",
      title: "Zero-Trust IT Hardware Asset Handover & Recovery Checklist",
      desc: "Serial number logging checklist, custodial sign-off sheets, and offboarding verification protocols to guarantee 100% equipment reclamation before final payroll settlement.",
      format: "Audit Policy Template • PDF & DOCX",
    },
    {
      category: "MARITIME OPERATIONS",
      title: "STCW 2010 Rest-Hour & Watchkeeping Compliance Log",
      desc: "Vessel master crew logging sheet validating minimum 10 hours rest in any 24-hour period and 77 hours in any 7-day period as mandated by IMO STCW guidelines.",
      format: "IMO Standard Log Template",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Operational Templates", href: "/resources/templates" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
              <span>PRODUCTION-READY ARTIFACTS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Shift, Roster & Payroll Policy Templates.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Download field-tested operational frameworks, shift rotation calendars, and compliance checklists designed for immediate enterprise deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((tpl, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full inline-block">
                    {tpl.category}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{tpl.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tpl.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{tpl.format}</span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition"
                  >
                    <span>Download Template</span>
                    <Download className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
