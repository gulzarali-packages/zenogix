import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CardLink } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { posts } from "@/lib/content/blog";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Blog",
  description: `Insights and writing from ${siteName}.`,
};

export default function BlogIndexPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge>Blog</Badge>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                Notes on building software
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Practical writing on engineering, product, performance, and AI.
              </p>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <CardLink href={`/blog/${post.slug}`}>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    · {post.readingTime}
                  </p>
                  <h2 className="mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 glass dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardLink>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
