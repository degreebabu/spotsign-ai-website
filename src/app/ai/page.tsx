import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection, { FloatingCard } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Workforce Automation & Planning | SpotSign AI",
  description:
    "Explore SpotSign AI capabilities for workflow automation, predictive workforce intelligence, and non-destructive organizational planning.",
  alternates: {
    canonical: "https://spotsign.ai/ai",
  },
  openGraph: {
    type: "website",
    title: "AI Workforce Automation & Planning | SpotSign AI",
    description:
      "Explore SpotSign AI capabilities for workflow automation, predictive workforce intelligence, and non-destructive organizational planning.",
    url: "https://spotsign.ai/ai",
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
    title: "AI Workforce Automation & Planning | SpotSign AI",
    description:
      "Explore SpotSign AI capabilities for workflow automation, predictive workforce intelligence, and non-destructive organizational planning.",
    images: ["/og-image.png"],
  },
};

const features = [
  {
    icon: Workflow,
    title: "Embedded Workflow Automation",
    description:
      "40 purpose-built flows operate inside recruitment, payroll, attendance, and employee support — no separate chatbot to integrate or maintain.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Workforce Intelligence",
    description:
      "Surface attrition risk, payroll anomalies, staffing shortages, and candidate fit before they become operational or financial problems.",
  },
  {
    icon: BrainCircuit,
    title: "Non-Destructive Planning",
    description:
      "Model restructuring, expansion, and compensation scenarios against an isolated organizational graph before committing live changes.",
  },
];

export default function AIPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <Breadcrumbs items={[{ name: "AI", href: "/ai" }]} />

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>AI AT SPOTSIGN AI</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
              AI that operates inside the workflow.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              SpotSign AI embeds automation and predictive intelligence directly into
              the systems your teams already use — from payroll audits and attrition
              signals to resume screening and workforce planning.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                href="/demo"
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/25 transition"
              >
                Request an AI Demo
              </Link>
              <Link
                href="/platform"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition inline-flex items-center gap-2"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              AI CAPABILITY OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Intelligence built for operational work, not side conversations.
            </h2>
            <p className="text-base text-slate-600">
              Every capability is designed to reduce manual review, surface risk
              earlier, and keep human decision-makers in control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FloatingCard
                  key={feature.title}
                  delay={i * 0.12}
                  className="rounded-3xl border border-slate-200 bg-slate-50/60 p-7 space-y-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AIWorkflowSection />

      <AnimatedSection className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              INTERACTIVE PLANNING SANDBOX
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Test workforce decisions before they become payroll reality.
            </h2>
            <p className="text-base text-slate-600">
              Explore restructuring, expansion, and shift consolidation scenarios
              against an isolated model — then see projected headcount, cost, and
              risk impacts instantly.
            </p>
          </div>
          <DigitalTwinSimulator />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SEE AI IN YOUR WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Bring your workforce data. We will model the automation.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Walk through live AI workflows with an enterprise solutions architect
            and see how SpotSign AI fits your payroll, recruitment, and operations
            processes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition"
            >
              Request a Live Demo
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition"
            >
              Talk to Enterprise Sales
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
