import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur glass text-zinc-700 dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
