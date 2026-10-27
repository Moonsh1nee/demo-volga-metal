"use client";

import { useEffect, useRef } from "react";
import { animate } from "motion/react";

const fmt = (n: number) => Math.round(n).toLocaleString("ru-RU");

export function CountUp({ to, pre = "", suf = "" }: { to: number; pre?: string; suf?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let controls: { stop: () => void } | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        controls = animate(0, to, {
          duration: 1.3,
          ease: "easeOut",
          onUpdate: (v) => {
            el.textContent = pre + fmt(v) + suf;
          },
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      controls?.stop();
    };
  }, [to, pre, suf]);

  return (
    <b ref={ref}>
      {pre}
      {fmt(to)}
      {suf}
    </b>
  );
}
