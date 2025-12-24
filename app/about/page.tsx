import { BackgroundOrbs } from "@/components/site/Background";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { HoverLift } from "@/components/motion/Interactive";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `Learn about ${siteName}: how we work, what we value, and what we build.`,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge>About</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Product-minded software, built with calm execution
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                {siteName} builds web, mobile, desktop, and AI-enabled products for
                teams that want strong fundamentals: clean UX, reliable systems,
                measurable outcomes, and a delivery rhythm you can trust.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/work" variant="secondary">
                  See our work
                </ButtonLink>
                <ButtonLink href="/contact">Talk to us</ButtonLink>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Senior-led delivery",
                desc: "Clear scope, steady momentum, and proactive communication.",
              },
              {
                title: "Built for speed",
                desc: "Small batches, reviewable PRs, and CI guardrails.",
              },
              {
                title: "Performance-first",
                desc: "Core Web Vitals, accessibility, and UX polish from day one.",
              },
              {
                title: "Ship with confidence",
                desc: "Monitoring, rollbacks, and release discipline that keeps things calm.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <HoverLift lift={4} scale={1.01}>
                  <Card className="h-full">
                    <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {item.desc}
                    </p>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Story"
                title="We build what you can stand behind"
                description="We started with a simple belief: shipping faster should not mean breaking things. Our job is to make delivery predictable, quality consistent, and decisions obvious."
              />
              <Reveal delay={0.08}>
                <div className="mt-6 rounded-3xl border bg-white/70 p-6 shadow-sm glass">
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    Our teams work best when the goal is clear and the release
                    is safe. That’s why we focus on small, measurable increments,
                    strong engineering hygiene, and a steady communication cadence.
                    You’ll always know what’s shipping, why it matters, and what’s
                    next.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    Whether you’re launching a new product, modernizing an
                    existing platform, or adding AI responsibly, we’ll help you
                    move quickly without creating future maintenance debt.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Values"
                title="Principles that keep projects low-drama"
                description="Practical defaults that reduce risk and speed up decision-making."
              />
              <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Clarity first",
                    desc: "We write down goals, tradeoffs, and decisions so teams stay aligned.",
                  },
                  {
                    title: "Quality by default",
                    desc: "Types, tests, accessibility, and performance are part of the plan—never an afterthought.",
                  },
                  {
                    title: "Ownership",
                    desc: "We take responsibility for outcomes and communicate early when risks appear.",
                  },
                  {
                    title: "Small batches",
                    desc: "Thin slices ship faster, review faster, and roll back safely when needed.",
                  },
                  {
                    title: "Security-aware",
                    desc: "We design for privacy, least privilege, and safe data handling.",
                  },
                  {
                    title: "Make it maintainable",
                    desc: "We choose boring, proven patterns and document the edges so teams can own the system.",
                  },
                ].map((value) => (
                  <StaggerItem key={value.title}>
                    <HoverLift lift={4} scale={1.01}>
                      <Card className="h-full">
                        <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {value.desc}
                        </p>
                      </Card>
                    </HoverLift>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How we work"
                title="A clear process that keeps momentum"
                description="Simple steps, steady communication, and pragmatic deliverables that reduce uncertainty."
              />
              <Reveal delay={0.08}>
                <div className="mt-6 rounded-3xl border bg-white/70 p-6 shadow-sm glass">
                  <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    We avoid heavy process and focus on a few things that create
                    leverage: tight scope, fast feedback loops, and safe releases.
                    You get weekly demos, crisp written updates, and a plan that
                    stays close to reality as we learn.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/services" variant="secondary">
                      Explore services
                    </ButtonLink>
                    <ButtonLink href="/contact">Get a quote</ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ProcessTimeline
                className="mt-2"
                steps={[
                  {
                    title: "Discovery & alignment",
                    description:
                      "We clarify the goal, define success metrics, and map constraints early so delivery stays calm.",
                    deliverables: [
                      "Outcome + metric definition",
                      "Scope boundary for release one",
                      "Risk list with mitigation plan",
                    ],
                  },
                  {
                    title: "Design & technical plan",
                    description:
                      "We shape UX and architecture together to avoid rework and keep implementation straightforward.",
                    deliverables: [
                      "User flows and key screens",
                      "System design overview",
                      "Milestone plan with thin slices",
                    ],
                  },
                  {
                    title: "Build in small slices",
                    description:
                      "We ship reviewable PRs, keep CI green, and make each change deployable and reversible.",
                    deliverables: [
                      "Incremental working software",
                      "Automated checks (types, lint, core tests)",
                      "Preview builds for fast feedback",
                    ],
                  },
                  {
                    title: "Launch & harden",
                    description:
                      "We support rollout, monitoring, and edge-case hardening so releases feel boring—in a good way.",
                    deliverables: [
                      "Release plan and rollout steps",
                      "Monitoring and error tracking",
                      "Performance and reliability pass",
                    ],
                  },
                  {
                    title: "Iterate with data",
                    description:
                      "We keep improving based on real usage: conversion, retention, and performance signals.",
                    deliverables: [
                      "Analytics on key flows",
                      "Prioritized improvement backlog",
                      "Ongoing weekly cadence",
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-end delivery, across platforms"
            description="Join us for a full build or bring us in to accelerate a specific milestone."
          />

          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Web products",
                desc: "Modern sites and apps that load fast, rank well, and convert reliably.",
                items: [
                  "Next.js / React frontends",
                  "Dashboards and internal tools",
                  "CMS and content workflows",
                  "Performance and SEO improvements",
                ],
              },
              {
                title: "Mobile & desktop",
                desc: "Cross-platform builds with native feel and the right level of polish.",
                items: [
                  "iOS and Android apps",
                  "Desktop tools (Windows/macOS)",
                  "Offline-first flows where needed",
                  "App store and release support",
                ],
              },
              {
                title: "AI-enabled workflows",
                desc: "Useful AI features with guardrails: privacy, evaluation, and predictable costs.",
                items: [
                  "Assistants and copilots",
                  "Document and knowledge search",
                  "Automation with human review",
                  "Quality evaluation and monitoring",
                ],
              },
            ].map((block) => (
              <StaggerItem key={block.title}>
                <HoverLift lift={5} scale={1.015}>
                  <Card className="h-full">
                    <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {block.desc}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-2)_70%,black)] dark:bg-[color-mix(in_oklab,var(--brand-2)_70%,white)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="h-full rounded-3xl border bg-white/70 p-8 shadow-sm glass">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    What you get when you work with {siteName}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    A small, focused team that can own outcomes, work
                    independently, and integrate smoothly with yours. We keep
                    stakeholders aligned, reduce risk early, and ship increments
                    you can measure.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/contact">Contact for a quote</ButtonLink>
                    <ButtonLink href="/blog" variant="secondary">
                      Read the blog
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.06}>
                <div className="h-full rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_18%,transparent),color-mix(in_oklab,var(--brand-2)_14%,transparent),color-mix(in_oklab,var(--brand-3)_10%,transparent))] p-8 shadow-sm glass glow-ring">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    A good fit if you want…
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {[
                      "A launch in weeks, not quarters",
                      "Clear communication and transparent tradeoffs",
                      "A strong foundation you can extend",
                      "Polished UX without over-design",
                      "AI features that are safe and measurable",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand)_70%,black)] dark:bg-[color-mix(in_oklab,var(--brand)_75%,white)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
