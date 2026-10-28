import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  DollarSign,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";
import industriesData from "../../../../content/industries.json";
import navData from "../../../../content/navigation.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = (industriesData as any).industries;
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = (industriesData as any).industries[slug];
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://spotsign.ai/industries/${slug}`,
    },
    openGraph: {
      type: "website",
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://spotsign.ai/industries/${slug}`,
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
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = (industriesData as any).industries[slug];

  if (!industry) {
    notFound();
  }

  const industryJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://spotsign.ai/industries/${slug}#software`,
    isPartOf: { "@id": "https://spotsign.ai/#software" },
    name: `SpotSign AI for ${industry.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web, PWA",
    description: industry.metaDescription,
    featureList: industry.capabilities.map((c: any) => c.title),
  };

  const industryFaqs = [
    {
      q: `How does SpotSign AI handle shift scheduling and attendance for ${industry.name}?`,
      a: `${industry.name} operations utilize: ${industry.attendanceModel}`,
    },
    {
      q: `What compensation and wage models are supported in the ${industry.name} pack?`,
      a: `SpotSign AI supports: ${industry.compensationModel}`,
    },
    {
      q: `How does SpotSign AI enforce statutory safety and regulatory compliance in ${industry.name}?`,
      a: industry.solution,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industryFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const getIndustryImage = (industrySlug: string) => {
    if (industrySlug.includes("health") || industrySlug.includes("pharma")) return "/images/healthcare-workforce.jpg";
    if (industrySlug.includes("manufacturing") || industrySlug.includes("automotive")) return "/images/manufacturing-plant.jpg";
    if (industrySlug.includes("construction") || industrySlug.includes("mining")) return "/images/construction-site.jpg";
    if (industrySlug.includes("retail") || industrySlug.includes("hospitality")) return "/images/retail-hospitality.jpg";
    if (industrySlug.includes("banking") || industrySlug.includes("insurance") || industrySlug.includes("financial")) return "/images/fintech-banking.jpg";
    if (industrySlug.includes("shipping") || industrySlug.includes("maritime") || industrySlug.includes("aviation") || industrySlug.includes("logistics")) return "/images/logistics-shipping.jpg";
    if (industrySlug.includes("technology") || industrySlug.includes("telecom") || industrySlug.includes("bpo")) return "/images/tech-software.jpg";
    if (industrySlug.includes("transportation") || industrySlug.includes("facilities")) return "/images/field-mobile-workforce.jpg";
    return "/images/corporate-workforce.jpg";
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <AnimatedSection className="bg-white border-b border-slate-200 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { name: "Industries", href: "/industries" },
              { name: industry.name, href: `/industries/${slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{industry.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {industry.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {industry.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Schedule an Industry Walkthrough
                </Link>
                <Link
                  href="#workflows"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition"
                >
                  View Specialized Workflows
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10]">
                <Image
                  src={getIndustryImage(slug)}
                  alt={`${industry.name} frontline workforce operations`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">{industry.name} Workforce Pack</span>
                    <p className="text-slate-200 text-[11px] line-clamp-1">{industry.attendanceModel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Workforce Model & Industry Challenges */}
      <AnimatedSection className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Workforce Model Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Target Workforce Profile</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Who Operates in This Environment</h2>
            <p className="text-sm text-slate-300 leading-relaxed">{industry.workforceModel}</p>
          </div>

          {/* Operational Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-8 rounded-3xl bg-amber-50/60 border border-amber-200/80 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Sector Complexity</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frontline Operational Friction</h3>
              <ul className="space-y-3">
                {industry.challenges.map((c: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 mt-2"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-200/80 space-y-4">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>The SpotSign AI Solution</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Engineered for Your Industry</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{industry.solution}</p>

              <div className="pt-2 space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-blue-100 font-medium text-slate-800">
                  <span className="text-blue-600 font-bold block mb-0.5">Attendance:</span>
                  {industry.attendanceModel}
                </div>
                <div className="p-3 rounded-xl bg-white border border-blue-100 font-medium text-slate-800">
                  <span className="text-blue-600 font-bold block mb-0.5">Compensation:</span>
                  {industry.compensationModel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Specialized Capabilities */}
      <section id="workflows" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pre-Built Modules in the {industry.name} Pack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.capabilities.map((cap: any, idx: number) => (
              <FloatingCard
                key={idx}
                delay={idx * 0.08}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </FloatingCard>
            ))}
          </div>

          {/* Industry Workforce Analytics Card */}
          <AnimatedSection delay={0.2} className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-indigo-950 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Embedded Workforce Analytics in the {industry.name} Pack</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Domain-Tuned Workforce Analytics for Operational Control
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              SpotSign AI monitors shift rosters against regulatory ceilings, analyzes biometric punch patterns for floor shrinkage, and models overtime trajectories before payroll freeze.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-cyan-300">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                ✓ Automated Rest & Overtime Guardrail Validation
              </span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                ✓ Floor Shrinkage & Shift Fill Rate Forecasting
              </span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                ✓ Piece-Rate & Incentive Parity Auditing
              </span>
            </div>
          </AnimatedSection>

          {/* Configured Roles */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Configured Roles in This Pack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {industry.roles.map((r: string, i: number) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Connected Platform Modules & Related Vertical Packs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Connected Core Modules</span>
              </h3>
              <p className="text-xs text-slate-500">
                Core operating system capabilities synchronized with this vertical pack.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/platform/workforce-management"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1"
                >
                  <span>Workforce Management</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
                <Link
                  href="/platform/attendance"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1"
                >
                  <span>Biometric Attendance</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
                <Link
                  href="/platform/payroll"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1"
                >
                  <span>Statutory Payroll</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
                <Link
                  href="/platform/analytics"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1"
                >
                  <span>Workforce Analytics</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Related Industry Vertical Packs</span>
              </h3>
              <p className="text-xs text-slate-500">
                Explore adjacent operational sectors with pre-configured shift and statutory rules.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {navData.industries
                  .filter((ind) => ind.slug !== slug)
                  .slice(0, 4)
                  .map((otherInd) => (
                    <Link
                      key={otherInd.slug}
                      href={`/industries/${otherInd.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition flex items-center gap-1"
                    >
                      <span>{otherInd.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={industryFaqs} title={`${industry.name} Workforce FAQs`} />

      {/* CTA */}
      <AnimatedSection className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Deploy the {industry.name} Pack for your organization
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Schedule a tailored briefing with an industry specialist to see how SpotSign AI streamlines shifts, attendance, and compliance for your workforce.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
            >
              <span>Schedule an Industry Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
