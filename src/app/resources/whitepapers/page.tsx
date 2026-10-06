import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Download, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Architecture Whitepapers | Workforce360",
  description:
    "Technical whitepapers on multi-tenant sovereign data isolation, 40 Genkit AI flows, and the Workforce Digital Twin mathematical simulation framework.",
  alternates: {
    canonical: "https://workforce360.dimension.com/resources/whitepapers",
  },
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      badge: "DATA ARCHITECTURE",
      title: "Multi-Tenant Sovereign Database Isolation & Enterprise RBAC",
      desc: "An architectural review of tenant-scoped query execution, cryptographic separation, immutable audit logs, and multi-entity consolidation in modern cloud operating systems.",
      pages: "28 Pages",
    },
    {
      badge: "SIMULATION ENGINE",
      title: "The Mathematical Foundations of the Workforce Digital Twin",
      desc: "How non-destructive graph simulation models organizational restructurings, severance reserves, and monthly P&L delta without altering production employee databases.",
      pages: "36 Pages",
    },
    {
      badge: "EMBEDDED AI",
      title: "Zero-Retention Operational AI: 40 Genkit Flows in Production",
      desc: "Technical implementation patterns for executing domain AI flows inside high-throughput attendance, ATS resume ranking, and payroll anomaly detection without training external LLMs on enterprise data.",
      pages: "24 Pages",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Whitepapers", href: "/resources/whitepapers" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>TECHNICAL WHITE PAPERS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Architecture Whitepapers.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In-depth technical papers written for Chief Technology Officers, enterprise architects, and Chief Information Security Officers evaluating Workforce360.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((wp, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full inline-block">
                    {wp.badge}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{wp.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{wp.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{wp.pages}</span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    <span>Download PDF</span>
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
