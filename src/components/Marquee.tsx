"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={
        {
          "--duration": `${speed}s`,
          "--gap": "1rem",
        } as React.CSSProperties
      }
    >
      <div
        className={`flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row ${
          direction === "right" ? "[animation-direction:reverse]" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 justify-around gap-[var(--gap)] animate-marquee flex-row ${
          direction === "right" ? "[animation-direction:reverse]" : ""
        }`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
