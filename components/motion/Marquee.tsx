"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  speedSeconds = 26,
}: {
  items: string[];
  className?: string;
  speedSeconds?: number;
}) {
  const reduced = useReducedMotion();
  const list = [...items, ...items];

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("relative overflow-hidden", className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-black" />
        <m.div
          className="flex w-max gap-3 py-2"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduced
              ? undefined
              : { duration: speedSeconds, repeat: Infinity, ease: "linear" }
          }
        >
          {list.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="rounded-full border px-3 py-1 text-xs font-medium text-zinc-600 glass dark:text-zinc-300"
            >
              {label}
            </span>
          ))}
        </m.div>
      </div>
    </LazyMotion>
  );
}

