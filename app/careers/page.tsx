import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CardLink } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { jobs } from "@/lib/content/jobs";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Careers",
  description: `Open roles at ${siteName}.`,
};

export default function CareersPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge>Careers</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Join a calm, high-output team
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                We value craft, ownership, and clear communication. If you like
                shipping quality work, you’ll fit in.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="secondary">
                  Ask a question
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-12 grid gap-4 lg:grid-cols-2">
            {jobs.map((job) => (
              <StaggerItem key={job.slug}>
                <CardLink href={`/careers/${job.slug}`}>
                  <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
                    {job.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {job.location} · {job.type}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {job.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium text-zinc-950 dark:text-white">
                    View role <span aria-hidden>→</span>
                  </p>
                </CardLink>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
