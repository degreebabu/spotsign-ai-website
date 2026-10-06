import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import navData from "../../content/navigation.json";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>CATEGORY DEFINING OPERATING SYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to run your entire workforce as one unified system?
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Connect People, Work, Money, IT Operations, and AI Intelligence across your corporate and frontline operations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              Request a Live Demo
            </Link>
            <Link
              href="/platform/digital-twin"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
            >
              Explore Digital Twin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                W
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Workforce<span className="text-blue-400">360</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                  A DIMENSHION Product
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The AI-Native Workforce Operating System that unifies HRMS, workforce management, biometric attendance, statutory payroll, IT assets, and scenario simulation across 19 specialized industries.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Powered by Spotsign</div>
              <div className="text-slate-400">Built for corporate knowledge workers and complex operational workforces.</div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Multi-Tenant Sovereign Architecture</span>
            </div>
          </div>

          {/* People & Work Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              People & Work
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/platform/hris" className="text-slate-400 hover:text-white transition">Core HR & HRIS</Link></li>
              <li><Link href="/platform/employee-lifecycle" className="text-slate-400 hover:text-white transition">Employee Lifecycle</Link></li>
              <li><Link href="/platform/recruitment" className="text-slate-400 hover:text-white transition">AI Recruitment (ATS)</Link></li>
              <li><Link href="/platform/performance" className="text-slate-400 hover:text-white transition">Performance & OKRs</Link></li>
              <li><Link href="/platform/learning" className="text-slate-400 hover:text-white transition">Learning & LMS</Link></li>
              <li><Link href="/platform/workforce-management" className="text-slate-400 hover:text-white transition">Workforce Management</Link></li>
              <li><Link href="/platform/attendance" className="text-slate-400 hover:text-white transition">Biometrics & Attendance</Link></li>
              <li><Link href="/platform/field-workforce" className="text-slate-400 hover:text-white transition">Field Workforce (GPS)</Link></li>
            </ul>
          </div>

          {/* Money & Intelligence */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Money & Intelligence
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/platform/payroll" className="text-slate-400 hover:text-white transition">Enterprise Payroll</Link></li>
              <li><Link href="/platform/tax-compliance" className="text-slate-400 hover:text-white transition">Indian Statutory Tax</Link></li>
              <li><Link href="/platform/expenses" className="text-slate-400 hover:text-white transition">Expense Claims</Link></li>
              <li><Link href="/platform/finance" className="text-slate-400 hover:text-white transition">General Ledger Sync</Link></li>
              <li><Link href="/platform/digital-twin" className="text-blue-400 hover:text-blue-300 transition font-medium">Workforce Digital Twin</Link></li>
              <li><Link href="/platform/ai" className="text-indigo-400 hover:text-indigo-300 transition font-medium">40 Genkit AI Flows</Link></li>
              <li><Link href="/platform/analytics" className="text-slate-400 hover:text-white transition">Workforce Analytics</Link></li>
              <li><Link href="/platform/it-assets" className="text-slate-400 hover:text-white transition">IT Asset Governance</Link></li>
            </ul>
          </div>

          {/* Industries (Top Verticals) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              19 Industry Packs
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/industries/shipping-maritime" className="text-slate-400 hover:text-white transition">Shipping & Maritime (STCW)</Link></li>
              <li><Link href="/industries/seafood-processing" className="text-slate-400 hover:text-white transition">Seafood (Piece-Rate)</Link></li>
              <li><Link href="/industries/logistics-freight" className="text-slate-400 hover:text-white transition">Logistics & Freight</Link></li>
              <li><Link href="/industries/manufacturing" className="text-slate-400 hover:text-white transition">Manufacturing (3-Shift)</Link></li>
              <li><Link href="/industries/chemical-hazardous" className="text-slate-400 hover:text-white transition">Chemical (EHS Safety)</Link></li>
              <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-white transition">Healthcare & Hospitals</Link></li>
              <li><Link href="/industries/hospitality" className="text-slate-400 hover:text-white transition">Hospitality & Hotels</Link></li>
              <li><Link href="/industries/retail-ecommerce" className="text-slate-400 hover:text-white transition">Retail & E-Commerce</Link></li>
              <li><Link href="/industries" className="text-blue-400 hover:underline flex items-center gap-1 font-semibold">View All 19 Packs →</Link></li>
            </ul>
          </div>

          {/* Solutions & Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Solutions & Trust
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/chro" className="text-slate-400 hover:text-white transition">For CHROs</Link></li>
              <li><Link href="/solutions/payroll-manager" className="text-slate-400 hover:text-white transition">For Payroll Managers</Link></li>
              <li><Link href="/solutions/cfo-finance" className="text-slate-400 hover:text-white transition">For CFO & Finance</Link></li>
              <li><Link href="/solutions/operations" className="text-slate-400 hover:text-white transition">For Operations Heads</Link></li>
              <li><Link href="/solutions/it-leader" className="text-slate-400 hover:text-white transition">For IT Directors</Link></li>
              <li><Link href="/compare" className="text-slate-400 hover:text-white transition">Capability Comparison</Link></li>
              <li><Link href="/security" className="text-slate-400 hover:text-white transition">Security & Multi-Tenancy</Link></li>
              <li><Link href="/resources/faq" className="text-slate-400 hover:text-white transition">Knowledge Base & FAQ</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-white transition">Enterprise Pricing</Link></li>
            </ul>
          </div>
        </div>

        {/* Machine-Readable / LLM Spec Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-slate-300">Machine-Readable & AI Protocols:</span>
            <Link href="/llm-info" className="text-cyan-400 hover:underline flex items-center gap-1">
              <span>Canonical LLM Directory (/llm-info)</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white font-mono">
              /llms.txt
            </a>
            <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white font-mono">
              /llms-full.txt
            </a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white font-mono">
              /sitemap.xml
            </a>
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            Designed with enterprise security principles: tenant isolation, RBAC, and immutable audit logs.
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Workforce360 • Powered by Spotsign • A DIMENSHION Product. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-400 transition">About</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Contact</Link>
            <Link href="/security" className="hover:text-slate-400 transition">Security</Link>
            <Link href="/compliance" className="hover:text-slate-400 transition">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
