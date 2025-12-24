"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export type ProcessStep = {
  title: string;
  description: string;
  deliverables: string[];
};

export function ProcessTimeline({
  steps,
  className,
}: {
  steps: ProcessStep[];
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.ol
        className={cn("relative grid gap-4", className)}
        initial={reduced ? undefined : "hidden"}
        whileInView={reduced ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {steps.map((step, index) => (
          <m.li
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border bg-white/70 p-6 shadow-sm glass"
            variants={{
              hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={reduced ? undefined : { y: -4 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-widest text-zinc-600 glass dark:text-zinc-300">
                  STEP {(index + 1).toString().padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,var(--brand),var(--brand-2),var(--brand-3))] opacity-70"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {step.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-2)_70%,black)] dark:bg-[color-mix(in_oklab,var(--brand-2)_70%,white)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.li>
        ))}
      </m.ol>
    </LazyMotion>
  );
}
