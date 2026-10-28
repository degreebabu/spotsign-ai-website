import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Layers, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import navData from "../../../content/navigation.json";
import productsData from "../../../content/products.json";

import AnimatedSection from "@/components/AnimatedSection";
import FloatingCard from "@/components/FloatingCard";

export const metadata: Metadata = {
  title: "SpotSign AI Platform | Unified Workforce Operating System",
  description:
    "Explore SpotSign AI's five unified pillars: People, Work, Money, Operations & IT, and Insights, with 19 pre-configured industry vertical packs.",
  alternates: {
    canonical: "https://spotsign.ai/platform",
  },
};

export default function PlatformOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection direction="down" duration={0.5}>
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Platform", href: "/platform" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>THE FIVE PILLARS OF SPOTSIGN AI</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                One Unified Workforce Platform. Zero Disconnected Systems.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                SpotSign AI replaces the chaotic stack of separate HR, attendance, payroll, ATS, learning, and IT asset software with an interconnected Workforce Operating System (WOS) built for corporate and frontline operations.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule a Platform Tour
                </Link>
                <Link
                  href="/compare"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Compare with Legacy ERPs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/tech-software.jpg"
                  alt="SpotSign AI unified workforce operating system architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Workforce OS Architecture</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">People, Work, Money, IT & Insights Unified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Main Platform Overview & Pillar Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {navData.pillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.id} direction="up" delay={idx * 0.05}>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-sm">
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
                {pillar.items.map((item, itemIdx) => (
                  <FloatingCard key={item.href} delay={itemIdx * 0.04} className="h-full">
                    <Link
                      href={item.href}
                      className="h-full rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 hover:bg-white hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between group"
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
                  </FloatingCard>
                ))}
              </div>
            </div>
            </AnimatedSection>
          ))}

          {/* Bottom Conversion Section */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Experience the Full Operating System in Action
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Schedule a tailored consultation with our enterprise solutions team to explore workflow automation and 19 pre-configured industry packs.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request a Tailored Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
