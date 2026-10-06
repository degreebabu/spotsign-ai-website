import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, HelpCircle, FileText, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Workforce Resources & Knowledge Hub | Workforce360",
  description:
    "Guides, statutory compliance handbooks, workforce operating system documentation, and answer-engine FAQs from Workforce360.",
  alternates: {
    canonical: "https://workforce360.dimension.com/resources",
  },
};

export default function ResourcesOverviewPage() {
  const sections = [
    {
      title: "Frequently Asked Questions (FAQ)",
      desc: "Direct, factual answers covering platform architecture, Indian statutory compliance, biometric sync, and 40 Genkit AI flows.",
      href: "/resources/faq",
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      cta: "Browse FAQ Knowledge Base",
    },
    {
      title: "Workforce Operating System Guides",
      desc: "Deep-dive operational guides comparing traditional HRMS against modern Workforce Operating Systems and dual-workforce architectures.",
      href: "/resources/guides",
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      cta: "Read Operational Guides",
    },
    {
      title: "Enterprise Workforce Glossary",
      desc: "Definitions of core enterprise concepts: STCW rest hours, piece-rate gang cards, Form 12BB verification, Bell Curve calibration, and Digital Twin modeling.",
      href: "/resources/glossary",
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      cta: "Explore Workforce Glossary",
    },
    {
      title: "LLM & AI Discoverability Manifest",
      desc: "Canonical machine-readable specifications and structured entity definitions for AI search engines, Perplexity, and ClaudeBot.",
      href: "/llm-info",
      icon: <Sparkles className="w-6 h-6 text-cyan-600" />,
      cta: "Inspect /llms.txt Directory",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>ENTERPRISE KNOWLEDGE HUB</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Workforce Operations Knowledge, Guides & Compliance Handbooks.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore architectural frameworks, statutory compliance workflows, and strategic workforce simulation methodologies written by enterprise practitioners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((sec, idx) => (
              <Link
                key={idx}
                href={sec.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {sec.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {sec.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>{sec.cta}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
