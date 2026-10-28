import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, HelpCircle, FileText, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Workforce Resources & Knowledge Hub | SpotSign AI",
  description:
    "Guides, statutory compliance handbooks, workforce operating system documentation, and answer-engine FAQs from SpotSign AI.",
  alternates: {
    canonical: "https://spotsign.ai/resources",
  },
};

export default function ResourcesOverviewPage() {
  const sections = [
    {
      title: "Research & Benchmark Reports",
      desc: "Empirical workforce benchmarks on labor cost containment, shift rostering, and adoption across 20 industries.",
      href: "/resources/reports",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      cta: "Browse Research Reports",
    },
    {
      title: "On-Demand Webinars & Briefings",
      desc: "Recorded product briefings and practitioner sessions on Workforce Planning modeling, Indian payroll, and shift rostering.",
      href: "/resources/webinars",
      icon: <HelpCircle className="w-6 h-6 text-indigo-600" />,
      cta: "Watch Sessions",
    },
    {
      title: "Transformation Case Studies",
      desc: "Real-world operational transformations detailing how multi-entity enterprises replace fragmented point tools.",
      href: "/resources/case-studies",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      cta: "Read Case Studies",
    },
    {
      title: "Shift & Payroll Templates",
      desc: "Download field-tested 3-shift rotation matrices, dual-regime salary CTC models, and zero-trust IT asset checklists.",
      href: "/resources/templates",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      cta: "Download Templates",
    },
    {
      title: "Whitepapers",
      desc: "In-depth whitepapers covering data protection, workforce planning simulations, and workflow automation.",
      href: "/resources/whitepapers",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      cta: "Read Whitepapers",
    },
    {
      title: "Articles & Insights",
      desc: "Perspectives, operational teardowns, and practical analysis for modern workforce operations.",
      href: "/resources/articles",
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      cta: "Explore Articles",
    },
    {
      title: "Frequently Asked Questions (FAQ)",
      desc: "Direct, factual answers covering security, Indian statutory compliance, biometric sync, and workflow automation.",
      href: "/resources/faq",
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      cta: "Browse FAQ Knowledge Base",
    },
    {
      title: "Operational Framework Guides",
      desc: "Deep-dive operational guides comparing traditional HRMS against modern Workforce Operating Systems.",
      href: "/resources/guides",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      cta: "Read Operational Guides",
    },
    {
      title: "Enterprise Workforce Glossary",
      desc: "Definitions of core enterprise concepts: STCW rest hours, piece-rate gang cards, Form 12BB verification, and Workforce Planning.",
      href: "/resources/glossary",
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      cta: "Explore Workforce Glossary",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>ENTERPRISE KNOWLEDGE HUB</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Workforce Operations Knowledge, Guides & Compliance Handbooks.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore practical frameworks, statutory compliance workflows, and strategic workforce planning methodologies written by enterprise practitioners.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/resources/faq"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  View Enterprise FAQs
                </Link>
                <Link
                  href="/resources/glossary"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Explore WOS Glossary
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/retail-hospitality.jpg"
                  alt="SpotSign AI workforce operations resources and research hub"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Knowledge & Frameworks</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Statutory Guides, Handbooks & Case Studies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec, idx) => (
              <FloatingCard key={idx} delay={idx * 0.06} className="h-full">
                <Link
                  href={sec.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {sec.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {sec.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>{sec.cta}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
