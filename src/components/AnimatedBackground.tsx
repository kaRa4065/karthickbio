"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-terminal-bg overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(94,234,212,0.12), transparent 18%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.08), transparent 25%), linear-gradient(180deg, rgba(5,11,20,0.96), rgba(8,14,25,0.98) 65%, rgba(10,18,32,1))",
        }}
      />
      <div
        className="absolute inset-0 opacity-65"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(180deg, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.16) 1px, transparent 1px), linear-gradient(180deg, rgba(94,234,212,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px, 44px 44px, 176px 176px, 176px 176px",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/40" />
    </div>
  );
}
