"use client";

import Image from "next/image";
import icons from "@/data/skills/icons.json";

const iconNames = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Redux",
  "TypeScript",
  "Git",
  "Tailwind CSS",
  "Ant Design",
  "Node.js",
  "Express",
  "MongoDB",
];

export default function SkillsMarquee() {
  const list = icons.map((path, i) => ({ path, name: iconNames[i] || "" }));
  return (
    <div
      className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 py-6"
      aria-label="Technologies and tools"
    >
      {list.map((item) => (
        <div
          key={item.path}
          className="rounded-[1.5rem] border border-terminal-border bg-terminal-surface/95 p-4 text-center transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="flex h-16 items-center justify-center rounded-3xl bg-terminal-surface-soft p-2">
            <Image
              src={item.path}
              alt={item.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-terminal-muted">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
