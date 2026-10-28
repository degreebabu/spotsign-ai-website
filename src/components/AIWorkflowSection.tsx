"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  BrainCircuit, 
  Search, 
  AlertTriangle, 
  TrendingDown, 
  FileText, 
  Users, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface AIFlow {
  id: string;
  category: string;
  title: string;
  description: string;
  promptExample: string;
  outputPreview: {
    label: string;
    value: string;
    details: string;
    action: string;
  };
}

const aiFlows: AIFlow[] = [
  {
    id: "attrition",
    category: "PREDICTIVE TALENT",
    title: "Employee Attrition Risk Telemetry",
    description: "Evaluates tenure curves, compensation benchmarks, and overtime fatigue to surface retention risks before formal resignation notices.",
    promptExample: "Audit voluntary flight risks in Regional Logistics hubs for Q4.",
    outputPreview: {
      label: "Identified Flight Risk",
      value: "Senior Fleet Dispatchers (Hub South)",
      details: "Consecutive 60h weeks + compensation 14% below regional benchmark detected.",
      action: "Recommended: Trigger manager retention 1-on-1 & comp calibration.",
    },
  },
  {
    id: "payroll-anomaly",
    category: "FINANCIAL GOVERNANCE",
    title: "Pre-Payroll Anomaly Sentinel",
    description: "Scans raw biometric attendance, overtime claims, and compensation structures before bank file generation to catch costly calculation errors.",
    promptExample: "Execute pre-payroll variance audit on October 2026 Batch #2.",
    outputPreview: {
      label: "Audit Anomaly Detected",
      value: "3 Ghost Records & 1 Excessive OT Claim",
      details: "Worker ID #419 logged 48h continuous shift without scheduled rest floor.",
      action: "Action: Auto-flagged for Shift Supervisor manual approval before disbursement.",
    },
  },
  {
    id: "resume-ats",
    category: "TALENT ACQUISITION",
    title: "Contextual Resume Screening & Gap Analysis",
    description: "Parses applicant CVs against strict job requisition rubrics, scoring candidate competency fit and highlighting missing certifications.",
    promptExample: "Score 48 incoming applicants for Senior DevOps Engineer opening.",
    outputPreview: {
      label: "Top Candidate Identified",
      value: "Fit Score: 94% (Kubernetes, Terraform, AWS)",
      details: "Certified AWS Solutions Architect verified; lacks GCP production experience.",
      action: "Action: Auto-generated 3 tailored Kubernetes scenario interview questions.",
    },
  },
  {
    id: "demand-forecast",
    category: "WORKFORCE OPERATIONS",
    title: "Workforce Demand & Roster Forecasting",
    description: "Projects future shift staffing requirements based on historical seasonal footfall, factory output targets, and statutory leave trends.",
    promptExample: "Forecast December festival staffing demand for 12 retail mall outlets.",
    outputPreview: {
      label: "Projected Staffing Deficit",
      value: "+34 Frontline Associates Required",
      details: "Peak weekend footfall predicted at 2.4x standard baseline in Metro stores.",
      action: "Action: Generated temporary staffing requisition queue for HR approval.",
    },
  },
  {
    id: "nl-reporting",
    category: "EXECUTIVE INTELLIGENCE",
    title: "Natural Language Executive Reporting",
    description: "Translates plain-English executive questions into multi-entity SQL queries, returning instant tabular charts and trend analytics.",
    promptExample: "Show total overtime expenditure by plant location over the last 6 months.",
    outputPreview: {
      label: "Generated Report Query",
      value: "Total Overtime: ₹84.2 Lakhs Across 3 Plants",
      details: "Plant Alpha accounted for 62% of overtime due to emergency assembly retooling.",
      action: "Action: Report compiled with 1-click export to Board PDF & Excel formats.",
    },
  },
];

export default function AIWorkflowSection() {
  const [activeFlow, setActiveFlow] = useState<AIFlow>(aiFlows[0]);

  return (
    <section className="bg-slate-950 text-white py-24 border-t border-b border-indigo-950/80 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/60 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>40 PRODUCTION GENKIT AI FLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            AI That Works Across the Workforce — Not Just in a Chatbot.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            SpotSign AI embeds 40 purpose-built Google Genkit AI flows directly into daily operations. From surfacing payroll anomalies before bank payout to predicting attrition and generating interview scorecards, AI operates natively inside the flow of work.
          </p>
        </div>

        {/* Interactive Capability Map */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Flow Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Explore Operational Genkit AI Flows:
            </span>
            {aiFlows.map((flow) => {
              const isActive = activeFlow.id === flow.id;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveFlow(flow)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-600/10"
                      : "bg-slate-900/40 border-slate-800 hover:bg-slate-900 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400">
                      {flow.category}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                  </div>
                  <h3 className="text-sm font-bold text-white mt-1">{flow.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{flow.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Live Simulation Card */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-indigo-900/70 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold text-white">{activeFlow.title}</span>
              </div>
              <span className="text-[11px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
                GENKIT FLOW ACTIVE
              </span>
            </div>

            {/* Prompt Trigger */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                System Trigger / Manager Query:
              </span>
              <p className="text-sm font-mono text-cyan-300 font-medium">
                &ldquo;{activeFlow.promptExample}&rdquo;
              </p>
            </div>

            {/* AI Synthesized Telemetry */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Autonomous AI Sentinel Output:
              </span>

              <div className="bg-slate-950/90 p-5 rounded-xl border border-indigo-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                    {activeFlow.outputPreview.label}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Confidence: 98.4%</span>
                  </span>
                </div>

                <div className="text-lg font-bold text-white">
                  {activeFlow.outputPreview.value}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeFlow.outputPreview.details}
                </p>

                <div className="pt-2 border-t border-slate-850 flex items-center gap-2 text-xs text-cyan-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeFlow.outputPreview.action}</span>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Training on Public Foundation Models</span>
              </span>
              <Link href="/ai" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
                <span>View All 40 AI Flows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
