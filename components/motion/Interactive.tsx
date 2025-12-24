"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function HoverLift({
  children,
  className,
  lift = 6,
  scale = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  lift?: number;
  scale?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn("will-change-transform", className)}
        whileHover={reduced ? undefined : { y: -lift, scale }}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function Float({
  children,
  className,
  duration = 10,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn("will-change-transform", className)}
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={
          reduced
            ? undefined
            : { duration, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

