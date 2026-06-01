"use client";
import experienceData from "@/data/experience/data.json";
import type { ExperienceItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { BriefcaseBusiness, Code2, Rocket, TerminalSquare } from "lucide-react";
const experience = experienceData as ExperienceItem[];
const icons = [
  <Rocket key="rocket" className="h-5 w-5" />,
  <Code2 key="code" className="h-5 w-5" />,
  <TerminalSquare key="terminal" className="h-5 w-5" />,
  <BriefcaseBusiness key="briefcase" className="h-5 w-5" />,
];
export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {" "}
      {/* SECTION BACKGROUND */}{" "}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {" "}
        {/* Floating Dev Elements */}{" "}
        <div className="animate-float absolute left-[4%] top-16 text-[10rem] font-black tracking-tighter text-slate-200/40">
          {" "}
          {"</>"}{" "}
        </div>{" "}
        <div className="animate-float-slow absolute right-[6%] top-40 text-[7rem] font-bold text-slate-200/30">
          {" "}
          {"{}"}{" "}
        </div>{" "}
        <div className="animate-float-reverse absolute bottom-20 left-[10%] font-mono text-4xl text-slate-200/30">
          {" "}
          npm run dev{" "}
        </div>{" "}
        <div className="animate-float absolute bottom-32 right-[8%] font-mono text-3xl text-slate-200/20">
          {" "}
          git commit -m{" "}
        </div>{" "}
        <div className="animate-float-slow absolute left-[38%] top-32 font-mono text-5xl text-slate-200/20">
          {" "}
          const build = success;{" "}
        </div>{" "}
        {/* Soft Glow */}{" "}
        <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-slate-200/50 blur-3xl" />{" "}
        <div className="absolute bottom-[-10%] right-[-10%] h-[380px] w-[380px] rounded-full bg-slate-300/40 blur-3xl" />{" "}
        {/* Grid */}{" "}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: ` linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px) `,
            backgroundSize: "42px 42px",
          }}
        />{" "}
      </div>{" "}
      {/* CONTENT */}{" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <AnimateOnScroll>
          {" "}
          <SectionHeading
            command="WORK.EXE"
            title="Experience & Projects"
            subtitle="Frontend developer building scalable products, modern interfaces, AI experiences, and business applications."
          />{" "}
        </AnimateOnScroll>{" "}
        {/* Timeline */}{" "}
        <div className="relative mt-14 space-y-8 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-slate-300">
          {" "}
          {experience.map((job, index) => (
            <AnimateOnScroll key={`${job.org}-${job.year}-${index}`}>
              {" "}
              <article className="group relative ml-14 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
                {" "}
                {/* Timeline Icon */}{" "}
                <div className="absolute -left-[3.35rem] top-8 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-white shadow-sm">
                  {" "}
                  {icons[index % icons.length]}{" "}
                </div>{" "}
                {/* Header */}{" "}
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  {" "}
                  <div>
                    {" "}
                    <h3
                      id={index === 0 ? "work-heading" : undefined}
                      className="text-2xl font-semibold tracking-tight text-slate-950"
                    >
                      {" "}
                      {job.title}{" "}
                    </h3>{" "}
                    <p className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {" "}
                      {job.org}{" "}
                    </p>{" "}
                  </div>{" "}
                  <time
                    className="text-sm font-medium text-slate-500"
                    dateTime={job.year}
                  >
                    {" "}
                    {job.year}{" "}
                  </time>{" "}
                </div>{" "}
                {/* Responsibilities */}{" "}
                <ul className="mt-6 space-y-4">
                  {" "}
                  {job.roles.map((role) => (
                    <li
                      key={role.id}
                      className="flex gap-4 text-sm leading-7 text-slate-600"
                    >
                      {" "}
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />{" "}
                      <span>{role.resp}</span>{" "}
                    </li>
                  ))}{" "}
                </ul>{" "}
              </article>{" "}
            </AnimateOnScroll>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
