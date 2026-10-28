import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import AnimatedSection from "@/components/AnimatedSection";
import faqsData from "../../../../content/faqs.json";

export const metadata: Metadata = {
  title: "SpotSign AI FAQ Knowledge Base | Platform, Tax & Questions",
  description:
    "Comprehensive answers regarding SpotSign AI's Workforce Operating System, Indian statutory compliance, biometric devices, and workflow automation.",
  alternates: {
    canonical: "https://spotsign.ai/resources/faq",
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "FAQ Knowledge Base", href: "/resources/faq" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Direct, Factual Answers to Your Platform Questions.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore concise answers covering security, statutory compliance, biometric hardware sync, and workflow automation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src="/images/frontline-workforce.jpg"
                  alt="SpotSign AI frequently asked questions and operational support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">Enterprise FAQs</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">Clear Answers on Deployment, Security & Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="py-12">
        <FAQAccordion items={faqsData.faqs} title="Comprehensive Platform Knowledge Base" />
      </div>
    </div>
  );
}
