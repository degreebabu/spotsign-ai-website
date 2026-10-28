import React from "react";
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  ArrowUpRight,
  ShieldCheck,
  Search,
  Filter,
  Layers,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface ProductScreenshotProps {
  type: "dashboard" | "attendance" | "payroll" | "ats";
  className?: string;
}

export default function ProductScreenshot({ type, className = "" }: ProductScreenshotProps) {
  if (type === "dashboard") {
    return (
      <div className={`rounded-2xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden text-slate-800 ${className}`}>
        {/* Window Chrome Header */}
        <div className="bg-slate-900 text-slate-400 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-3 font-mono text-[11px] text-slate-300">spotsign-ai/dashboard</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Data
            </span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">Workspace: ACME-GLOBAL</span>
          </div>
        </div>

        {/* Mock Application Sub-Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-slate-900">Executive Workforce Cockpit</h4>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Enterprise WOS
              </span>
            </div>
            <p className="text-xs text-slate-500">Real-time data across 14 entities and 3 shifts</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 bg-white border border-slate-200 rounded-md px-3 py-1.5 flex items-center gap-1.5 font-medium shadow-sm">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Oct 2026 • Cutoff in 4 Days</span>
            </span>
            <span className="text-xs text-white bg-blue-600 rounded-md px-3 py-1.5 font-medium shadow-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workflow Automation Active</span>
            </span>
          </div>
        </div>

        {/* Dashboard Metric Grid */}
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50/50">
          <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Active Headcount</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">3,482</div>
            <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+142 this quarter (Corporate & Shift)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Floor Shift Attendance</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">99.2%</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              <span>3,190 biometric punches synced</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Payroll Run-Rate (Monthly)</span>
              <DollarSign className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">₹4.82 Cr</div>
            <div className="text-[11px] text-blue-600 font-medium flex items-center gap-1 mt-1">
              <span>Variance: -0.4% vs Budget</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Attrition Risk Signals</span>
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-2xl font-extrabold text-indigo-600">12</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              <span>Retention reviews staged for Q4</span>
            </div>
          </div>
        </div>

        {/* Lower Work Table / Live Feed */}
        <div className="p-6 border-t border-slate-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Department Operations & Payroll Readiness
            </h5>
            <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">
              View Detailed Ledger →
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Business Unit</th>
                  <th className="py-2.5 px-3">Workforce Type</th>
                  <th className="py-2.5 px-3">Headcount</th>
                  <th className="py-2.5 px-3">Attendance</th>
                  <th className="py-2.5 px-3">Statutory Status</th>
                  <th className="py-2.5 px-3 text-right">Payroll Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Plant Alpha (Chennai)</td>
                  <td className="py-2.5 px-3"><span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[10px] font-medium border border-amber-200">3-Shift / Muster</span></td>
                  <td className="py-2.5 px-3">1,240</td>
                  <td className="py-2.5 px-3 text-emerald-600 font-medium">99.4% (eSSL sync)</td>
                  <td className="py-2.5 px-3 text-emerald-600 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> EPF/ESIC Valid</td>
                  <td className="py-2.5 px-3 text-right"><span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded text-[10px]">Verified</span></td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Software R&D (Bangalore)</td>
                  <td className="py-2.5 px-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-medium border border-blue-200">Corporate Salaried</span></td>
                  <td className="py-2.5 px-3">820</td>
                  <td className="py-2.5 px-3 text-slate-600 font-medium">97.8% (Hybrid SSO)</td>
                  <td className="py-2.5 px-3 text-emerald-600 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 115BAC Optimized</td>
                  <td className="py-2.5 px-3 text-right"><span className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded text-[10px]">Pre-Run Ready</span></td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold text-slate-900">Maritime Crew (Vessel Fleet)</td>
                  <td className="py-2.5 px-3"><span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[10px] font-medium border border-purple-200">STCW / Seafaring</span></td>
                  <td className="py-2.5 px-3">340</td>
                  <td className="py-2.5 px-3 text-purple-600 font-medium">STCW Compliant</td>
                  <td className="py-2.5 px-3 text-emerald-600 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> CDC Verified</td>
                  <td className="py-2.5 px-3 text-right"><span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded text-[10px]">Verified</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (type === "payroll") {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800 ${className}`}>
        <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-3 font-mono text-[11px] text-slate-300">spotsign-ai/payroll</span>
          </div>
          <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-800">
            STATUS: 0 ANOMALIES
          </span>
        </div>

        <div className="p-5 grid grid-cols-3 gap-3 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Total Gross Payroll</span>
            <div className="text-lg font-bold text-slate-900 mt-0.5">₹4,82,40,000</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Statutory Withholdings</span>
            <div className="text-lg font-bold text-blue-600 mt-0.5">₹78,12,400</div>
            <span className="text-[10px] text-slate-400">TDS + EPF + ESIC + PT</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Net Bank Disbursement</span>
            <div className="text-lg font-bold text-emerald-600 mt-0.5">₹4,04,27,600</div>
          </div>
        </div>

        <div className="p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">Electronic Challan (ECR) for EPFO: Verified</span>
            </div>
            <span className="font-mono text-[11px]">3,482 Active UANs</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-blue-50 text-blue-800 border border-blue-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Section 192 TDS Withholding: Dual Regimes Balanced</span>
            </div>
            <span className="font-mono text-[11px]">Form 12BB Proofs Locked</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-slate-50 text-slate-700 border border-slate-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="font-semibold">General Ledger Journal Posting: SAP & NetSuite Ready</span>
            </div>
            <span className="font-mono text-[11px]">DR Salaries / CR Banks</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ats") {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800 ${className}`}>
        {/* Chrome Bar */}
        <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-3 font-mono text-[11px] text-slate-300">spotsign-ai/recruitment</span>
          </div>
          <span className="bg-indigo-950 text-cyan-300 px-2 py-0.5 rounded text-[10px] font-mono border border-indigo-800 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Workflow Automation 03: Resume Screening Active
          </span>
        </div>

        {/* ATS Filter & Metrics Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm">Sr. Full-Stack Engineer</span>
            <span className="bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded text-[10px]">Job #REQ-094</span>
            <span className="text-slate-500">• 148 Applications</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-600 font-medium text-[11px] flex items-center gap-1">
              <Filter className="w-3 h-3 text-slate-400" />
              Min Fit Score: 85%+
            </span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded text-[11px] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Auto-Rank Candidates
            </button>
          </div>
        </div>

        {/* Kanban Columns */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-100/50 text-xs">
          {/* Column 1 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between font-bold text-slate-700 px-1">
              <span>Sourced / Applied</span>
              <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">42</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Vikramaditya S.</span>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">94% Fit</span>
              </div>
              <p className="text-[11px] text-slate-500">Ex-Razorpay • 6 yrs exp • Next.js, Go, PostgreSQL</p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                <span className="text-cyan-600 font-medium">Skills Match</span>
                <span>Applied 2h ago</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between font-bold text-slate-700 px-1">
              <span>Resume Screening</span>
              <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px]">12</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-300 shadow-sm space-y-2 ring-1 ring-blue-500/10">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Karthik Menon</span>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">96% Fit</span>
              </div>
              <p className="text-[11px] text-slate-500">Interview Questions Generated (System Design)</p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                <span className="text-indigo-600 font-semibold">Ready for Panel</span>
                <span className="text-emerald-600 font-medium">Resume Verified</span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between font-bold text-slate-700 px-1">
              <span>Technical Panel</span>
              <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[10px]">5</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Pooja Deshmukh</span>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">91% Fit</span>
              </div>
              <p className="text-[11px] text-slate-500">Score: 4.8/5.0 from Lead Architect • Recommendation: Hire</p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                <span className="text-amber-600 font-medium">Bar Raiser Scheduled</span>
                <span>Tomorrow 11 AM</span>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between font-bold text-slate-700 px-1">
              <span>Offer Staged</span>
              <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[10px]">2</span>
            </div>
            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-300 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Rohan Iyer</span>
                <span className="text-[10px] font-mono bg-emerald-600 text-white px-1.5 py-0.5 rounded font-bold">Approved</span>
              </div>
              <p className="text-[11px] text-slate-600">CTC ₹38 LPA • Compensation parity validated against internal bands</p>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-emerald-200">
                <span className="text-emerald-700 font-semibold">Auto-Draft Onboarding</span>
                <span>Joining Nov 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "attendance") {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800 ${className}`}>
        {/* Chrome Bar */}
        <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-3 font-mono text-[11px] text-slate-300">spotsign-ai/attendance</span>
          </div>
          <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-800">
            SYNCED: 42 BIOMETRIC TERMINALS LIVE
          </span>
        </div>

        {/* Terminal Summary Row */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Shift Attendance</span>
            <div className="text-lg font-bold text-slate-900 mt-0.5">99.4% Present</div>
            <span className="text-[10px] text-emerald-600 font-medium">3,190 punches today</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Biometric Devices</span>
            <div className="text-lg font-bold text-blue-600 mt-0.5">42 / 42 Online</div>
            <span className="text-[10px] text-slate-400">eSSL, ZKTeco & Suprema</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Geofence Compliance</span>
            <div className="text-lg font-bold text-emerald-600 mt-0.5">100% Inside Beat</div>
            <span className="text-[10px] text-slate-400">540 Field Staff Monitored</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 text-[10px] uppercase font-bold">Overtime Guardrail</span>
            <div className="text-lg font-bold text-amber-600 mt-0.5">14 Audited Approvals</div>
            <span className="text-[10px] text-amber-700">Factories Act 50hr cap enforced</span>
          </div>
        </div>

        {/* Live Rostering & Punch Log Table */}
        <div className="p-4 overflow-x-auto text-xs">
          <table className="w-full text-left">
            <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Worker ID & Name</th>
                <th className="py-2.5 px-3">Location / Plant</th>
                <th className="py-2.5 px-3">Shift Assigned</th>
                <th className="py-2.5 px-3">Check-In Method</th>
                <th className="py-2.5 px-3">Time & Coordinates</th>
                <th className="py-2.5 px-3 text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-2 px-3 font-semibold text-slate-900">WF-2094 Suresh Kumar</td>
                <td className="py-2 px-3">Plant Alpha (Chennai Bay 3)</td>
                <td className="py-2 px-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-medium border border-blue-200">Shift A (06:00 - 14:00)</span></td>
                <td className="py-2 px-3 text-slate-600">Biometric Palm Sensor #12</td>
                <td className="py-2 px-3 font-mono text-[11px]">05:54:12 IST (On-Time)</td>
                <td className="py-2 px-3 text-right"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">Verified</span></td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold text-slate-900">WF-1842 Rajeshwari M.</td>
                <td className="py-2 px-3">Retail Store #04 (Bangalore)</td>
                <td className="py-2 px-3"><span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-medium border border-indigo-200">Retail General (10:00 - 19:00)</span></td>
                <td className="py-2 px-3 text-slate-600">Mobile Geofence Punch</td>
                <td className="py-2 px-3 font-mono text-[11px]">09:58:04 IST • 12.9716° N, 77.5946° E</td>
                <td className="py-2 px-3 text-right"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">Inside Geofence</span></td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-semibold text-slate-900">WF-3105 Capt. Arindam Sen</td>
                <td className="py-2 px-3">Vessel Ocean Star (At Sea)</td>
                <td className="py-2 px-3"><span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[10px] font-medium border border-purple-200">STCW Watchkeeping 4/8</span></td>
                <td className="py-2 px-3 text-slate-600">Offline Synced CDC Log</td>
                <td className="py-2 px-3 font-mono text-[11px]">Rest Hours: 11h/24h Validated</td>
                <td className="py-2 px-3 text-right"><span className="bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded text-[10px]">STCW Pass</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden text-slate-800 ${className}`}>
      <div className="bg-slate-900 text-slate-400 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-3 font-mono text-[11px] text-slate-300">spotsign-ai/dashboard</span>
        </div>
        <span className="text-emerald-400 text-[11px]">Live Workspace</span>
      </div>
      <div className="p-8 text-center text-xs text-slate-500">Enterprise Module Configured</div>
    </div>
  );
}
