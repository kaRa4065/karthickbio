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

export function SkillsMarquee() {
  const list = icons.map((path, i) => ({ path, name: iconNames[i] ?? "" }));
  const duplicated = [...list, ...list];

  return (
    <div className="w-full overflow-hidden py-4" aria-label="Technologies and tools">
      <div className="skills-marquee flex gap-8 w-max">
        {duplicated.map((item, index) => (
          <div
            key={`${item.path}-${index}`}
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded border border-terminal-border bg-terminal-bg p-2.5"
            title={item.name}
          >
            <Image
              src={item.path}
              alt={item.name}
              width={40}
              height={40}
              className="w-full h-full object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
