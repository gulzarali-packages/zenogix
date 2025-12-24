import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

function buttonClasses(variant: NonNullable<CommonProps["variant"]>) {
  switch (variant) {
    case "secondary":
      return "border glass text-zinc-900 hover:bg-zinc-50/70 dark:text-white dark:hover:bg-white/10";
    case "ghost":
      return "bg-transparent text-zinc-900 hover:bg-zinc-100/70 dark:text-white dark:hover:bg-white/10";
    case "primary":
    default:
      return "bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200";
  }
}

export function Button({
  variant = "primary",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-white/20",
        buttonClasses(variant),
        className,
      )}
    />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:focus-visible:ring-white/20",
        buttonClasses(variant),
        className,
      )}
    >
      {children}
    </Link>
  );
}
