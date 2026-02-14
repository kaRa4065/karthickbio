"use client";

import Image from "next/image";
import icons from "@/data/skills/icons.json";

const iconNames = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Redux", "TypeScript",
  "Git", "Tailwind CSS", "Ant Design", "Node.js", "Express", "MongoDB"
];

export default function SkillsMarquee() {
  const list = icons.map((path, i) => ({ path, name: iconNames[i] || "" }));
  const duplicated = [...list, ...list];

  return (
    <div className="w-full overflow-hidden py-6" aria-label="Technologies and tools">
      <div className="skills-marquee flex gap-12 w-max">
        {duplicated.map((item, index) => (
          <div
            key={`${item.path}-${index}`}
            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl bg-primary-surface border border-primary-border p-3"
          >
            <Image
              src={item.path}
              alt={item.name}
              width={48}
              height={48}
              className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
