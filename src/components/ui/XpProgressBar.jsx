"use client";

import { useEffect, useMemo, useState } from "react";

const STRIPE =
  "repeating-linear-gradient(-45deg,#FDE047 0px,#FDE047 7px,#EAB308 7px,#EAB308 14px)";

/**
 * Animated XP track: fill and tooltip move together on load and when `currentXp` changes.
 */
export default function XpProgressBar({
  minXp = 500,
  maxXp = 800,
  currentXp = 650,
  animationMs = 1200,
  className = "",
}) {
  const targetPct = useMemo(() => {
    if (maxXp <= minXp) return 0;
    const raw = ((currentXp - minXp) / (maxXp - minXp)) * 100;
    return Math.min(100, Math.max(0, raw));
  }, [currentXp, minXp, maxXp]);

  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    setDisplayPct(0);
    const t = window.setTimeout(() => setDisplayPct(targetPct), 50);
    return () => window.clearTimeout(t);
  }, [targetPct]);

  return (
    <div className={`flex min-w-0 flex-1 flex-col ${className}`}>
      <div className="relative flex flex-col gap-1">
        <div className="relative h-14 w-full">
          <div
            className="absolute bottom-0 flex flex-col items-center transition-[left] ease-out"
            style={{
              left: `${displayPct}%`,
              transform: "translateX(-50%)",
              transitionDuration: `${animationMs}ms`,
            }}
          >
            <div className="rounded-lg bg-white px-3 py-0.5 text-[15px] font-black text-[#1970D3] shadow-md shadow-black/10 ">
              {currentXp} XP
            </div>
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1970D3] text-white shadow-sm">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative h-11 w-full">
          <div className="relative h-full w-full rounded-full bg-white/45 p-1 shadow-inner ring-1 ring-white/30">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <div
                className="absolute left-0 top-0 h-full overflow-hidden rounded-full transition-[width] ease-out"
                style={{
                  width: `${displayPct}%`,
                  transitionDuration: `${animationMs}ms`,
                }}
              >
                <div
                  className="h-full w-full min-w-[200%]"
                  style={{ backgroundImage: STRIPE }}
                />
              </div>
              <div className="relative z-10 flex h-full w-full items-center justify-between px-2 md:px-3">
                <span className="rounded-full bg-white px-3 py-0.5 text-[14px] font-bold text-[#1970D3] shadow-md shadow-black/10 ">
                  {minXp} XP
                </span>
                <span className="text-[20px] font-black text-black/30 ">{maxXp} XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
