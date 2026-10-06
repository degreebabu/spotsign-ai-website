import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Building2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustrySelector from "@/components/IndustrySelector";

export const metadata: Metadata = {
  title: "19 Specialized Industry Vertical Packs | Workforce360 Enterprise",
  description:
    "Explore Workforce360's 19 pre-configured industry packs: Maritime STCW rest hours, Seafood piece-rate gangs, Manufacturing 3-shift rotas, Healthcare, and Retail.",
  alternates: {
    canonical: "https://workforce360.dimension.com/industries",
  },
};

export default function IndustriesOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Industries", href: "/industries" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>19 SPECIALIZED INDUSTRY PACKS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Pre-Configured Workforce Operations for Your Exact Sector.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every industry runs on distinct workforce dynamics—from maritime crew rest-hour compliance and seafood piece-rate weighing to 3-shift factory lines and clinical on-call doctor rotations. Workforce360 delivers specialized departments, roles, shift rules, and statutory compliance out of the box.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 19-Industry Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <IndustrySelector />

          {/* Bottom Trust Banner */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Industry Configuration?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Our enterprise solution architects configure custom department hierarchies, statutory overtime rule engines, and biometric turnstiles for multinational and industrial operators.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Speak with an Industry Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
