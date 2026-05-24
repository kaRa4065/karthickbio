import educationData from "@/data/education/data.json";
import { PageShell } from "@/components/layout/PageShell";

const techSections = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "Vercel", "Docker", "Figma", "Prisma"],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// about</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">A product-minded engineer who values clarity, performance, and clean code.</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              I build polished web experiences for founders and teams who care about strong technical foundations and elegant user interfaces. My work combines fast frontends, reliable backend systems, and thoughtful product decisions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Location</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Chennai, India</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Availability</p>
                <p className="mt-3 text-xl font-semibold text-slate-950">Open to freelance & full-time</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// tech stack</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {techSections.map((section) => (
                    <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">{section.title}</h2>
                      <div className="mt-4 space-y-2">
                        {section.items.map((item) => (
                          <div key={item} className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// education</p>
                <div className="mt-8 space-y-4">
                  {educationData.map((item) => (
                    <div key={item.education} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.year}</p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.education}</h3>
                      <p className="mt-2 text-sm text-slate-600">{item.org}</p>
                      <p className="mt-4 rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-700 shadow-sm">{item.percent}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">// philosophy</p>
              <div className="mt-6 space-y-6 text-slate-600">
                <p>
                  I prefer building products that feel fast, intuitive, and maintainable. That means clear information architecture, reusable components, and APIs designed for flexibility.
                </p>
                <p>
                  I believe every interface should help people move faster, not slower. That’s why I focus on performance, accessibility, and thoughtful interaction design.
                </p>
                <p>
                  If you want a portfolio site, dashboard, or product launch built with strong frontend and backend foundations, I’d love to collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
