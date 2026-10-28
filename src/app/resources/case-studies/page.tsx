import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Building2, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Workforce Transformation Case Studies | SpotSign AI",
  description:
    "Explore how multi-entity manufacturing, maritime, logistics, and technology organizations modernize operations with SpotSign AI.",
  alternates: {
    canonical: "https://spotsign.ai/resources/case-studies",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      industry: "Manufacturing & Industrial",
      headline: "Scaling 3-Shift Plant Operations Across 4,200 Floor Workers",
      challenge: "A heavy engineering enterprise struggled with 4 disparate biometric vendors, Excel shift schedules, and phantom overtime causing 2.8% payroll leakage.",
      solution: "Deployed SpotSign AI's unified Workforce Operating System with native eSSL biometric sync, rotational 3-shift roster templates, and automated overtime guardrails.",
      results: ["Zero Payroll Leakage", "99.4% Floor Muster Adherence", "Cutover in 6 Weeks"],
      link: "/industries/manufacturing",
    },
    {
      industry: "Shipping & Maritime Fleet",
      headline: "Automating STCW Rest Hours & Seafarer Crew Rotations",
      challenge: "Managing 34 vessels with international STCW watchkeeping compliance, offline vessel logs, and seafarer Continuous Discharge Certificate (CDC) validity tracking.",
      solution: "Implemented the SpotSign AI Shipping Pack with offline satellite sync, automated STCW rest-hour violation flags, and multi-currency maritime payroll.",
      results: ["100% STCW Port State Control Audit Pass", "Automated CDC Renewal Alerts", "Integrated Port Disbursement Accounting"],
      link: "/industries/shipping-maritime",
    },
    {
      industry: "High-Growth Technology & ITES",
      headline: "Consolidating 5 Disconnected SaaS Tools for 1,800 Engineers",
      challenge: "HR, ATS, LMS, asset tracking, and Indian statutory payroll ran on 5 separate disconnected vendors with recurring data synchronization errors.",
      solution: "Consolidated all 5 pillars onto SpotSign AI: ATS screening, performance OKRs, IT asset hardware locks on offboarding, and automated Section 192 TDS payroll.",
      results: ["62% Reduction in Software Subscriptions", "100% Laptop Recovery on Offboarding", "First-Pass Form 16 Automation"],
      link: "/industries/information-technology",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Case Studies", href: "/resources/case-studies" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>TRANSFORMATION STORIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Workforce Transformation Case Studies.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Real-world operational transformations detailing how multi-entity organizations replace fragmented point tools with an integrated Workforce Operating System.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full inline-block">
                    {cs.industry}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{cs.headline}</h2>
                  
                  <div className="space-y-2 text-xs text-slate-600">
                    <p><strong>The Challenge:</strong> {cs.challenge}</p>
                    <p><strong>The Approach:</strong> {cs.solution}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {cs.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={cs.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>Explore Industry Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
