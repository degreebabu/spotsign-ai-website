import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Building2, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Enterprise Sales & Engineering | Workforce360",
  description:
    "Connect with Workforce360 solutions architects and enterprise sales. Discuss multi-entity licensing, custom industry vertical configurations, and API integrations.",
  alternates: {
    canonical: "https://workforce360.dimension.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>ENTERPRISE ENGAGEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Connect with Our Solutions Engineering Team.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are evaluating multi-tenant deployment, require custom hardware biometric syncing, or need an architectural consultation on our 19 industry vertical packs—we are here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Direct Inquiries</h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Enterprise Architecture & Demo Requests:</strong>
                  <Link href="/demo" className="text-blue-600 hover:underline font-medium">
                    Schedule via Live Demo Calendar →
                  </Link>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Corporate Headquarters:</strong>
                  <span>DIMENSHION Enterprise Systems • Powered by Spotsign</span>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Official Entity Verification:</strong>
                  <span>Registered multi-tenant SaaS provider for enterprise workforce operations.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise SLA & Response Commitment</span>
              </div>
              <h3 className="text-xl font-bold text-white">4-Hour Enterprise Turnaround</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Qualified enterprise inquiries receive a dedicated response from an assigned solutions architect within 4 business hours, including a customized gap-analysis evaluation.
              </p>
              <div className="pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition"
                >
                  <span>Book Architectural Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
