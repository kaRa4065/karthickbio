import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="overflow-hidden border-t border-terminal-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            command="EXPERTISE"
            title="Tech stack"
            subtitle="Tools I use to build fast interfaces, reliable APIs, and maintainable product systems."
          />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <h3 id="expertise-heading" className="sr-only">
            Technologies
          </h3>
          <div className="rounded-[1.5rem] border border-terminal-border bg-terminal-surface/95 p-4 shadow-sm">
            <SkillsMarquee />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
