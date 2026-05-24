import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function TerminalWindow({
  title = "bash",
  children,
  className,
  id,
}: TerminalWindowProps) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-[1.5rem] border border-terminal-border bg-terminal-surface shadow-soft overflow-hidden transition-shadow duration-200 hover:shadow-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border terminal-topbar">
        <span className="terminal-dot" aria-hidden />
        <span className="terminal-dot" aria-hidden />
        <span className="terminal-dot" aria-hidden />
        <span className="ml-2 text-xs text-terminal-muted font-mono truncate hover:text-terminal-text transition-colors terminal-title">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-6 font-mono text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}
