import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  DollarSign, 
  Cpu, 
  BrainCircuit, 
  CheckCircle2,
  Building2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import navData from "../../../content/navigation.json";
import productsData from "../../../content/products.json";

export const metadata: Metadata = {
  title: "Workforce360 Platform Architecture | Unified Operating System",
  description:
    "Explore Workforce360's five unified pillars: People, Work, Money, Operations & IT, and Intelligence. Built on enterprise multi-tenancy across 19 vertical industry packs.",
  alternates: {
    canonical: "https://workforce360.dimension.com/platform",
  },
};

export default function PlatformOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Platform", href: "/platform" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>THE FIVE PILLARS OF WORKFORCE360</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              One Unified Workforce Architecture. Zero Disconnected Systems.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Workforce360 replaces the chaotic stack of separate HR, attendance, payroll, ATS, learning, and IT asset software with an interconnected Workforce Operating System (WOS) powered by AI and designed for corporate and frontline workforces alike.
            </p>
          </div>
        </div>
      </section>

      {/* Main Architecture Diagram & Pillar Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {navData.pillars.map((pillar, idx) => (
            <div key={pillar.id} className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pillar {idx + 1}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{pillar.name}</h2>
                  </div>
                </div>
                <p className="text-sm text-slate-500 max-w-md">
                  {pillar.description}
                </p>
              </div>

              {/* Modules in Pillar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 hover:bg-white hover:border-blue-500 hover:shadow-lg transition flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-600">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Conversion Section */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Experience the Full Operating System in Action
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Schedule a technical consultation with our enterprise architects to explore our multi-tenant data model, 40 Genkit AI flows, and 19 pre-configured industry vertical packs.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request Architectural Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
