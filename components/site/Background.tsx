"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function BackgroundOrbs({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
      >
        <m.div
          className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color-mix(in_oklab,var(--brand)_35%,transparent)] blur-3xl"
          animate={
            reduced
              ? undefined
              : { y: [0, -14, 0], scale: [1, 1.06, 1], rotate: [0, 8, 0] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <m.div
          className="absolute -left-36 top-28 h-[420px] w-[420px] rounded-full bg-[color-mix(in_oklab,var(--brand-2)_30%,transparent)] blur-3xl"
          animate={reduced ? undefined : { y: [0, -18, 0], x: [0, 8, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <m.div
          className="absolute -right-40 top-56 h-[420px] w-[420px] rounded-full bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] blur-3xl"
          animate={reduced ? undefined : { y: [0, -12, 0], x: [0, -10, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 13, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <m.div
          className="absolute inset-0 bg-grid opacity-[0.05] dark:opacity-[0.12]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <m.div
          className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_0%,color-mix(in_oklab,var(--brand)_10%,transparent),transparent_55%)] opacity-70"
          animate={reduced ? undefined : { opacity: [0.55, 0.8, 0.55] }}
          transition={
            reduced
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </LazyMotion>
  );
}
