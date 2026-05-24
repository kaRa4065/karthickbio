"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  up: "animate-on-scroll",
  left: "animate-on-scroll-left",
  right: "animate-on-scroll-right",
} as const;

type Variant = keyof typeof variants;

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  rootMargin?: string;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  variant = "up",
  className,
  rootMargin = "0px 0px -60px 0px",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={cn(variants[variant], visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
