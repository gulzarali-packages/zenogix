import { BackgroundOrbs } from "@/components/site/Background";
import { ContactForm } from "@/components/site/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactEmail, siteName } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Contact",
  description: `Contact ${siteName} to discuss your next project.`,
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Badge>Contact</Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                  Let’s talk
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Tell us what you’re building and what success looks like.
                  We’ll respond quickly with a clear next step.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-medium text-zinc-900 hover:underline dark:text-white"
                    >
                      {contactEmail}
                    </a>
                  </p>
                  <p>Response time: typically within 1 business day.</p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border bg-white/70 p-6 shadow-sm glass sm:p-8">
                <SectionHeading
                  title="Send a message"
                  description="We’ll use this to understand scope and recommend next steps."
                />
                <div className="mt-6">
                  <ContactForm toEmail={contactEmail} />
                </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
