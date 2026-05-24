import services from "@/data/services.json";
import type { ServiceItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const icons: Record<string, string> = {
  "web-apps": "⌘",
  backend: "≡",
  "mobile-apps": "◇",
};

const items = services as ServiceItem[];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-terminal-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            command="PROJECTS"
            title="What I build"
            subtitle="A selection of product surfaces I can design, implement, maintain, and connect to real backend flows."
          />
        </AnimateOnScroll>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((service, index) => (
            <AnimateOnScroll
              key={service.id}
              variant={index % 2 === 0 ? "left" : "right"}
            >
              <article className="group flex min-h-full flex-col rounded-[1.5rem] border border-terminal-border bg-terminal-surface/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-terminal-accent hover:shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-terminal-border bg-terminal-bg text-2xl text-terminal-accent">
                    {icons[service.id] ?? "•"}
                  </div>
                  <span className="font-mono text-sm text-terminal-muted transition group-hover:text-terminal-accent">
                    Code
                  </span>
                </div>
                <h3
                  id={index === 0 ? "services-heading" : undefined}
                  className="mt-6 text-xl font-semibold tracking-tight text-terminal-text"
                >
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-terminal-muted">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-terminal-border bg-terminal-surface-soft px-3 py-1 text-xs font-medium text-terminal-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
