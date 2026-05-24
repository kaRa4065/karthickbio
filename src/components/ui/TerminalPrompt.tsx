import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface TerminalPromptProps {
  user?: string;
  path?: string;
  command?: string;
  children?: ReactNode;
  className?: string;
}

export function TerminalPrompt({
  user = "karthick",
  path = "~",
  command,
  children,
  className,
}: TerminalPromptProps) {
  return (
    <div className={cn("leading-relaxed", className)}>
      <div className="flex flex-wrap items-baseline gap-x-1">
        <span className="text-terminal-green">{user}</span>
        <span className="text-terminal-muted">@</span>
        <span className="text-terminal-cyan">portfolio</span>
        <span className="text-terminal-muted">:</span>
        <span className="text-terminal-amber">{path}</span>
        <span className="text-terminal-muted">$</span>
        {command && (
          <span className="text-terminal-text ml-1">{command}</span>
        )}
      </div>
      {children && <div className="mt-2 text-terminal-muted">{children}</div>}
    </div>
  );
}
