import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Newspaper, ArrowRight, Clock, User } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Workforce Operations Articles & Industry Insights | SpotSign AI",
  description:
    "Insights on workforce operating system design, shift management, Indian statutory payroll, piece-rate operations, and workforce analytics.",
  alternates: {
    canonical: "https://spotsign.ai/resources/articles",
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      category: "OPERATIONS",
      title: "Why Traditional HRMS Platforms Fail Operational Workforces",
      desc: "An exploration of why recording employee profiles is fundamentally different from orchestrating rotating shifts, biometric timeclocks, and piece-rate tallies on the plant floor.",
      readTime: "6 Min Read",
      author: "Platform Team",
    },
    {
      category: "COMPLIANCE",
      title: "Understanding Section 192 TDS Dual Regimes for FY 2026–27",
      desc: "A practical guide to automating employee tax declarations, Form 12BB proof verification, and optimizing net disbursement under Section 115BAC.",
      readTime: "8 Min Read",
      author: "Payroll Compliance Desk",
    },
    {
      category: "PLANNING & SIMULATION",
      title: "How Chief People Officers Use Workforce Planning for Restructuring",
      desc: "A walkthrough of modeling organizational consolidation, severance reserves, and flight risks non-destructively before presenting to the board.",
      readTime: "5 Min Read",
      author: "Workforce Analytics Lab",
    },
    {
      category: "FRONTLINE WFM",
      title: "Overcoming Floor Muster Shrinkage in 24/7 Manufacturing Plants",
      desc: "How automated shift relays and biometric hardware synchronization eliminate phantom punches and enforce strict Factories Act compliance.",
      readTime: "7 Min Read",
      author: "Operations Engineering Desk",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Articles & Insights", href: "/resources/articles" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Newspaper className="w-3.5 h-3.5 text-blue-600" />
              <span>PRACTITIONER INSIGHTS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Workforce Operations Articles & Insights.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Perspectives, operational teardowns, and practical analysis from the team building the Enterprise Workforce Operating System.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-blue-500 hover:shadow-lg transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{art.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{art.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">By {art.author}</span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>Read Article</span>
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
