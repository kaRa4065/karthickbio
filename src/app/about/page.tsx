import educationData from "@/data/education/data.json";
import { PageShell } from "@/components/layout/PageShell";

const techSections = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "Vercel", "Docker", "Figma", "Prisma"],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left side */}
            <div className="space-y-8">
              <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.18)] sm:p-10">
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">
                  // about
                </p>

                <div className="mt-5 max-w-4xl">
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    A product-minded engineer focused on clarity, performance,
                    and refined digital experiences.
                  </h1>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                    I build polished web products for founders and teams who
                    care about strong technical foundations and elegant
                    interfaces. My work blends modern frontend systems, reliable
                    backend architecture, and thoughtful product execution.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-3 text-lg font-semibold text-slate-950 sm:text-xl">
                      Chennai, India
                    </p>
                  </div>
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                      Availability
                    </p>
                    <p className="mt-3 text-lg font-semibold text-slate-950 sm:text-xl">
                      Open to freelance & full-time
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-sm sm:p-9">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">
                      // tech stack
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      Tools I use to build scalable products
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {techSections.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-[28px] border border-slate-200 bg-slate-50/70 p-5"
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                        {section.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-sm sm:p-9">
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-700">
                  // education
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Academic background
                </h2>

                <div className="mt-8 space-y-4">
                  {educationData.map((item) => (
                    <div
                      key={item.education}
                      className="group rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 transition duration-300 hover:border-emerald-200 hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                            {item.year}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold text-slate-950">
                            {item.education}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.org}
                          </p>
                        </div>

                        <div className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                          {item.percent}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side */}
            <aside className="h-fit lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950 text-white shadow-[0_24px_70px_-30px_rgba(15,23,42,0.45)]">
                <div className="border-b border-white/10 px-8 py-8">
                  <p className="text-xs font-mono uppercase tracking-[0.32em] text-emerald-400">
                    // philosophy
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                    Thoughtful systems. Elegant outcomes.
                  </h2>
                </div>

                <div className="space-y-6 px-8 py-8 text-sm leading-7 text-slate-300 sm:text-base">
                  <p>
                    I like building products that feel fast, intuitive, and easy
                    to maintain. That starts with clean structure, reusable
                    components, and decisions that scale well over time.
                  </p>
                  <p>
                    Good interfaces should reduce friction, not create it. I
                    care deeply about accessibility, performance, and
                    interactions that feel natural.
                  </p>
                  <p>
                    Whether it is a portfolio, dashboard, or product launch, I
                    aim to combine visual quality with strong engineering
                    foundations.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/5">
                  <div className="bg-slate-950 px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Performance-first UI
                    </p>
                  </div>
                  <div className="bg-slate-950 px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Style
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Minimal & premium
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
