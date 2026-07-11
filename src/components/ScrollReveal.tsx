"use client";

import { useRef, useEffect, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let initialTransform = "";
    if (direction === "up") initialTransform = `translateY(${distance}px)`;
    else if (direction === "down") initialTransform = `translateY(-${distance}px)`;
    else if (direction === "left") initialTransform = `translateX(${distance}px)`;
    else if (direction === "right") initialTransform = `translateX(-${distance}px)`;

    el.style.opacity = "0";
    el.style.transform = initialTransform;
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1), transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translate(0, 0)";
          } else {
            el.style.opacity = "0";
            el.style.transform = initialTransform;
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
