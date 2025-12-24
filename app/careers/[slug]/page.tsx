import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getJob, jobs } from "@/lib/content/jobs";
import { siteName } from "@/lib/site";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

type PageParams = { slug: string };
type PageProps = { params: PageParams | Promise<PageParams> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: `${job.summary} — ${siteName}`,
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Careers</Badge>
                <Link
                  href="/careers"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  All roles <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                {job.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                {job.location} · {job.type}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                {job.summary}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Apply / get in touch</ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  About {siteName}
                </ButtonLink>
              </div>
            </Reveal>

            <Stagger className="mt-12 grid gap-4 lg:grid-cols-2">
              <StaggerItem>
                <Card>
                  <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
                    Responsibilities
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
              <StaggerItem>
                <Card>
                  <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
                    Requirements
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            </Stagger>
          </div>
        </Container>
      </section>
    </div>
  );
}
