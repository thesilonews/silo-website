import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    // Dev mode — just log and pretend success
    console.log(`[newsletter] would subscribe: ${email}`);
    return NextResponse.json({
      message: "Subscribed! (Buttondown API key not configured — dev mode.)",
    });
  }

  const res = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (res.status === 201) {
    return NextResponse.json({ message: "Check your inbox to confirm your subscription." });
  }

  if (res.status === 400) {
    const body = await res.json().catch(() => ({}));
    // Already subscribed
    if (JSON.stringify(body).includes("already")) {
      return NextResponse.json({ message: "You're already subscribed!" });
    }
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  return NextResponse.json({ error: "Subscription failed. Try again." }, { status: 500 });
}
