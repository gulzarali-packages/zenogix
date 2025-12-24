import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { BackgroundOrbs } from "@/components/site/Background";
import { Badge } from "@/components/ui/Badge";
import { contactEmail, siteName } from "@/lib/site";

export const metadata = {
  title: "Privacy",
  description: `Privacy policy for ${siteName}: how we collect, use, and protect information.`,
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                This policy explains how {siteName} collects, uses, shares, and
                protects information when you visit our website or contact us.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 rounded-3xl border bg-white/70 p-8 shadow-sm glass sm:p-10">
                <SectionHeading
                  title="Summary"
                  description={`Last updated: ${lastUpdated}. If you have questions, email ${contactEmail}.`}
                />

                <div className="prose mt-10 max-w-none">
                  <p>
                    We collect a small amount of information to run the site,
                    respond to messages, and keep things secure. We do not sell
                    personal information.
                  </p>

                  <h2>What this policy covers</h2>
                  <p>
                    This policy applies to this website and our public pages. If
                    you become a client and we build or operate software for you,
                    the data practices for that project may be governed by a
                    separate agreement (for example, a Statement of Work or Data
                    Processing Addendum).
                  </p>

                  <h2>Information we collect</h2>
                  <p>
                    The information we collect depends on how you interact with
                    the site.
                  </p>
                  <ul>
                    <li>
                      <strong>Information you provide:</strong> when you contact
                      us, request a quote, or send a message, we may collect your
                      name, email, company name, and the details you include in
                      your message.
                    </li>
                    <li>
                      <strong>Basic technical data:</strong> when you visit the
                      site, our servers may receive standard information such as
                      your IP address, device and browser type, pages viewed, and
                      timestamps (for security and diagnostics).
                    </li>
                    <li>
                      <strong>Cookies and similar technologies:</strong> we may
                      use cookies or local storage to support core site
                      functionality and understand aggregated site usage.
                    </li>
                  </ul>

                  <h2>How we use information</h2>
                  <ul>
                    <li>
                      To respond to inquiries, schedule calls, and provide
                      requested information.
                    </li>
                    <li>
                      To improve the website, content, and user experience (for
                      example, which pages are most helpful).
                    </li>
                    <li>
                      To maintain security, prevent abuse, and debug technical
                      issues.
                    </li>
                    <li>
                      To operate our business (for example, keeping internal
                      records of conversations and proposals).
                    </li>
                  </ul>

                  <h2>When we share information</h2>
                  <p>
                    We share personal information only when necessary to run the
                    site or respond to you.
                  </p>
                  <ul>
                    <li>
                      <strong>Service providers:</strong> we may use trusted
                      vendors (such as hosting, email, or analytics providers)
                      that process information on our behalf.
                    </li>
                    <li>
                      <strong>Legal and safety:</strong> we may disclose
                      information if required by law, or to protect the rights,
                      safety, and security of {siteName}, our users, or the
                      public.
                    </li>
                    <li>
                      <strong>Business transfers:</strong> if we undergo a
                      merger, acquisition, or asset transfer, information may be
                      transferred as part of that transaction.
                    </li>
                  </ul>

                  <h2>Analytics</h2>
                  <p>
                    We may use privacy-conscious analytics to understand traffic
                    in aggregate. Analytics helps us learn what content is useful
                    and whether the site is performing well. Where required, we
                    will request consent before setting non-essential cookies.
                  </p>

                  <h2>Data retention</h2>
                  <p>
                    We keep information only as long as needed for the purposes
                    described above, including to respond to you, maintain
                    records, and meet legal or operational requirements. We may
                    retain aggregated or de-identified data longer.
                  </p>

                  <h2>Security</h2>
                  <p>
                    We use reasonable technical and organizational measures to
                    protect information. No method of transmission or storage is
                    100% secure, but we work to prevent unauthorized access,
                    misuse, and loss.
                  </p>

                  <h2>Your choices and rights</h2>
                  <p>
                    Depending on where you live, you may have rights to access,
                    correct, or delete personal information, or to object to or
                    restrict certain processing. You can request this by emailing{" "}
                    {contactEmail}. We may need to verify your identity before
                    fulfilling a request.
                  </p>
                  <ul>
                    <li>
                      <strong>Opt-out:</strong> if you receive emails from us and
                      want to stop, reply and ask to be removed.
                    </li>
                    <li>
                      <strong>Cookies:</strong> you can usually control cookies
                      through your browser settings.
                    </li>
                  </ul>

                  <h2>International visitors</h2>
                  <p>
                    If you access the site from outside the country where we
                    operate, your information may be processed in other
                    locations. We take steps to protect information regardless
                    of where it is processed.
                  </p>

                  <h2>Children’s privacy</h2>
                  <p>
                    Our website is not directed to children, and we do not
                    knowingly collect personal information from children.
                  </p>

                  <h2>Changes to this policy</h2>
                  <p>
                    We may update this policy from time to time. When we do, we
                    will revise the “Last updated” date and post the updated
                    policy here.
                  </p>

                  <h2>Contact</h2>
                  <p>
                    For privacy-related questions or requests, email{" "}
                    {contactEmail}.
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
