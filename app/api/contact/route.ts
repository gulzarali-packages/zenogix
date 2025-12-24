import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    const record = body as Record<string, unknown>;
    const name = typeof record.name === "string" ? record.name.trim() : "";
    const email = typeof record.email === "string" ? record.email.trim() : "";
    const message =
      typeof record.message === "string" ? record.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
