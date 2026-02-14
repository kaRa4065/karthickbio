"use client";

import SkillsMarquee from "@/components/SkillsMarquee";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-[#0a0a0a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="up" className="text-center mb-12">
          <h2 id="skills-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Skills
          </h2>
          <p className="mt-2 text-primary-muted text-lg">Technologies I work with</p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="up">
          <SkillsMarquee />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
