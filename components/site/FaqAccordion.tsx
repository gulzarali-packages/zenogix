"use client";

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M5.25 7.75L10 12.5l4.75-4.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaqAccordion({
  items,
  className,
  defaultOpenIds = [],
  allowMultiple = true,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpenIds?: string[];
  allowMultiple?: boolean;
}) {
  const reduced = useReducedMotion();
  const idPrefix = useId();
  const initialOpen = useMemo(() => new Set(defaultOpenIds), [defaultOpenIds]);
  const [openIds, setOpenIds] = useState<Set<string>>(initialOpen);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);
      if (!allowMultiple) next.clear();
      if (isOpen) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("grid gap-3", className)}>
        {items.map((item) => {
          const isOpen = openIds.has(item.id);
          const contentId = `${idPrefix}-${item.id}-content`;
          const buttonId = `${idPrefix}-${item.id}-button`;

          return (
            <div
              key={item.id}
              className={cn(
                "card-shimmer group relative overflow-hidden rounded-3xl border bg-white/70 shadow-sm glass dark:bg-white/5",
                isOpen ? "glow-ring" : "hover:shadow-lg",
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_240px_at_10%_0%,color-mix(in_oklab,var(--brand)_16%,transparent),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <button
                id={buttonId}
                type="button"
                className="relative flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-white/20 sm:px-7"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(item.id)}
              >
                <span>
                  <span className="block text-base font-semibold text-zinc-950 dark:text-white">
                    {item.question}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                    {isOpen ? "Hide answer" : "View answer"}
                  </span>
                </span>

                <m.span
                  aria-hidden
                  animate={reduced ? undefined : { rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                  className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border bg-white/70 text-zinc-700 glass dark:bg-white/5 dark:text-zinc-200"
                >
                  <Chevron />
                </m.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <m.div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={reduced ? undefined : { height: 0, opacity: 0 }}
                    animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-zinc-600 dark:text-zinc-300 sm:px-7">
                      <div className="prose max-w-none">{item.answer}</div>
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </LazyMotion>
  );
}

