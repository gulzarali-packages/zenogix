import Link from "next/link";
import { BackgroundOrbs } from "@/components/site/Background";
import { LandingHero } from "@/components/site/LandingHero";
import { HoverLift } from "@/components/motion/Interactive";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ProcessTimeline, type ProcessStep } from "@/components/site/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardLink } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content/caseStudies";
import { services } from "@/lib/content/services";
import { siteName, siteTagline } from "@/lib/site";

function ServiceIcon({ slug }: { slug: string }) {
  const common =
    "h-5 w-5 text-[color-mix(in_oklab,var(--brand)_70%,black)] dark:text-[color-mix(in_oklab,var(--brand-2)_80%,white)]";
  switch (slug) {
    case "ai-automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M7 8V7a5 5 0 0 1 10 0v1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6.5 10.5h11a2 2 0 0 1 2 2v4.5a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4V12.5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 14.25v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mobile-apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M9 2.75h6A2.25 2.25 0 0 1 17.25 5v14A2.25 2.25 0 0 1 15 21.25H9A2.25 2.25 0 0 1 6.75 19V5A2.25 2.25 0 0 1 9 2.75Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 5.5h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M11.5 18h1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "desktop-apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M4.75 6.5A2.25 2.25 0 0 1 7 4.25h10A2.25 2.25 0 0 1 19.25 6.5v7A2.25 2.25 0 0 1 17 15.75H7A2.25 2.25 0 0 1 4.75 13.5v-7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 19.75h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10.5 15.75v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M13.5 15.75v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud-devops":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M8.5 18.75h8A4.75 4.75 0 0 0 17 9.3 5.75 5.75 0 0 0 6.36 11.6 3.75 3.75 0 0 0 8.5 18.75Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.25v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10.5 14.75 12 16.25l1.5-1.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M5.25 6.5A2.25 2.25 0 0 1 7.5 4.25h9A2.25 2.25 0 0 1 18.75 6.5v11A2.25 2.25 0 0 1 16.5 19.75h-9A2.25 2.25 0 0 1 5.25 17.5v-11Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 8.5h8M8 12h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "web-development":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M4.75 7A2.25 2.25 0 0 1 7 4.75h10A2.25 2.25 0 0 1 19.25 7v10A2.25 2.25 0 0 1 17 19.25H7A2.25 2.25 0 0 1 4.75 17V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.25 9.25 6.75 12l1.5 2.75"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.75 9.25 17.25 12l-1.5 2.75"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 8.75 10.5 15.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function Home() {
  const process: ProcessStep[] = [
    {
      title: "Discover & align",
      description:
        "We clarify goals, constraints, and the smallest shippable slice—so the plan is simple and delivery stays calm.",
      deliverables: ["Scope + milestones", "Tech plan", "Success metrics"],
    },
    {
      title: "Design & build",
      description:
        "We ship in small increments with strong engineering fundamentals and a high bar for UX and accessibility.",
      deliverables: ["Design direction", "Weekly demos", "Production-ready code"],
    },
    {
      title: "Launch & iterate",
      description:
        "We harden reliability and performance, then iterate based on real usage and measurable outcomes.",
      deliverables: ["Launch checklist", "Monitoring + fixes", "Next-step roadmap"],
    },
  ];
  const highlights = [
    {
      title: "Senior-led delivery",
      desc: "Small teams with clear ownership and fast decision-making.",
    },
    {
      title: "Performance-first",
      desc: "Core Web Vitals, accessibility, and conversion-focused UX.",
    },
    {
      title: "AI with guardrails",
      desc: "Useful automation with privacy, reliability, and cost controls.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <BackgroundOrbs />
      <LandingHero siteName={siteName} siteTagline={siteTagline} />

      <section className="border-t border-zinc-200 bg-zinc-50/50 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading
                  eyebrow="Services"
                  title="Everything you need to ship"
                  description="From discovery to delivery, we design and build software that’s fast, accessible, and ready to scale."
                />
              </Reveal>
            </div>
            <Stagger className="lg:col-span-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <StaggerItem key={item.title} className="h-full">
                  <HoverLift className="h-full">
                    <Card className="h-full">
                      <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {item.desc}
                      </p>
                    </Card>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <StaggerItem key={service.slug} className="h-full">
                <HoverLift className="h-full">
                  <CardLink href={`/services/${service.slug}`} className="relative h-full">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--brand-2)_18%,transparent)] blur-3xl" />
                      <div className="absolute -left-24 top-28 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--brand)_16%,transparent)] blur-3xl" />
                    </div>
                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 glass">
                          <ServiceIcon slug={service.slug} />
                        </div>
                        <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                          {service.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {service.summary}
                      </p>
                      <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                        {service.capabilities.slice(0, 3).map((capability) => (
                          <li key={capability} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-2)_70%,black)] dark:bg-[color-mix(in_oklab,var(--brand-2)_70%,white)]" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-medium text-zinc-950 dark:text-white">
                          Learn more <span aria-hidden>→</span>
                        </span>
                        <span className="h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,var(--brand),var(--brand-2),var(--brand-3))] opacity-70" />
                      </div>
                    </div>
                  </CardLink>
                </HoverLift>
              </StaggerItem>
            ))}

            <StaggerItem className="h-full">
              <HoverLift className="h-full">
                <CardLink href="/contact" className="relative h-full">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-100"
                  >
                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--brand-3)_18%,transparent)] blur-3xl" />
                    <div className="absolute -left-24 top-28 h-56 w-56 rounded-full bg-[color-mix(in_oklab,var(--brand)_16%,transparent)] blur-3xl" />
                  </div>
                  <div className="relative">
                    <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                      CUSTOM QUOTE
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                      Not sure which service you need?
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Tell us your goals and timeline. We’ll recommend the best
                      approach and provide a clear quote.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-950 dark:text-white">
                      Get a quote <span aria-hidden>→</span>
                    </div>
                  </div>
                </CardLink>
              </HoverLift>
            </StaggerItem>
          </Stagger>
          <Reveal>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" variant="secondary">
                View all services
              </ButtonLink>
              <ButtonLink href="/contact">Request a quote</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Approach"
                  title="A clear, low-drama process"
                  description="We keep momentum with short feedback loops, simple communication, and measurable outcomes."
                />
              </Reveal>
              <Reveal delay={0.08}>
                <HoverLift>
                  <div className="mt-8 rounded-3xl border bg-white/70 p-6 shadow-sm glass">
                    <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                      WHAT YOU GET
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {[
                        "Weekly demo + written update",
                        "Clear timeline and scope slices",
                        "Quality checks (types, lint, performance)",
                        "Async-friendly communication",
                        "A clean handoff with documentation",
                      ].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color-mix(in_oklab,var(--brand-2)_70%,black)] dark:bg-[color-mix(in_oklab,var(--brand-2)_70%,white)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href="/contact" className="glow-ring">
                        Request a quote
                      </ButtonLink>
                      <ButtonLink href="/services" variant="secondary">
                        Explore services
                      </ButtonLink>
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <ProcessTimeline steps={process} className="lg:grid-cols-1" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Work"
              title="Featured results"
              description="A few examples of the kind of outcomes we help teams achieve."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <StaggerItem key={study.slug}>
                <HoverLift>
                  <CardLink href={`/work/${study.slug}`}>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {study.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 glass dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardLink>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-12 flex items-center justify-between gap-4">
              <ButtonLink href="/work" variant="secondary">
                See all work
              </ButtonLink>
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Have a project? Let’s talk <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-16 sm:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border p-8 shadow-sm glass sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_10%_0%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_60%)] opacity-80"
              />
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                    READY TO SHIP
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    Let’s build something you’re proud of.
                  </h2>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Tell us about your goals. We’ll respond quickly with a clear
                    next step.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" className="glow-ring">
                    Contact us
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Request a quote
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
