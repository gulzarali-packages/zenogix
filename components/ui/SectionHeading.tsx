import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

