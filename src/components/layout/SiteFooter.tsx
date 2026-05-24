import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-slate-950">
            {siteConfig.name}
          </p>
          <p className="max-w-lg leading-7 text-slate-600">
            Crafting clean SaaS experiences with strong engineering and subtle
            terminal details.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span>© {year}</span>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-600"
          >
            github
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-600"
          >
            linkedin
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-emerald-600"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
