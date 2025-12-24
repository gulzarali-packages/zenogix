export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Fast, accessible websites and web apps that convert.",
    description:
      "From marketing sites to complex dashboards, we build modern web experiences with performance, accessibility, and maintainability baked in.",
    capabilities: [
      "Next.js & React engineering",
      "Design systems & component libraries",
      "Performance & Core Web Vitals",
      "SEO-ready, content-driven builds",
      "Integrations (payments, CRM, analytics)",
    ],
    outcomes: [
      "Ship quicker with a scalable codebase",
      "Improve conversions with UX-first design",
      "Reduce bugs with predictable patterns",
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    summary: "iOS/Android apps built for delight and reliability.",
    description:
      "We design and build mobile apps that feel native, load instantly, and stay stable as your user base grows.",
    capabilities: [
      "Cross-platform builds (React Native)",
      "Native integrations & device features",
      "Offline-first experiences",
      "Release automation & app store support",
      "Analytics & crash monitoring setup",
    ],
    outcomes: [
      "Launch MVPs without cutting corners",
      "Increase retention with smoother UX",
      "Ship updates confidently and frequently",
    ],
  },
  {
    slug: "desktop-apps",
    name: "Desktop Apps",
    summary: "Secure, polished desktop software for teams and customers.",
    description:
      "When the browser isn’t enough, we deliver desktop apps with strong UX, robust update flows, and enterprise-friendly distribution.",
    capabilities: [
      "Cross-platform desktop apps",
      "Authentication & role-based access",
      "Auto-updates & secure packaging",
      "Hardware/peripheral integrations",
      "Internal tooling and admin consoles",
    ],
    outcomes: [
      "Empower operations with faster tools",
      "Reduce support costs with reliability",
      "Deploy updates without downtime",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    summary: "Practical AI that improves workflows—safely.",
    description:
      "We apply AI where it matters: summarization, routing, extraction, recommendations, and automation—integrated into your product and data.",
    capabilities: [
      "LLM features (chat, copilots, agents)",
      "Document parsing & extraction",
      "Workflow automation and orchestration",
      "Safety, evaluation, and monitoring",
      "Private data + compliant deployment",
    ],
    outcomes: [
      "Cut manual effort with automation",
      "Improve customer response times",
      "Turn unstructured data into value",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    summary: "Ship with confidence: scalable infra and smooth delivery.",
    description:
      "We help teams move faster with reliable infrastructure, modern CI/CD, and observability that catches issues before customers do.",
    capabilities: [
      "Cloud architecture & migrations",
      "CI/CD pipelines & release automation",
      "Monitoring, logging, and alerting",
      "Security hardening & best practices",
      "Cost optimization and scaling",
    ],
    outcomes: [
      "Fewer outages and faster recovery",
      "Shorter release cycles",
      "Lower infra costs with smarter scaling",
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    summary: "Clean interfaces, strong UX, and measurable outcomes.",
    description:
      "We design products that are simple to use, easy to learn, and consistent across every touchpoint.",
    capabilities: [
      "Product discovery & UX strategy",
      "Wireframes and high-fidelity UI",
      "Design systems and tokens",
      "Accessibility-first UX",
      "User testing and iteration",
    ],
    outcomes: [
      "Better usability and adoption",
      "Higher conversions and retention",
      "Less rework with shared alignment",
    ],
  },
];

import { normalizeSlug } from "@/lib/slug";

export function getService(slug: string) {
  const target = normalizeSlug(slug);
  return services.find((service) => normalizeSlug(service.slug) === target);
}
