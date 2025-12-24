"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { Float, HoverLift } from "@/components/motion/Interactive";
import { Marquee } from "@/components/motion/Marquee";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { contactEmail } from "@/lib/site";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Mobile",
  "Desktop",
  "AI",
  "Cloud",
  "Design Systems",
  "Performance",
  "Accessibility",
  "Observability",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16.25 5.75 8.5 13.5 3.75 8.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LandingHero({
  siteName,
  siteTagline,
}: {
  siteName: string;
  siteTagline: string;
}) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative">
        <Container className="relative py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <m.div
              className="lg:col-span-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              <m.div
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Web · Mobile · Desktop · AI</Badge>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium text-zinc-600 glass dark:text-zinc-300">
                    Custom quote · Clear milestones
                  </span>
                </div>
              </m.div>
              <m.h1
                className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <span className="block">
                  <GradientText>{siteName}</GradientText> builds software that{" "}
                  <GradientText className="whitespace-nowrap">
                    ships fast
                  </GradientText>{" "}
                  and stays stable.
                </span>
                <m.span
                  aria-hidden
                  className="mt-4 block h-px w-24 bg-[linear-gradient(90deg,var(--brand),var(--brand-2),var(--brand-3))] opacity-70"
                  initial={reduced ? undefined : { width: 0, opacity: 0 }}
                  animate={reduced ? undefined : { width: 96, opacity: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </m.h1>
              <m.p
                className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {siteTagline} We help teams launch and improve products with a
                calm delivery system: clear scope, fast feedback loops, and
                engineering you can maintain.
              </m.p>
              <m.ul
                className="mt-7 grid gap-3 sm:grid-cols-2"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {[
                  "Define a clear milestone and scope boundary",
                  "Design polished, accessible interfaces",
                  "Build with predictable, safe releases",
                  "Improve performance, SEO, and reliability",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-2xl border bg-white/70 p-4 text-sm text-zinc-600 glass dark:bg-white/5 dark:text-zinc-300"
                  >
                    <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-2xl border bg-white/70 text-[color-mix(in_oklab,var(--brand-2)_70%,black)] glass dark:bg-white/5 dark:text-[color-mix(in_oklab,var(--brand-2)_80%,white)]">
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <span className="leading-6">{text}</span>
                  </li>
                ))}
              </m.ul>
              <m.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Float duration={11}>
                  <ButtonLink href="/contact" className="glow-ring">
                    Contact for a quote
                  </ButtonLink>
                </Float>
                <ButtonLink href="/work" variant="secondary">
                  See our work
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost">
                  Explore services
                </ButtonLink>
              </m.div>
              <m.p
                className="mt-5 text-sm text-zinc-500 dark:text-zinc-400"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Prefer email?{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
                >
                  {contactEmail}
                </a>
                .
              </m.p>
              <m.div
                className="mt-8"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                  TRUSTED STACK
                </p>
                <Marquee items={tech} className="mt-3" />
              </m.div>
            </m.div>

            <m.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <HoverLift>
                <div className="relative overflow-hidden rounded-[2rem] border p-6 shadow-sm glass glow-ring">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_40%_0%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_60%)] opacity-85"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                          Kickoff in 3 simple steps
                        </p>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                          Clear inputs. Clear outputs. No surprises.
                        </p>
                      </div>
                      <span className="rounded-full border px-3 py-1 text-xs text-zinc-600 glass dark:text-zinc-300">
                        Start here
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        {
                          title: "Quick discovery",
                          desc: "Share goals, constraints, and what success means.",
                        },
                        {
                          title: "Proposal + plan",
                          desc: "We send milestones, scope boundary, and a quote.",
                        },
                        {
                          title: "Build + demo weekly",
                          desc: "Small slices, safe releases, and steady progress.",
                        },
                      ].map((row, index) => (
                        <m.div
                          key={row.title}
                          initial={reduced ? undefined : { opacity: 0, y: 10 }}
                          animate={reduced ? undefined : { opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.12 + index * 0.09,
                            ease: [0.2, 0.8, 0.2, 1],
                          }}
                          className="rounded-2xl border bg-white/70 p-4 glass dark:bg-white/5"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-2xl border bg-white/70 text-[color-mix(in_oklab,var(--brand-2)_70%,black)] glass dark:bg-white/5 dark:text-[color-mix(in_oklab,var(--brand-2)_80%,white)]">
                              <span className="text-xs font-semibold tabular-nums">
                                {(index + 1).toString().padStart(2, "0")}
                              </span>
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                                {row.title}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                                {row.desc}
                              </p>
                            </div>
                          </div>
                        </m.div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border bg-white/70 p-5 glass dark:bg-white/5">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                          Featured case study
                        </p>
                        <span className="rounded-full border px-3 py-1 text-xs text-zinc-600 glass dark:text-zinc-300">
                          FlexFiles
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        A modern file platform built for speed, reliability, and
                        a clean user experience.
                      </p>
                      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <ButtonLink href="/work/flexfiles" variant="secondary">
                          View case study
                        </ButtonLink>
                        <ButtonLink href="/contact">Discuss your project</ButtonLink>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </m.div>
          </div>

          <m.div
            aria-hidden
            className="pointer-events-none mt-14 flex justify-center"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            <m.div
              className="grid place-items-center gap-2 rounded-full border bg-white/70 px-5 py-3 text-xs font-semibold tracking-widest text-zinc-600 glass dark:text-zinc-300"
              animate={reduced ? undefined : { y: [0, 6, 0] }}
              transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              SCROLL
              <span className="h-6 w-px bg-[linear-gradient(180deg,transparent,var(--brand),transparent)] opacity-70" />
            </m.div>
          </m.div>
        </Container>
      </section>
    </LazyMotion>
  );
}
