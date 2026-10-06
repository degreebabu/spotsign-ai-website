import React from "react";
import type { Metadata } from "next";
import { Sparkles, ShieldCheck, CheckCircle2, Users, Building2, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Tailored Enterprise Demonstration | Workforce360",
  description:
    "Schedule a live demonstration of the Workforce360 AI-Native Workforce Operating System with an enterprise solutions architect.",
  alternates: {
    canonical: "https://workforce360.dimension.com/demo",
  },
};

export default function DemoPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Request a Demo", href: "/demo" }]} />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>LIVE ENTERPRISE DEMONSTRATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              See Workforce360 Configured for Your Specific Workforce.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Experience how Workforce360 unifies Core HR, 24/7 rotational shifts, biometric turnstiles, Indian statutory payroll, General Ledger accounting, and the Workforce Digital Twin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <DemoForm />
            </div>

            {/* What to Expect Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">What Happens on the Call?</h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Workforce Model Review:</strong>
                      We review your current ratio of salaried corporate employees versus shift workers, field agents, or industrial contractors.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Tailored Industry Pack Demo:</strong>
                      We demonstrate the exact pre-configured pack matching your sector (e.g., Maritime STCW, Manufacturing 3-shift rotas, Seafood piece-rate).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Digital Twin & AI Sandbox:</strong>
                      Test scenario levers in real time and review the 40 Genkit AI flows active across payroll variance and attrition detection.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      4
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Implementation & Migration Plan:</strong>
                      Receive a clear migration roadmap for historical employee records, biometric hardware terminals, and General Ledger chart of accounts.
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Multi-Tenant Security Guaranteed</span>
                </div>
                <p className="text-slate-400">
                  Your data and discussions are protected under strict enterprise confidentiality. Zero third-party sales spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
