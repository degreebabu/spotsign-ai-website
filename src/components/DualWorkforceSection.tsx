import React from "react";
import Link from "next/link";
import { Users, Factory, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock, Layers } from "lucide-react";

export default function DualWorkforceSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>DUAL-WORKFORCE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            One Platform for Desk, Field, and Floor.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Most HR platforms were architected exclusively for desk-based corporate staff. Workforce360 uniquely bridges corporate salaried professionals with frontline industrial, shift-based, and variable-wage workforces under a single unified operating model.
          </p>
        </div>

        {/* Dual Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Corporate / White-Collar Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:shadow-xl transition">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Knowledge Workers</span>
                    <h3 className="text-xl font-bold text-slate-900">Corporate & Knowledge Workforce</h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                  CTC & Salaried
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Empower executives, engineers, marketers, and knowledge teams with modern agile workflows, autonomous self-service, and transparent career advancement.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compensation:</strong> Annual CTC packages, performance bonuses, ESOP grants, and Section 115BAC tax optimization.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Attendance & Identity:</strong> Google/Microsoft SSO web check-ins, flexible hybrid work policies, and IP whitelisting.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Talent & Growth:</strong> Cascading OKRs, continuous 1-on-1 check-ins, 360° feedback, and 9-box talent calibration.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>IT Governance:</strong> Automated laptop provisioning, SaaS software licenses, and offboarding asset locks.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link href="/platform/hris" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <span>Explore Corporate HRIS & Talent Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Operational / Blue-Collar Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:shadow-xl transition">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Frontline & Shift Operations</span>
                    <h3 className="text-xl font-bold text-slate-900">Operational & Variable Workforce</h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                  Shift & Piece-Rate
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Orchestrate factory assembly workers, maritime crews, hospital nurses, logistics drivers, and contract labor with rigid statutory compliance.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wages & Piece-Rate:</strong> Daily rates, piece-rate gang cards (per kg yield), double-rate overtime, and night shift allowances.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time & Biometrics:</strong> Hardware turnstile sync (eSSL, ZKTeco), mobile facial check-in with liveness, and GPS geofences.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Rest Floors:</strong> Enforce Factories Act 48-hour caps, STCW 77-hour maritime rest rules, and thermal breaks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Muster Rolls:</strong> Form 25 statutory muster roll export, CLRA contractor compliance, and EPF/ESIC challans.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link href="/platform/workforce-management" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                <span>Explore Workforce Management & Floor Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Central Connecting Architecture Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Unified Ledger & Cost Allocation</h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              Regardless of whether compensation originates from monthly corporate CTC or daily piece-rate factory yields, Workforce360 reconciles all labor costs directly into your General Ledger chart of accounts (SAP, Oracle, NetSuite, Tally).
            </p>
          </div>
          <Link
            href="/platform/finance"
            className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition shadow"
          >
            See Payroll-to-GL Integration →
          </Link>
        </div>
      </div>
    </section>
  );
}
