import Link from "next/link";
import { BackgroundOrbs } from "@/components/site/Background";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { getPost, posts } from "@/lib/content/blog";
import { slugToTitle } from "@/lib/slug";
import { siteName } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = true;

type PageParams = { slug: string };
type PageProps = { params: PageParams | Promise<PageParams> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {
      title: slugToTitle(slug),
      description: `An article from ${siteName}.`,
    };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? slugToTitle(slug);
  const description =
    post?.description ??
    "A practical note on building modern software with strong fundamentals.";
  const date = post?.date ?? new Date().toISOString().slice(0, 10);
  const readingTime = post?.readingTime ?? "4 min";
  const tags = post?.tags ?? ["Notes"];
  const content =
    post?.content ??
    ([
      {
        type: "p",
        value:
          "This is a draft article generated from the URL slug. If you’d like us to publish a full write-up on this topic, tell us what you’re building and what constraints you’re working with.",
      },
      { type: "h2", value: "A useful starting point" },
      {
        type: "ul",
        value: [
          "Clarify the user outcome you’re trying to improve",
          "Ship a small change you can measure",
          "Add guardrails: types, lint, and monitoring",
          "Iterate based on real usage",
        ],
      },
      { type: "h2", value: "Need help?" },
      {
        type: "p",
        value:
          "We help teams design, build, and ship web, mobile, desktop, and AI products with a calm, reliable process.",
      },
    ] as const);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <section className="relative">
        <BackgroundOrbs />
        <Container className="relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Blog</Badge>
                {!post ? (
                  <Badge className="border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
                    Draft
                  </Badge>
                ) : null}
                <Link
                  href="/blog"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  All posts <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                {siteName} ·{" "}
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {readingTime}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <article className="mt-10 rounded-3xl border bg-white/70 p-6 shadow-sm glass sm:p-10">
                <div className="prose max-w-none">
                  {content.map((block, index) => {
                    if (block.type === "h2") {
                      return (
                        <h2 key={index} className="mt-8">
                          {block.value as string}
                        </h2>
                      );
                    }
                    if (block.type === "ul") {
                      return (
                        <ul key={index}>
                          {(block.value as string[]).map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index}>{block.value as string}</p>;
                  })}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 glass dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {!post ? (
                  <div className="mt-8 rounded-2xl border bg-white/70 p-5 shadow-sm glass">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Want a full article on this topic?{" "}
                      <Link
                        href="/contact"
                        className="font-medium text-zinc-950 hover:underline dark:text-white"
                      >
                        Contact us
                      </Link>{" "}
                      and we’ll tailor it to your use case.
                    </p>
                  </div>
                ) : null}
              </article>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
