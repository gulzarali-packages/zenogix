"use client";

import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay }}
        className={cn(className)}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren, delayChildren } },
        }}
        className={cn(className)}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
