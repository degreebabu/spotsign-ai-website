import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Key, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import secData from "../../../content/security.json";

export const metadata: Metadata = {
  title: "Enterprise Security & Trust | SpotSign AI",
  description:
    "Learn how SpotSign AI protects workforce data with secure access controls, enterprise SSO, encryption, and detailed audit logging.",
  alternates: {
    canonical: "https://spotsign.ai/security",
  },
};

export default function SecurityPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Security & Trust", href: "/security" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ENTERPRISE SECURITY & GOVERNANCE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {secData.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {secData.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/compliance"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition flex items-center gap-2"
                >
                  <span>Review Compliance Standards</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Request Security Whitepaper
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/security-compliance.jpg"
                  alt="Enterprise cybersecurity operations center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[11px]">SOC2 Type II & ISO 27001</span>
                    <p className="text-slate-200 text-[11px]">End-to-end AES-256 and TLS 1.3 encryption across all employee records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Governance Statement */}
      <AnimatedSection delay={0.1} className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl space-y-2">
            <span className="text-emerald-700 font-bold uppercase tracking-wider text-[11px] block">Security Commitment</span>
            <p className="font-medium text-slate-900">{secData.governanceStatement}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Principles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">SECURITY CONTROLS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How We Protect Your Workforce Data</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secData.principles.map((p, idx) => (
              <FloatingCard
                key={idx}
                delay={idx * 0.08}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
