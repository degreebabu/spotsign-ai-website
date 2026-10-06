import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BarChart3, Download, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Workforce Research & Benchmark Reports | Workforce360",
  description:
    "Authoritative data and executive benchmarks on workforce operating costs, shift scheduling efficiency, Indian statutory compliance, and AI operational adoption.",
  alternates: {
    canonical: "https://workforce360.dimension.com/resources/reports",
  },
};

export default function ReportsPage() {
  const reports = [
    {
      badge: "ANNUAL BENCHMARK",
      title: "State of Enterprise Workforce Operations 2026",
      desc: "An in-depth analysis of 14,000+ frontline and corporate roles across 19 industries, measuring the impact of unified workforce operating systems on labor cost leakage, shift fill-rates, and compliance audit speed.",
      stats: ["38% Lower Labor Leakage", "99.4% First-Pass Payroll Accuracy", "19 Industries Benchmarked"],
      format: "PDF Executive Report • 48 Pages",
    },
    {
      badge: "PAYROLL & COMPLIANCE",
      title: "Indian Statutory Payroll & Labor Law Compliance Index",
      desc: "A comprehensive operational review of Section 192 TDS dual regimes, EPFO electronic challan automation, State Professional Tax variances, and Factories Act overtime caps across multi-state employers.",
      stats: ["Zero Statutory Notice Rate", "1-Click ECR Filing", "28 States Analyzed"],
      format: "Technical Whitepaper • 32 Pages",
    },
    {
      badge: "AI INTELLIGENCE",
      title: "Embedded AI vs Bolted-On Chatbots: The ROI of Genkit Flows",
      desc: "Comparing the productivity output of embedded operational AI flows (ATS resume scoring, flight risk prediction, roster muster) against generic conversational chatbot add-ons in enterprise HCM environments.",
      stats: ["40 Production Genkit Flows", "68% Early Churn Signal", "4.2x Faster Requisition Fill"],
      format: "Architecture Briefing • 24 Pages",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Reports & Research", href: "/resources/reports" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              <span>RESEARCH & INDUSTRY BENCHMARKS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Workforce Research & Benchmark Reports.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Data-backed research and empirical benchmarks on labor cost containment, shift rostering efficiency, and AI adoption across corporate and industrial organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((report, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full inline-block">
                    {report.badge}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{report.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{report.desc}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {report.stats.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">{report.format}</span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    <span>Request Copy</span>
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
