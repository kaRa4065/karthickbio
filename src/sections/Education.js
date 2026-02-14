"use client";

import items from "@/data/education/data.json";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-[#0a0a0a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant="up" className="mb-14">
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold text-white">
            Education
          </h2>
          <p className="mt-2 text-primary-muted text-lg">Academic background</p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:gap-8">
          {items.map((item, index) => (
            <AnimateOnScroll key={index} variant="up">
              <article
                className="rounded-2xl border border-primary-border bg-primary-surface p-6 sm:p-8 hover:border-primary-accent/40 transition-colors"
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white" itemProp="name">
                      {item.education}
                    </h3>
                    <p className="text-primary-accent font-medium mt-1" itemProp="credentialCategory">
                      {item.org}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <time className="text-sm text-primary-muted" itemProp="dateCreated">
                      {item.year}
                    </time>
                    <span className="text-sm font-semibold text-primary-accent">
                      {item.percent}
                    </span>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
