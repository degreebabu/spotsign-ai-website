import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Building2, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Enterprise Sales | SpotSign AI",
  description:
    "Connect with SpotSign AI enterprise sales and solutions specialists. Discuss multi-entity licensing, industry configurations, and API integrations.",
  alternates: {
    canonical: "https://spotsign.ai/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE ENGAGEMENT</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Connect with Our Enterprise Solutions Team.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you are evaluating SpotSign AI, configuring biometric hardware, or exploring our 19 industry vertical packs—our team is ready.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/corporate-workforce.jpg"
                  alt="SpotSign AI enterprise customer success and solutions team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Enterprise Support</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Direct Access to Implementation Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingCard delay={0.08} className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-bold text-slate-900">Direct Inquiries</h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Enterprise Sales & Demo Requests:</strong>
                  <Link href="/demo" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                    <span>Schedule via Live Demo Calendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Corporate Headquarters:</strong>
                  <span>SpotSign AI • Enterprise Workforce Operating System</span>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Entity Verification:</strong>
                  <span>Registered enterprise SaaS provider for multi-entity workforce operations.</span>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.16} className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise SLA & Response Commitment</span>
              </div>
              <h3 className="text-xl font-bold text-white">4-Hour Enterprise Turnaround</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Qualified enterprise inquiries receive a dedicated response from an assigned solutions specialist within 4 business hours, including a customized needs assessment.
              </p>
              <div className="pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition"
                >
                  <span>Book a Platform Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>
    </div>
  );
}
