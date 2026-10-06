import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Layers, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 font-extrabold text-2xl flex items-center justify-center mx-auto">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            The requested workforce resource or platform route could not be found. Use the links below to return to the Workforce360 operating system directory.
          </p>
        </div>

        <div className="space-y-2 pt-2 text-xs font-semibold">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/platform"
            className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-800 flex items-center justify-center gap-2 hover:bg-slate-50 transition"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Browse 5 Platform Pillars</span>
          </Link>
          <Link
            href="/industries"
            className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-800 flex items-center justify-center gap-2 hover:bg-slate-50 transition"
          >
            <span>Explore 19 Industry Vertical Packs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
