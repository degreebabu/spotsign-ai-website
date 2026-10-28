import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Download, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Enterprise Whitepapers & Guides | SpotSign AI",
  description:
    "Whitepapers on data protection, workflow automation, and workforce planning for enterprise technology and operations leaders.",
  alternates: {
    canonical: "https://spotsign.ai/resources/whitepapers",
  },
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      badge: "DATA GOVERNANCE",
      title: "Data Protection, Access Controls & Enterprise Governance",
      desc: "A practical guide to secure data handling, role-based access, audit logs, and multi-entity reporting in modern workforce systems.",
      pages: "28 Pages",
    },
    {
      badge: "WORKFORCE PLANNING",
      title: "The Practical Foundations of Workforce Planning",
      desc: "How scenario modeling helps teams evaluate organizational restructuring, severance reserves, and monthly P&L impact before making changes.",
      pages: "36 Pages",
    },
    {
      badge: "WORKFLOW AUTOMATION",
      title: "Workflow Automation with Zero Data Retention",
      desc: "How attendance, recruitment, and payroll workflows can run efficiently while keeping enterprise data within your environment.",
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
              <span>WHITEPAPERS & GUIDES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Whitepapers & Practical Guides.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In-depth papers written for technology, security, and operations leaders evaluating SpotSign AI.
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
