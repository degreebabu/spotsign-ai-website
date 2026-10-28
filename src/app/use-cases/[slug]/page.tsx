import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Clock
} from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import FAQAccordion from "@/components/FAQAccordion";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import usecasesData from "../../../../content/usecases.json";
import navData from "../../../../content/navigation.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const usecases = (usecasesData as any).usecases;
  return Object.keys(usecases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uc = (usecasesData as any).usecases[slug];
  if (!uc) return {};

  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    alternates: {
      canonical: `https://spotsign.ai/use-cases/${slug}`,
    },
    openGraph: {
      type: "website",
      title: uc.metaTitle,
      description: uc.metaDescription,
      url: `https://spotsign.ai/use-cases/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "SpotSign AI Enterprise Workforce Operating System",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: uc.metaTitle,
      description: uc.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const uc = (usecasesData as any).usecases[slug];

  if (!uc) {
    notFound();
  }

  const usecaseFaqs = [
    {
      q: `How does SpotSign AI operationalize the ${uc.title} workflow?`,
      a: uc.solution,
    },
    {
      q: `What data sources are used in this use case?`,
      a: `SpotSign AI brings together data from biometric terminals, mobile geofence punches, ATS candidate scoring, statutory payroll runs, and IT asset inventories without manual CSV imports.`,
    },
    {
      q: `Can this use case support multiple legal entities?`,
      a: `Yes. Each legal entity can maintain its own data, statutory compliance, and reporting while leadership receives consolidated visibility across the organization.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": usecaseFaqs.map((faq) => ({
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

      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Use Cases", href: "/use-cases" },
              { name: uc.title, href: `/use-cases/${slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>{uc.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {uc.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {uc.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule Use Case Demonstration
                </Link>
                <Link
                  href="#capabilities"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src={
                    slug === "board-dashboard"
                      ? "/images/executive-analytics.jpg"
                      : slug === "workforce-planning"
                      ? "/images/tech-software.jpg"
                      : slug === "attrition-retention"
                      ? "/images/recruitment-interview.jpg"
                      : slug === "identity-audit"
                      ? "/images/security-compliance.jpg"
                      : slug === "m-and-a-integration"
                      ? "/images/fintech-banking.jpg"
                      : slug === "payroll-accuracy"
                      ? "/images/statutory-compliance.jpg"
                      : "/images/corporate-workforce.jpg"
                  }
                  alt={`${uc.title} enterprise workforce use case`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">{uc.title}</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">{uc.headline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Visual Product Showcase */}
      <AnimatedSection delay={0.1} className="py-12 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {slug === "board-dashboard" || slug === "workforce-planning" ? (
            <DigitalTwinSimulator />
          ) : slug === "payroll-accuracy" ? (
            <ProductScreenshot type="payroll" />
          ) : (
            <ProductScreenshot type="dashboard" />
          )}
        </div>
      </AnimatedSection>

      {/* Problem vs Approach */}
      <AnimatedSection className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-8 rounded-3xl bg-rose-50/60 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>The Traditional Problem</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why Legacy Systems & Spreadsheets Fail
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {uc.problem}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>The SpotSign AI Solution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How Our Operating System Solves It
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {uc.solution}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {uc.metrics.map((m: any, i: number) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-blue-100 text-center shadow-sm">
                    <div className="text-base font-extrabold text-blue-600">{m.val}</div>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Enterprise Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uc.capabilities.map((cap: any, idx: number) => (
              <FloatingCard
                key={idx}
                delay={idx * 0.08}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </FloatingCard>
            ))}
          </div>

          {/* Connected Modules */}
          <AnimatedSection delay={0.2} className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Connected Operating System Modules</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {uc.connectedModules.map((mSlug: string) => (
                <Link
                  key={mSlug}
                  href={mSlug === "security" ? "/security" : `/platform/${mSlug}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-800 text-xs font-semibold border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span className="capitalize">{mSlug.replace("-", " ")}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={usecaseFaqs} title={`Frequently Asked Questions: ${uc.title}`} />

      {/* Final Conversion CTA */}
      <AnimatedSection className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to deploy this capability across your organization?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule an executive briefing to evaluate how SpotSign AI delivers {uc.title.toLowerCase()} tailored to your workforce footprint.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
