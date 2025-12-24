import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content/caseStudies";
import { posts } from "@/lib/content/blog";
import { services } from "@/lib/content/services";
import { jobs } from "@/lib/content/jobs";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl || "https://example.com";
  const now = new Date();

  const staticRoutes = [
    "/",
    "/services",
    "/work",
    "/about",
    "/blog",
    "/careers",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...caseStudies.map((s) => `/work/${s.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
    ...jobs.map((j) => `/careers/${j.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: now }));

  return [...staticRoutes, ...dynamicRoutes];
}
