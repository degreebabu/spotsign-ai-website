import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Building2, Sparkles, ShieldCheck, ArrowRight, Layers, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Workforce360 | Powered by Spotsign • DIMENSHION",
  description:
    "Learn about Workforce360's mission to bridge corporate and frontline operational workforces through an AI-native Workforce Operating System.",
  alternates: {
    canonical: "https://workforce360.dimension.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>ABOUT WORKFORCE360</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Building the Operating System Where Organizations Actually Run.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Workforce360 is powered by Spotsign and created by DIMENSHION to solve the deepest structural challenge in enterprise operations: the disconnect between corporate HR systems and frontline workforce realities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Why an Operating System, Not Another HRMS?</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              For decades, enterprise HR software has treated employees as static spreadsheet rows. Organizations bought one tool for HR records, another for biometric turnstiles, a third for Indian payroll, a fourth for shift scheduling, and dozens of isolated spreadsheets for factory piece-rate wages or executive scenario planning.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Workforce360 was engineered from the ground up as a unified **Workforce Operating System (WOS)**. We believe that who works (People), when they work (Work), how they are paid (Money), the tools they use (Operations & IT), and how executives model the future (Intelligence) must operate from a single, sovereign data foundation.
            </p>
          </div>

          {/* Pillars of Truth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Desk, Field & Floor Equality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe blue-collar, variable-wage, and shift workers deserve the same engineering elegance and consumer-grade UX as corporate executives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h3 className="text-base font-bold text-slate-900">Embedded, Not Bolt-on AI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                40 purpose-built Genkit AI flows operate natively inside transaction pipelines—catching payroll errors, predicting flight risks, and synthesizing interview rubrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900">Zero Vanity Claims</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We reject fabricated customer counts and marketing fluff. Every feature on our public site is grounded in authentic, verified platform capability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
