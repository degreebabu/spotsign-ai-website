import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Users, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import navData from "../../../content/navigation.json";

export const metadata: Metadata = {
  title: "Workforce Solutions by Role | CHRO, Payroll, Finance & Ops | Workforce360",
  description:
    "Tailored workforce solutions for CHROs, HR Leaders, Payroll Managers, CFOs, Operations Heads, IT Directors, Recruiters, and Employees.",
  alternates: {
    canonical: "https://workforce360.dimension.com/solutions",
  },
};

export default function SolutionsOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Solutions", href: "/solutions" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-indigo-600" />
              <span>SOLUTIONS BY ROLE & FUNCTION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Engineered for Everyone Who Runs the Workforce.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are an executive modeling multi-year headcount scenarios, a payroll manager closing statutory returns, a plant supervisor balancing 3-shift lines, or an employee viewing payslips on mobile—Workforce360 is tailored to your exact responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of 8 Personas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navData.solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs uppercase group-hover:bg-indigo-600 group-hover:text-white transition">
                    {sol.slug.substring(0, 2).toUpperCase()}
                  </div>
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                    For {sol.role}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sol.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Explore Role Solution</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              See How Your Team Operates on Workforce360
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Schedule a demonstration customized to your team&apos;s specific operational requirements, business metrics, and workflow bottlenecks.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                <span>Request a Role-Based Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
