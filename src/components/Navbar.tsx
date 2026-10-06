"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Users, 
  Clock, 
  DollarSign, 
  Cpu, 
  BrainCircuit, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Layers,
  Scale
} from "lucide-react";
import navData from "../../content/navigation.json";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveFlyout(null);
  }, [pathname]);

  // Click outside to close desktop flyouts
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveFlyout(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFlyout = (name: string) => {
    setActiveFlyout(activeFlyout === name ? null : name);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "people": return <Users className="w-4 h-4 text-blue-600" />;
      case "work": return <Clock className="w-4 h-4 text-emerald-600" />;
      case "money": return <DollarSign className="w-4 h-4 text-amber-600" />;
      case "operations": return <Cpu className="w-4 h-4 text-purple-600" />;
      case "intelligence": return <BrainCircuit className="w-4 h-4 text-cyan-600" />;
      default: return <Layers className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200 transition-all">
      {/* Top micro-bar for trust */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-semibold tracking-wide text-white">Workforce360</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">The AI-Native Workforce Operating System</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Powered by Spotsign</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/compare" className="text-slate-300 hover:text-white transition flex items-center gap-1">
              <Scale className="w-3 h-3 text-blue-400" />
              <span>Platform Comparison</span>
            </Link>
            <Link href="/security" className="text-slate-300 hover:text-white transition flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Trust & Architecture</span>
            </Link>
            <Link href="/llm-info" className="text-cyan-400 hover:text-cyan-300 transition text-[11px] font-mono">
              /llms.txt
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-navy-900 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-blue-500/20 transition">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                Workforce<span className="text-blue-600">360</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-500">
                A DIMENSHION Product
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {/* Platform Mega Menu */}
            <div className="relative">
              <button
                onClick={() => toggleFlyout("platform")}
                aria-expanded={activeFlyout === "platform"}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition ${
                  activeFlyout === "platform" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Platform</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeFlyout === "platform" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeFlyout === "platform" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[920px] bg-white rounded-2xl shadow-elevated-lg border border-slate-200 p-6 grid grid-cols-5 gap-6 animate-in fade-in duration-150">
                  {navData.pillars.map((pillar) => (
                    <div key={pillar.id} className="space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                        {getPillarIcon(pillar.id)}
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{pillar.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {pillar.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group block p-1.5 rounded-lg hover:bg-slate-50 transition"
                            >
                              <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition">
                                {item.name}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                                {item.desc}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Bottom strip in mega menu */}
                  <div className="col-span-5 pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <div className="flex items-center gap-6">
                      <span className="font-semibold text-slate-700">Flagship Capabilities:</span>
                      <Link href="/platform/digital-twin" className="flex items-center gap-1.5 text-blue-600 font-medium hover:underline">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Workforce Digital Twin Simulator</span>
                      </Link>
                      <Link href="/platform/ai" className="flex items-center gap-1.5 text-indigo-600 font-medium hover:underline">
                        <BrainCircuit className="w-3.5 h-3.5" />
                        <span>40 Genkit AI Flows & Digital Brain</span>
                      </Link>
                    </div>
                    <Link href="/platform" className="text-slate-600 font-semibold hover:text-blue-600 flex items-center gap-1">
                      <span>View All Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* AI Direct Link */}
            <Link
              href="/platform/ai"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-md transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI & Brain</span>
            </Link>

            {/* Digital Twin Direct Link */}
            <Link
              href="/platform/digital-twin"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-md transition"
            >
              Digital Twin
            </Link>

            {/* Industries Mega Menu (All 19) */}
            <div className="relative">
              <button
                onClick={() => toggleFlyout("industries")}
                aria-expanded={activeFlyout === "industries"}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition ${
                  activeFlyout === "industries" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Industries</span>
                <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">19</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeFlyout === "industries" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeFlyout === "industries" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-white rounded-2xl shadow-elevated-lg border border-slate-200 p-6 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">19 Pre-Built Industry Vertical Packs</h3>
                      <p className="text-xs text-slate-500">Configured departments, roles, shift rules, and statutory compliance out of the box.</p>
                    </div>
                    <Link href="/industries" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                      <span>Explore All 19</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-2">
                    {navData.industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="group p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition"
                      >
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                          <span>{ind.name}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5 truncate font-mono">
                          {ind.highlight}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleFlyout("solutions")}
                aria-expanded={activeFlyout === "solutions"}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition ${
                  activeFlyout === "solutions" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeFlyout === "solutions" ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
              </button>

              {activeFlyout === "solutions" && (
                <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-elevated-lg border border-slate-200 p-4 animate-in fade-in duration-150">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">Solutions by Role</h3>
                  <div className="space-y-1">
                    {navData.solutions.map((sol) => (
                      <Link
                        key={sol.slug}
                        href={`/solutions/${sol.slug}`}
                        className="group flex flex-col p-2 rounded-lg hover:bg-slate-50 transition"
                      >
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition">
                          For {sol.role}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1">
                          {sol.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Compare */}
            <Link
              href="/compare"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-md transition"
            >
              Compare
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-md transition"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/demo"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 max-h-[85vh] overflow-y-auto space-y-4 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2">Platform Pillars</div>
            <Link href="/platform" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Platform Architecture Overview
            </Link>
            <Link href="/platform/digital-twin" className="block px-3 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-slate-100 flex items-center justify-between">
              <span>Workforce Digital Twin Simulator</span>
              <Sparkles className="w-4 h-4" />
            </Link>
            <Link href="/platform/ai" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              AI Workforce Intelligence (40 Genkit Flows)
            </Link>
            <Link href="/platform/hris" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Core HR & HRIS
            </Link>
            <Link href="/platform/workforce-management" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Workforce Management & Shift Rostering
            </Link>
            <Link href="/platform/attendance" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Biometric Attendance & Geofencing
            </Link>
            <Link href="/platform/payroll" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Enterprise Payroll & Piece-Rate Engine
            </Link>
            <Link href="/platform/tax-compliance" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Statutory Tax (TDS, PF, ESIC, Form 16)
            </Link>
            <Link href="/platform/recruitment" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              AI Recruitment ATS & Candidate Scoring
            </Link>
            <Link href="/platform/performance" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Performance, OKRs & 9-Box Calibration
            </Link>
            <Link href="/platform/it-assets" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              IT Asset Governance & Offboarding Lock
            </Link>
            <Link href="/platform/finance" className="block px-3 py-2 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100">
              Workforce Finance & General Ledger Sync
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Featured Industry Packs (19 Total)</div>
            <Link href="/industries/shipping-maritime" className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600">
              Shipping & Maritime (STCW Rest Hours)
            </Link>
            <Link href="/industries/seafood-processing" className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600">
              Seafood Processing (Piece-Rate Gangs)
            </Link>
            <Link href="/industries/manufacturing" className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600">
              Manufacturing (3-Shift Rotas & Muster)
            </Link>
            <Link href="/industries/healthcare" className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600">
              Healthcare & Hospitals (On-Call Rotas)
            </Link>
            <Link href="/industries" className="block px-3 py-2 text-xs font-bold text-blue-600">
              View All 19 Vertical Packs →
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Solutions & Trust</div>
            <Link href="/solutions" className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Solutions by Executive Role
            </Link>
            <Link href="/compare" className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Platform Capability Comparison
            </Link>
            <Link href="/security" className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Security & Multi-Tenant Trust
            </Link>
            <Link href="/pricing" className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Enterprise Plans & Pricing
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/demo"
              className="block w-full text-center py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md"
            >
              Request an Enterprise Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
