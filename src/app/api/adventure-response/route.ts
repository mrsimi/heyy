import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient = "oriowoayomidekd@gmail.com";

export async function POST(request: Request) {
  let payload: { response?: unknown; website?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) return NextResponse.json({ ok: false }, { status: 400 });
  if (typeof payload.response !== "string") return NextResponse.json({ ok: false }, { status: 400 });

  const response = payload.response.trim();
  if (!response || response.length > 1000) return NextResponse.json({ ok: false }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") console.warn("Resend is not configured.");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: recipient,
      subject: 'She answered "more adventures?"',
      text: `Her answer:\n\n${response}\n\nSubmitted: ${new Date().toISOString()}`,
    });
    if (result.error) throw result.error;
    return NextResponse.json({ ok: true });
  } catch {
    if (process.env.NODE_ENV === "development") console.warn("Adventure response email could not be sent.");
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
