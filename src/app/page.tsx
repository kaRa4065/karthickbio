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
    image: "/images/smartseekers-ai.svg",
  },
  {
    title: "ParknStay",
    subtitle:
      "A modern marketplace for EV parking, private land stays, and secure bookings across North America.",
    category: "Marketplace · Travel · Web3",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/images/parknstay.svg",
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
      <section className="relative overflow-hidden px-4  pb-20 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-7xl">
          <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 sm:px-6 lg:px-0">
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-emerald-100 blur-3xl opacity-60" />

              <div className="absolute right-[-10%] bottom-[0%] h-[420px] w-[420px] rounded-full bg-sky-100 blur-3xl opacity-60" />
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">
              {/* LEFT SIDE */}
              <div className="space-y-10">
                {/* top badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available for work
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-600 shadow-sm">
                    Full Stack Developer
                  </span>
                </div>

                {/* heading */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-16 bg-emerald-500" />

                    <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                      Design-led Engineering
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                      Building clean digital products with modern engineering.
                    </h1>

                    <p className="max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl">
                      I’m Karthick Ravi, a Full Stack Developer focused on
                      crafting scalable applications, polished user interfaces,
                      and thoughtful digital experiences using modern web
                      technologies.
                    </p>
                  </div>
                </div>

                {/* buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    View Projects
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  >
                    Contact Me
                  </Link>
                </div>

                {/* bottom cards */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-2  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Frontend
                    </p>

                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      React & Next.js
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Backend
                    </p>

                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      Node.js APIs
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-2  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Focus
                    </p>

                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      Product Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex justify-end">
                <div className="relative w-full max-w-md">
                  {/* terminal window */}
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.2)]">
                    {/* terminal top */}
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      </div>

                      <p className="font-mono text-xs tracking-[0.18em] text-slate-400">
                        karthick@portfolio ~
                      </p>
                    </div>

                    {/* terminal body */}
                    <div className="space-y-6 p-5">
                      {/* image */}
                      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                        <img
                          src="/images/karthick.png"
                          alt="Karthick Ravi"
                          className="h-[500px] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-32">
            {/* heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-600">
                Featured Investigations
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Selected Projects
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Product systems, SaaS applications, and engineering work crafted
                with performance, scalability, and modern UI experiences.
              </p>
            </div>

            {/* posters grid */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, index) => {
                const shades = [
                  "bg-[#f8fafc]",
                  "bg-[#fefce8]",
                  "bg-[#f5f3ff]",
                  "bg-[#f0fdf4]",
                  "bg-[#eff6ff]",
                ];

                return (
                  <article
                    key={project.title}
                    className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 ${shades[index % shades.length]} shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,0.24)]`}
                  >
                    {/* terminal top */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/70 px-5 py-4 backdrop-blur">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      </div>

                      <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400">
                        case_{String(index + 1).padStart(2, "0")}.sys
                      </p>
                    </div>

                    {/* poster content */}
                    <div className="relative flex h-full flex-col p-6">
                      {/* large faded background text */}
                      <div className="pointer-events-none absolute right-4 top-4 select-none font-mono text-7xl font-bold tracking-tight text-slate-200/50">
                        0{index + 1}
                      </div>

                      {/* category */}
                      <div className="relative z-10">
                        <span className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* title */}
                      <div className="relative z-10 mt-8">
                        <h3 className="max-w-xs text-3xl font-semibold leading-tight tracking-tight text-slate-950">
                          {project.title}
                        </h3>

                        <p className="mt-5 text-sm leading-8 text-slate-600">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* image */}
                      <div className="relative z-10 mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* tags */}
                      <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* bottom */}
                      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-dashed border-slate-300/80 pt-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                            Status
                          </p>

                          <p className="mt-2 text-sm font-semibold text-slate-900">
                            Completed Investigation
                          </p>
                        </div>

                        <a
                          href="#"
                          className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                        >
                          View Case ↗
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-28">
            {/* heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-emerald-600">
                Professional Journey
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                Experience
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Building scalable products, polished interfaces, and modern
                digital systems with startups and growing teams.
              </p>
            </div>

            {/* compact experience cards */}
            <div className="mx-auto mt-14 grid max-w-5xl gap-6">
              {experienceItems.map((item, index) => {
                const shades = [
                  "bg-[#f8fafc]",
                  "bg-[#f0fdf4]",
                  "bg-[#fefce8]",
                  "bg-[#f5f3ff]",
                ];

                return (
                  <article
                    key={item.role}
                    className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 ${shades[index % shades.length]} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]`}
                  >
                    {/* terminal top */}
                    <div className="flex items-center justify-between border-b border-slate-200/70 bg-white/70 px-5 py-4 backdrop-blur">
                      <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      </div>

                      <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400">
                        experience_{String(index + 1).padStart(2, "0")}.log
                      </p>
                    </div>

                    {/* content */}
                    <div className="relative grid gap-8 p-6 lg:grid-cols-[220px_1fr] lg:items-start">
                      {/* left info */}
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-emerald-700">
                          {item.period}
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                          {item.role}
                        </h3>

                        <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 shadow-sm">
                          {item.company}
                        </div>
                      </div>

                      {/* right highlights */}
                      <div className="space-y-4">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-sm backdrop-blur"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

                            <p className="text-sm leading-7 text-slate-600">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* faded bg text */}
                      <div className="pointer-events-none absolute bottom-0 right-6 select-none font-mono text-7xl font-bold tracking-tight text-slate-200/40">
                        0{index + 1}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

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
