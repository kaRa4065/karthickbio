"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-md">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />

        <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

        <div className="absolute left-[8%] top-[20%] font-mono text-[120px] font-bold text-slate-200/30">
          {"</>"}
        </div>

        <div className="absolute bottom-[8%] right-[8%] font-mono text-[120px] font-bold text-slate-200/30">
          {"{}"}
        </div>
      </div>

      {/* loader card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]">
        {/* terminal top */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#fafaf9] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <p className="font-mono text-[11px] tracking-[0.22em] text-slate-400">
            portfolio.status
          </p>
        </div>

        {/* content */}
        <div className="space-y-6 p-8 text-center">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-emerald-600">
              Currently Updating
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Portfolio is still under construction.
            </h2>

            <p className="mx-auto max-w-sm text-sm leading-7 text-slate-600">
              Some sections are still being refined and new case studies will be
              added soon.
            </p>
          </div>

          {/* progress */}
          <div className="space-y-3">
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 animate-pulse" />
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              <span>Loading Experience</span>
              <span>68%</span>
            </div>
          </div>

          {/* bottom text */}
          <div className="rounded-2xl border border-slate-200 bg-[#fafaf9] px-5 py-4">
            <p className="font-mono text-sm text-slate-600">
              {"<"} Building clean digital experiences... {" />"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
