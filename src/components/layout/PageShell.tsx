import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import {
  TerminalSquare,
  Braces,
  Code2,
  Database,
  FileJson2,
  Binary,
} from "lucide-react";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* BIG ICONS */}

        <TerminalSquare
          size={260}
          strokeWidth={1}
          className="absolute left-[-40px] top-[120px] rotate-[-12deg] text-emerald-200"
        />

        <Braces
          size={320}
          strokeWidth={1}
          className="absolute right-[-80px] top-[180px] rotate-[10deg] text-sky-200"
        />

        <Code2
          size={240}
          strokeWidth={1}
          className="absolute bottom-[140px] left-[8%] rotate-[8deg] text-violet-200"
        />

        <Database
          size={220}
          strokeWidth={1}
          className="absolute bottom-[120px] right-[10%] rotate-[-8deg] text-emerald-100"
        />

        <FileJson2
          size={180}
          strokeWidth={1}
          className="absolute left-[42%] top-[120px] rotate-[14deg] text-slate-200"
        />

        <Binary
          size={220}
          strokeWidth={1}
          className="absolute right-[30%] bottom-[25%] rotate-[-10deg] text-sky-100"
        />

        {/* SOFT GRADIENTS */}

        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-200/50 blur-3xl" />

        <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-sky-200/50 blur-3xl" />

        <div className="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter />
      </div>
    </div>
  );
}
