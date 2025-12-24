import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CardLink } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/content/caseStudies";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Work",
  description: `Selected work and case studies from ${siteName}.`,
};

export default function WorkPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge>Work</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Results, not just deliverables
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                A few examples of what we build—and the impact it creates for
                teams and customers.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Case studies"
            title="Featured projects"
            description="Short summaries you can skim; details inside."
          />
          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
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
                  {study.website ? (
                    <p className="mt-4 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      {new URL(study.website).host}
                    </p>
                  ) : null}
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
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
