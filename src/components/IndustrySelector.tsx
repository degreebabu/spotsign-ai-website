"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import navData from "../../content/navigation.json";

const categoryFilters = [
  { id: "all", label: "All 19 Verticals" },
  { id: "industrial", label: "Industrial & Marine" },
  { id: "supply-chain", label: "Logistics & Field" },
  { id: "services", label: "Healthcare & Hospitality" },
  { id: "technology", label: "Tech, ITES & BPO" },
];

export default function IndustrySelector() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterMapping: Record<string, string[]> = {
    industrial: [
      "shipping-maritime",
      "seafood-processing",
      "manufacturing",
      "chemical-hazardous",
      "fisheries-aquaculture",
      "automobile-auto-services",
      "petrol-pump-fuel-station",
    ],
    "supply-chain": [
      "logistics-freight",
      "cargo-freight-forwarding",
      "field-workforce",
      "cab-transport-aggregators",
    ],
    services: [
      "healthcare",
      "hospitality",
      "retail-ecommerce",
      "travel-tourism",
      "school-university",
    ],
    technology: [
      "information-technology",
      "ites",
      "bpo-call-centers",
    ],
  };

  const filteredIndustries = navData.industries.filter((ind) => {
    if (activeFilter === "all") return true;
    const allowed = filterMapping[activeFilter] || [];
    return allowed.includes(ind.slug);
  });

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categoryFilters.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              activeFilter === cat.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIndustries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                {ind.name}
              </h3>
              <p className="text-xs font-mono font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-100 inline-block">
                {ind.highlight}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized department presets, shift templates, statutory overtime rules, and operational compliance.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Industry Pack</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
