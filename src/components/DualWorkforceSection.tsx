"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Factory, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock, Layers } from "lucide-react";

export default function DualWorkforceSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>DUAL-WORKFORCE OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            One Platform for Desk, Field, and Floor.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Most HR platforms were designed exclusively for desk-based corporate staff. SpotSign AI uniquely bridges corporate salaried professionals with frontline industrial, shift-based, and variable-wage workforces under a single unified operating model.
          </p>
        </div>

        {/* Dual Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Corporate / White-Collar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 flex flex-col justify-between hover:shadow-2xl hover:border-blue-300 transition duration-300 overflow-hidden group"
          >
            <div className="space-y-6">
              {/* Stock Photo Banner */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/corporate-workforce.jpg"
                  alt="Corporate Knowledge Workers in Modern Office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end justify-between p-4">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md shadow-sm">
                    Corporate & Knowledge Teams
                  </span>
                  <span className="text-[11px] font-mono text-blue-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-blue-400/30">
                    CTC & Salaried
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Knowledge Workers</span>
                  <h3 className="text-xl font-bold text-slate-900">Corporate & Knowledge Workforce</h3>
                </div>
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
              <Link href="/platform/hris" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Corporate HRIS & Talent Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Operational / Blue-Collar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 flex flex-col justify-between hover:shadow-2xl hover:border-amber-300 transition duration-300 overflow-hidden group"
          >
            <div className="space-y-6">
              {/* Stock Photo Banner */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/frontline-workforce.jpg"
                  alt="Frontline and Floor Operations Workers with Digital Tablet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end justify-between p-4">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full bg-amber-600/90 backdrop-blur-md shadow-sm">
                    Floor & Shift Operations
                  </span>
                  <span className="text-[11px] font-mono text-amber-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded border border-amber-400/30">
                    Shift & Piece-Rate
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Frontline & Shift Operations</span>
                  <h3 className="text-xl font-bold text-slate-900">Operational & Variable Workforce</h3>
                </div>
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
              <Link href="/platform/workforce-management" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Workforce Management & Floor Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Central Connecting Platform Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-indigo-950 p-6 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-xl font-bold text-white tracking-tight">Unified Ledger & Cost Allocation</h4>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
              Regardless of whether compensation originates from monthly corporate CTC or daily piece-rate factory yields, SpotSign AI reconciles all labor costs directly into your General Ledger chart of accounts (SAP, Oracle, NetSuite, Tally).
            </p>
          </div>
          <Link
            href="/platform/finance"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition shadow-lg relative z-10 transform hover:scale-105"
          >
            See Payroll-to-GL Integration →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
