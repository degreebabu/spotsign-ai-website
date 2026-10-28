import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Video, Play, ArrowRight, Clock, Users, Calendar } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "On-Demand Enterprise Webinars & Briefings | SpotSign AI",
  description:
    "Watch recorded product briefings and practitioner discussions on Workforce Planning modeling, Indian statutory payroll automation, and shift rostering.",
  alternates: {
    canonical: "https://spotsign.ai/resources/webinars",
  },
};

export default function WebinarsPage() {
  const webinars = [
    {
      badge: "EXECUTIVE BRIEFING",
      title: "Modeling Organizational Restructuring with Workforce Planning",
      desc: "Learn how enterprise CHROs and CFOs use non-destructive scenario simulations to model headcount additions, severance reserves, and monthly P&L delta before board approval.",
      duration: "42 Mins",
      speaker: "Enterprise Solutions Team",
    },
    {
      badge: "PAYROLL & COMPLIANCE",
      title: "Mastering Indian Statutory Payroll: TDS, EPFO ECR & Form 16 Automation",
      desc: "A practical walkthrough of dual-regime Section 192 tax optimization, Form 12BB proof verification, and automated General Ledger posting into SAP and NetSuite.",
      duration: "55 Mins",
      speaker: "Statutory Compliance Practice Lead",
    },
    {
      badge: "FRONTLINE OPERATIONS",
      title: "Eliminating Shift Friction: Biometrics, Geofences, and Muster Guardrails",
      desc: "How plant managers and operations directors streamline 3-shift 24/7 rotating rosters, eSSL/ZKTeco terminal sync, and Factories Act overtime cap enforcement.",
      duration: "38 Mins",
      speaker: "Frontline WFM Engineering Lead",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Webinars & Briefings", href: "/resources/webinars" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Video className="w-3.5 h-3.5 text-blue-600" />
              <span>ON-DEMAND SESSIONS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Enterprise Webinars & Practical Briefings.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Watch recorded product demonstrations, compliance deep dives, and workforce management masterclasses delivered by enterprise solutions specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">
                      {webinar.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {webinar.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{webinar.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{webinar.desc}</p>
                  <div className="text-xs font-semibold text-slate-500 pt-1">
                    Presenter: {webinar.speaker}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">On-Demand Stream</span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    <span>Watch Session</span>
                    <Play className="w-3 h-3 fill-current" />
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
