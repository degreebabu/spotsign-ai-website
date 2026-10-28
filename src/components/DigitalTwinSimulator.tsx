"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sliders, Sparkles, TrendingDown, TrendingUp, AlertTriangle, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  description: string;
  headcountDelta: string;
  monthlyRunRateDelta: string;
  annualSavings: string;
  severanceReserve: string;
  paybackMonths: string;
  skillDeficit: string;
  operationalRisk: "Low" | "Medium" | "High";
}

const scenarios: Scenario[] = [
  {
    id: "reorg-tech",
    name: "Tech Consolidation & AI Engineering Ramp",
    description: "Re-skill 15 legacy operations roles into AI engineering while expanding product pods by 12%.",
    headcountDelta: "+8 net (+12 AI / -4 redundant)",
    monthlyRunRateDelta: "+₹14.2 Lakhs",
    annualSavings: "P&L neutral via 22% velocity lift",
    severanceReserve: "₹18.5 Lakhs (planned redeployments)",
    paybackMonths: "Immediate",
    skillDeficit: "0 Critical Gaps (in-house re-skilling)",
    operationalRisk: "Low",
  },
  {
    id: "reduce-commercial",
    name: "Commercial & Sales Overhead Optimization (-10%)",
    description: "Streamline regional commercial overhead across 4 regional territories with territory consolidation.",
    headcountDelta: "-28 Regional Sales Representatives",
    monthlyRunRateDelta: "-₹32.6 Lakhs / month",
    annualSavings: "₹3.91 Cr annualized savings",
    severanceReserve: "₹52.4 Lakhs (gratuity + notice)",
    paybackMonths: "1.6 Months",
    skillDeficit: "2 Key Account relationships flagged",
    operationalRisk: "Medium",
  },
  {
    id: "plant-consolidation",
    name: "Factory Shift Consolidation (3 Rotas to 2)",
    description: "Consolidate 3 plant shifts into 2 high-throughput daytime rotas with increased automated line speeds.",
    headcountDelta: "-45 Contract Laborers",
    monthlyRunRateDelta: "-₹18.4 Lakhs (overtime & night diff)",
    annualSavings: "₹2.20 Cr annualized savings",
    severanceReserve: "₹12.0 Lakhs (contractor notice clauses)",
    paybackMonths: "0.8 Months",
    skillDeficit: "1 Certified Boiler Operator required",
    operationalRisk: "Medium",
  },
  {
    id: "new-hub",
    name: "New Regional Logistics Hub Ramp (+50)",
    description: "Model opening a tier-2 logistics hub with 40 drivers, 8 warehouse packers, and 2 supervisors.",
    headcountDelta: "+50 New Frontline Logistics Staff",
    monthlyRunRateDelta: "+₹21.5 Lakhs / month",
    annualSavings: "₹45.0 Lakhs projected new freight revenue",
    severanceReserve: "₹0 (new hiring ramp)",
    paybackMonths: "3.2 Months to cash positive",
    skillDeficit: "Commercial driver licenses required",
    operationalRisk: "Low",
  },
];

export default function DigitalTwinSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[1]);

  return (
    <div className="rounded-3xl border border-indigo-950/80 bg-slate-950 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SCENARIO SIMULATOR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Simulate Workforce Restructuring in Real Time
          </h3>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            Test strategic levers on an isolated organizational graph. Project P&L delta, severance liability, and skills deficits before making executive commitments.
          </p>
        </div>
        <div className="text-xs text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-xl flex items-center gap-2 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Non-Destructive Sandbox • Zero Live Data Impact</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="relative z-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Scenario Selection Buttons */}
        <div className="lg:col-span-5 space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Select a Scenario to Model:
          </label>
          {scenarios.map((sc) => {
            const isSelected = selectedScenario.id === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScenario(sc)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-500/10 text-white"
                    : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">{sc.name}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {sc.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Real-Time Projected Outputs */}
        <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Model</span>
              <h4 className="text-base font-bold text-white">{selectedScenario.name}</h4>
            </div>
            <span className="text-xs font-mono bg-indigo-900/60 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-700/40">
              Graph Engine: OK
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Metric 1 */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Headcount Delta</span>
              <div className="text-xl font-extrabold text-white mt-1 font-mono">
                {selectedScenario.headcountDelta}
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Full-time & contract balance</span>
            </div>

            {/* Metric 2 */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Monthly Payroll Delta</span>
              <div className="text-xl font-extrabold text-emerald-400 mt-1 font-mono">
                {selectedScenario.monthlyRunRateDelta}
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Gross run-rate adjustment</span>
            </div>

            {/* Metric 3 */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Severance / Notice Reserve</span>
              <div className="text-xl font-extrabold text-amber-400 mt-1 font-mono">
                {selectedScenario.severanceReserve}
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Tenure-calculated statutory gratuity</span>
            </div>

            {/* Metric 4 */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Payback Horizon</span>
              <div className="text-xl font-extrabold text-cyan-400 mt-1 font-mono">
                {selectedScenario.paybackMonths}
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">Break-even capital timeline</span>
            </div>
          </div>

          {/* AI Skill Deficit & Risk Advisory */}
          <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <div className="font-bold text-amber-300">Operational Risk: {selectedScenario.operationalRisk}</div>
              <p className="text-slate-300">{selectedScenario.skillDeficit}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator Footer Action */}
      <div className="relative z-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-slate-400">
          *Values represent illustrative planning simulation calculations for demonstration purposes.
        </span>
        <Link
          href="/ai"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md transition"
        >
          <span>Explore AI Capabilities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
