"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm({ toEmail }: { toEmail: string }) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Website inquiry${company ? ` · ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [company, email, message, name, toEmail]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
      if (!response.ok) throw new Error("Request failed");
      setState({ status: "success" });
    } catch {
      setState({
        status: "error",
        message:
          "Something went wrong. You can still reach us using the email link below.",
      });
    }
  }

  const disabled = state.status === "submitting";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-zinc-900 dark:text-white">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm outline-none transition-colors focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-zinc-900 dark:text-white">
            Email
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm outline-none transition-colors focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900 dark:text-white">
          Company (optional)
        </span>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm outline-none transition-colors focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-zinc-900 dark:text-white">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition-colors focus:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={disabled}>
          {state.status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <a
          href={mailto}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          Or email: {toEmail}
        </a>
      </div>

      {state.status === "success" ? (
        <p
          className={cn(
            "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200",
          )}
        >
          Message received. We’ll get back to you shortly.
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

