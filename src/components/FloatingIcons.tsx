"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  TrendingUp, 
  Laptop, 
  Zap 
} from "lucide-react";

export default function FloatingIcons() {
  const telemetryChips = [
    // Top-Side Left Flank Callouts
    {
      label: "Biometric Shift Sync",
      value: "99.8% On-Time",
      icon: Activity,
      iconColor: "text-emerald-500",
      indicatorColor: "bg-emerald-500",
      position: "top-8 left-2 xl:left-8",
      floatY: [-6, 8, -6],
      duration: 6,
      delay: 0,
      badge: "Live Telemetry",
    },
    {
      label: "Section 192 TDS Audit",
      value: "0 Compliance Defects",
      icon: ShieldCheck,
      iconColor: "text-indigo-500",
      indicatorColor: "bg-indigo-500",
      position: "top-32 left-3 xl:left-12",
      floatY: [8, -10, 8],
      duration: 7,
      delay: 0.4,
      badge: "Form 12BB Verified",
    },
    {
      label: "Automated Payroll Engine",
      value: "₹4.82 Cr in 12s",
      icon: Coins,
      iconColor: "text-amber-500",
      indicatorColor: "bg-amber-500",
      position: "top-56 left-1 xl:left-6",
      floatY: [-8, 9, -8],
      duration: 7.5,
      delay: 0.8,
      badge: "Auto-Calculated",
    },

    // Top-Side Right Flank Callouts
    {
      label: "Factory Floor Rostering",
      value: "3 Shifts • 14 Lines",
      icon: Clock,
      iconColor: "text-blue-500",
      indicatorColor: "bg-blue-500",
      position: "top-8 right-2 xl:right-8",
      floatY: [8, -8, 8],
      duration: 6.5,
      delay: 0.2,
      badge: "Rotational Roster",
    },
    {
      label: "Workforce Sandbox Model",
      value: "+18% Margin Modeled",
      icon: TrendingUp,
      iconColor: "text-purple-500",
      indicatorColor: "bg-purple-500",
      position: "top-32 right-3 xl:right-12",
      floatY: [-9, 8, -9],
      duration: 7.2,
      delay: 0.6,
      badge: "Org Simulation",
    },
    {
      label: "AI Candidate Scoring",
      value: "96% Competency Fit",
      icon: Sparkles,
      iconColor: "text-cyan-500",
      indicatorColor: "bg-cyan-500",
      position: "top-56 right-1 xl:right-6",
      floatY: [7, -9, 7],
      duration: 6.8,
      delay: 1.0,
      badge: "Auto-Ranked",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Dynamic Animated Light Gradient Mesh with Changing Colors */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] opacity-75 blur-[120px] pointer-events-none -z-10">
        {/* Luminous Orb 1: Blue to Indigo to Cyan */}
        <div className="absolute top-0 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-blue-400/35 via-cyan-300/30 to-indigo-400/30 mix-blend-multiply animate-morph-bg" />
        
        {/* Luminous Orb 2: Violet to Fuchsia to Pink */}
        <div className="absolute top-10 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-violet-400/30 via-fuchsia-300/25 to-pink-300/20 mix-blend-multiply animate-morph-bg-reverse" />
        
        {/* Luminous Orb 3: Sky to Emerald to Amber */}
        <div className="absolute -bottom-10 left-1/3 w-[500px] h-[400px] rounded-full bg-gradient-to-r from-sky-300/30 via-emerald-200/25 to-indigo-300/25 mix-blend-multiply animate-pulse-subtle" />
      </div>

      {/* Top-Side Floating Telemetry Callout Cards */}
      {telemetryChips.map((chip, idx) => {
        const IconComponent = chip.icon;
        return (
          <motion.div
            key={idx}
            className={`absolute ${chip.position} hidden lg:block z-20`}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: chip.delay * 0.35,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{
                y: chip.floatY,
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: chip.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="px-3.5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-900/5 flex items-center gap-3 transition hover:scale-105 hover:shadow-2xl hover:bg-white"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                <IconComponent className={`w-4 h-4 ${chip.iconColor}`} />
              </div>
              <div className="text-left leading-tight">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <span className={`w-1.5 h-1.5 rounded-full ${chip.indicatorColor} animate-ping`} />
                  <span>{chip.badge}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{chip.value}</div>
                <div className="text-[10px] text-slate-500 font-medium">{chip.label}</div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
