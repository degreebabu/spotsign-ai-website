import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Workforce Architecture & Operational Guides | Workforce360",
  description:
    "In-depth architectural guides on workforce operating systems, dual-workforce payroll, and industrial shift rostering.",
  alternates: {
    canonical: "https://workforce360.dimension.com/resources/guides",
  },
};

export default function GuidesPage() {
  const guides = [
    {
      title: "The Architecture of a Workforce Operating System (WOS)",
      desc: "Why modern enterprises are transitioning from disconnected HRMS records to integrated systems uniting People, Work, Money, IT Ops, and AI.",
      readTime: "8 min read",
      category: "Architecture",
      slug: "wos-architecture",
    },
    {
      title: "The Dual-Workforce Playbook: Unifying Desk and Frontline Floor",
      desc: "How multi-branch enterprises manage salaried corporate staff alongside 3-shift industrial workers, piece-rate wages, and muster rolls.",
      readTime: "11 min read",
      category: "Operations",
      slug: "dual-workforce-playbook",
    },
    {
      title: "Strategic Workforce Simulation with the Digital Twin",
      desc: "A framework for CHROs and CFOs to model organizational restructuring, calculate severance liabilities, and identify skill deficits.",
      readTime: "9 min read",
      category: "Strategy",
      slug: "digital-twin-guide",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Guides", href: "/resources/guides" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>OPERATIONAL WHITEPAPERS & GUIDES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Workforce Architecture & Strategy Guides.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore in-depth architectural guides on workforce operating systems, dual-workforce payroll, and industrial shift rostering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6">
            {guides.map((g, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-blue-600 uppercase tracking-wider">{g.category}</span>
                  <span>{g.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{g.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{g.desc}</p>
                <div className="pt-2">
                  <Link href="/demo" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <span>Discuss this topic with an enterprise architect</span>
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
