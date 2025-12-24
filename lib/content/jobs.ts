export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    summary:
      "Build delightful web experiences with a strong eye for performance, accessibility, and polish.",
    responsibilities: [
      "Ship features across marketing and product surfaces",
      "Collaborate with design to refine UX and interactions",
      "Own quality: testing, performance, and accessibility",
    ],
    requirements: [
      "Strong React/TypeScript fundamentals",
      "Experience with modern CSS and component patterns",
      "Comfortable shipping iteratively with feedback loops",
    ],
  },
  {
    slug: "fullstack-engineer",
    title: "Full-Stack Engineer",
    location: "Remote",
    type: "Full-time",
    summary:
      "Work across the stack to deliver reliable features and improve systems with pragmatic tradeoffs.",
    responsibilities: [
      "Design and implement APIs and integrations",
      "Improve reliability with monitoring and better tooling",
      "Contribute to architecture decisions and reviews",
    ],
    requirements: [
      "Experience building and operating production systems",
      "Comfort with databases, APIs, and authentication",
      "Strong communication and ownership mindset",
    ],
  },
];

import { normalizeSlug } from "@/lib/slug";

export function getJob(slug: string) {
  const target = normalizeSlug(slug);
  return jobs.find((job) => normalizeSlug(job.slug) === target);
}
