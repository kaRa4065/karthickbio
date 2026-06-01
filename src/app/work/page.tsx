"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";

const projectFilters = ["All", "Frontend", "Fullstack", "Personal"];

const projects = [
  {
    title: "SmartSeekers AI",
    description:
      "AI-powered semantic search platform that surfaces documentation with contextual understanding and smart retrieval.",
    category: "Fullstack",
    tags: ["Next.js", "Python", "OpenAI"],
    url: "#",
    gradient: "from-slate-800 to-slate-700",
  },
  {
    title: "SeekersPlus",
    description:
      "Modern SaaS platform focused on scalable dashboards, user workflows, analytics, and operational efficiency.",
    category: "Fullstack",
    tags: ["React", "Node.js", "MongoDB"],
    url: "#",
    gradient: "from-neutral-800 to-neutral-700",
  },
  {
    title: "ParknStay",
    description:
      "EV parking and booking platform with responsive dashboards, payment integration, and seamless booking experiences.",
    category: "Frontend",
    tags: ["React", "Next.js", "Stripe"],
    url: "#",
    gradient: "from-zinc-800 to-zinc-700",
  },
  {
    title: "DMAN",
    description:
      "Food delivery platform with optimized ordering flows, restaurant listings, and responsive frontend modules.",
    category: "Frontend",
    tags: ["React.js", "Tailwind CSS", "REST APIs"],
    url: "#",
    gradient: "from-stone-800 to-stone-700",
  },
  {
    title: "QK-Connect",
    description:
      "HRM application focused on employee management, attendance tracking, dashboards, and workflow systems.",
    category: "Frontend",
    tags: ["TypeScript", "React", "CoreUI"],
    url: "#",
    gradient: "from-slate-700 to-slate-600",
  },
  {
    title: "AssetSync",
    description:
      "Internal inventory and operations platform built for lending workflows, reporting, and management systems.",
    category: "Fullstack",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "#",
    gradient: "from-neutral-700 to-neutral-600",
  },
  {
    title: "AI Chatbot",
    description:
      "Personal AI chatbot project with conversational UI, smart interactions, and clean real-time messaging.",
    category: "Personal",
    tags: ["Next.js", "AI", "Tailwind CSS"],
    url: "#",
    gradient: "from-zinc-700 to-zinc-600",
  },
  {
    title: "Birthday Celebration Website",
    description:
      "Interactive birthday website with animations, music integration, and engaging personalized experiences.",
    category: "Personal",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "#",
    gradient: "from-stone-700 to-stone-600",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                Selected Work
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Building modern digital products with a focus on clean user
                experiences and scalable frontend systems.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                A collection of frontend, fullstack, and personal projects
                focused on performance, accessibility, and thoughtful product
                design.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Hire Me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            id="projects"
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Top Section */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white">
                      {project.category}
                    </span>

                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={project.url}
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition hover:text-slate-700"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
