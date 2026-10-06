import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Users, 
  HelpCircle,
  AlertCircle,
  Cpu
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import FAQAccordion from "@/components/FAQAccordion";
import productsData from "../../../../content/products.json";
import navData from "../../../../content/navigation.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all defined products
export async function generateStaticParams() {
  const products = (productsData as any).products;
  return Object.keys(products).map((slug) => ({ slug }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = (productsData as any).products[slug];
  if (!product) return {};

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://workforce360.dimension.com/platform/${slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://workforce360.dimension.com/platform/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = (productsData as any).products[slug];

  if (!product) {
    notFound();
  }

  // Structured Data (SoftwareApplication)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Workforce360 ${product.title}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web, PWA",
    description: product.metaDescription,
    featureList: product.capabilities.map((c: any) => c.title),
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Platform", href: "/platform" },
              { name: product.title, href: `/platform/${slug}` },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{product.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {product.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/demo"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
              >
                Request a Demonstration
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

      {/* Live Visual / UI Screenshot Showcase */}
      <section className="py-12 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {slug === "digital-twin" ? (
            <DigitalTwinSimulator />
          ) : slug === "payroll" || slug === "tax-compliance" || slug === "finance" || slug === "expenses" ? (
            <ProductScreenshot type="payroll" />
          ) : slug === "recruitment" ? (
            <ProductScreenshot type="ats" />
          ) : slug === "attendance" || slug === "workforce-management" || slug === "field-workforce" ? (
            <ProductScreenshot type="attendance" />
          ) : slug === "ai" ? (
            <AIWorkflowSection />
          ) : (
            <ProductScreenshot type="dashboard" />
          )}
        </div>
      </section>

      {/* Problem & Architectural Solution */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="p-8 rounded-3xl bg-rose-50/60 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>The Operational Challenge</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why Traditional Systems Struggle
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.whatItSolves}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>The Workforce360 Approach</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How Our Operating System Solves It
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.howItWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Operating Workflow Diagram */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              OPERATIONAL LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Data Transitions Through {product.title}
            </h2>
            <p className="text-sm text-slate-600">
              From event trigger to automated policy enforcement, AI verification, and financial ledger reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900">Capture & Trigger</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Telemetry arrives via mobile punch, biometric terminal, recruiter ATS, or employee self-service portal.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900">Embedded AI Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Genkit AI flows check shift guardrails, parse documents, flag payroll anomalies, or score candidate qualifications.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900">Multi-Tier RBAC Approval</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized supervisors approve deviations with complete cryptographic audit logging and role separation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h3 className="text-sm font-bold text-slate-900">State & Ledger Sync</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant sync across payroll, leave balances, IT permissions, and General Ledger double-entry journals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section id="capabilities" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Enterprise Depth and Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.capabilities.map((cap: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* AI Intelligence Inside This Workflow */}
          {product.aiCapabilities && product.aiCapabilities.length > 0 && (
            <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-indigo-950 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">AI Intelligence Embedded in This Workflow</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.aiCapabilities.map((ai: any, i: number) => (
                  <div key={i} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-cyan-300">{ai.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{ai.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Personas, Related Industries & Connected Modules */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personas */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Primary Stakeholders</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Who Relies on This Module</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.personas.map((pSlug: string) => {
                  const persona = navData.solutions.find((s) => s.slug === pSlug);
                  return (
                    <Link
                      key={pSlug}
                      href={`/solutions/${pSlug}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1.5"
                    >
                      <span>For {persona?.role || pSlug}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Industries */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Industry Relevance</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Specialized Industry Packs</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.industries.map((iSlug: string) => {
                  const ind = navData.industries.find((i) => i.slug === iSlug);
                  return (
                    <Link
                      key={iSlug}
                      href={`/industries/${iSlug}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1.5"
                    >
                      <span>{ind?.name || iSlug}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <FAQAccordion items={product.faqs} title={`Frequently Asked Questions About ${product.title}`} />
      )}

      {/* Final Module CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to integrate {product.title.toLowerCase()} into your workforce?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule an architectural walkthrough to explore how Workforce360 connects this capability directly with your payroll, attendance, and corporate ledger.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
