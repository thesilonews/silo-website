"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

const externalNav = [
  { href: "https://morrillfire.thesilonews.com", label: "Maps" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <span
            className="text-lg font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-source-serif)", color: "#D4A853" }}
          >
            The Silo
          </span>
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
          >
            Colorado · Wyoming · Nebraska
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide transition-colors hover:text-[#D4A853]"
              style={{ fontFamily: "var(--font-inter)", color: "#C5B49A" }}
            >
              {label}
            </Link>
          ))}
          {externalNav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
              className="text-sm tracking-wide transition-colors hover:text-[#D4A853]"
              style={{ fontFamily: "var(--font-inter)", color: "#C5B49A" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] w-11 h-11 items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-200"
            style={{
              backgroundColor: "#C5B49A",
              transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-200"
            style={{
              backgroundColor: "#C5B49A",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-200"
            style={{
              backgroundColor: "#C5B49A",
              transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="sm:hidden flex flex-col border-t px-6 pb-6 gap-0"
          style={{ borderColor: "#2A3545", backgroundColor: "#0D1825" }}
        >
          {[...nav, ...externalNav.map((n) => ({ ...n, external: true }))].map(
            ({ href, label, external }: { href: string; label: string; external?: boolean }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  className="flex items-center py-4 text-base border-b tracking-wide"
                  style={{ borderColor: "#2A3545", color: "#C5B49A", fontFamily: "var(--font-inter)" }}
                >
                  {label}
                  <span className="ml-1.5 text-xs" style={{ color: "#3D3D3B" }}>↗</span>
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center py-4 text-base border-b tracking-wide"
                  style={{ borderColor: "#2A3545", color: "#C5B49A", fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </Link>
              )
          )}
        </nav>
      )}
    </>
  );
}
