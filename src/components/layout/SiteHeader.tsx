"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl px-4 py-4 shadow-sm sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-950 sm:text-base"
        >
          <span className="font-mono text-emerald-600">›_</span>
          <span>karthick.dev</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition sm:text-sm ${
                  isActive
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={siteConfig.resumePath}
          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 sm:text-sm"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
