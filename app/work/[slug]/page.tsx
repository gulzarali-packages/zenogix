import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, getCaseStudy } from "@/lib/content/caseStudies";
import { siteName } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type PageParams = { slug: string };
type PageProps = { params: PageParams | Promise<PageParams> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: `${study.summary} — ${siteName}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{study.industry}</Badge>
                <Link
                  href="/work"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  All work <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                {study.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                {study.summary}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Build something similar</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore services
                </ButtonLink>
                {study.website ? (
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-medium shadow-sm transition-colors glass text-zinc-900 hover:bg-zinc-50/70 dark:text-white dark:hover:bg-white/10"
                  >
                    Visit website <span aria-hidden className="ml-2">↗</span>
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Problem"
                title="What we started with"
                description={study.problem}
              />
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Solution"
                title="What we built"
                description="A pragmatic set of improvements delivered incrementally."
              />
              <Stagger className="mt-6 grid gap-4">
                {study.solution.map((item) => (
                  <StaggerItem key={item}>
                    <Card>
                      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {item}
                      </p>
                    </Card>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Results"
            title="Impact"
            description="Outcomes that matter to the business and the end user."
          />
          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {study.results.map((item) => (
              <StaggerItem key={item}>
                <Card>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {item}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
