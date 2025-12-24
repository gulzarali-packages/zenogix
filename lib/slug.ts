export function normalizeSlug(value: unknown) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  try {
    const decoded = decodeURIComponent(trimmed).toLowerCase();
    const withoutQuery = decoded.split(/[?#]/)[0] ?? "";
    const withoutSlashes = withoutQuery.replace(/^\/+|\/+$/g, "");
    const lastSegment = withoutSlashes.split("/").filter(Boolean).pop();
    return lastSegment ?? "";
  } catch {
    const lower = trimmed.toLowerCase();
    const withoutQuery = lower.split(/[?#]/)[0] ?? "";
    const withoutSlashes = withoutQuery.replace(/^\/+|\/+$/g, "");
    const lastSegment = withoutSlashes.split("/").filter(Boolean).pop();
    return lastSegment ?? "";
  }
}

export function slugToTitle(value: unknown) {
  const normalized = normalizeSlug(value);
  if (!normalized) return "Article";
  return normalized
    .split(/[\/\-_.]+/g)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
