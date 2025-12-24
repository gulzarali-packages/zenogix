import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav, siteName, social } from "@/lib/site";

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-zinc-950 dark:text-white"
            >
              {siteName}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Build, ship, and scale with a team that cares about quality and
              outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <SocialLink href={social.linkedin} label="LinkedIn" />
              <SocialLink href={social.github} label="GitHub" />
              <SocialLink href={social.x} label="X" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-950 dark:hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-950 dark:hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
