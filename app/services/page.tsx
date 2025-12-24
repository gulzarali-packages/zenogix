import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { CardLink } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Services",
  description: `Software services by ${siteName}: web, mobile, desktop, AI, and cloud.`,
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>Services</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Build with a team that ships
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Choose a service or ask for a custom engagement. We optimize for
                clarity, speed, and long-term maintainability.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Get a proposal</ButtonLink>
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
            eyebrow="Capabilities"
            title="Specialized teams. One consistent process."
            description="Pick what you need now—expand later without rewrites or handoffs."
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <CardLink href={`/services/${service.slug}`}>
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {service.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 glass dark:text-zinc-300"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </CardLink>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
        <Container className="py-14">
          <Reveal>
            <div className="rounded-3xl border p-8 shadow-sm glass sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                  Not sure where to start?
                </h2>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Tell us what you’re building. We’ll recommend the best path
                  forward and give you a clear estimate.
                </p>
              </div>
              <ButtonLink href="/contact">Talk to us</ButtonLink>
            </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
