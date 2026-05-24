import experienceData from "@/data/experience/data.json";
import { PageShell } from "@/components/layout/PageShell";

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// experience</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">A timeline of product, engineering, and technical ownership.</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Professional milestones with a focus on backend systems, frontend craft, and launch-ready product work.
            </p>
          </div>

          <div className="space-y-8">
            {experienceData.map((item) => (
              <article key={`${item.org}-${item.year}`} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-700">{item.year}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{item.org}</p>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-700 shadow-sm">
                    {item.org}
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {item.roles.map((role) => (
                    <li key={role.id} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{role.resp}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
