import { cn } from "@/lib/cn";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[color-mix(in_oklab,var(--brand)_90%,black)] via-[color-mix(in_oklab,var(--brand-2)_90%,black)] to-[color-mix(in_oklab,var(--brand-3)_85%,black)] bg-clip-text text-transparent dark:from-[color-mix(in_oklab,var(--brand)_95%,white)] dark:via-[color-mix(in_oklab,var(--brand-2)_92%,white)] dark:to-[color-mix(in_oklab,var(--brand-3)_92%,white)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
