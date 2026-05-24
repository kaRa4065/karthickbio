interface SectionHeadingProps {
  command?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  command,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 sm:mb-12">
      {command ? (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terminal-accent">
            {command.toLowerCase()}
          </p>
        </div>
      ) : null}
      <h2 className="font-mono text-3xl font-bold tracking-tight text-terminal-text sm:text-4xl">
        <span className="text-terminal-muted"># &lt;h1&gt;</span>
        {title}
        <span className="text-terminal-muted">&lt;/h1&gt;</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-terminal-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}
