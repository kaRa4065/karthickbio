import Link from "next/link";
import { cn } from "@/lib/cn";

type TerminalButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function TerminalButton({
  children,
  href,
  onClick,
  type: buttonType = "button",
  variant = "primary",
  className,
  download,
  external,
}: TerminalButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-2.5 rounded-lg border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-accent";

  const variants = {
    primary:
      "bg-terminal-accent text-white border-transparent hover:bg-terminal-accent-dark hover:shadow-lg hover:shadow-terminal-accent/20",
    ghost:
      "border-transparent text-terminal-accent hover:text-terminal-accent-dark hover:bg-accent-soft",
    outline:
      "border border-terminal-border text-terminal-text hover:border-terminal-accent hover:text-terminal-accent hover:bg-terminal-surface",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button type={buttonType} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
