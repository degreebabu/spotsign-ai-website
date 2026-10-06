"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Users } from "lucide-react";
import navData from "../../content/navigation.json";

export default function DemoForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    workEmail: "",
    fullName: "",
    companyName: "",
    workforceSize: "101-500",
    industry: "manufacturing",
    primaryInterest: "Full Workforce Operating System",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.workEmail && formData.fullName && formData.companyName) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Demonstration Request Received</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, {formData.fullName}. A Workforce360 enterprise solutions architect specializing in the{" "}
            <span className="font-semibold text-blue-600">
              {navData.industries.find((i) => i.slug === formData.industry)?.name || formData.industry}
            </span>{" "}
            pack will contact you at <span className="font-semibold text-slate-900">{formData.workEmail}</span> within 4 business hours.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1">
          <div><strong>Configured Scope:</strong> {formData.primaryInterest}</div>
          <div><strong>Workforce Size:</strong> {formData.workforceSize} Employees</div>
          <div><strong>Enterprise SLA:</strong> Dedicated architectural walkthrough</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Solutions Briefing</span>
          <h3 className="text-xl font-bold text-slate-900">Schedule a Tailored Demonstration</h3>
        </div>
        <div className="flex items-center space-x-2 text-xs font-semibold">
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 1 ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"}`}>
            1
          </span>
          <span className="text-slate-300">──</span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 2 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
            2
          </span>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="workEmail">
              Corporate Work Email *
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="fullName">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="companyName">
              Company Name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Organization Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition"
            >
              <span>Continue to Step 2</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="workforceSize">
              Total Workforce Size (Corporate + Frontline)
            </label>
            <select
              id="workforceSize"
              name="workforceSize"
              value={formData.workforceSize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
            >
              <option value="1-100">1 – 100 Employees</option>
              <option value="101-500">101 – 500 Employees</option>
              <option value="501-2500">501 – 2,500 Employees</option>
              <option value="2500+">2,500+ Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="workforceType">
              Workforce Composition
            </label>
            <select
              id="workforceType"
              name="workforceType"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
            >
              <option value="dual">Dual Mixed (Corporate Salaried + Floor / Field Shift)</option>
              <option value="desk">Primarily Corporate Desk / Remote</option>
              <option value="frontline">Primarily Frontline / Plant / Shift Workforce</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="industry">
              Primary Industry Vertical Pack
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
            >
              {navData.industries.map((ind) => (
                <option key={ind.slug} value={ind.slug}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5" htmlFor="primaryInterest">
              Primary Strategic Area of Interest
            </label>
            <select
              id="primaryInterest"
              name="primaryInterest"
              value={formData.primaryInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
            >
              <option value="Full Workforce Operating System">Full Workforce Operating System (WOS)</option>
              <option value="Workforce Digital Twin Simulator">Workforce Digital Twin Simulator</option>
              <option value="40 Genkit AI Flows & Digital Brain">AI Workforce Intelligence / Digital Brain</option>
              <option value="Payroll, Indian Statutory & GL Sync">Payroll, Indian Statutory Tax & GL Sync</option>
              <option value="Workforce Management & Shift Rostering">Workforce Management & Biometrics</option>
              <option value="AI Recruitment ATS">AI Recruitment & ATS</option>
              <option value="IT Asset & Software Governance">IT Asset Governance & Offboarding</option>
            </select>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/3 py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-2/3 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition"
            >
              <span>Confirm Demo Request</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Enterprise privacy protected • No spam guarantee</span>
      </div>
    </div>
  );
}
