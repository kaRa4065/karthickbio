"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-terminal-bg/90 backdrop-blur-sm pointer-events-none">
      <div className="rounded-[1.5rem] border border-terminal-border bg-terminal-surface shadow-soft p-6 w-full max-w-sm text-center">
        <div className="text-xs uppercase tracking-[0.32em] text-terminal-muted">
          loading
        </div>
        <p className="mt-4 text-2xl font-semibold text-terminal-text">
          Preparing your portfolio
        </p>
        <div className="mt-5 h-2 rounded-full bg-terminal-border overflow-hidden">
          <div className="h-full bg-terminal-accent" style={{ width: "52%" }} />
        </div>
        <p className="mt-3 text-sm text-terminal-muted">
          One moment while the page loads.
        </p>
      </div>
    </div>
  );
}
