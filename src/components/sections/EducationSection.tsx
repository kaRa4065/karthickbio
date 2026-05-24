import educationData from "@/data/education/data.json";
import type { EducationItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const items = educationData as EducationItem[];

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-terminal-border/50"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading title="Education" subtitle="Academic background" />
        </AnimateOnScroll>

        <div className="space-y-4">
          {items.map((item, index) => (
            <AnimateOnScroll key={`${item.education}-${item.year}`}>
              <TerminalWindow title={`degree — ${item.year}`}>
                <article
                  itemScope
                  itemType="https://schema.org/EducationalOccupationalCredential"
                  className="flex flex-col sm:flex-row sm:justify-between gap-2"
                >
                  <div>
                    <h3
                      id={index === 0 ? "education-heading" : undefined}
                      className="font-mono font-semibold gradient-text"
                      itemProp="name"
                    >
                      {item.education}
                    </h3>
                    <p
                      className="text-pink-600 font-mono text-sm mt-1"
                      itemProp="credentialCategory"
                    >
                      {item.org}
                    </p>
                  </div>
                  <div className="font-mono text-sm sm:text-right shrink-0">
                    <time
                      className="text-terminal-muted"
                      itemProp="dateCreated"
                    >
                      {item.year}
                    </time>
                    <p className="text-terminal-green mt-1">{item.percent}</p>
                  </div>
                </article>
              </TerminalWindow>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
