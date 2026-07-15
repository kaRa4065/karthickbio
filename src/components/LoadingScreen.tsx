"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-overlay"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" },
          }}
        >
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60"
              animate={{ y: [0, -12, 0], opacity: [0.45, 0.65, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60"
              animate={{ y: [0, 12, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute left-[8%] top-[20%] font-mono text-[120px] font-bold text-slate-200/30"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"</>"}
            </motion.div>

            <motion.div
              className="absolute bottom-[8%] right-[8%] font-mono text-[120px] font-bold text-slate-200/30"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"{}"}
            </motion.div>
          </div>

          {/* loader card */}
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]"
            initial={{ y: -140, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{
              y: -160,
              opacity: 0,
              scale: 0.96,
              transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* terminal top */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-[#fafaf9] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>

              <p className="font-mono text-[11px] tracking-[0.22em] text-slate-400">
                portfolio.status
              </p>
            </div>

            {/* content */}
            <div className="space-y-6 p-8 text-center">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-emerald-600">
                  Portfolio Ready
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  Launching the experience.
                </h2>

                <p className="mx-auto max-w-sm text-sm leading-7 text-slate-600">
                  Everything is in place. Preparing the interface and loading
                  the latest sections.
                </p>
              </motion.div>

              {/* progress */}
              <div className="space-y-3">
                <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.45, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 w-24 bg-white/35 blur-md"
                    animate={{ x: ["-20%", "420%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  <span>Loading Experience</span>
                  <motion.span
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    100%
                  </motion.span>
                </div>
              </div>

              {/* bottom text */}
              <motion.div
                className="rounded-2xl border border-slate-200 bg-[#fafaf9] px-5 py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                <p className="font-mono text-sm text-slate-600">
                  {"<"} Building clean digital experiences... {" />"}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
