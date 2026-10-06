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
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import FAQAccordion from "@/components/FAQAccordion";
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
      canonical: `https://workforce360.dimension.com/use-cases/${slug}`,
    },
    openGraph: {
      title: uc.metaTitle,
      description: uc.metaDescription,
      url: `https://workforce360.dimension.com/use-cases/${slug}`,
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
      q: `How does Workforce360 operationalize the ${uc.title} workflow?`,
      a: uc.solution,
    },
    {
      q: `What telemetry sources are leveraged in this use case?`,
      a: `Workforce360 aggregates real-time data across biometric terminals, mobile geofence punches, ATS candidate scoring, statutory payroll runs, and IT asset inventories without manual CSV imports.`,
    },
    {
      q: `Can this use case be deployed standalone or across multi-tenant entities?`,
      a: `Workforce360's multi-tenant architecture allows each legal entity to maintain sovereign data boundaries and distinct statutory compliance while rolling up consolidated telemetry to executive leadership.`,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Use Cases", href: "/use-cases" },
              { name: uc.title, href: `/use-cases/${slug}` },
            ]}
          />

          <div className="max-w-4xl space-y-4">
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

            <div className="flex flex-wrap items-center gap-4 pt-4">
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
        </div>
      </section>

      {/* Visual Product Showcase */}
      <section className="py-12 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {slug === "board-dashboard" || slug === "workforce-planning" ? (
            <DigitalTwinSimulator />
          ) : slug === "payroll-accuracy" ? (
            <ProductScreenshot type="payroll" />
          ) : slug === "attrition-retention" || slug === "dei-analytics" ? (
            <ProductScreenshot type="dashboard" />
          ) : (
            <ProductScreenshot type="dashboard" />
          )}
        </div>
      </section>

      {/* Problem vs Approach */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
                <span>The Workforce360 Solution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How Our Operating System Solves It
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {uc.solution}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                {uc.metrics.map((m: any, i: number) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-blue-100 text-center">
                    <div className="text-base font-extrabold text-blue-600">{m.val}</div>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Connected Modules */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
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
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={usecaseFaqs} title={`Frequently Asked Questions: ${uc.title}`} />

      {/* Final Conversion CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to deploy this capability across your organization?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule an executive briefing to evaluate how Workforce360 delivers {uc.title.toLowerCase()} tailored to your workforce footprint.
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
      </section>
    </div>
  );
}
