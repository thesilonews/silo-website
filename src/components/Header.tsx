import Link from "next/link";

const nav = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  return (
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

      <nav className="flex items-center gap-6">
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
      </nav>
    </header>
  );
}
