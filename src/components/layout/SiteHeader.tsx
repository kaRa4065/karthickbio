"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Terminal, ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-2xl">
      {/* top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
            <Terminal size={20} className="text-emerald-600" />
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-[0.18em] text-slate-950">
              karthick.dev
            </span>

            <span className="text-xs text-slate-500">Full Stack Developer</span>
          </div>
        </Link>

        {/* CENTER */}
        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-slate-950"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                {/* active background */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-slate-950/[0.06]" />
                )}

                {/* active glow */}
                {isActive && (
                  <span className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <Link
          href={siteConfig.resumePath}
          download="karthick_ravi_2026.pdf"
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md"
        >
          Resume
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </header>
  );
}
