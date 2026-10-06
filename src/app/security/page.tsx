import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Lock, Key, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import secData from "../../../content/security.json";

export const metadata: Metadata = {
  title: "Enterprise Trust & Multi-Tenant Architecture | Workforce360",
  description:
    "Explore Workforce360's security architecture: tenant-scoped logical database isolation, 19 granular RBAC tiers, Firebase enterprise SSO, and immutable audit logging.",
  alternates: {
    canonical: "https://workforce360.dimension.com/security",
  },
};

export default function SecurityPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Security & Trust", href: "/security" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>ENTERPRISE MULTI-TENANT ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {secData.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {secData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Statement */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            <strong>Security Governance Commitment:</strong> {secData.governanceStatement}
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">TECHNICAL CONTROLS</span>
            <h2 className="text-2xl font-bold text-slate-900">Architectural Security Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secData.principles.map((p, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* RBAC Tiers Section */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">ACCESS GOVERNANCE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                19 Granular Role-Based Access Control (RBAC) Tiers
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                Enforcing strict separation of duties across HR operations, financial controls, plant floor supervision, and self-service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {secData.rbacTiers.map((tier, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                  <span className="font-bold text-slate-900">{tier.role}</span>
                  <p className="text-slate-600 leading-tight">{tier.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
