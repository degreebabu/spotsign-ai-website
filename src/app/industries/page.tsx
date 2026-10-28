import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Building2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustrySelector from "@/components/IndustrySelector";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "19 Specialized Industry Vertical Packs | SpotSign AI Enterprise",
  description:
    "Explore SpotSign AI's 19 pre-configured industry packs: Maritime STCW rest hours, Seafood piece-rate gangs, Manufacturing 3-shift rotas, Healthcare, and Retail.",
  alternates: {
    canonical: "https://spotsign.ai/industries",
  },
};

export default function IndustriesOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection direction="down" duration={0.5}>
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>19 SPECIALIZED INDUSTRY PACKS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Pre-Configured Workforce Operations for Your Exact Sector.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Every industry runs on distinct workforce dynamics—from maritime crew rest-hour compliance and factory 3-shift rotas to clinical hospital rotations and logistics dispatchers. SpotSign AI delivers tailored shifts, roles, and statutory compliance out of the box.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule an Industry Demo
                </Link>
                <Link
                  href="#catalog"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Browse All 19 Packs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/logistics-shipping.jpg"
                  alt="SpotSign AI 19 industry vertical packs and operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Sector-Specialized Packs</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Custom Shift Rules & Statutory Frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Interactive 19-Industry Grid */}
      <AnimatedSection direction="up" delay={0.1}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <IndustrySelector />

          {/* Bottom Trust Banner */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Industry Configuration?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our enterprise solutions team configures custom department hierarchies, statutory overtime rules, and biometric devices for multinational and industrial operators.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition transform hover:scale-105"
              >
                <span>Speak with an Industry Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
