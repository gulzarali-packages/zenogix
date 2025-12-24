import { normalizeSlug } from "@/lib/slug";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: Array<{ type: "p" | "h2" | "ul"; value: string | string[] }>;
};

export const posts: BlogPost[] = [
  {
    slug: "shipping-fast-without-breaking-things",
    title: "Shipping Fast Without Breaking Things",
    description:
      "How to ship software faster without regressions: small batches, clear scope, CI/CD guardrails, safe releases, and a calm weekly cadence.",
    date: "2025-01-12",
    readingTime: "14 min",
    tags: ["Software Delivery", "CI/CD", "Release Process", "Engineering"],
    content: [
      {
        type: "p",
        value:
          "Shipping fast without breaking things is not a motivational poster. It is a delivery system. When releases are safe and predictable, teams ship more often, learn faster, and spend less time firefighting. When releases feel risky, teams naturally slow down: they batch work, add meetings, and delay decisions until everything feels certain. The result is fewer releases and more stress, even when everyone is working hard.",
      },
      {
        type: "p",
        value:
          "This guide is a practical playbook for shipping software faster without regressions. It works for product teams, agencies, and startups because it focuses on repeatable habits: clear scope, small batches, automated guardrails (CI/CD), safe releases, and measurement after deploy. None of it requires heavy process. The goal is calm speed that you can sustain month after month.",
      },
      { type: "h2", value: "What 'shipping fast' actually means" },
      {
        type: "p",
        value:
          "Shipping fast is not about rushing or cutting corners. It is about reducing uncertainty. If you can ship a change safely, you do not need to save it up for a big release. If you can roll back quickly, you do not need to be afraid of deploying. If you can measure outcomes, you do not need to guess. Fast teams are not reckless teams. They are teams with a system that makes mistakes cheap.",
      },
      {
        type: "p",
        value:
          "The biggest mindset shift is this: stability is what makes speed possible. A stable release process reduces fear. Less fear leads to smaller batches. Smaller batches lead to faster review and QA. Faster feedback leads to better product decisions. That is why the same practices improve both velocity and reliability.",
      },
      { type: "h2", value: "Step 1: Define the outcome and the boundary" },
      {
        type: "p",
        value:
          "The most common cause of slow delivery is unclear scope. If a request arrives as a feature list, translate it into two lines: (1) the user outcome, (2) the success metric. Example: 'Users can invite a teammate in under 60 seconds' and 'Invite completion rate increases by 10%'. This creates focus and makes it easier to cut work that does not move the metric.",
      },
      {
        type: "p",
        value:
          "Next, write down the boundary for release one: what is explicitly not included. This is how you keep projects calm. When a stakeholder requests a new idea mid-sprint, you can respond with a scope swap instead of silently expanding the deadline. Clarity is not bureaucracy. It is a shortcut to fewer surprises.",
      },
      {
        type: "ul",
        value: [
          "Outcome: what the user can do after the change",
          "Metric: how you will know it worked (conversion, time-to-complete, retention)",
          "Constraints: timeline, compliance, performance, platforms",
          "Boundary: what is out of scope for the first release",
        ],
      },
      { type: "h2", value: "Step 2: Slice work into vertical increments" },
      {
        type: "p",
        value:
          "Large batches create slow reviews, slow QA, and scary releases. The fix is vertical slicing: ship thin end-to-end increments that produce a real result. A vertical slice includes the minimum UI, the minimum backend wiring, and the minimum error handling for one small behavior. This gives you something you can demo, test, measure, and release safely.",
      },
      {
        type: "p",
        value:
          "If you struggle to slice, start by shipping the happy path first, then add edge cases. Or ship for one user role first, then expand. Or ship the UI behind a feature flag with stubbed data, then connect real data in the next slice. The goal is to keep each release small enough that a rollback is trivial and a regression is obvious.",
      },
      {
        type: "ul",
        value: [
          "Prefer additive database changes before switching code paths",
          "Use feature flags to ship safely while iterating on UX",
          "Avoid long-lived branches; merge small PRs frequently",
          "Keep each slice deployable and reversible",
        ],
      },
      { type: "h2", value: "Step 3: Make code review fast (without lowering the bar)" },
      {
        type: "p",
        value:
          "Code review is where shipping speed often dies. Not because reviewers do not care, but because changes are hard to understand and hard to verify. The fastest teams make review easy: small PRs, consistent structure, and clear test instructions. Review then becomes a multiplier instead of a queue.",
      },
      {
        type: "p",
        value:
          "Use a consistent PR format: Summary (2-3 sentences), Why (one sentence), How to test (bullets), Risk/rollout (one line). This reduces back-and-forth and prevents misunderstandings. Also avoid mixing unrelated refactors with feature work. If it is not required for the outcome, ship it separately.",
      },
      {
        type: "ul",
        value: [
          "Target PRs that can be reviewed in one sitting",
          "Always include a short 'How to test' checklist",
          "Keep refactors separate from behavior changes",
          "Automate formatting and linting so review focuses on logic",
        ],
      },
      { type: "h2", value: "Step 4: Put guardrails in CI/CD" },
      {
        type: "p",
        value:
          "If quality depends on humans remembering a checklist, it will be inconsistent. Automated guardrails are what turn speed into something sustainable. At minimum, run TypeScript checks, linting, and a small but meaningful test suite on every pull request. This reduces regressions and increases confidence to merge quickly.",
      },
      {
        type: "p",
        value:
          "Do not chase perfect coverage. Protect what matters. Identify your critical flows: onboarding, authentication, payments, file upload, and anything that causes real customer pain when it breaks. A handful of well-chosen integration tests often provide more value than a large set of brittle tests.",
      },
      {
        type: "ul",
        value: [
          "Type checks and lint: catch obvious issues early",
          "Integration tests: protect core flows and data contracts",
          "Preview deployments: validate behavior before merging",
          "Optional performance checks on key pages (helpful for SEO)",
        ],
      },
      { type: "h2", value: "Step 5: Release safely (so you can ship more often)" },
      {
        type: "p",
        value:
          "Fast teams do not ship riskier. They ship safer. A safe release is reversible, observable, and small. Feature flags allow gradual rollouts. Additive migrations prevent downtime. Timeouts and fallbacks reduce incident severity. The point is not to eliminate all risk. The point is to keep the blast radius small and the recovery path clear.",
      },
      {
        type: "p",
        value:
          "One practical pattern is two-phase data changes: first deploy the schema changes (add columns, add tables, backfill safely), then deploy the code that reads and writes the new fields. Once the new path is stable, you can remove old fields later. This approach avoids breaking production during deploy and keeps the system stable during iteration.",
      },
      {
        type: "ul",
        value: [
          "Use feature flags for risky UI and behavior changes",
          "Deploy additive migrations before switching code paths",
          "Add timeouts, retries, and graceful error states",
          "Practice rollback and keep it fast and boring",
        ],
      },
      { type: "h2", value: "Step 6: Measure after deploy (this is where speed comes from)" },
      {
        type: "p",
        value:
          "Shipping is not the finish line. It is the start of learning. If you ship and do not measure, you keep guessing. Add lightweight analytics to key actions and monitor errors and performance. This turns releases into a steady improvement loop: ship, measure, adjust, and ship again.",
      },
      {
        type: "p",
        value:
          "Measurement also matters for SEO and conversion. Performance regressions can reduce user trust and rankings over time. Track real user performance and watch for layout shifts, slow largest contentful paint, and interaction delays. A small weekly performance budget check can prevent months of slow creep.",
      },
      { type: "h2", value: "Step 7: A calm weekly cadence that keeps alignment" },
      {
        type: "p",
        value:
          "A calm cadence beats a heroic sprint. Many teams ship best on a weekly rhythm: pick the smallest outcome slice, build and demo mid-week, release safely, and write a short update. The update should be simple: what shipped, what is next, and what is blocked. This reduces meetings because the product itself becomes the status report.",
      },
      {
        type: "p",
        value:
          "If you want to improve delivery quickly, start with one flow. Cut it into the smallest release you can safely ship. Add the missing CI guardrails. Release behind a feature flag if needed. Measure the result. Repeat weekly. In a month, you will feel the compounding effect: faster reviews, fewer regressions, and a team that trusts its own release process.",
      },
      { type: "h2", value: "The fast, safe shipping checklist" },
      {
        type: "ul",
        value: [
          "Define one outcome and one metric for each slice",
          "Write a boundary: what is out of scope for release one",
          "Ship small PRs with a clear test plan",
          "Enforce CI guardrails (types, lint, core tests) on every change",
          "Use feature flags and gradual rollouts for risky changes",
          "Prefer additive migrations and reversible deployments",
          "Measure errors, performance, and key user actions after deploy",
        ],
      },
      {
        type: "p",
        value:
          "Shipping fast without breaking things is not about moving faster with the same risk. It is about reducing risk until speed becomes natural. When you build that system, releases become routine, quality becomes consistent, and your product improves steadily without drama.",
      },
    ],
  },
  {
    slug: "core-web-vitals-that-actually-matter",
    title: "Core Web Vitals That Actually Matter",
    description:
      "A practical guide to improving LCP, INP, and CLS with changes users can feel, plus an SEO-friendly performance routine that prevents regressions.",
    date: "2025-02-03",
    readingTime: "12 min",
    tags: ["Web Performance", "Core Web Vitals", "SEO"],
    content: [
      {
        type: "p",
        value:
          "Core Web Vitals are useful because they describe how a page feels. But many teams chase the metric and miss the experience. The goal is not a perfect score. The goal is a site that feels fast, stable, and responsive on real devices in real conditions.",
      },
      {
        type: "p",
        value:
          "If you are working on SEO, conversion, or retention, performance is leverage. Faster pages reduce bounce, improve crawl efficiency, and create trust. A stable layout reduces misclicks. A responsive UI makes products feel premium. When users feel the difference, the business feels the difference.",
      },
      { type: "h2", value: "What the vitals actually measure" },
      {
        type: "p",
        value:
          "The three core signals are LCP, INP, and CLS. LCP (Largest Contentful Paint) measures how quickly the main content becomes visible. INP (Interaction to Next Paint) measures how responsive the page is to user input. CLS (Cumulative Layout Shift) measures whether the page jumps around while loading.",
      },
      {
        type: "p",
        value:
          "Different pages have different bottlenecks. Marketing pages often struggle with LCP and CLS because of large hero images and third-party scripts. Web apps often struggle with INP because JavaScript work blocks interactions. The fastest wins come from choosing the right target metric per page type.",
      },
      { type: "h2", value: "Measure like a product team" },
      {
        type: "p",
        value:
          "Use two kinds of measurement. Lab tools are great for debugging: they tell you what is heavy and why. Real user monitoring tells you what users experience at scale: devices, networks, geographies, and actual page usage. If you can only choose one, choose real user monitoring because it reflects reality.",
      },
      {
        type: "p",
        value:
          "When you measure, do not average away pain. Look at percentiles. A page that is fine for your laptop might be slow for many users. Improving the 75th percentile experience often creates the biggest impact on bounce and conversion.",
      },
      { type: "h2", value: "Fix LCP without guesswork" },
      {
        type: "p",
        value:
          "LCP is usually dominated by one element: a hero image, a big heading, or a large content block. Your job is to render that element quickly. Start by identifying the LCP element in the browser performance panel. Then ask: is it large, blocked, or late?",
      },
      {
        type: "ul",
        value: [
          "Serve properly sized images and modern formats",
          "Preload the LCP image when it is predictable",
          "Avoid render-blocking CSS and slow font swaps",
          "Reduce JavaScript that runs before first paint",
          "Use caching and a CDN so content arrives quickly",
        ],
      },
      {
        type: "p",
        value:
          "If your hero image is the LCP element, treat it like critical path. Compress it, size it correctly, and load it early. If your LCP element is text, the biggest win is often fonts: fewer weights, preload the main font, and avoid blocking the first render on fancy typography.",
      },
      { type: "h2", value: "Make INP feel instant" },
      {
        type: "p",
        value:
          "INP is where web apps often fall apart. The app loads, but clicks feel delayed. This is usually main-thread congestion: too much JavaScript work happening during interaction. Fixing INP is about removing unnecessary work and making heavy work happen later.",
      },
      {
        type: "ul",
        value: [
          "Reduce re-renders and avoid unnecessary state updates",
          "Split heavy code paths and load them on demand",
          "Move expensive computations off the critical interaction path",
          "Avoid layout thrashing by batching DOM reads and writes",
          "Debounce handlers that fire rapidly (scroll, resize, input)",
        ],
      },
      {
        type: "p",
        value:
          "A simple mindset: every interaction should do the minimum work needed to update the UI. Everything else can happen after. If a click triggers analytics, tracking, and multiple state updates, your page will feel slow even if the network is fast.",
      },
      { type: "h2", value: "Stop CLS at the source" },
      {
        type: "p",
        value:
          "CLS is the easiest vital to fix because it is usually caused by predictable issues: missing dimensions, late-loading fonts, banners inserted above content, or components that expand after render. The fix is simple: reserve space.",
      },
      {
        type: "ul",
        value: [
          "Always set width and height (or aspect-ratio) for images and embeds",
          "Use skeleton loaders with the same size as final content",
          "Avoid injecting content above existing content after load",
          "Be intentional with font loading to reduce late swaps",
        ],
      },
      { type: "h2", value: "Treat third-party scripts as a budget" },
      {
        type: "p",
        value:
          "Third-party scripts are the silent performance killer. Analytics, chat widgets, A/B testing, and tag managers often load early and run heavy code. If the business needs them, that is fine. But treat them as part of a budget. Load them late, measure their impact, and remove what you do not use.",
      },
      {
        type: "p",
        value:
          "A great rule: if a script is not essential to the first view, defer it. Many teams are surprised by how much faster their pages become when they delay non-critical scripts by even a second or two.",
      },
      { type: "h2", value: "Make performance stick" },
      {
        type: "p",
        value:
          "Performance wins disappear when teams stop paying attention. Prevent regressions with a simple routine: set budgets, monitor real user performance, and fix the biggest contributor each week. This is less work than it sounds because you are always working on the top issue, not chasing everything at once.",
      },
      {
        type: "p",
        value:
          "If you are investing in SEO, this routine is especially valuable. Fast pages help search engines and users. And because the work is incremental, it fits naturally into ongoing development instead of becoming a massive, disruptive project.",
      },
      { type: "h2", value: "Next.js-specific wins you can ship quickly" },
      {
        type: "p",
        value:
          "If you are using Next.js, you have a few high-leverage options. Prefer server components for content-heavy pages so the browser does less work. Keep client components small and purposeful. Avoid shipping large libraries to every route. And take advantage of image optimization and font loading tools so the critical path is predictable.",
      },
      {
        type: "ul",
        value: [
          "Move heavy UI widgets behind route-level or component-level code splitting",
          "Keep third-party scripts deferred and loaded after the first render",
          "Use optimized images with appropriate sizes for each breakpoint",
          "Reduce hydration work by keeping interactive areas focused",
        ],
      },
      { type: "h2", value: "A 7-day performance plan (that actually gets done)" },
      {
        type: "p",
        value:
          "If performance feels overwhelming, make it small. Day 1: measure a few key pages and pick the worst one. Day 2: identify the largest contributors to LCP. Day 3: address the top item (often an image or font). Day 4: reduce third-party overhead. Day 5: fix the biggest INP offender in the app. Day 6: reserve space to stop CLS. Day 7: set a budget and add a simple monitor so the site does not regress.",
      },
      {
        type: "p",
        value:
          "This plan is not perfect, but it is practical. Most importantly, it ends with a guardrail. A single monitor and a lightweight budget prevent future regressions and protect the time you invested.",
      },
      { type: "h2", value: "Performance and SEO: the human connection" },
      {
        type: "p",
        value:
          "Search engines reward pages that users engage with. Faster pages feel trustworthy. Stable pages feel professional. Responsive pages feel premium. That is why performance is SEO-friendly: it improves the user signals that matter, and it reduces friction in the paths where conversions happen.",
      },
      { type: "h2", value: "Common mistakes that quietly hurt scores" },
      {
        type: "p",
        value:
          "Teams often lose performance through a few repeat offenders: loading multiple font families, shipping large UI libraries to every page, and adding third-party scripts without measuring impact. These are not subtle issues. They show up quickly on mid-range mobile devices and weak networks.",
      },
      {
        type: "p",
        value:
          "If you want an easy sanity check, open your page on a phone, scroll, and tap quickly. If anything feels delayed, INP work is needed. If the page jumps as images load, CLS work is needed. If the hero takes too long to appear, LCP work is needed. The metrics map to real feelings.",
      },
    ],
  },
  {
    slug: "ai-features-with-guardrails",
    title: "AI Features With Guardrails",
    description:
      "Ship useful LLM features safely: scope them narrowly, design for trust, evaluate quality, and add guardrails for privacy, cost, and reliability.",
    date: "2025-03-10",
    readingTime: "13 min",
    tags: ["AI", "LLM", "Product", "Safety"],
    content: [
      {
        type: "p",
        value:
          "AI features often look magical in a demo and messy in production. That gap is not a reason to avoid AI. It is a reason to treat AI as a product system: define a narrow job, measure quality, design for trust, and build guardrails for failure.",
      },
      {
        type: "p",
        value:
          "A reliable AI feature does not feel like a chatbot with unlimited freedom. It feels like a focused assistant that does one job well. When users can predict what it will do, they trust it. When they trust it, they use it. And when they use it, you get the feedback you need to improve it.",
      },
      { type: "h2", value: "Choose a narrow job-to-be-done" },
      {
        type: "p",
        value:
          "The fastest path to reliability is smaller scope. Pick one repeatable task: summarize support tickets, extract structured fields from documents, propose a reply draft, or route requests. Narrow tasks have clear inputs and outputs, which makes evaluation and UX far easier.",
      },
      {
        type: "p",
        value:
          "A good starting task can be judged quickly by a human reviewer. For example: 'Summarize this ticket in three bullets and suggest a category.' A reviewer can score that in seconds. Compare that to 'Solve this customer's problem' which is vague and hard to evaluate consistently.",
      },
      { type: "h2", value: "Design for trust, not novelty" },
      {
        type: "p",
        value:
          "Users do not want AI. They want confidence. The best AI UX shows its work: cite the source text, highlight extracted fields, and make it easy to correct. When the model routes a ticket, show why. When it drafts a reply, label it clearly as a draft. When it is unsure, say so.",
      },
      {
        type: "p",
        value:
          "A practical pattern is 'suggest then confirm.' Let the model propose an action, but require a human click for anything that could harm a customer. As you gain confidence and better evaluation, you can automate more with thresholds and monitoring.",
      },
      { type: "h2", value: "Build an evaluation set early" },
      {
        type: "p",
        value:
          "If you want predictable AI, you need predictable measurement. Create a small evaluation set of real examples. It does not need to be huge. Thirty to eighty examples with variety is enough to start. Include short, long, messy, and edge cases. Then run it every time you change prompts, tools, or model settings.",
      },
      {
        type: "p",
        value:
          "The value is not perfect scoring. The value is regression prevention. Without an evaluation set, a prompt tweak can improve one case and silently break ten others. With an evaluation set, you can improve quality steadily and confidently.",
      },
      { type: "h2", value: "Guardrails you should treat as mandatory" },
      {
        type: "ul",
        value: [
          "Input validation and redaction of sensitive fields",
          "Confidence thresholds plus a human review path",
          "Structured outputs with schema validation when possible",
          "Rate limits, timeouts, and retries with backoff",
          "Logging for prompts and outputs (privacy-aware)",
          "Offline evaluation and regression checks",
        ],
      },
      {
        type: "p",
        value:
          "These guardrails are what keep the feature usable on bad days. Models can time out. Rate limits can spike. Inputs can be chaotic. A user should still be able to complete the workflow. The experience should degrade gracefully instead of breaking.",
      },
      { type: "h2", value: "Plan for failure and fallbacks" },
      {
        type: "p",
        value:
          "AI systems fail in predictable ways: they misunderstand context, produce incomplete outputs, or hallucinate. The best product approach is to treat AI output as a suggestion, not a fact. Keep the system safe even when output is wrong.",
      },
      {
        type: "p",
        value:
          "For critical flows, avoid blocking the user on an AI call. If the model is slow, show progress and offer a manual path. If a response is low confidence, route it to review. These choices are not just technical. They are UX decisions that protect user trust.",
      },
      { type: "h2", value: "Keep privacy and compliance front and center" },
      {
        type: "p",
        value:
          "If you handle customer data, privacy is product quality. Decide what data can be sent to a model, what must be redacted, and what must never leave your system. Set retention limits for logs. Audit who can access sensitive traces. This is easier to do at the start than after the feature is widely used.",
      },
      {
        type: "p",
        value:
          "A good practice is to store only what you need to debug and evaluate. If you can evaluate with anonymized examples, do that. If you must store raw content, enforce retention and access controls. Your future self will be grateful.",
      },
      { type: "h2", value: "Watch cost and latency like core metrics" },
      {
        type: "p",
        value:
          "Cost and latency are part of user experience. A feature that costs too much to run or takes too long to respond will eventually be turned off. Track cost per task and end-to-end latency from day one. Keep responses fast with caching, smaller prompts, and thoughtful model selection.",
      },
      {
        type: "p",
        value:
          "As you scale, you may also need queuing, batching, or background processing. The best AI products treat the model as one component in a system, not the entire system. That mindset makes it easier to evolve over time.",
      },
      { type: "h2", value: "A launch checklist that prevents regret" },
      {
        type: "ul",
        value: [
          "Define the exact job and success criteria",
          "Create an evaluation set with edge cases",
          "Add a clear user review and correction flow",
          "Implement guardrails, timeouts, and fallbacks",
          "Measure quality, latency, cost, and user edits",
          "Ship incrementally and monitor continuously",
        ],
      },
      { type: "h2", value: "Retrieval, tools, and when 'RAG' helps" },
      {
        type: "p",
        value:
          "Many AI features fail because the model does not have the right context. Retrieval can help, but only when the underlying data is clean and the question is well-scoped. Do not treat retrieval as magic. Treat it as a controlled way to provide relevant, up-to-date information to the model.",
      },
      {
        type: "p",
        value:
          "A practical pattern is: retrieve a small set of relevant documents, summarize them, then produce a structured output. Keep the context tight. Prefer a few high-quality sources over a large dump of text. If the model is given too much, it becomes less reliable, not more.",
      },
      {
        type: "ul",
        value: [
          "Index only the content you are comfortable returning to users",
          "Keep retrieval results short and relevant to the task",
          "Use citations or highlights so users can verify",
          "Cache stable results to reduce cost and latency",
        ],
      },
      { type: "h2", value: "Human-friendly writing matters" },
      {
        type: "p",
        value:
          "Users judge AI output like they judge people: clarity, tone, and helpfulness. If the model produces jargon or overly confident statements, trust drops. A small improvement is to tune output style: short sentences, concrete steps, and a clear 'next action' suggestion.",
      },
      {
        type: "p",
        value:
          "When you design an AI feature, write down the expected voice. Do you want concise? Friendly? Formal? The more consistent the tone, the more the feature feels like part of your product instead of a bolted-on chatbot.",
      },
      {
        type: "p",
        value:
          "AI features are not one-and-done. They are products that improve through iteration. If you start narrow, measure quality, and build guardrails, you can ship something useful quickly and keep improving it safely.",
      },
    ],
  },
  {
    slug: "choosing-web-mobile-desktop",
    title: "Choosing Web vs Mobile vs Desktop",
    description:
      "A decision framework to pick the right platform for your users: web for iteration, mobile for retention and device workflows, desktop for power and enterprise environments.",
    date: "2025-04-02",
    readingTime: "12 min",
    tags: ["Product Strategy", "Web", "Mobile", "Desktop"],
    content: [
      {
        type: "p",
        value:
          "Platform decisions become expensive when they are treated like identity. Instead of 'we are mobile-first' or 'we are web-first,' treat the platform as a delivery mechanism. The best platform is the one that gets you to real users and real feedback with the least friction, while still supporting the workflows that matter.",
      },
      {
        type: "p",
        value:
          "You also do not have to pick one platform forever. Many successful products start on one platform, learn what matters, and then expand. The goal is to pick the right first step and avoid a painful rewrite later.",
      },
      { type: "h2", value: "Start with user context" },
      {
        type: "p",
        value:
          "Ask where users will use the product. If they are at a desk, web and desktop are natural. If they are moving, mobile wins. If the product is used across contexts, web is often the fastest way to cover the most ground early.",
      },
      {
        type: "p",
        value:
          "Context matters more than features. A perfect mobile app is wasted if users live in a browser all day. A polished web app may fail if users need push notifications, camera capture, offline reliability, or background processing in the field.",
      },
      { type: "h2", value: "Four questions that usually decide it" },
      {
        type: "ul",
        value: [
          "Where do users spend time today (browser, phone, desktop)?",
          "Do you need device features (camera, GPS, push notifications)?",
          "Is offline or background work essential?",
          "How will you distribute (public web, App Store, internal deployment)?",
        ],
      },
      { type: "h2", value: "Web: best for acquisition and iteration" },
      {
        type: "p",
        value:
          "Web is often the best starting point because it reduces distribution friction. Users can try your product instantly. You can ship updates continuously. You can iterate on messaging, onboarding, and funnel conversion quickly. If SEO matters, web is usually non-negotiable because it pairs naturally with content and shareable links.",
      },
      {
        type: "p",
        value:
          "The web tradeoffs are real: deep device integrations and some offline-first experiences are harder. But a modern web stack can still feel premium when performance and UX are done well. For many B2B products, a fast web app is the most practical core.",
      },
      { type: "h2", value: "Mobile: best for retention and device workflows" },
      {
        type: "p",
        value:
          "Mobile is powerful when you need to be present in a user's day. Push notifications, camera access, scanning, location, and quick interactions are natural on mobile. If your workflow depends on capturing information in the moment, mobile can unlock retention that web cannot match.",
      },
      {
        type: "p",
        value:
          "The cost is operational overhead: store approvals, device testing, release pipelines, and support for multiple OS versions. If the product is still finding its shape, you may want to validate the workflow on web first, then invest in mobile once the core value is proven.",
      },
      { type: "h2", value: "Desktop: best for power users and enterprise" },
      {
        type: "p",
        value:
          "Desktop is a great fit for long sessions, complex workflows, local file access, and environments where you want more control. Internal tools and enterprise applications often benefit from desktop because the experience can be optimized for speed and reliability in a predictable runtime.",
      },
      {
        type: "p",
        value:
          "Desktop also shines when distribution is managed internally or when offline-first reliability is essential. The tradeoff is packaging and support complexity, so you want a clear reason to choose desktop rather than defaulting to it.",
      },
      { type: "h2", value: "A practical default path" },
      {
        type: "p",
        value:
          "If you need a default: start with web when acquisition and iteration speed matter. Add mobile when device features and notifications unlock retention. Choose desktop when users need power workflows, offline-first operation, or enterprise distribution. This approach minimizes early risk and maximizes learning.",
      },
      { type: "h2", value: "Avoid rewrites with a platform-friendly architecture" },
      {
        type: "ul",
        value: [
          "Keep business logic behind stable APIs so new clients are easier",
          "Share design tokens and UX patterns across platforms",
          "Invest early in monitoring, analytics, and release automation",
          "Design permissions and data models to work for multiple clients",
        ],
      },
      { type: "h2", value: "A simple decision matrix" },
      {
        type: "p",
        value:
          "To decide quickly, list your top three user journeys and score each platform for fit. If users need device features and on-the-go workflows, mobile wins. If you need growth through content and fast iteration, web wins. If workflows are complex, long-running, and enterprise-focused, desktop wins. Then commit to one platform for the first milestone and revisit once you have real usage data.",
      },
      { type: "h2", value: "Hybrid approaches that reduce risk" },
      {
        type: "p",
        value:
          "You do not have to choose extremes. Many teams start with web, then add mobile for the high-retention workflows. Some teams ship a web app plus a lightweight mobile companion for notifications and quick actions. Others use a desktop wrapper for enterprise deployments while keeping the core UI consistent.",
      },
      {
        type: "p",
        value:
          "The goal of a hybrid approach is to match platform strengths to user needs. If the workflow is mostly forms and dashboards, web is great. If the workflow is capture-and-go, mobile is great. If the workflow is heavy operations and local file handling, desktop can be great. You can support all three over time if the product architecture is stable.",
      },
      { type: "h2", value: "Team and budget reality checks" },
      {
        type: "p",
        value:
          "A platform decision is also a team decision. If you have strong web engineers and need to move fast, web is usually the best first step. If you already have mobile expertise and the workflow depends on device features, mobile can be the fastest path to a great experience. If your customers demand enterprise packaging, desktop might be required.",
      },
      {
        type: "p",
        value:
          "When budgets are tight, avoid building three clients at once. Build one client well, keep the API stable, and expand when the first platform proves value. This is how you avoid expensive rewrites and maintain momentum.",
      },
      { type: "h2", value: "PWA, cross-platform, and what to choose" },
      {
        type: "p",
        value:
          "If you are deciding between web and mobile, consider whether a progressive web app (PWA) covers enough of your needs. PWAs can feel app-like, support offline caching, and live on a home screen. They do not replace native when you need deep integrations, but they can be a strong bridge for early products.",
      },
      {
        type: "p",
        value:
          "Cross-platform frameworks can also reduce cost when you truly need mobile on both platforms. The key is to keep expectations realistic: you are trading some native flexibility for shared development speed. If your UI is mostly standard and your value is in workflow, cross-platform can be a good fit.",
      },
      {
        type: "ul",
        value: [
          "Choose web when distribution and iteration speed matter most",
          "Choose mobile when device workflows and retention are core to value",
          "Choose desktop when power workflows and enterprise environments dominate",
          "Consider PWA or cross-platform when you need a pragmatic middle path",
        ],
      },
      {
        type: "p",
        value:
          "The best platform choice is the one you can execute well with your team. Pick what you can ship reliably, measure, and improve. The rest can come later, as a deliberate expansion rather than a frantic rewrite.",
      },
    ],
  },
  {
    slug: "estimating-software-with-confidence",
    title: "Estimating Software With Confidence",
    description:
      "How to create realistic software estimates stakeholders trust: discovery first, slice work into small deliverables, use ranges, and communicate risks clearly.",
    date: "2025-05-09",
    readingTime: "13 min",
    tags: ["Estimation", "Leadership", "Planning"],
    content: [
      {
        type: "p",
        value:
          "Most estimates fail for a simple reason: they pretend uncertainty does not exist. When scope is unclear, dependencies are unknown, and quality expectations are unstated, the number becomes a guess. Better estimating is not about perfect prediction. It is about making uncertainty visible and managing it calmly.",
      },
      {
        type: "p",
        value:
          "Stakeholders can handle uncertainty. They cannot handle surprises. Your goal is to produce timelines people can trust by being explicit about assumptions, risks, and what is included in the first release. When the team and stakeholders share the same picture, planning becomes smoother and delivery becomes faster.",
      },
      { type: "h2", value: "Separate discovery from delivery" },
      {
        type: "p",
        value:
          "If you do not understand the work, you cannot estimate it. That is normal. The fix is a short discovery phase with a specific output: a plan you can estimate. Discovery might include reviewing the existing codebase, clarifying data contracts, sketching UX, and listing risks. The output is clarity, not code.",
      },
      {
        type: "p",
        value:
          "Teams skip discovery because they want to 'start building.' But skipping discovery often delays delivery because engineers make big decisions mid-flight, rework increases, and stakeholders disagree late. A few days of discovery can prevent weeks of churn.",
      },
      { type: "h2", value: "Estimate slices, not epics" },
      {
        type: "p",
        value:
          "Break work into 1 to 3 day slices with a clear output. If a slice cannot be estimated, it is not understood yet. Turn it into a discovery slice first. Slices keep projects honest because they force you to define what 'done' looks like for each step.",
      },
      {
        type: "p",
        value:
          "A useful slice is outcome-shaped and integration-aware. Instead of 'build upload UI,' estimate 'user can upload a file, sees progress, and receives a clear success or error state.' That slice includes wiring, edge cases, and the minimum needed to ship safely.",
      },
      { type: "h2", value: "Use ranges and explain the drivers" },
      {
        type: "p",
        value:
          "Single numbers hide uncertainty. Ranges tell the truth. Provide a best-case and likely-case estimate, then list the drivers that could push it longer. This is not pessimism. It is transparency. And transparency is what builds trust.",
      },
      {
        type: "p",
        value:
          "You can use a simple three-point estimate: optimistic, most likely, pessimistic. The benefit is the discussion it forces: what assumptions make the optimistic case true, and what risks create the pessimistic case? That conversation is often more valuable than the final number.",
      },
      { type: "h2", value: "Call out risks explicitly (and have a plan)" },
      {
        type: "ul",
        value: [
          "Unknown third-party APIs and unclear data contracts",
          "UX decisions that require approvals or stakeholder alignment",
          "Legacy constraints and migration work",
          "Security, compliance, and privacy requirements",
          "Non-functional needs like performance and reliability",
        ],
      },
      {
        type: "p",
        value:
          "Risks are inputs. A good estimate includes mitigation. If an API is unknown, mitigate with a spike. If UX is unclear, mitigate with a prototype and quick validation. If compliance is required, mitigate by involving security early and documenting requirements. Make the plan visible so stakeholders understand what you are doing and why.",
      },
      { type: "h2", value: "Make tradeoffs visible: time, scope, quality" },
      {
        type: "p",
        value:
          "You cannot maximize time, scope, and quality simultaneously. The fastest path is usually reducing scope while protecting quality. For example, ship for one user role first, then expand roles in the next milestone. Or ship the core workflow without advanced settings, then add configuration later.",
      },
      {
        type: "p",
        value:
          "Write down what is explicitly out of scope for the first release. This prevents a common failure mode where 'nice to have' quietly becomes 'must have' and the schedule slips with no obvious reason.",
      },
      { type: "h2", value: "Non-functional requirements are real scope" },
      {
        type: "p",
        value:
          "Timelines slip when teams ignore non-functional requirements. Security reviews, performance constraints, data retention policies, accessibility work, and monitoring are all real work. If they are not included in the plan, they appear later as surprise tasks.",
      },
      {
        type: "p",
        value:
          "The fix is simple: write down the quality bar. If the product must be SOC2-friendly, include the work. If the app must handle a certain load, include the work. If you need audit logs, include the work. These details are what make an estimate trustworthy.",
      },
      { type: "h2", value: "Make progress visible with a weekly rhythm" },
      {
        type: "p",
        value:
          "Trust grows when progress is visible. Replace long status meetings with a simple cadence: weekly demo plus a short written update. The update should include what shipped, what is next, and what is blocked. This keeps stakeholders aligned and reduces surprise scope changes.",
      },
      {
        type: "p",
        value:
          "Demos also improve estimates. When stakeholders see the product evolve, they refine priorities. The team learns faster. And you adjust early, when changes are cheap. That is the real secret to accurate timelines: you keep the plan close to reality.",
      },
      { type: "h2", value: "Use data, but do not worship it" },
      {
        type: "p",
        value:
          "Historical throughput is useful. If your team typically completes a certain number of small slices per week, that data should inform future estimates. But do not blindly extrapolate. New systems, unfamiliar domains, and major migrations change the pace. Treat data as a starting point, not a guarantee.",
      },
      { type: "h2", value: "A one-page estimate template stakeholders understand" },
      {
        type: "p",
        value:
          "If you want to keep estimation simple and clear, use a one-page format. Include: the goal, the first release scope, the range estimate, the key risks, and the weekly cadence for updates. This reduces confusion and makes it easier for everyone to align on what is actually being delivered.",
      },
      {
        type: "ul",
        value: [
          "Goal: what outcome improves and how you will measure it",
          "Scope: what is in and what is out for release one",
          "Estimate: best case and likely case with a short explanation",
          "Risks: top 3 risks plus mitigation plan",
          "Cadence: demo schedule and communication channel",
        ],
      },
      { type: "h2", value: "How to handle change requests without chaos" },
      {
        type: "p",
        value:
          "Change requests are normal. The chaos comes when changes are invisible. When a stakeholder asks for 'one more thing,' respond with a simple tradeoff: what moves out, what moves later, or what cost increases. This keeps the system honest and protects the timeline.",
      },
      {
        type: "p",
        value:
          "A calm rule is: no change without a scope swap. If something new enters the release, something else leaves. Stakeholders often accept this once they see the pattern, and the team stops absorbing hidden scope silently.",
      },
      { type: "h2", value: "Before you commit to a date" },
      {
        type: "p",
        value:
          "Before you commit publicly, do a quick stress test. Ask: what are the top three things most likely to surprise us? Are they technical, product, or operational? Then decide how you will handle each surprise: spike it, simplify scope, or move it to a later milestone.",
      },
      {
        type: "p",
        value:
          "This takes less than an hour, but it changes the conversation. Instead of arguing about a single number, you align on the conditions that make the plan succeed. That alignment is what keeps the estimate stable when real-world complexity shows up.",
      },
      {
        type: "ul",
        value: [
          "Confirm who approves UX decisions and how quickly",
          "Confirm the data contracts and external dependencies",
          "Confirm the quality bar (security, performance, accessibility)",
          "Confirm deployment and environment constraints",
          "Confirm what is explicitly out of scope for release one",
        ],
      },
      {
        type: "p",
        value:
          "The outcome you want is confidence, not perfection. When a stakeholder asks for a date, they are really asking: 'Can I plan around this?' A clear range, a risk plan, and a steady shipping cadence are what make the answer trustworthy.",
      },
    ],
  },
];

export function getPost(slug: string) {
  const target = normalizeSlug(slug);
  return posts.find((post) => normalizeSlug(post.slug) === target);
}
