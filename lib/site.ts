export const siteName =
  process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() || "Zenogix";

export const siteTagline =
  process.env.NEXT_PUBLIC_COMPANY_TAGLINE?.trim() ||
  "Software engineering for teams that ship.";

export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION?.trim() ||
  "We build web, mobile, desktop, and AI products—designed for speed, reliability, and growth.";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@example.com";

export const social = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "",
  x: process.env.NEXT_PUBLIC_X_URL?.trim() || "",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const footerNav: { label: string; items: NavItem[] }[] = [
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All services", href: "/services" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
