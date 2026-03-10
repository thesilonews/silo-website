import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What The Silo is, why it exists, and how the imagery is made.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-24">
      <div className="pt-4 pb-10">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          About The Silo
        </h1>
        <p
          className="text-lg italic"
          style={{ fontFamily: "var(--font-source-serif)", color: "#D4A853" }}
        >
          Look closer.
        </p>
      </div>

      <hr style={{ borderColor: "#2A3545" }} />

      <div className="mt-10 space-y-6 text-base leading-relaxed" style={{ color: "#C5B49A" }}>
        <p>
          The Silo covers the Nebraska Panhandle, southeastern Wyoming, and northeastern Colorado
          through satellite imagery, data maps, and sensor journalism. Our core communities are
          Kimball, Sidney, Scottsbluff, Alliance, and Chadron in Nebraska; Torrington, Cheyenne,
          and Laramie in Wyoming.
        </p>

        <p>
          This is a region that national media rarely covers in depth — and when they do, it&apos;s
          usually for one story about agriculture or one story about the missile fields. We think
          the ground truth is more interesting than the stereotypes. The satellite catches things
          that press releases don&apos;t mention.
        </p>

        <p>
          Every image published here is processed from open government satellite data —
          primarily ESA Sentinel-2, NASA/USGS Landsat, and NASA MODIS — using reproducible,
          documented methods. We follow the color treatment guidance of Rob Simmon and Tom
          Patterson: percentile stretch, gamma 1.8, gentle saturation. Nothing invented.
        </p>

        <h2
          className="text-xl font-bold pt-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Data sources
        </h2>

        <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}>
          {[
            "Sentinel-2 L2A — ESA Copernicus / Microsoft Planetary Computer",
            "Landsat 8–9 Collection 2 L2 — USGS / NASA",
            "MODIS Terra + Aqua (MOD09GA, MOD13Q1, MOD14) — NASA LP DAAC",
            "Sentinel-1 C-band SAR — ESA / Alaska Satellite Facility",
            "GOES-16/17/18 — NOAA",
            "NWS NDFD forecast grids — NOAA",
            "USGS StreamStats + gauge data — USGS",
            "FIRMS active fire — NASA",
          ].map((src) => (
            <li key={src} className="flex gap-2">
              <span style={{ color: "#D4A853" }}>—</span>
              {src}
            </li>
          ))}
        </ul>

        <h2
          className="text-xl font-bold pt-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Licensing
        </h2>

        <p>
          All original work published by The Silo is available under{" "}
          <strong style={{ color: "#E8E4DC" }}>Creative Commons Attribution 4.0 (CC BY 4.0)</strong>.
          You may republish, translate, or adapt any of our work for free — in print, online, or
          broadcast — with attribution. Small papers, radio stations, and community newsletters:
          please use it.
        </p>

        <p className="text-sm" style={{ color: "#8B8B8B" }}>
          Underlying satellite data is public domain (US government) or open access (ESA
          Copernicus). Our processing code is open source.
        </p>

        <h2
          className="text-xl font-bold pt-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Contact
        </h2>

        <p>
          The best way to reach us is via the newsletter. Tips, corrections, and story ideas are
          always welcome — especially from people who know this ground.
        </p>

        <div className="pt-4">
          <Link
            href="/newsletter"
            className="inline-block px-5 py-2 text-sm font-medium rounded-sm transition-colors"
            style={{ backgroundColor: "#D4A853", color: "#141E2A" }}
          >
            Subscribe to the newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}
