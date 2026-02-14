"use client";

import { useEffect, useRef, useState } from "react";

const variants = {
  up: "animate-on-scroll",
  left: "animate-on-scroll-left",
  right: "animate-on-scroll-right",
  stagger: "stagger-children",
};

export default function AnimateOnScroll({
  children,
  variant = "up",
  className = "",
  rootMargin = "0px 0px -60px 0px",
  threshold = 0.1,
  as: Tag = "div",
}) {
  const ref = useRef(null);
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

  const baseClass = variants[variant] || variants.up;
  const visibleClass = visible ? "is-visible" : "";

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${visibleClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
