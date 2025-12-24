import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "card-shimmer glass rounded-3xl border bg-white/70 p-6 shadow-sm transition-[transform,background-color,border-color,box-shadow] dark:bg-white/5 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type CardLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className" | "children"
>;

export function CardLink({
  href,
  children,
  className,
  ...props
}: { href: string; children: React.ReactNode; className?: string } & CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "card-shimmer glass group block rounded-3xl border bg-white/70 p-6 shadow-sm transition-[transform,background-color,border-color,box-shadow] hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
