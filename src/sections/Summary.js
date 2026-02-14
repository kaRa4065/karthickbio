"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

const PROFILE_IMAGE = "/images/karthick.png";
const FALLBACK_INITIALS = "KR";

export default function Summary() {
  const [imgError, setImgError] = useState(false);
  const showImage = !imgError;

  return (
    <section
      id="summary"
      aria-labelledby="summary-heading"
      className="relative min-h-[calc(100vh-80px)] flex items-center py-16 bg-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile photo - add your image at public/images/profile.jpg */}
          <AnimateOnScroll variant="up" className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-primary-border bg-primary-surface ring-2 ring-primary-accent/20">
              {showImage ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Karthick Ravi - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl font-bold text-primary-accent bg-primary-surface"
                  aria-hidden
                >
                  {FALLBACK_INITIALS}
                </div>
              )}
            </div>
          </AnimateOnScroll>

          <div className="flex-1 text-center md:text-left">
            <AnimateOnScroll variant="up">
              <p className="text-sm font-medium text-primary-accent uppercase tracking-wider mb-2">
                Full Stack Developer
              </p>
              <h1
                id="summary-heading"
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              >
                Karthick Ravi
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll variant="up" className="mt-4">
              <p className="text-lg sm:text-xl text-primary-muted leading-relaxed max-w-xl">
                I build scalable web applications with the MERN stack and
                Next.js. Focused on clean UI, performance, and maintainable code
                using TypeScript, React, and modern tooling. Based in Chennai,
                India.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="up" className="mt-6">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-surface border border-primary-border text-primary-muted">
                  React & Next.js
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-surface border border-primary-border text-primary-muted">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-surface border border-primary-border text-primary-muted">
                  Node.js
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
