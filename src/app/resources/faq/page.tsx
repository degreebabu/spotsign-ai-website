import React from "react";
import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import faqsData from "../../../../content/faqs.json";

export const metadata: Metadata = {
  title: "Workforce360 FAQ Knowledge Base | Platform, Tax & AI Questions",
  description:
    "Comprehensive answers regarding Workforce360's Workforce Operating System, Indian statutory compliance, biometric devices, and 40 Genkit AI flows.",
  alternates: {
    canonical: "https://workforce360.dimension.com/resources/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "FAQ Knowledge Base", href: "/resources/faq" },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Direct, Factual Answers to Your Platform Questions.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore concise answers covering platform architecture, statutory compliance, biometric hardware sync, and embedded Genkit AI flows.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12">
        <FAQAccordion items={faqsData.faqs} title="Comprehensive Platform Knowledge Base" />
      </div>
    </div>
  );
}
