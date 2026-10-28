import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Clock, 
  DollarSign, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  CheckCircle2, 
  Building2,
  TrendingUp,
  Sliders,
  Scale,
  Briefcase,
  Award,
  BookOpen,
  HeartHandshake,
  FileText,
  Activity,
  Laptop,
  Coins,
  Zap
} from "lucide-react";
import ProductScreenshot from "@/components/ProductScreenshot";
import DualWorkforceSection from "@/components/DualWorkforceSection";
import IndustrySelector from "@/components/IndustrySelector";
import FAQAccordion from "@/components/FAQAccordion";
import faqsData from "../../content/faqs.json";
import navData from "../../content/navigation.json";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import FloatingIcons from "@/components/FloatingIcons";
import FloatingCard from "@/components/FloatingCard";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* =========================================================================
          SECTION 1 — HERO
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
        <FloatingIcons />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold shadow-sm shadow-blue-500/5 hover:scale-105 transition-transform duration-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>ENTERPRISE WORKFORCE OPERATING SYSTEM</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              Run your entire workforce on{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                one unified platform.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              One platform for HR, payroll, attendance, talent, compliance, finance, IT & analytics — for corporate and frontline teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/35 transition transform hover:-translate-y-0.5"
              >
                Request an Enterprise Demo
              </Link>
              <Link
                href="/platform"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition"
              >
                Explore the Platform
              </Link>
            </div>

            {/* Trust Callout Pills — Center Aligned (6 Core Enterprise Capabilities) */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-emerald-300 hover:shadow-md">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Security (SOC-2 & ISO)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-indigo-300 hover:shadow-md">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-blue-300 hover:shadow-md">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>19 Specialized Industry Packs</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-amber-300 hover:shadow-md">
                <Coins className="w-4 h-4 text-amber-600" />
                <span>Dual-Regime Indian Payroll (Old & 115BAC)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-cyan-300 hover:shadow-md">
                <Activity className="w-4 h-4 text-cyan-600" />
                <span>Hardware Biometric & Turnstile Sync</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition hover:bg-white hover:border-rose-300 hover:shadow-md">
                <Laptop className="w-4 h-4 text-rose-600" />
                <span>Zero-Trust IT Asset Lock</span>
              </div>
            </div>
          </div>

          {/* Hero Visual — Actual Production UI Screenshot */}
          <div className="mt-14 max-w-6xl mx-auto">
            <ProductScreenshot type="dashboard" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIVE RELEASE & CAPABILITY TICKER STRIP CAROUSEL
         ========================================================================= */}
      <div className="bg-slate-950 border-y border-slate-800 py-3 overflow-hidden text-slate-200 select-none shadow-inner">
        <Marquee speed={32} className="flex items-center">
          <div className="flex items-center gap-8 px-4 text-xs font-medium tracking-wide">
            {/* Ticker Item 1 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                Live Release
              </span>
              <span className="text-white font-semibold">Automated Section 192 TDS Withholding & Form 16 Part A/B Engine</span>
            </div>
            <span className="text-slate-600">•</span>

            {/* Ticker Item 2 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                Shift Operations
              </span>
              <span>Autonomous 3-Shift Balancing & Biometric Turnstile Synchronization</span>
            </div>
            <span className="text-slate-600">•</span>

            {/* Ticker Item 3 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider">
                Statutory Compliance
              </span>
              <span>1-Click EPFO Electronic Challan cum Return (ECR) Generation</span>
            </div>
            <span className="text-slate-600">•</span>

            {/* Ticker Item 4 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider">
                19 Industry Packs
              </span>
              <span>Maritime STCW Rest-Hours & Seafood Piece-Rate Gang Cards Live</span>
            </div>
            <span className="text-slate-600">•</span>

            {/* Ticker Item 5 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider">
                Workforce Planning
              </span>
              <span>Org Simulation Sandbox with Real-Time P&L Margin Delta</span>
            </div>
            <span className="text-slate-600">•</span>

            {/* Ticker Item 6 */}
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-bold uppercase tracking-wider">
                Zero-Trust IT
              </span>
              <span>Instant Remote Asset Lock & Automated Offboarding Telemetry</span>
            </div>
            <span className="text-slate-600">•</span>
          </div>
        </Marquee>
      </div>

      {/* =========================================================================
          SECTION 2 — CATEGORY EXPLANATION (MORE THAN HRMS)
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              MORE THAN AN HRMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Your Workforce is More Than HR. Run It as an Operating System.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              SpotSign AI unifies the five systems that run modern enterprises:
            </p>
          </div>

          {/* Five-Pillar Overview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
            <FloatingCard delay={0} className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
              <h3 className="text-base font-bold text-slate-900">PEOPLE</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core HRIS, employee lifecycle, applicant tracking (ATS), performance appraisals, and enterprise learning.
              </p>
              <Link href="/platform/hris" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 pt-2">
                <span>Core HRIS</span> →
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.1} className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">2</div>
              <h3 className="text-base font-bold text-slate-900">WORK</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biometric attendance hardware, 24/7 rotational shifts, overtime guardrails, and geofenced field operations.
              </p>
              <Link href="/platform/workforce-management" className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1 pt-2">
                <span>Workforce Mgmt</span> →
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.2} className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">3</div>
              <h3 className="text-base font-bold text-slate-900">MONEY</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated payroll, Indian statutory tax (TDS, PF, ESIC, Form 16), expense claims, and General Ledger accounting.
              </p>
              <Link href="/platform/payroll" className="text-xs font-semibold text-amber-600 hover:underline flex items-center gap-1 pt-2">
                <span>Payroll & Tax</span> →
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.3} className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-purple-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">4</div>
              <h3 className="text-base font-bold text-slate-900">OPERATIONS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                IT hardware inventory, software license governance, offboarding asset locks, and 19 industry vertical packs.
              </p>
              <Link href="/platform/it-assets" className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1 pt-2">
                <span>IT Asset Ops</span> →
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.4} className="rounded-2xl p-6 bg-slate-900 border border-slate-800 text-white shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">5</div>
              <h3 className="text-base font-bold text-white">INSIGHTS</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Executive analytics across headcount, attrition, cost run-rates, and operational telemetry.
              </p>
              <Link href="/platform/analytics" className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1 pt-2">
                <span>Workforce Analytics</span> →
              </Link>
            </FloatingCard>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 2 — DUAL WORKFORCE (DESK, FIELD & FLOOR)
         ========================================================================= */}
      <AnimatedSection direction="up">
      <DualWorkforceSection />
      </AnimatedSection>

      {/* =========================================================================
          SECTION 6 — PAYROLL, COMPLIANCE & GENERAL LEDGER
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                INDIAN STATUTORY & PAYROLL ENGINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Payroll That Connects Time, Compensation, Tax, and General Ledger.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Run automated payroll across corporate and industrial workers in minutes. Attendance, piece-rate wages, overtime, and reimbursement claims feed directly into an Indian statutory tax engine with automated General Ledger posting.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Section 192 TDS:</strong> Automated dual-regime tax calculation with Form 12BB proof OCR.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Statutory Challans:</strong> 1-click ECR text files for EPFO, ESIC returns, and State PT.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Form 16 Automation:</strong> Bulk generation of digitally signed Form 16 Part A & Part B PDFs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>GL Synchronization:</strong> Balanced double-entry journals syncing with SAP, NetSuite, and Tally.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/platform/payroll"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore Enterprise Payroll & Compliance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProductScreenshot type="payroll" />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 9 — RECRUITMENT & APPLICANT TRACKING (ATS)
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-5">
              {/* Authentic Recruitment Photo with Live Candidate Card */}
              <div className="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                <Image
                  src="/images/recruitment-interview.jpg"
                  alt="Enterprise Recruitment & Candidate Evaluation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-indigo-400/30 text-white flex items-center gap-2.5 shadow-lg">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">AI Candidate Fit Scoring: 94%</div>
                      <div className="text-[10px] text-slate-300">Verified against 14 role competencies</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/90 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
                    Fast-Track Offer Ready
                  </span>
                </div>
              </div>
              <ProductScreenshot type="ats" />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                RECRUITMENT & TALENT ACQUISITION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hire at Enterprise Velocity Without the Screening Grind.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Connect job requisition approvals directly to applicant tracking, resume parsing, automated interview kit generation, and one-click onboarding compensation modeling.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Candidate Fit Scoring:</strong> The platform scores candidate profiles against real role requirements, not keyword counts.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Automated Interview Kits:</strong> Generates role-specific behavioral and technical question rubrics.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Compensation Parity Check:</strong> Simulates compensation parity across existing teams before extending letters.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Autonomous Sourcing & Ranking:</strong> Discovers and matches passive talent against open tech and operations requisitions.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>1-Click Onboarding Transition:</strong> Converts accepted offers directly into verified HRIS employee records with e-sign.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/platform/recruitment"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore Recruitment & ATS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 10, 11, 12, 13 — PERFORMANCE, LEARNING, EX, AND WORKFORCE FINANCE
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              UNIFIED WORKFORCE EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Connect Performance, Learning, Employee Journey, and Finance.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Break down the walls between what employees achieve, how they develop, and the financial reality of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Performance Card */}
            <FloatingCard delay={0.05} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Performance & OKRs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  9-Box talent matrices, continuous review cadences, and OKR tree alignments that tie appraisal ratings directly to compensation bands.
                </p>
              </div>
              <Link href="/platform/performance" className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 pt-2">
                <span>View Performance Module</span> →
              </Link>
            </FloatingCard>

            {/* Learning Card */}
            <FloatingCard delay={0.1} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Learning & LMS</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SCORM-compliant enterprise courses, course builder flows, and mandatory compliance certification tracking across safety-critical jobs.
                </p>
              </div>
              <Link href="/platform/learning" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1 pt-2">
                <span>View Learning Module</span> →
              </Link>
            </FloatingCard>

            {/* Employee Experience Card */}
            <FloatingCard delay={0.15} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Employee Lifecycle</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From digital offer acceptance to automated hardware receipt, mobile leave, tax projections, and zero-leakage exit clearance.
                </p>
              </div>
              <Link href="/platform/employee-experience" className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1 pt-2">
                <span>View Employee Journey</span> →
              </Link>
            </FloatingCard>

            {/* Workforce Finance Card */}
            <FloatingCard delay={0.2} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Workforce Finance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct General Ledger journal exports, department-level cost leakage detection, and headcount cost allocation synced with ERP accounting.
                </p>
              </div>
              <Link href="/platform/finance" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1 pt-2">
                <span>View Workforce Finance</span> →
              </Link>
            </FloatingCard>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 14/15 — 19 SPECIALIZED INDUSTRY PACKS
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              19 SPECIALIZED VERTICAL PACKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              One Platform. Configured for Your Exact Industry.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Every industry manages work differently. SpotSign AI delivers pre-built vertical packs with dedicated department hierarchies, specialized roles, shift rules, and statutory compliance out of the box.
            </p>
          </div>

          <IndustrySelector />
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 8 — PERSONA SOLUTIONS (WHO RUNS THE WORKFORCE)
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              EXECUTIVE & OPERATIONAL PERSONAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Everyone Who Runs the Workforce.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              From C-suite leaders modeling future org charts to shift supervisors balancing factory lines and employees viewing payslips on mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navData.solutions.map((sol, idx) => (
              <FloatingCard key={sol.slug} delay={idx * 0.04} className="h-full">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="h-full rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-lg transition flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                      For {sol.role}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {sol.tagline}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Role-tailored dashboards, automated workflows, and direct business metric alignment.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Explore Role Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 9 — SECURITY, ACCESS & DATA PROTECTION
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ENTERPRISE SECURITY & GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Enterprise Data Protection Without Enterprise Friction.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                SpotSign AI protects workforce data with secure access controls, enterprise SSO, encryption, and detailed audit logging.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <FloatingCard delay={0.05} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Secure Data Separation</div>
                  <p className="text-slate-500 mt-1">Access controls help prevent unauthorized access across accounts.</p>
                </FloatingCard>
                <FloatingCard delay={0.1} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Role-Based Access</div>
                  <p className="text-slate-500 mt-1">Strict separation of duties between HR, Finance, Ops, and Staff.</p>
                </FloatingCard>
                <FloatingCard delay={0.15} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Google & Microsoft SSO</div>
                  <p className="text-slate-500 mt-1">Enterprise single sign-on with mandatory MFA.</p>
                </FloatingCard>
                <FloatingCard delay={0.2} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Detailed Audit Trails</div>
                  <p className="text-slate-500 mt-1">Every salary revision and permission update is logged.</p>
                </FloatingCard>
              </div>

              <div className="pt-2">
                <Link href="/security" className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1">
                  <span>View Security & Governance Principles</span> →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-8 text-white border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold">Security Snapshot</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  ACTIVE ENCRYPTION: TLS 1.3 / AES-256
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Access Control:</span>
                  <div className="text-emerald-400 mt-0.5">Role-based permissions enforced at runtime</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Data Handling:</span>
                  <div className="text-cyan-400 mt-0.5">Zero customer data retained externally</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Offboarding Security Lock:</span>
                  <div className="text-amber-400 mt-0.5">F&F Settlement halted until IT hardware serial numbers confirmed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 18 — PRODUCT ECOSYSTEM OVERVIEW
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-indigo-950 px-3.5 py-1 rounded-full border border-indigo-700/60">
              PLATFORM OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              The Complete SpotSign AI Enterprise Ecosystem.
            </h2>
            <p className="text-base text-slate-300">
              How the five foundational pillars interconnect through shared workforce data and executive analytics.
            </p>
          </div>

          {/* Structured Platform Overview Diagram */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
            {/* Top Root Crown */}
            <div className="text-center">
              <div className="inline-block px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30">
                SPOTSIGN AI — ENTERPRISE OPERATING SYSTEM
              </div>
              <div className="w-0.5 h-6 bg-slate-700 mx-auto my-1"></div>
            </div>

            {/* Four Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* People Pillar */}
              <FloatingCard delay={0.05} className="p-5 rounded-2xl bg-slate-900 border border-blue-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center justify-between">
                  <span>1. PEOPLE</span>
                  <Users className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Core HRIS & Lifecycle</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Recruitment / ATS</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Performance & OKRs</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Enterprise LMS & Skills</li>
                </ul>
              </FloatingCard>

              {/* Work Pillar */}
              <FloatingCard delay={0.1} className="p-5 rounded-2xl bg-slate-900 border border-emerald-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
                  <span>2. WORK</span>
                  <Clock className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Workforce Management</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Biometric Terminal Sync</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 24/7 Rotational Rostering</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Geofenced Field Fleet</li>
                </ul>
              </FloatingCard>

              {/* Money Pillar */}
              <FloatingCard delay={0.15} className="p-5 rounded-2xl bg-slate-900 border border-amber-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center justify-between">
                  <span>3. MONEY</span>
                  <DollarSign className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Automated Payroll Engine</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Indian Statutory (TDS/PF)</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Expenses & Travel Reimburse</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> General Ledger ERP Posting</li>
                </ul>
              </FloatingCard>

              {/* Operations Pillar */}
              <FloatingCard delay={0.2} className="p-5 rounded-2xl bg-slate-900 border border-purple-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center justify-between">
                  <span>4. OPERATIONS & IT</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> IT Asset Serial Governance</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> SaaS License Reclamation</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> 19 Vertical Industry Packs</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Role-Based Access Controls</li>
                </ul>
              </FloatingCard>
            </div>

            {/* Downward Junction Line */}
            <div className="w-0.5 h-6 bg-indigo-500 mx-auto"></div>

            {/* Insights & Analytics with Executive Analytics Stock Photo */}
            <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-700/80 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8">
                <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-indigo-800/60 group">
                  <Image
                    src="/images/executive-analytics.jpg"
                    alt="C-Suite Leadership Reviewing Workforce Analytics Cockpit"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] font-mono text-cyan-300 bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 rounded border border-cyan-400/30">
                      C-Suite Cockpit • Real-Time Telemetry
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3 text-left">
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>5. UNIFIED INSIGHTS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Workforce Analytics & Executive Reporting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Aggregates real-time events across all four operational pillars to deliver headcount cost reporting, attrition trends, payroll anomaly audits, and operational telemetry.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/platform/analytics"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200"
                    >
                      <span>Explore Workforce Analytics</span> →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 19 — RESOURCES, GUIDES & INSIGHTS
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ENTERPRISE KNOWLEDGE HUB
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Whitepapers, Compliance Guides, and Practical Resources.
            </h2>
            <p className="text-base text-slate-600">
              Authoritative documentation designed for enterprise buyers, operations leaders, and compliance officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FloatingCard delay={0.05}>
              <Link
                href="/resources/guides"
                className="h-full p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Implementation Guide</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">Enterprise WOS Migration Framework</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    How multi-entity organizations transition from fragmented HR systems to an integrated operating system.
                  </p>
                </div>
                <div className="text-xs font-bold text-blue-600 flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  <span>Read Whitepaper</span> →
                </div>
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.1}>
              <Link
                href="/compliance"
                className="h-full p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Statutory Reference</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition">Indian Statutory Payroll Setup</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Configuring Section 192 TDS, EPFO ECR files, ESIC, State PT, and Form 16 Part A/B bulk generation.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  <span>Review Specifications</span> →
                </div>
              </Link>
            </FloatingCard>

            <FloatingCard delay={0.15}>
              <Link
                href="/resources/faq"
                className="h-full p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Security FAQs</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition">Data Protection & Access Controls</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Straightforward answers regarding access controls, audit logs, SSO, and customer data handling.
                  </p>
                </div>
                <div className="text-xs font-bold text-indigo-600 flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  <span>Browse Security Q&A</span> →
                </div>
              </Link>
            </FloatingCard>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* =========================================================================
          SECTION 20 — FAQ SECTION (ANSWER ENGINE OPTIMIZATION)
         ========================================================================= */}
      <AnimatedSection direction="up">
      <FAQAccordion items={faqsData.faqs.slice(0, 8)} />
      </AnimatedSection>

      {/* =========================================================================
          SECTION 11 — FINAL CONVERSION CTA
         ========================================================================= */}
      <AnimatedSection direction="up">
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSFORM YOUR WORKFORCE OPERATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your workforce is more than HR. Run it as one unified system.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Schedule a personalized demonstration with our enterprise solutions team to see how SpotSign AI unifies People, Work, Money, IT Operations, and Workforce Analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              Request a Live Demo
            </Link>
            <Link
              href="/compare"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition"
            >
              Compare Capabilities
            </Link>
          </div>

          <div className="pt-8 text-xs text-slate-400 font-medium">
            SpotSign AI • Powered by Spotsign Workforce360
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}
