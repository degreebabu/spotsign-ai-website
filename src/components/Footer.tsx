import React from "react";
import Link from "next/link";
import Image from "next/image";
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
              Connect People, Work, Money, IT Operations, and Workforce Analytics across your corporate and frontline operations.
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
              href="/platform/analytics"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
            >
              Explore Workforce Analytics
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="SpotSign AI Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain drop-shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  SpotSign<span className="text-blue-400"> AI</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                  Powered by Spotsign Workforce360
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The Enterprise Workforce Operating System that unifies HRMS, workforce management, biometric attendance, statutory payroll, IT assets, and workforce analytics across 19 specialized industries.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Powered by Spotsign Workforce360</div>
              <div className="text-slate-400">Built for corporate knowledge workers and complex operational workforces.</div>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Enterprise-Grade Security & Access Controls</span>
            </div>
          </div>

          {/* 1. People & Work */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              People & Work
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/platform/hris" className="text-slate-400 hover:text-white transition">Core HR & HRIS</Link></li>
              <li><Link href="/platform/employee-lifecycle" className="text-slate-400 hover:text-white transition">Employee Lifecycle</Link></li>
              <li><Link href="/platform/recruitment" className="text-slate-400 hover:text-white transition">Recruitment (ATS)</Link></li>
              <li><Link href="/platform/performance" className="text-slate-400 hover:text-white transition">Performance & OKRs</Link></li>
              <li><Link href="/platform/learning" className="text-slate-400 hover:text-white transition">Learning & LMS</Link></li>
              <li><Link href="/platform/workforce-management" className="text-slate-400 hover:text-white transition">Workforce Management</Link></li>
              <li><Link href="/platform/attendance" className="text-slate-400 hover:text-white transition">Biometrics & Attendance</Link></li>
              <li><Link href="/platform/field-workforce" className="text-slate-400 hover:text-white transition">Field Workforce (GPS)</Link></li>
            </ul>
          </div>

          {/* 2. Finance & Insights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Finance & Insights
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/platform/payroll" className="text-slate-400 hover:text-white transition">Enterprise Payroll</Link></li>
              <li><Link href="/platform/tax-compliance" className="text-slate-400 hover:text-white transition">Indian Statutory Tax</Link></li>
              <li><Link href="/platform/expenses" className="text-slate-400 hover:text-white transition">Expense Claims</Link></li>
              <li><Link href="/platform/finance" className="text-slate-400 hover:text-white transition">General Ledger Sync</Link></li>
              <li><Link href="/platform/analytics" className="text-slate-400 hover:text-white transition">Workforce Analytics</Link></li>
              <li><Link href="/ai" className="text-indigo-400 hover:text-indigo-300 transition font-medium">AI Capabilities</Link></li>
              <li><Link href="/platform/it-assets" className="text-slate-400 hover:text-white transition">IT Asset Governance</Link></li>
            </ul>
          </div>

          {/* 3. Solutions & Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Solutions & Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions" className="text-slate-400 hover:text-white transition">By Executive Persona</Link></li>
              <li><Link href="/use-cases" className="text-slate-400 hover:text-white transition">Enterprise Use Cases</Link></li>
              <li><Link href="/resources" className="text-slate-400 hover:text-white transition">Resource Hub</Link></li>
              <li><Link href="/resources/reports" className="text-slate-400 hover:text-white transition">Industry Reports</Link></li>
              <li><Link href="/resources/webinars" className="text-slate-400 hover:text-white transition">Executive Webinars</Link></li>
              <li><Link href="/resources/case-studies" className="text-slate-400 hover:text-white transition">Customer Case Studies</Link></li>
              <li><Link href="/resources/templates" className="text-slate-400 hover:text-white transition">HR & Payroll Templates</Link></li>
              <li><Link href="/resources/whitepapers" className="text-slate-400 hover:text-white transition">Whitepapers</Link></li>
              <li><Link href="/resources/faq" className="text-slate-400 hover:text-white transition">Knowledge Base & FAQ</Link></li>
              <li><Link href="/resources/glossary" className="text-slate-400 hover:text-white transition">Workforce Glossary</Link></li>
            </ul>
          </div>

          {/* 4. Compare */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Compare
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/compare" className="text-blue-400 hover:underline font-semibold">Capability Matrix →</Link></li>
              <li><Link href="/compare/workday" className="text-slate-400 hover:text-white transition">vs Workday</Link></li>
              <li><Link href="/compare/sap" className="text-slate-400 hover:text-white transition">vs SAP SuccessFactors</Link></li>
              <li><Link href="/compare/oracle" className="text-slate-400 hover:text-white transition">vs Oracle HCM Cloud</Link></li>
              <li><Link href="/compare/rippling" className="text-slate-400 hover:text-white transition">vs Rippling</Link></li>
              <li><Link href="/compare/darwinbox" className="text-slate-400 hover:text-white transition">vs Darwinbox</Link></li>
              <li><Link href="/compare/keka" className="text-slate-400 hover:text-white transition">vs Keka HR</Link></li>
              <li><Link href="/compare/bamboohr" className="text-slate-400 hover:text-white transition">vs BambooHR</Link></li>
              <li><Link href="/compare/deel" className="text-slate-400 hover:text-white transition">vs Deel</Link></li>
              <li><Link href="/compare/hibob" className="text-slate-400 hover:text-white transition">vs HiBob</Link></li>
              <li><Link href="/compare/zoho" className="text-slate-400 hover:text-white transition">vs Zoho People</Link></li>
              <li><Link href="/compare/gusto" className="text-slate-400 hover:text-white transition">vs Gusto</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} SpotSign AI • Powered by Spotsign Workforce360. All rights reserved.
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
