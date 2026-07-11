"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  suffix?: string;
  format?: boolean;
}

export default function CountUp({ target, suffix = "", format = false }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          const duration = 2000;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              animRef.current = requestAnimationFrame(tick);
            } else {
              setCount(target);
            }
          }

          animRef.current = requestAnimationFrame(tick);
        } else {
          if (animRef.current) cancelAnimationFrame(animRef.current);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [target]);

  const display = format ? count.toLocaleString() : count.toString();

  return <span ref={ref}>{display}{suffix}</span>;
}
