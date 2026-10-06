import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Cpu, 
  Sparkles,
  TrendingUp,
  Layers,
  ArrowLeft
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductScreenshot from "@/components/ProductScreenshot";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import FAQAccordion from "@/components/FAQAccordion";
import competitorsData from "../../../../content/competitors.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const competitors = (competitorsData as any).competitors;
  return Object.keys(competitors).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = (competitorsData as any).competitors[slug];
  if (!comp) return {};

  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    alternates: {
      canonical: `https://workforce360.dimension.com/compare/${slug}`,
    },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDescription,
      url: `https://workforce360.dimension.com/compare/${slug}`,
    },
  };
}

export default async function CompetitorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = (competitorsData as any).competitors[slug];

  if (!comp) {
    notFound();
  }

  const comparisonFaqs = [
    {
      q: `How does Workforce360 differ architecturally from ${comp.name}?`,
      a: `Workforce360 is built as an AI-Native Workforce Operating System that unifies People, Work, Money, IT Operations, and Intelligence in a single layer. Unlike ${comp.name}, Workforce360 natively supports both salaried corporate workers and frontline shift/piece-rate employees, deep Indian statutory tax compliance, and non-destructive organizational simulation via the Workforce Digital Twin.`,
    },
    {
      q: `Can an organization migrate from ${comp.name} to Workforce360 without disruption?`,
      a: `Yes. Workforce360 offers automated migration pipelines to ingest historical employee records, compensation bands, leave balances, and department hierarchies. Parallel payroll runs ensure 100% tax and net-pay accuracy before cutover, with average deployment taking just 4 to 8 weeks.`,
    },
    {
      q: `Does Workforce360 support Indian statutory payroll out of the box?`,
      a: `Yes. Workforce360 natively calculates Section 192 TDS with dual tax regime handling, Form 12BB proof verification, 1-click ECR text files for EPFO, ESIC monthly filings, State Professional Tax (PT), and bulk generation of digitally signed Form 16 Part A and Part B documents.`,
    },
    {
      q: `What is the Workforce Digital Twin and does ${comp.name} have an equivalent?`,
      a: `The Workforce Digital Twin is an executive simulation sandbox allowing C-suite leadership to test organizational restructurings, department expansions, severance reserves, and P&L impacts before committing. ${comp.name} only provides retrospective reporting and static analytics.`,
    },
  ];

  const competitorsList = Object.values((competitorsData as any).competitors);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Compare", href: "/compare" },
              { name: `vs ${comp.name}`, href: `/compare/${slug}` },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>{comp.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {comp.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {comp.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/demo"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
              >
                Schedule an Architectural Comparison
              </Link>
              <Link
                href="#matrix"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
              >
                View Capability Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Narrative */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Executive Summary</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Modern Enterprises Choose Workforce360</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {comp.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Key Architectural Differences (4 Cards) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ARCHITECTURAL ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Where Workforce360 Stands Apart from {comp.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comp.keyDifferences.map((diff: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{diff.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Side-by-Side Matrix Table */}
      <section id="matrix" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              FEATURE-BY-FEATURE BENCHMARK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Direct Capability Comparison: Workforce360 vs {comp.name}
            </h2>
          </div>

          {/* Desktop Matrix */}
          <div className="hidden md:block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-900 text-white font-semibold">
                <tr>
                  <th className="py-4 px-6 w-2/5">Capability / Dimension</th>
                  <th className="py-4 px-6 w-3/10 bg-blue-900/80 text-cyan-300">Workforce360</th>
                  <th className="py-4 px-6 w-3/10">{comp.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comp.matrix.map((row: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50 transition">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">
                      {row.capability}
                    </td>
                    <td className="py-4 px-6 font-semibold text-blue-950 bg-blue-50/40 border-l border-r border-blue-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{row.w360}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="md:hidden space-y-4">
            {comp.matrix.map((row: any, i: number) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {row.capability}
                </h3>
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                    Workforce360
                  </span>
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-blue-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{row.w360}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    {comp.name}
                  </span>
                  <p className="text-xs text-slate-600">{row.competitor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Benefits */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              SEAMLESS TRANSITION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Migrating from {comp.name} to Workforce360
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comp.migrationBenefits.map((benefit: string, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Competitor Comparisons */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              OTHER EVALUATIONS
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Compare Workforce360 with Other Solutions
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {competitorsList
              .filter((c: any) => c.slug !== slug)
              .map((other: any) => (
                <Link
                  key={other.slug}
                  href={`/compare/${other.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 text-xs font-semibold text-slate-700 transition flex items-center gap-1.5"
                >
                  <span>vs {other.name}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={comparisonFaqs} title={`Workforce360 vs ${comp.name} FAQs`} />

      {/* Final Conversion CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to evaluate Workforce360 against {comp.name}?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule a confidential enterprise briefing to review a custom capability-gap matrix and ROI assessment tailored to your organization.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
