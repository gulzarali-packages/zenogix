import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black">
      <Container className="py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border bg-white/70 p-10 text-center shadow-sm glass">
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              404
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Page not found
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              The page you’re looking for doesn’t exist or has moved.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/">Go home</ButtonLink>
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Contact support <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
