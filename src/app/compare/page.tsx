import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Scale, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import compData from "../../../content/comparison.json";

export const metadata: Metadata = {
  title: "Workforce360 Capability Comparison | Enterprise Architectural Benchmark",
  description:
    "An objective architectural comparison of Workforce360 against enterprise HCM and mid-market HRMS across AI, Indian statutory payroll, piece-rate, and Digital Twin.",
  alternates: {
    canonical: "https://workforce360.dimension.com/compare",
  },
};

export default function ComparePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Capability Comparison", href: "/compare" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>ARCHITECTURAL BENCHMARK</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {compData.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {compData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compData.summaryCards.map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-3">
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Comparison Matrix Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">CAPABILITY MATRIX</span>
              <h2 className="text-2xl font-bold text-slate-900">Functional & Architectural Comparison</h2>
            </div>
            <span className="text-xs text-slate-500 max-w-sm">
              {compData.disclaimer}
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-900 text-white font-semibold">
                  <tr>
                    <th className="py-4 px-4 w-1/5">Capability Dimension</th>
                    <th className="py-4 px-4 w-1/4 bg-blue-900/80 text-cyan-300">Workforce360 (WOS)</th>
                    <th className="py-4 px-4 w-1/6">Enterprise HCM (Workday)</th>
                    <th className="py-4 px-4 w-1/6">Mid-Market HRMS (Keka)</th>
                    <th className="py-4 px-4 w-1/6">WFM Specialist (UKG)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {compData.dimensions.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="py-4 px-4 font-bold text-slate-900 bg-slate-50/50">
                        {row.dimension}
                      </td>
                      <td className="py-4 px-4 font-semibold text-blue-950 bg-blue-50/40 border-l border-r border-blue-100">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{row.workforce360}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {row.workday}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {row.keka}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {row.ukg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="md:hidden space-y-4">
            {compData.dimensions.map((row, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {row.dimension}
                </h3>
                
                {/* Workforce360 Highlighted */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                    Workforce360 Operating System
                  </span>
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-blue-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{row.workforce360}</span>
                  </div>
                </div>

                {/* Other Platforms */}
                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex justify-between border-b border-slate-50 pb-1">
                    <span className="font-medium text-slate-500">Workday:</span>
                    <span className="text-right text-slate-700 max-w-[65%]">{row.workday}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-1">
                    <span className="font-medium text-slate-500">Keka:</span>
                    <span className="text-right text-slate-700 max-w-[65%]">{row.keka}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-500">UKG:</span>
                    <span className="text-right text-slate-700 max-w-[65%]">{row.ukg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Evaluate Workforce360 Against Your Current Systems
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our enterprise solutions engineering team can prepare a custom gap-analysis matrix tailored to your company&apos;s current technology licenses and workforce footprint.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request Custom Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
