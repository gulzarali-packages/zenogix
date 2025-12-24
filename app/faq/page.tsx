import Link from "next/link";
import { BackgroundOrbs } from "@/components/site/Background";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { HoverLift } from "@/components/motion/Interactive";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactEmail, siteName } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description: `Frequently asked questions about working with ${siteName}.`,
};

type FaqSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    id: string;
    question: string;
    answer: React.ReactNode;
  }>;
};

function sectionId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FAQPage() {
  const sections: FaqSection[] = [
    {
      id: sectionId("Getting started"),
      eyebrow: "Getting Started",
      title: "Working with us",
      description:
        "How engagements start, what we build, and what working together feels like.",
      items: [
        {
          id: "start",
          question: "How do we start?",
          answer: (
            <>
              <p>
                Start with a short call. We’ll ask about the outcome you want,
                who the users are, what success looks like, and any constraints
                (timeline, platform, compliance, existing systems).
              </p>
              <p>
                After the call, we’ll follow up with a clear plan: a suggested
                first milestone, a scope boundary, and a custom quote. If we’re
                not the right fit, we’ll tell you quickly.
              </p>
            </>
          ),
        },
        {
          id: "projects",
          question: "What kinds of projects do you take on?",
          answer: (
            <>
              <p>
                We build and improve software products across web, mobile,
                desktop, and AI. The most common engagements include:
              </p>
              <ul>
                <li>New product builds and MVPs</li>
                <li>Modernizing legacy apps and APIs</li>
                <li>Performance, SEO, and Core Web Vitals improvements</li>
                <li>Internal tools, dashboards, and workflow automation</li>
                <li>Responsible AI features (assistants, search, automation)</li>
              </ul>
            </>
          ),
        },
        {
          id: "team-extension",
          question: "Do you work with existing teams?",
          answer: (
            <>
              <p>
                Yes. Many clients bring us in to accelerate a roadmap or handle
                a specific milestone while their internal team stays focused on
                core priorities.
              </p>
              <p>
                We integrate with your stack, tools, and working style. You’ll
                get clear progress updates, reviewable pull requests, and a calm
                delivery cadence.
              </p>
            </>
          ),
        },
        {
          id: "nda",
          question: "Can you sign an NDA?",
          answer: (
            <>
              <p>
                Yes—happy to sign a mutual NDA before you share sensitive
                details. If you already have one, send it over and we’ll review
                it quickly.
              </p>
              <p>
                If you’re not ready for an NDA yet, keep early messages high
                level (the outcome, the platform, and constraints) until
                paperwork is in place.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: sectionId("Process & communication"),
      eyebrow: "Process",
      title: "Process, scope, and communication",
      description:
        "A low-drama process: small batches, frequent demos, and written clarity.",
      items: [
        {
          id: "cadence",
          question: "What does your delivery cadence look like?",
          answer: (
            <>
              <p>
                We keep momentum with weekly cycles: align on the smallest
                shippable slice, build, demo, and ship safely. You’ll see real
                progress early and often.
              </p>
              <p>
                Communication is simple: a weekly demo plus a short written
                update (what shipped, what’s next, what’s blocked).
              </p>
            </>
          ),
        },
        {
          id: "scope-changes",
          question: "How do you handle scope changes?",
          answer: (
            <>
              <p>
                Scope changes are normal. The key is making tradeoffs explicit.
                When something new comes in, we’ll propose a scope swap (what
                moves out) or a revised milestone.
              </p>
              <p>
                This keeps timelines stable and prevents hidden work from
                silently accumulating.
              </p>
            </>
          ),
        },
        {
          id: "design",
          question: "Can you help with design (UX/UI)?",
          answer: (
            <>
              <p>
                Yes. We can collaborate with your designer or handle UX/UI as
                part of the engagement. We aim for clean, conversion-friendly
                interfaces with accessible defaults.
              </p>
              <p>
                For product work, we typically start with flows and key screens,
                then iterate quickly with prototypes and real feedback.
              </p>
            </>
          ),
        },
        {
          id: "qa",
          question: "How do you approach QA and quality?",
          answer: (
            <>
              <p>
                Quality is built into the workflow: small pull requests, type
                safety, linting, targeted tests, and preview builds. We also do
                hands-on QA on real devices and browsers for key flows.
              </p>
              <ul>
                <li>Automated checks in CI (types, lint, core tests)</li>
                <li>Preview deployments for quick review</li>
                <li>Release checklists for high-risk changes</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: sectionId("Technology"),
      eyebrow: "Technology",
      title: "Tech stack and delivery",
      description:
        "Modern tools, pragmatic architecture, and performance-first defaults.",
      items: [
        {
          id: "stack",
          question: "What tech stacks do you use?",
          answer: (
            <>
              <p>
                We choose technology based on your goals and constraints, but we
                generally prefer proven, maintainable stacks.
              </p>
              <ul>
                <li>Web: React, Next.js, TypeScript</li>
                <li>Backend: Node.js, Python, APIs, background jobs</li>
                <li>Data: Postgres, search, queues, caching</li>
                <li>Infra: CI/CD, observability, safe deployments</li>
              </ul>
            </>
          ),
        },
        {
          id: "legacy",
          question: "Can you work with legacy codebases?",
          answer: (
            <>
              <p>
                Yes. We usually start by mapping risk and dependencies, then
                modernize in small, reversible steps. The goal is to improve
                reliability and delivery speed without a risky “big rewrite.”
              </p>
            </>
          ),
        },
        {
          id: "ai",
          question: "Do you build AI features?",
          answer: (
            <>
              <p>
                Yes—especially AI features that are narrow, measurable, and safe
                to operate. We design for trust: clear UX, human review flows
                where needed, and guardrails for privacy, reliability, and cost.
              </p>
              <p>
                We can also help teams evaluate AI outputs with a lightweight
                test set so quality improves over time.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: sectionId("Security & IP"),
      eyebrow: "Security",
      title: "Security, privacy, and IP",
      description:
        "Practical security practices and clear expectations around ownership.",
      items: [
        {
          id: "access",
          question: "How do you handle access to our systems?",
          answer: (
            <>
              <p>
                We follow least-privilege access and keep credentials scoped and
                auditable. Where possible we use role-based access, short-lived
                tokens, and a shared secrets manager.
              </p>
              <ul>
                <li>Separate environments (dev/staging/prod) when available</li>
                <li>Access removed promptly at engagement end</li>
                <li>Security-conscious defaults in code and tooling</li>
              </ul>
            </>
          ),
        },
        {
          id: "ip",
          question: "Who owns the code and deliverables?",
          answer: (
            <>
              <p>
                Ownership is defined in the services agreement for your project.
                In most client engagements, you own the deliverables created for
                you, and we may retain rights to our pre-existing tools,
                templates, and general know-how.
              </p>
              <p>
                If you have specific requirements (open source, exclusive
                licensing, etc.), we’ll align on that up front.
              </p>
            </>
          ),
        },
        {
          id: "confidentiality",
          question: "Do you treat our information as confidential?",
          answer: (
            <>
              <p>
                Yes. We treat client information responsibly and can work under
                an NDA. For early conversations, we recommend avoiding sensitive
                data until an NDA is in place.
              </p>
              <p>
                We also recommend sharing only what’s needed for a milestone so
                risk stays low.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: sectionId("Pricing"),
      eyebrow: "Engagement",
      title: "Pricing and support",
      description:
        "No one-size-fits-all pricing—get a quote built around your scope and timeline.",
      items: [
        {
          id: "quote",
          question: "Do you have a pricing page?",
          answer: (
            <>
              <p>
                We don’t publish fixed pricing because scope and constraints
                vary. Instead, we provide a custom quote based on what you’re
                building, how quickly you need it, and the level of polish
                required.
              </p>
              <p>
                If you share a few details, we can usually give you a clear range
                quickly.
              </p>
            </>
          ),
        },
        {
          id: "models",
          question: "How do engagements typically work?",
          answer: (
            <>
              <p>
                We can work milestone-based (fixed scope per milestone) or as a
                monthly engagement for ongoing delivery. We’ll recommend the
                model that best matches your risk and timeline.
              </p>
              <ul>
                <li>Milestones: clear scope, clear deliverables</li>
                <li>Ongoing: flexible scope, steady weekly shipping cadence</li>
              </ul>
            </>
          ),
        },
        {
          id: "support",
          question: "Do you offer maintenance and support?",
          answer: (
            <>
              <p>
                Yes. Many clients keep us on for improvements, performance work,
                reliability hardening, and new features after launch.
              </p>
              <p>
                If you prefer an internal handoff, we’ll also provide
                documentation and walkthroughs so your team can confidently own
                the system.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge>FAQ</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Clear answers, no fluff
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                A quick, practical FAQ about scope, process, and working with{" "}
                {siteName}. If your situation is unique, we’re happy to talk.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Contact for a quote</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  See case studies
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="grid gap-4 lg:sticky lg:top-24">
                <HoverLift lift={4} scale={1.01}>
                  <Card className="glow-ring">
                    <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
                      Quick navigation
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                      Jump to the section you care about.
                    </p>
                    <div className="mt-5 grid gap-2">
                      {sections.map((s) => (
                        <Link
                          key={s.id}
                          href={`#${s.id}`}
                          className="rounded-2xl border bg-white/70 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-white hover:text-zinc-950 glass dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          {s.title} <span aria-hidden>→</span>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </HoverLift>

                <HoverLift lift={4} scale={1.01}>
                  <Card>
                    <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
                      Have a specific requirement?
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Tell us what you’re building and we’ll respond with next
                      steps and a tailored quote.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <ButtonLink href="/contact">Get a quote</ButtonLink>
                      <ButtonLink href="/services" variant="secondary">
                        Explore services
                      </ButtonLink>
                    </div>
                    <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
                      Prefer email? Write us at{" "}
                      <a
                        href={`mailto:${contactEmail}`}
                        className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
                      >
                        {contactEmail}
                      </a>
                      .
                    </p>
                  </Card>
                </HoverLift>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Stagger className="grid gap-10">
                {sections.map((s) => (
                  <StaggerItem key={s.id}>
                    <section id={s.id} className="scroll-mt-28">
                      <SectionHeading
                        eyebrow={s.eyebrow}
                        title={s.title}
                        description={s.description}
                      />
                      <FaqAccordion className="mt-6" items={s.items} />
                    </section>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-12 rounded-3xl border bg-white/70 p-7 shadow-sm glass">
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  Still have questions?
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Share your goals and constraints, and we’ll help you pick the
                  simplest path forward.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact">Contact us</ButtonLink>
                  <ButtonLink href="/blog" variant="secondary">
                    Read our approach
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
