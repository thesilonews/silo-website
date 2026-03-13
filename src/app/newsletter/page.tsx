"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're subscribed.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 pb-24">
      <div className="pt-4 pb-10">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Newsletter
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "#C5B49A" }}>
          One image. One story. Colorado, Wyoming, and Nebraska — from above.
          Free, weekly, no spam.
        </p>
      </div>

      <hr style={{ borderColor: "#2A3545" }} />

      <div className="mt-10">
        {status === "success" ? (
          <div
            className="p-6 rounded-sm border text-center"
            style={{ borderColor: "#5C7A5E44", backgroundColor: "#5C7A5E11" }}
          >
            <p className="text-base font-semibold mb-1" style={{ color: "#E8E4DC" }}>
              You&apos;re in.
            </p>
            <p className="text-sm" style={{ color: "#8B8B8B" }}>
              {message}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-colors"
                style={{
                  backgroundColor: "#1A2535",
                  border: "1px solid #2A3545",
                  color: "#E8E4DC",
                  fontFamily: "var(--font-inter)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#D4A853")}
                onBlur={(e) => (e.target.style.borderColor = "#2A3545")}
              />
            </div>

            {status === "error" && (
              <p className="text-xs" style={{ color: "#A84C2A" }}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 text-sm font-medium tracking-wide rounded-sm transition-opacity disabled:opacity-50"
              style={{ backgroundColor: "#D4A853", color: "#141E2A" }}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe — it\u2019s free"}
            </button>

            <p className="text-xs" style={{ color: "#3D3D3B", fontFamily: "var(--font-jetbrains-mono)" }}>
              Powered by Buttondown. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>

      {/* What to expect */}
      <div className="mt-14">
        <h2
          className="text-lg font-bold mb-5"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          What you&apos;ll get
        </h2>
        <div className="space-y-4">
          {[
            {
              icon: "◻",
              title: "One satellite image",
              desc: "Processed from open government data. What the ground looks like from 500km up, this week.",
            },
            {
              icon: "◻",
              title: "The story behind it",
              desc: "What the sensors are showing. What it means for the region.",
            },
            {
              icon: "◻",
              title: "Data context",
              desc: "Historical comparisons, NDVI trends, drought monitor, fire weather — whatever's relevant.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <span style={{ color: "#D4A853", fontFamily: "var(--font-mono)" }}>{icon}</span>
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#E8E4DC" }}>
                  {title}
                </p>
                <p className="text-sm" style={{ color: "#8B8B8B" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
