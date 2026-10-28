import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Sparkles, ShieldCheck, Users, Layers } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingCard from "@/components/FloatingCard";

export const metadata: Metadata = {
  title: "About SpotSign AI | Powered by Spotsign Workforce360",
  description:
    "Learn about SpotSign AI's mission to bridge corporate and frontline operational workforces through an enterprise workforce operating system.",
  alternates: {
    canonical: "https://spotsign.ai/about",
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
              <span>ABOUT SPOTSIGN AI</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Building the Operating System Where Organizations Actually Run.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              SpotSign AI, powered by Spotsign Workforce360, solves the deepest structural challenge in enterprise operations: the disconnect between corporate HR systems and frontline workforce realities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission Hero Visual */}
          <AnimatedSection direction="up">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <Image
                src="/images/corporate-workforce.jpg"
                alt="Corporate Knowledge Workforce Collaborating"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-8">
                <div className="space-y-1 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-600/90 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>The Multi-Tenant Architecture</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Bridging People, Work, and Money Under One Roof</h3>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Why an Operating System, Not Another HRMS?</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For decades, enterprise HR software has treated employees as static spreadsheet rows. Organizations bought one tool for HR records, another for biometric turnstiles, a third for Indian payroll, a fourth for shift scheduling, and dozens of isolated spreadsheets for factory piece-rate wages or executive scenario planning.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                SpotSign AI was engineered from the ground up as a unified <strong>Workforce Operating System (WOS)</strong>. We believe that who works (People), when they work (Work), how they are paid (Money), the tools they use (Operations & IT), and how executives model the future (Insights) must operate from a single, trusted platform.
              </p>
            </div>
          </AnimatedSection>

          {/* Pillars of Truth */}
          <AnimatedSection direction="up" delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatingCard delay={0.05} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-xl transition">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">Desk, Field & Floor Equality</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We believe blue-collar, variable-wage, and shift workers deserve the same engineering elegance and consumer-grade UX as corporate executives.
                </p>
              </FloatingCard>

              <FloatingCard delay={0.1} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-xl transition">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">Embedded, Not Bolt-on</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Purpose-built workflow automations operate natively inside transaction pipelines—catching payroll errors, flagging retention risks, and generating interview rubrics.
                </p>
              </FloatingCard>

              <FloatingCard delay={0.15} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-xl transition">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Zero Vanity Claims</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We reject fabricated customer counts and marketing fluff. Every feature on our public site is grounded in authentic, verified platform capability.
                </p>
              </FloatingCard>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
