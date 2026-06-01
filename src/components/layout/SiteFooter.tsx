import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 sm:flex-row lg:px-8">
        {/* left */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-emerald-600">{"</>"}</span>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-800">Karthick Ravi</span>
          </p>
        </div>

        {/* right socials */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/kaRa4065"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md"
          >
            <FiGithub className="h-4 w-4" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/karthick-ravi-81533b26b/"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md"
          >
            <FiLinkedin className="h-4 w-4" />
          </Link>

          {/* <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md"
          >
            <TwitterIcon className="h-4 w-4" />
          </Link> */}

          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
