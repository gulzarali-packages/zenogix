import Link from "next/link";
import { notFound } from "next/navigation";
import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getService, services } from "@/lib/content/services";
import { siteName } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type PageParams = { slug: string };
type PageProps = { params: PageParams | Promise<PageParams> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.summary} — ${siteName}`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{service.name}</Badge>
                <Link
                  href="/services"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  All services <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                {service.summary}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Request a quote
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <Container className="py-14">
          <SectionHeading
            eyebrow="What we do"
            title="Capabilities"
            description="A focused set of options we tailor to your product, team, and constraints."
          />
          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {service.capabilities.map((capability) => (
              <StaggerItem key={capability}>
                <Card>
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">
                    {capability}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Outcomes"
            title="What success looks like"
            description="We measure outcomes and iterate until the product works for users and the business."
          />
          <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <StaggerItem key={outcome}>
                <Card>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {outcome}
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
