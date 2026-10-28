import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, ShieldCheck, CheckCircle2, Users, Building2, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import DemoForm from "@/components/DemoForm";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Request a Tailored Enterprise Demonstration | SpotSign AI",
  description:
    "Schedule a live demonstration of SpotSign AI, the Enterprise Workforce Operating System, with an enterprise solutions specialist.",
  alternates: {
    canonical: "https://spotsign.ai/demo",
  },
};

export default function DemoPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Request a Demo", href: "/demo" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>LIVE ENTERPRISE DEMONSTRATION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                See SpotSign AI Configured for Your Specific Workforce.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Experience how SpotSign AI unifies Core HR, 24/7 rotational shifts, biometric turnstiles, Indian statutory payroll, General Ledger accounting, and Workforce Planning.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/recruitment-interview.jpg"
                  alt="SpotSign AI tailored enterprise solutions walk-through"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Personalized Demo</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Tailored Walkthrough with Workforce Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <DemoForm />
            </div>

            {/* What to Expect Column */}
            <div className="lg:col-span-5 space-y-6">
              <FloatingCard delay={0.1} className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">What Happens on the Call?</h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Workforce Model Review:</strong>
                      Analyze your ratio of corporate desk employees versus shift and plant workers.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Tailored Industry Pack Demo:</strong>
                      Walkthrough pre-configured rules matching your vertical (rotas, muster rolls, piece-rates).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Workforce Planning Sandbox:</strong>
                      Simulate scenario levers live: compensation restructuring, expansion, and variance alerts.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      4
                    </div>
                    <div>
                      <strong className="text-slate-900 block">Implementation & Migration Plan:</strong>
                      Review a 4-to-8 week migration roadmap with parallel payroll runs and zero downtime.
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Trust Box */}
              <FloatingCard delay={0.2} className="p-6 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Confidentiality & SOC2</span>
                </div>
                <p className="text-slate-400">
                  Your data and discussions are protected under strict enterprise NDA. Zero third-party sales spam.
                </p>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
