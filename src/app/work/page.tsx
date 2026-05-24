'use client';

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

const projectFilters = ["All", "Frontend", "Fullstack"];
const projects = [
  {
    title: "SmartSeekers AI",
    description: "Search intelligence that surfaces the right documentation with semantic context.",
    category: "Fullstack",
    tags: ["Next.js", "Python", "OpenAI"],
    url: "#",
  },
  {
    title: "ParknStay",
    description: "EV parking and private land stays with payments, booking flows, and user dashboards.",
    category: "Frontend",
    tags: ["React", "Next.js", "Stripe"],
    url: "#",
  },
  {
    title: "AssetSync",
    description: "An internal SaaS product to manage jewelry inventory, lending flows, and operations dashboards.",
    category: "Fullstack",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "#",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = 
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageShell>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// work</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Projects built for product teams and user-first experiences.</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              A curated selection of frontend and fullstack projects that focus on performance, clarity, and product outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Hire me
            </Link>
          </div>

          <div className="grid gap-6">
            {filteredProjects.map((project) => (
              <article key={project.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{project.title}</h2>
                  </div>
                  <Link
                    href={project.url}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600"
                  >
                    View project
                  </Link>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-700">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
