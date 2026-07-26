import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/config/site";
import { link } from "fs";

const featuredProjects = [
  {
    title: "SmartSeekers AI",
    subtitle:
      "Enterprise search intelligence built with LLMs for faster internal documentation discovery.",
    category: "AI · Search · Productivity",
    tags: ["React", "Python", "OpenAI"],
    image: "/images/smartseekers-ai.svg",
    link: "https://www.smartseekers.ai/",
  },
  {
    title: "ParknStay",
    subtitle:
      "A modern marketplace for EV parking, private land stays, and secure bookings across North America.",
    category: "Marketplace · Travel · Web3",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/images/parknstay.svg",
    link: "https://www.parknstay.com/",
  },
  {
    title: "PromptDesk AI",
    subtitle:
      "AI-powered conversational workspace with real-time responses  and intelligent interaction flows.",
    category: "AI · Productivity · SaaS",
    tags: ["React", "OpenAI", "Tailwind CSS"],
    image: "/images/chatAI.png",
    link: "https://kara4065.github.io/chatAI/",
  },
];

const experienceItems = [
  {
    period: "2025 — Present",
    role: "React JS Developer",
    company: "Radiantze INC",
    highlights: [
      "Developed the complete admin panel architecture and scalable frontend workflows for an AI-powered interview platform using Next.js and TypeScript",
      "Implemented live interview monitoring features including camera pre-checks, face detection, malpractice handling flows,  AI-based interview character interactions and SEO optimization for improved search visibility",
    ],
  },
  {
    period: "2023 — 2025",
    role: "Application Developer",
    company: "Quadkast Technologies",
    highlights: [
      "Developed scalable and reusable frontend modules using React.js and Ant Design for a production-level rental management platform.",
      "Implemented complex business logic, API integrations, and dynamic data-driven workflows for admin and user management features",
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
                      Python, FastAPIs
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

          <section className="my-32">
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
                            Live
                          </p>
                        </div>

                        <a
                          href={project.link}
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
          <section className="my-64">
            <div className="mx-auto max-w-6xl">
              {/* DIFFERENT HEADER LAYOUT */}
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                {/* left side */}
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
                      Career Timeline
                    </span>
                  </div>

                  <h2 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
                    Experience
                  </h2>
                </div>

                {/* right side */}
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 sm:p-8 text-white shadow-[0_25px_80px_-35px_rgba(15,23,42,0.5)]">
                  {/* glow */}
                  <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

                  <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                    {/* text */}
                    <div className="max-w-2xl">
                      <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                        Professional Journey
                      </p>

                      <p className="mt-4 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                        Building scalable products, polished interfaces, and
                        high-performance digital systems with startups and
                        growing SaaS teams.
                      </p>
                    </div>

                    {/* stats */}
                    <div className="grid w-full max-w-[320px] grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur">
                        <p className="text-3xl font-semibold text-white">3+</p>

                        <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                          Years Experience
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur">
                        <p className="text-3xl font-semibold text-white">7+</p>

                        <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                          Projects Built
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE CARDS */}
              <div className="mt-14 flex flex-col gap-8">
                {experienceItems.map((item, index) => {
                  const themes = [
                    {
                      card: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white border-slate-800",
                      accent: "bg-emerald-400",
                      line: "bg-emerald-400/20",
                      chip: "bg-white/10 border-white/10 text-white",
                      text: "text-slate-300",
                    },
                    {
                      card: "bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] text-white border-sky-900/40",
                      accent: "bg-sky-400",
                      line: "bg-sky-400/20",
                      chip: "bg-sky-400/10 border-sky-400/20 text-sky-100",
                      text: "text-slate-300",
                    },
                  ];

                  const theme = themes[index % themes.length];

                  return (
                    <article
                      key={item.role}
                      className={`group relative overflow-hidden rounded-[2.5rem] border ${theme.card} shadow-[0_25px_80px_-35px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1`}
                    >
                      {/* background glow */}
                      <div
                        className={`absolute -right-24 top-0 h-72 w-72 rounded-full blur-3xl opacity-20 ${theme.accent}`}
                      />

                      {/* terminal top */}
                      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        </div>

                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                          experience_{String(index + 1).padStart(2, "0")}.log
                        </p>
                      </div>

                      {/* main */}
                      <div className="relative grid gap-10 p-8 lg:grid-cols-[260px_1fr] lg:p-10">
                        {/* left */}
                        <div className="relative">
                          <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">
                            {item.period}
                          </p>

                          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
                            {item.role}
                          </h3>

                          <div
                            className={`mt-6 inline-flex rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur ${theme.chip}`}
                          >
                            {item.company}
                          </div>

                          <div className="pointer-events-none absolute bottom-[-30px] left-0 select-none font-mono text-8xl font-bold text-white/5">
                            0{index + 1}
                          </div>
                        </div>

                        {/* right */}
                        <div className="space-y-5">
                          {item.highlights.map((highlight, i) => (
                            <div
                              key={highlight}
                              className="relative flex gap-5"
                            >
                              {/* timeline */}
                              <div className="relative flex flex-col items-center">
                                <span
                                  className={`relative z-10 mt-1 h-3 w-3 rounded-full ${theme.accent}`}
                                />

                                {i !== item.highlights.length - 1 && (
                                  <span
                                    className={`mt-2 h-full w-px ${theme.line}`}
                                  />
                                )}
                              </div>

                              {/* content */}
                              <div className="flex-1 pb-6">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07]">
                                  <p
                                    className={`text-[15px] leading-8 ${theme.text}`}
                                  >
                                    {highlight}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
          <div className="mt-16 rounded-[2.5rem] border border-emerald-200 bg-white p-10 shadow-xl shadow-emerald-100 mt-64">
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
