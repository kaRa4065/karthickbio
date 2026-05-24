import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/config/site";

const featuredProjects = [
  {
    title: "SmartSeekers AI",
    subtitle:
      "Enterprise search intelligence built with LLMs for faster internal documentation discovery.",
    category: "AI · Search · Productivity",
    tags: ["React", "Python", "OpenAI"],
  },
  {
    title: "ParknStay",
    subtitle:
      "A modern marketplace for EV parking, private land stays, and secure bookings across North America.",
    category: "Marketplace · Travel · Web3",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
];

const experienceItems = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Radiantze",
    highlights: [
      "Modernized a legacy monolith into modular SaaS services.",
      "Built internal product workflows with Next.js and AWS.",
      "Optimized API latency with Redis caching and scalable data design.",
    ],
  },
  {
    period: "2018 — 2023",
    role: "Full Stack Developer",
    company: "Quadkast",
    highlights: [
      "Delivered 15+ high-traffic commerce and SaaS landing pages.",
      "Designed frontend systems with React, TypeScript, and Tailwind.",
      "Improved performance and accessibility across product pages.",
    ],
  },
];

const skillTags = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-slate-500">
            ›_ karthick.dev
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-600">
                  Full Stack Developer
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Karthick Ravi
                </h1>
                <h2 className="text-2xl text-emerald-600 font-semibold">Full Stack Developer</h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Crafting high-performance digital experiences at the intersection of
                  technical precision and elegant design. Currently building scalable
                  systems and intuitive user interfaces.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
                >
                  View my work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600"
                >
                  Contact me
                </Link>
              </div>

              <div className="grid auto-cols-max grid-flow-col gap-3 overflow-x-auto pb-1">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="browser-window rounded-[1.5rem] border border-slate-200 bg-white shadow-xl">
                <div className="browser-topbar flex items-center gap-3 px-4 py-3">
                  <span className="terminal-dot" aria-hidden />
                  <span className="terminal-dot" aria-hidden />
                  <span className="terminal-dot" aria-hidden />
                  <div className="ml-3 text-xs font-mono text-slate-500">system.user.live</div>
                </div>
                <div className="browser-content p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Profile</p>
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="browser-avatar w-44 h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-sm flex items-center justify-center">
                      <div className="font-mono text-sm text-slate-400">[photo]</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="browser-window rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-md">
                <div className="browser-topbar flex items-center gap-3 px-4 py-3">
                  <span className="terminal-dot" aria-hidden />
                  <span className="terminal-dot" aria-hidden />
                  <span className="terminal-dot" aria-hidden />
                  <div className="ml-3 text-xs font-mono text-slate-500">featured.work</div>
                </div>
                <div className="browser-content p-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Featured Projects</p>
                  <div className="mt-4 grid gap-4">
                    {featuredProjects.map((project) => (
                      <article key={project.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm hover:shadow-md transition">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700/90">{project.category}</p>
                            <h3 className="mt-2 text-lg font-semibold text-slate-950">{project.title}</h3>
                          </div>
                          <a href="#" className="text-slate-500 hover:text-emerald-600 text-sm">↗</a>
                        </div>
                        <p className="mt-3 text-sm text-slate-600">{project.subtitle}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.14em] text-slate-700">{tag}</span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.55fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                The Professional Journey
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Experience
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                I’ve spent the past 6 years partnering with startups and product
                teams to ship polished digital experiences and dependable
                systems.
              </p>
            </div>

            <div className="space-y-6">
              {experienceItems.map((item) => (
                <div
                  key={item.role}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-emerald-700/80">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-950">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-600">{item.company}</p>
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 shadow-sm">
                      {item.company}
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[2.5rem] border border-emerald-200 bg-white p-10 shadow-xl shadow-emerald-100">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/75">
                  Ready to start your next project?
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Let’s build something meaningful together.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  I’m always looking for new challenges and product-led
                  collaborations. Reach out for a friendly chat or project
                  inquiry.
                </p>
              </div>
              <Link
                href={`/contact`}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 lg:w-auto"
              >
                Email me: {siteConfig.email}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
