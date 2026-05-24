"use client";

import experienceData from "@/data/experience/data.json";
import type { ExperienceItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const experience = experienceData as ExperienceItem[];

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-terminal-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            command="WORK"
            title="Experience"
            subtitle="A quick timeline of roles where I shipped features, solved product problems, and improved interfaces."
          />
        </AnimateOnScroll>

        <div className="relative grid gap-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:hidden before:w-px before:bg-terminal-border sm:before:block">
          {experience.map((job, index) => (
            <AnimateOnScroll key={`${job.org}-${job.year}-${index}`}>
              <article className="relative grid gap-4 rounded-[1.5rem] border border-terminal-border bg-terminal-surface/95 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:ml-8 sm:grid-cols-[180px_1fr] sm:p-6">
                <span className="absolute -left-[2.25rem] top-8 hidden h-4 w-4 rounded-full border-4 border-terminal-bg bg-terminal-accent sm:block" />
                <time
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-terminal-muted sm:text-sm"
                  dateTime={job.year}
                >
                  {job.year}
                </time>

                <div>
                  <div className="border-b border-terminal-border pb-4">
                    <h3
                      id={index === 0 ? "work-heading" : undefined}
                      className="text-xl font-semibold tracking-tight text-terminal-text"
                      itemProp="title"
                    >
                      {job.title}
                    </h3>
                    <p
                      className="mt-2 text-terminal-accent font-mono text-sm"
                      itemProp="hiringOrganization"
                    >
                      {job.org}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-terminal-muted">
                    {job.roles.map((role) => (
                      <li key={role.id} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terminal-accent"
                          aria-hidden
                        />
                        <span itemProp="description">{role.resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
