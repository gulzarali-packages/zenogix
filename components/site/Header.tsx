"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { primaryNav, siteName } from "@/lib/site";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }, [href, pathname]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-white/20",
        isActive
          ? "bg-zinc-100 text-zinc-950 dark:bg-white/10 dark:text-white"
          : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/50">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-zinc-950 hover:bg-zinc-100 dark:text-white dark:hover:bg-white/10"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_oklab,var(--brand)_70%,black)] shadow-sm dark:bg-[color-mix(in_oklab,var(--brand)_85%,white)]" />
            {siteName}
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/contact" variant="secondary">
            Get a quote
          </ButtonLink>
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="grid gap-1">
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
          </div>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black md:hidden"
        >
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  className="w-full"
                >
                  Get a quote
                </ButtonLink>
                <ButtonLink href="/contact" className="w-full">
                  Contact
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
