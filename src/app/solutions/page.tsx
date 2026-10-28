import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Users, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import navData from "../../../content/navigation.json";

export const metadata: Metadata = {
  title: "Workforce Solutions by Role | CHRO, Payroll, Finance & Ops | SpotSign AI",
  description:
    "Tailored workforce solutions for CHROs, HR Leaders, Payroll Managers, CFOs, Operations Heads, IT Directors, Recruiters, and Employees.",
  alternates: {
    canonical: "https://spotsign.ai/solutions",
  },
};

export default function SolutionsOverviewPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Solutions", href: "/solutions" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>SOLUTIONS BY ROLE & FUNCTION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Engineered for Everyone Who Runs the Workforce.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you are an executive modeling multi-year headcount scenarios, a payroll manager closing statutory returns, a plant supervisor balancing 3-shift lines, or a recruiter scaling high-volume tech hiring—SpotSign AI is tailored to your exact responsibilities.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule an Executive Demo
                </Link>
                <Link
                  href="#roles"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Explore All 8 Personas
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/executive-analytics.jpg"
                  alt="SpotSign AI executive and operational workforce leadership solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Role-Specific Workspaces</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Tailored for CHRO, CFO, COO, CISO & Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid of 8 Personas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navData.solutions.map((sol, idx) => (
              <FloatingCard key={sol.slug} delay={idx * 0.05} className="h-full">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between h-full"
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
              </FloatingCard>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <AnimatedSection delay={0.2} className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              See How Your Team Operates on SpotSign AI
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
