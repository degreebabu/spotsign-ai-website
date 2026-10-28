import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Layers 
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import usecasesData from "../../../content/usecases.json";

export const metadata: Metadata = {
  title: "Enterprise Workforce Use Cases | SpotSign AI",
  description:
    "Explore how SpotSign AI solves enterprise challenges across workforce planning, attrition, DEI, identity audits, M&A integration, and payroll accuracy.",
  alternates: {
    canonical: "https://spotsign.ai/use-cases",
  },
};

export default function UseCasesHubPage() {
  const usecases = Object.values((usecasesData as any).usecases);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Use Cases", href: "/use-cases" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE WORKFORCE SCENARIOS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Built for the Strategic and Operational Challenges You Face Daily.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore how SpotSign AI connects People, Work, Money, IT Operations, and Workforce Analytics to deliver measurable business outcomes across your organization.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Request a Use Case Demo
                </Link>
                <Link
                  href="#catalog"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  View All Scenarios
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/corporate-workforce.jpg"
                  alt="SpotSign AI enterprise workforce implementation scenarios"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Enterprise Transformations</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Multi-Entity M&A, Retention & Payroll Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usecases.map((uc: any, idx: number) => (
              <FloatingCard key={uc.slug} delay={idx * 0.08} className="h-full">
                <Link
                  href={`/use-cases/${uc.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                        {uc.badge}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {uc.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {uc.subtitle}
                    </p>

                    {/* Metrics preview */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {uc.metrics.map((m: any, i: number) => (
                        <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                          <div className="text-sm font-extrabold text-slate-900">{m.val}</div>
                          <div className="text-[9px] text-slate-500 font-medium truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Explore Use Case Details</span>
                    <span>→</span>
                  </div>
                </Link>
              </FloatingCard>
            ))}
          </div>

          {/* Bottom Conversion Section */}
          <AnimatedSection delay={0.2} className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Specific Workforce Challenge Not Listed Here?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our enterprise solutions engineering team can map your organization&apos;s custom workflow, shift rules, and compliance requirements directly to SpotSign AI.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request Custom Use Case Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
