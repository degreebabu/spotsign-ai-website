import React from "react";
import Link from "next/link";
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
  FileText
} from "lucide-react";
import ProductScreenshot from "@/components/ProductScreenshot";
import DigitalTwinSimulator from "@/components/DigitalTwinSimulator";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import DualWorkforceSection from "@/components/DualWorkforceSection";
import IndustrySelector from "@/components/IndustrySelector";
import FAQAccordion from "@/components/FAQAccordion";
import faqsData from "../../content/faqs.json";
import navData from "../../content/navigation.json";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* =========================================================================
          SECTION 1 — HERO
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>AI-NATIVE WORKFORCE OPERATING SYSTEM</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              Run your entire workforce on one intelligent platform.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Workforce360 brings HR, payroll, attendance, talent, compliance, finance, IT operations, and workforce intelligence together — powered by AI and built for both corporate and operational workforces.
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
                Explore Platform Architecture
              </Link>
            </div>

            {/* Trust Sub-strip */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Multi-Tenant Sovereign Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>40 Production Genkit AI Flows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>19 Specialized Industry Vertical Packs</span>
              </div>
              <div className="text-slate-400">
                Powered by Spotsign • A DIMENSHION Product
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
          SECTION 2 — CATEGORY EXPLANATION (MORE THAN HRMS)
         ========================================================================= */}
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
              Traditional HR platforms manage employee records in isolation. Workforce360 connects the five foundational systems that keep modern enterprises operating smoothly:
            </p>
          </div>

          {/* 5-Layer Architectural Flow Visualization */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
              <h3 className="text-base font-bold text-slate-900">PEOPLE</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core HRIS, employee lifecycle, applicant tracking (ATS), performance appraisals, and enterprise learning.
              </p>
              <Link href="/platform/hris" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 pt-2">
                <span>Core HRIS</span> →
              </Link>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">2</div>
              <h3 className="text-base font-bold text-slate-900">WORK</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biometric attendance hardware, 24/7 rotational shifts, overtime guardrails, and geofenced field operations.
              </p>
              <Link href="/platform/workforce-management" className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1 pt-2">
                <span>Workforce Mgmt</span> →
              </Link>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">3</div>
              <h3 className="text-base font-bold text-slate-900">MONEY</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated payroll, Indian statutory tax (TDS, PF, ESIC, Form 16), expense claims, and General Ledger accounting.
              </p>
              <Link href="/platform/payroll" className="text-xs font-semibold text-amber-600 hover:underline flex items-center gap-1 pt-2">
                <span>Payroll & Tax</span> →
              </Link>
            </div>

            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-purple-500 hover:shadow-lg transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">4</div>
              <h3 className="text-base font-bold text-slate-900">OPERATIONS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                IT hardware inventory, software license governance, offboarding asset locks, and 19 industry vertical packs.
              </p>
              <Link href="/platform/it-assets" className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1 pt-2">
                <span>IT Asset Ops</span> →
              </Link>
            </div>

            <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800 text-white shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">5</div>
              <h3 className="text-base font-bold text-white">INTELLIGENCE</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                40 Genkit AI flows and the Workforce Digital Twin simulator for non-destructive organizational scenario modeling.
              </p>
              <Link href="/platform/digital-twin" className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1 pt-2">
                <span>Digital Twin</span> →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — WORKFORCE DIGITAL TWIN (FLAGSHIP DIFFERENTIATOR)
         ========================================================================= */}
      <section className="py-24 bg-slate-950 text-white border-b border-indigo-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-indigo-950 px-3.5 py-1 rounded-full border border-indigo-700/60">
              EXECUTIVE WORKFORCE SIMULATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Model Workforce Changes Before You Commit to Them.
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Traditional HR systems only record what has already happened. The Workforce Digital Twin allows C-suite executives to simulate restructuring scenarios in real time—projecting monthly P&L delta, statutory severance liabilities, and operational skill deficits.
            </p>
          </div>

          {/* Interactive Digital Twin Simulator Widget */}
          <DigitalTwinSimulator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — AI & DIGITAL BRAIN (40 GENKIT FLOWS)
         ========================================================================= */}
      <AIWorkflowSection />

      {/* =========================================================================
          SECTION 5 — DUAL WORKFORCE (DESK, FIELD & FLOOR)
         ========================================================================= */}
      <DualWorkforceSection />

      {/* =========================================================================
          SECTION 6 — PAYROLL, COMPLIANCE & GENERAL LEDGER
         ========================================================================= */}
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

      {/* =========================================================================
          SECTION 9 — AI RECRUITMENT & APPLICANT TRACKING (ATS)
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ProductScreenshot type="ats" />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                AI RECRUITMENT & TALENT ACQUISITION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hire at Enterprise Velocity Without the Screening Grind.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Connect job requisition approvals directly to applicant tracking, Genkit semantic resume parsing, automated interview kit generation, and one-click onboarding compensation modeling.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Semantic Fit Scoring:</strong> AI scores candidate profiles against real role requirements, not keyword counts.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Automated Interview Kits:</strong> Generates role-specific behavioral and technical question rubrics.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Digital Twin Offer Check:</strong> Simulates compensation parity across existing teams before extending letters.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/platform/recruitment"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore AI Recruitment & ATS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10, 11, 12, 13 — PERFORMANCE, LEARNING, EX, AND WORKFORCE FINANCE
         ========================================================================= */}
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
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between">
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
            </div>

            {/* Learning Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Learning & LMS</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SCORM-compliant enterprise courses, AI course builder flows, and mandatory compliance certification tracking across safety-critical jobs.
                </p>
              </div>
              <Link href="/platform/learning" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1 pt-2">
                <span>View Learning Module</span> →
              </Link>
            </div>

            {/* Employee Experience Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between">
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
            </div>

            {/* Workforce Finance Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between">
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
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14/15 — 19 SPECIALIZED INDUSTRY PACKS
         ========================================================================= */}
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
              Every industry manages work differently. Workforce360 delivers pre-built vertical packs with dedicated department hierarchies, specialized roles, shift rules, and statutory compliance out of the box.
            </p>
          </div>

          <IndustrySelector />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — PERSONA SOLUTIONS (WHO RUNS THE WORKFORCE)
         ========================================================================= */}
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
            {navData.solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                    For {sol.role}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {sol.tagline}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Role-tailored dashboards, automated workflows, and direct business metric alignment.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Explore Role Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — SECURITY, MULTI-TENANCY & RBAC
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ENTERPRISE MULTI-TENANT TRUST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Enterprise Data Protection Without Enterprise Friction.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Workforce360 is engineered with tenant-scoped database isolation, 19 granular Role-Based Access Control (RBAC) tiers, Firebase enterprise SSO, and immutable transaction audit logging.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Sovereign Data Isolation</div>
                  <p className="text-slate-500 mt-1">Tenant-scoped query enforcement preventing data cross-talk.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">19 RBAC Security Tiers</div>
                  <p className="text-slate-500 mt-1">Strict separation of duties between HR, Finance, Ops, and Staff.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Google & Microsoft SSO</div>
                  <p className="text-slate-500 mt-1">Federated identity with mandatory MFA enforcement.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Immutable Audit Trails</div>
                  <p className="text-slate-500 mt-1">Every salary revision and permission update is logged.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/security" className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1">
                  <span>View Security Architecture & Governance Principles</span> →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-8 text-white border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold">Platform Governance Snapshot</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  ACTIVE ENCRYPTION: TLS 1.3 / AES-256
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Database Partitioning:</span>
                  <div className="text-emerald-400 mt-0.5">tenant_id: &ldquo;CORP-IND-0914&rdquo; (Enforced at query runtime)</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Genkit AI Boundary:</span>
                  <div className="text-cyan-400 mt-0.5">Zero customer training data retained externally</div>
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

      {/* =========================================================================
          SECTION 18 — PRODUCT ECOSYSTEM ARCHITECTURE DIAGRAM
         ========================================================================= */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-indigo-950 px-3.5 py-1 rounded-full border border-indigo-700/60">
              PLATFORM TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              The Complete Workforce360 Enterprise Ecosystem.
            </h2>
            <p className="text-base text-slate-300">
              How the five foundational pillars interconnect through the Digital Brain and converge in the Workforce Digital Twin.
            </p>
          </div>

          {/* Structured Architecture Topology Diagram */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
            {/* Top Root Crown */}
            <div className="text-center">
              <div className="inline-block px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-600/30">
                WORKFORCE360 AI-NATIVE OPERATING SYSTEM
              </div>
              <div className="w-0.5 h-6 bg-slate-700 mx-auto my-1"></div>
            </div>

            {/* 4 Pillars Tier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* People Pillar */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-blue-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center justify-between">
                  <span>1. PEOPLE</span>
                  <Users className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Core HRIS & Lifecycle</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> AI Recruitment / ATS</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Performance & OKRs</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Enterprise LMS & Skills</li>
                </ul>
              </div>

              {/* Work Pillar */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-900/60 space-y-3">
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
              </div>

              {/* Money Pillar */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-amber-900/60 space-y-3">
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
              </div>

              {/* Operations Pillar */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-purple-900/60 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center justify-between">
                  <span>4. OPERATIONS & IT</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> IT Asset Serial Governance</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> SaaS License Reclamation</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> 19 Vertical Industry Packs</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Zero-Trust RBAC Tiers</li>
                </ul>
              </div>
            </div>

            {/* Downward Junction Line */}
            <div className="w-0.5 h-6 bg-indigo-500 mx-auto"></div>

            {/* Convergence Layer: Intelligence & Digital Twin */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-700/80 text-center space-y-3">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4" />
                <span>5. UNIFIED INTELLIGENCE LAYER</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Digital Brain (40 Production Genkit AI Flows) & Workforce Digital Twin
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Aggregates real-time events across all four operational pillars to drive predictive attrition scoring, automated anomaly detection, and non-destructive organizational scenario simulation.
              </p>
              <div className="pt-2">
                <Link
                  href="/platform/digital-twin"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200"
                >
                  <span>Explore the Workforce Digital Twin Architecture</span> →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 19 — RESOURCES, TECHNICAL GUIDES & INSIGHTS
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ENTERPRISE KNOWLEDGE HUB
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Architecture Whitepapers, Compliance Guides, and Technical Specs.
            </h2>
            <p className="text-base text-slate-600">
              Authoritative documentation designed for enterprise buyers, solutions architects, and compliance officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/resources/guides"
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Implementation Guide</span>
                <h3 className="text-base font-bold text-slate-900">Enterprise WOS Migration Framework</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  How multi-entity organizations transition from fragmented HR systems to an integrated operating system.
                </p>
              </div>
              <div className="text-xs font-bold text-blue-600 flex items-center gap-1 pt-2">
                <span>Read Whitepaper</span> →
              </div>
            </Link>

            <Link
              href="/compliance"
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Statutory Reference</span>
                <h3 className="text-base font-bold text-slate-900">Indian Statutory Payroll Architecture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Configuring Section 192 TDS, EPFO ECR files, ESIC, State PT, and Form 16 Part A/B bulk generation.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1 pt-2">
                <span>Review Specifications</span> →
              </div>
            </Link>

            <Link
              href="/resources/faq"
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-lg transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Technical FAQs</span>
                <h3 className="text-base font-bold text-slate-900">Multi-Tenancy & Genkit AI Architecture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Detailed answers regarding tenant database isolation, 19 RBAC tiers, and zero customer training retention.
                </p>
              </div>
              <div className="text-xs font-bold text-indigo-600 flex items-center gap-1 pt-2">
                <span>Browse Technical Q&A</span> →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 20 — FAQ SECTION (ANSWER ENGINE OPTIMIZATION)
         ========================================================================= */}
      <FAQAccordion items={faqsData.faqs.slice(0, 8)} />

      {/* =========================================================================
          SECTION 11 — FINAL CONVERSION CTA
         ========================================================================= */}
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
            Schedule a personalized demonstration with our enterprise architecture team to see how Workforce360 unifies People, Work, Money, IT Operations, and AI Intelligence.
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
            Workforce360 • Powered by Spotsign • A DIMENSHION Product
          </div>
        </div>
      </section>
    </div>
  );
}
