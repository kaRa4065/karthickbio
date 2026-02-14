"use client";

import experience from "@/data/experience/data.json";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-[#0a0a0a] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variant="up" className="mb-14">
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
          <p className="mt-2 text-primary-muted text-lg">
            Professional work history and key contributions
          </p>
        </AnimateOnScroll>

        <div className="space-y-0">
          {experience.map((job, index) => (
            <AnimateOnScroll key={index} variant="up">
              <article
                className="py-8 border-b border-primary-border last:border-b-0 first:pt-0"
                itemScope
                itemType="https://schema.org/JobPosting"
              >
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white" itemProp="title">
                      {job.title}
                    </h3>
                    <p className="text-primary-accent font-medium mt-0.5" itemProp="hiringOrganization">
                      {job.org}
                    </p>
                  </div>
                  <time
                    className="text-sm text-primary-muted shrink-0 mt-1 sm:mt-0"
                    dateTime={job.year.replace(/\s*–\s*|\s*-\s*/g, "/")}
                    itemProp="datePosted"
                  >
                    {job.year}
                  </time>
                </header>
                <ul className="mt-4 space-y-2 list-none pl-0">
                  {job.roles?.map((role) => (
                    <li
                      key={role.id}
                      className="flex gap-2 text-primary-muted text-sm sm:text-base leading-relaxed"
                    >
                      <span className="text-primary-accent mt-1.5 shrink-0" aria-hidden>
                        •
                      </span>
                      <span itemProp="description">{role.resp}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
