import experienceData from "@/data/experience/data.json";
import { PageShell } from "@/components/layout/PageShell";
import {
  BriefcaseBusiness,
  CalendarDays,
  Circle,
  Minus,
  Square,
} from "lucide-react";

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#020617]" />

        {/* Glow Effects */}
        <div className="absolute left-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-20">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-emerald-400">
              ~/experience
            </p>

            <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Experience through a developer terminal interface.
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                  Product engineering, scalable frontend systems, and modern web
                  application development presented like an interactive command
                  line session.
                </p>
              </div>

              {/* Stats Terminal */}
              <div className="w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/90 shadow-2xl backdrop-blur">
                {/* Terminal Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                    <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                  </div>

                  <p className="font-mono text-xs text-slate-500">stats.sh</p>
                </div>

                <div className="space-y-3 p-6 font-mono">
                  <p className="text-sm text-slate-500">
                    $ developer --experience
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Years of Experience
                    </p>

                    <h2 className="mt-2 text-5xl font-bold text-emerald-400">
                      1.8+
                    </h2>
                  </div>

                  <p className="pt-2 text-sm text-emerald-400">
                    ✔ Frontend Engineer Active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-400/40 to-transparent" />

            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <article
                  key={`${item.org}-${item.year}`}
                  className="group relative pl-14"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#020617] bg-emerald-500 shadow-lg">
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>

                  {/* Terminal Card */}
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a]/90 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                        <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                      </div>

                      <div className="flex items-center gap-3">
                        <Minus className="h-4 w-4 text-slate-500" />
                        <Square className="h-3.5 w-3.5 text-slate-500" />

                        <p className="font-mono text-xs text-slate-500">
                          experience_{index + 1}.sh
                        </p>
                      </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="relative p-8 font-mono">
                      {/* Glow */}
                      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

                      <div className="relative z-10">
                        {/* Command */}
                        <div className="mb-8">
                          <p className="text-sm text-emerald-400">
                            $ load-experience --current
                          </p>
                        </div>

                        {/* Main Info */}
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-sm text-cyan-400">
                              <CalendarDays className="h-4 w-4" />
                              <span>{item.year}</span>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold text-white">
                              {item.title}
                            </h2>

                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                              <BriefcaseBusiness className="h-4 w-4 text-emerald-400" />
                              {item.org}
                            </div>
                          </div>

                          {/* Index */}
                          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4">
                            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                              Session
                            </p>

                            <p className="mt-2 text-4xl font-bold text-emerald-400">
                              0{index + 1}
                            </p>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mt-10 space-y-4">
                          <p className="text-sm text-slate-500">
                            $ cat responsibilities.json
                          </p>

                          <div className="grid gap-4 sm:grid-cols-2">
                            {item.roles.map((role) => (
                              <div
                                key={role.id}
                                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-500/5"
                              >
                                <div className="flex gap-4">
                                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />

                                  <p className="text-sm leading-7 text-slate-300">
                                    {role.resp}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 border-t border-white/10 pt-5">
                          <p className="text-xs text-slate-500">
                            Process completed successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
