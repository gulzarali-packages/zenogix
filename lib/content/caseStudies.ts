export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  website?: string;
  tags: string[];
  problem: string;
  solution: string[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "flexfiles",
    title: "FlexFiles",
    industry: "SaaS",
    summary:
      "A secure file-sharing product built for modern teams—fast uploads, simple sharing, and a polished client experience.",
    website: "https://flexfiles.io/",
    tags: ["Web", "File Sharing", "Security"],
    problem:
      "Teams needed an easy way to share sensitive files with clients and coworkers without the friction of legacy portals or unsafe ad-hoc links.",
    solution: [
      "Designed a clean, conversion-friendly marketing experience",
      "Built a modern web app with secure sharing workflows",
      "Implemented a scalable foundation for growth and iteration",
    ],
    results: [
      "Faster, smoother file sharing for users",
      "A professional client-facing experience",
      "A maintainable platform ready for new features",
    ],
  },
  {
    slug: "fintech-analytics-platform",
    title: "Fintech Analytics Platform",
    industry: "Financial Services",
    summary:
      "A real-time analytics dashboard that helped teams make faster decisions with confidence.",
    tags: ["Web", "Data", "Performance"],
    problem:
      "The client’s reporting stack was slow and fragmented, with inconsistent metrics and limited self-serve insights.",
    solution: [
      "Rebuilt the dashboard with a component-driven UI",
      "Implemented reliable data contracts and caching",
      "Introduced role-based access and audit logs",
    ],
    results: [
      "Reduced load times from seconds to sub-second",
      "Improved trust in metrics across teams",
      "Enabled self-serve reporting for stakeholders",
    ],
  },
  {
    slug: "support-ai-triage",
    title: "AI Support Triage",
    industry: "SaaS",
    summary:
      "An AI-assisted workflow that categorizes, summarizes, and routes tickets to the right team.",
    tags: ["AI", "Automation", "Integrations"],
    problem:
      "Support volume grew rapidly and the team struggled to maintain fast, consistent responses.",
    solution: [
      "Added summarization and intent classification",
      "Automated routing with confidence thresholds",
      "Built monitoring and evaluation for quality",
    ],
    results: [
      "Cut first-response time significantly",
      "Reduced manual triage and repetitive work",
      "Improved customer satisfaction through consistency",
    ],
  },
  {
    slug: "ops-desktop-tooling",
    title: "Operations Desktop Tooling",
    industry: "Logistics",
    summary:
      "A desktop application for internal teams to process requests with fewer errors and faster throughput.",
    tags: ["Desktop", "Internal Tools", "Security"],
    problem:
      "Legacy tools were unreliable and required too many manual steps, resulting in costly mistakes.",
    solution: [
      "Streamlined workflows with guided UI",
      "Added validations, audit trails, and RBAC",
      "Improved release process with safer updates",
    ],
    results: [
      "Lowered error rates with automated checks",
      "Improved processing throughput for the team",
      "Reduced support burden and downtime",
    ],
  },
];

import { normalizeSlug } from "@/lib/slug";

export function getCaseStudy(slug: string) {
  const target = normalizeSlug(slug);
  return caseStudies.find((study) => normalizeSlug(study.slug) === target);
}
