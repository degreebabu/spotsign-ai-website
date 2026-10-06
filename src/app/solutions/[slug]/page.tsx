import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp,
  Quote,
  Layers,
  Sparkles
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import personasData from "../../../../content/personas.json";
import navData from "../../../../content/navigation.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const personas = (personasData as any).personas;
  return Object.keys(personas).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const persona = (personasData as any).personas[slug];
  if (!persona) return {};

  return {
    title: persona.metaTitle,
    description: persona.metaDescription,
    alternates: {
      canonical: `https://workforce360.dimension.com/solutions/${slug}`,
    },
    openGraph: {
      title: persona.metaTitle,
      description: persona.metaDescription,
      url: `https://workforce360.dimension.com/solutions/${slug}`,
    },
  };
}

export default async function PersonaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const persona = (personasData as any).personas[slug];

  if (!persona) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Solutions", href: "/solutions" },
              { name: persona.title, href: `/solutions/${slug}` },
            ]}
          />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-indigo-600" />
              <span>{persona.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {persona.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {persona.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/demo"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
              >
                Schedule a {persona.title.split("(")[0].trim()} Walkthrough
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

      {/* Pain Points vs Workforce360 Solution */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Core Concerns */}
            <div className="p-8 rounded-3xl bg-rose-50/60 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Primary Friction Points</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Challenges Faced by {persona.title.split("(")[0].trim()}s
              </h2>
              <ul className="space-y-3">
                {persona.coreConcerns.map((concern: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0 mt-2"></span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Workforce360 Helps */}
            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>The Workforce360 Solution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How Our Operating System Transforms the Role
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {persona.howItHelps}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {persona.metrics.map((m: any, i: number) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-blue-100 text-center">
                    <div className="text-lg font-extrabold text-blue-600">{m.val}</div>
                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Capabilities */}
      <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              ROLE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Purpose-Built Tools for {persona.title.split("(")[0].trim()}s
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {persona.keyCapabilities.map((cap: any, idx: number) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
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
              <span>Connected Platform Modules for This Role</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {persona.relevantModules.map((mSlug: string) => (
                <Link
                  key={mSlug}
                  href={mSlug === "security" ? "/security" : `/platform/${mSlug}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-800 text-xs font-semibold border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span className="capitalize">{mSlug.replace("-", " ")}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Role Architectural Design Mandate */}
          {persona.quote && (
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 flex items-start gap-4">
              <Quote className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                  Platform Design Mandate for {persona.title.split("(")[0].trim()}s
                </span>
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  &ldquo;{persona.quote}&rdquo;
                </p>
                <div className="text-xs font-semibold text-slate-400">
                  — Workforce360 Enterprise Architecture Standard
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final Persona CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            See how Workforce360 empowers {persona.title.split("(")[0].trim().toLowerCase()}s
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Book an executive briefing to evaluate the platform workflows, security controls, and operational dashboards built for your role.
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
