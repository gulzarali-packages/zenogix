import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BackgroundOrbs } from "@/components/site/Background";
import { Badge } from "@/components/ui/Badge";
import { contactEmail, siteName } from "@/lib/site";

export const metadata = {
  title: "Terms",
  description: `Terms of service for ${siteName}: rules for using our website and engaging with our services.`,
};

export default function TermsPage() {
  const lastUpdated = "2025-12-24";
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Badge>Legal</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Terms of Service
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                These terms govern your use of the {siteName} website. They also
                describe how we handle quotes, proposals, and general
                communications.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 rounded-3xl border bg-white/70 p-8 shadow-sm glass sm:p-10">
                <SectionHeading
                  title="Summary"
                  description={`Last updated: ${lastUpdated}. Questions? Email ${contactEmail}.`}
                />

                <div className="prose mt-10 max-w-none">
                  <p>
                    By accessing or using this website, you agree to these
                    Terms. If you do not agree, please do not use the site.
                  </p>

                  <h2>Who we are</h2>
                  <p>
                    {siteName} is a software company that designs and builds web,
                    mobile, desktop, and AI-enabled products. This website is a
                    marketing and informational site and may be updated over
                    time.
                  </p>

                  <h2>Using the website</h2>
                  <ul>
                    <li>
                      You may browse, read, and share links to our content for
                      lawful purposes.
                    </li>
                    <li>
                      You may not attempt to disrupt, probe, or misuse the site,
                      including by introducing malware, scraping at unreasonable
                      rates, or attempting to access non-public systems.
                    </li>
                    <li>
                      You may not use the site in a way that infringes the
                      rights of others or violates applicable law.
                    </li>
                  </ul>

                  <h2>Quotes, proposals, and services</h2>
                  <p>
                    We typically provide quotes after a short discovery
                    conversation. Any timeline, estimate, or proposal we share
                    is informational and may change based on scope, constraints,
                    and technical findings.
                  </p>
                  <p>
                    If you engage {siteName} for paid services, the relationship
                    is governed by a separate written agreement (for example, a
                    Master Services Agreement and/or Statement of Work). If there
                    is a conflict between that agreement and these Terms, the
                    written services agreement controls for the paid services.
                  </p>

                  <h2>Intellectual property</h2>
                  <p>
                    Unless otherwise stated, the website and its content
                    (including text, graphics, and design) are owned by {siteName}
                    or its licensors and are protected by applicable intellectual
                    property laws.
                  </p>
                  <p>
                    You may not copy, reproduce, or create derivative works from
                    our content for commercial use without our permission.
                  </p>

                  <h2>User submissions</h2>
                  <p>
                    If you submit information through the contact form or by
                    email (such as a project description), you agree that we may
                    use that information to evaluate your request and respond.
                    Please do not send confidential information unless we have a
                    signed NDA or other agreement in place.
                  </p>

                  <h2>Third-party links</h2>
                  <p>
                    The site may link to third-party websites. We are not
                    responsible for third-party content, policies, or practices.
                    Your use of third-party sites is at your own risk.
                  </p>

                  <h2>Disclaimers</h2>
                  <p>
                    We work hard to keep the site accurate and available, but
                    the site is provided on an “as is” and “as available” basis.
                    We do not guarantee that the site will be uninterrupted or
                    error-free, or that content will always be up to date.
                  </p>

                  <h2>Limitation of liability</h2>
                  <p>
                    To the extent permitted by law, {siteName} will not be liable
                    for indirect, incidental, special, consequential, or punitive
                    damages arising out of or related to your use of the website.
                  </p>

                  <h2>Indemnity</h2>
                  <p>
                    To the extent permitted by law, you agree to indemnify and
                    hold harmless {siteName} from claims arising out of your use
                    of the website or your violation of these Terms.
                  </p>

                  <h2>Changes to these terms</h2>
                  <p>
                    We may update these Terms from time to time. When we do, we
                    will update the “Last updated” date and post the revised
                    Terms here.
                  </p>

                  <h2>Contact</h2>
                  <p>
                    If you have questions about these Terms, email {contactEmail}.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
