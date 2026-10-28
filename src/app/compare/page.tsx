import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Scale, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import compData from "../../../content/comparison.json";

export const metadata: Metadata = {
  title: "SpotSign AI Capability Comparison | Enterprise Benchmark",
  description:
    "Compare SpotSign AI with enterprise HCM and mid-market HRMS across Indian statutory payroll, frontline operations, and workforce planning.",
  alternates: {
    canonical: "https://spotsign.ai/compare",
  },
};

export default function ComparePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Capability Comparison", href: "/compare" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Scale className="w-3.5 h-3.5 text-blue-600" />
                <span>CAPABILITY BENCHMARK</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {compData.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {compData.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule Comparison Review
                </Link>
                <Link
                  href="#matrix"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Explore Benchmark Grid
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/enterprise-procurement.jpg"
                  alt="Enterprise HCM capability evaluation and benchmark matrix"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Architectural Comparison</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">SpotSign AI vs Legacy ERP Platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Summary Cards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compData.summaryCards.map((card, idx) => (
              <FloatingCard
                key={idx}
                delay={idx * 0.1}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition space-y-3"
              >
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
              </FloatingCard>
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
              <h2 className="text-2xl font-bold text-slate-900">Functional Capability Comparison</h2>
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
                    <th className="py-4 px-4 w-1/4 bg-blue-900/80 text-cyan-300">SpotSign AI (WOS)</th>
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
                          <span>{row.spotsignAI}</span>
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
                
                {/* SpotSign AI Highlighted */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                    SpotSign AI Operating System
                  </span>
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-blue-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{row.spotsignAI}</span>
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
              Evaluate SpotSign AI Against Your Current Systems
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our enterprise solutions engineering team can prepare a custom gap-analysis matrix tailored to your company&apos;s current technology licenses and workforce footprint.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request Custom Capability Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
