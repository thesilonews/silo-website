import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-24 border-t px-6 py-12"
      style={{ borderColor: "#2A3545" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span
            className="text-base font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-source-serif)", color: "#D4A853" }}
          >
            The Silo
          </span>
          <p className="text-sm max-w-xs" style={{ color: "#8B8B8B" }}>
            Satellite imagery, data maps, and sensor journalism for the Nebraska
            Panhandle, SE Wyoming, and NE Colorado.
          </p>
          <p className="text-xs mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}>
            CC BY 4.0 — free to republish with attribution
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#8B8B8B" }}>
            Navigate
          </span>
          {[
            { href: "/archive", label: "Archive" },
            { href: "/about", label: "About" },
            { href: "/newsletter", label: "Newsletter" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm hover:text-[#D4A853] transition-colors"
              style={{ color: "#C5B49A" }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#8B8B8B" }}>
            Data sources
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}>
            Sentinel-2 / ESA Copernicus
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}>
            Landsat 8–9 / USGS NASA
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}>
            MODIS Terra+Aqua / NASA
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}>
            Sentinel-1 SAR / ASF
          </span>
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto mt-10 pt-6 border-t text-center text-xs"
        style={{ borderColor: "#2A3545", color: "#3D3D3B", fontFamily: "var(--font-jetbrains-mono)" }}
      >
        Look closer. · Kimball, NE · {new Date().getFullYear()}
      </div>
    </footer>
  );
}
