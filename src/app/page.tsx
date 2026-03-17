import { prisma } from "@/lib/db";
import StoryCard from "@/components/StoryCard";
import Link from "next/link";

export const revalidate = 300; // 5 min ISR

export default async function HomePage() {
  const stories = await prisma.story.findMany({
    orderBy: { publishedAt: "desc" },
    take: 10,
    include: {
      images: {
        where: { isPrimary: true },
        take: 1,
      },
    },
  }).catch(() => []);

  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s.id !== featured?.id).slice(0, 6);
  const featuredImage = featured?.images[0];

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      {/* Dateline */}
      <div className="pt-2 pb-8 border-b" style={{ borderColor: "#2A3545" }}>
        <p
          className="text-xs tracking-widest uppercase text-center"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}
        >
          41.2°N 103.7°W · Colorado · Wyoming · Nebraska
        </p>
      </div>

      {/* Live coverage banner */}
      <a
        href="https://morrillfire.thesilonews.com"
        target="_blank"
        rel="noopener"
        className="block mt-8 mb-10 p-5 rounded-sm border no-underline group sticky top-0 z-10 backdrop-blur-sm"
        style={{ borderColor: "#A84C2A55", backgroundColor: "#A84C2A18" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-[10px] tracking-widest uppercase font-semibold"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#A84C2A" }}
              >
                ● Live coverage
              </span>
            </div>
            <p
              className="text-base font-bold mb-1 leading-snug"
              style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
            >
              Morrill County Fire — Nebraska&apos;s largest wildfire in history
            </p>
            <p className="text-sm" style={{ color: "#8B8B8B" }}>
              643,000+ acres · 18% contained · interactive satellite map, fire detections, and property search
            </p>
          </div>
          <span
            className="text-lg mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-1"
            style={{ color: "#A84C2A" }}
          >
            →
          </span>
        </div>
      </a>

      {/* Hero story */}
      {featured && (
        <div className="mt-10 mb-14">
          <StoryCard
            slug={featured.slug}
            title={featured.title}
            subtitle={featured.subtitle}
            category={featured.category}
            publishedAt={featured.publishedAt}
            imageUrl={featuredImage?.url}
            imageAlt={featuredImage?.altText}
            size="large"
          />
        </div>
      )}

      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
        >
          Recent dispatches
        </h2>
        <Link
          href="/archive"
          className="text-xs tracking-wide hover:text-[#D4A853] transition-colors"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}
        >
          Full archive →
        </Link>
      </div>

      {/* Story list */}
      <div className="flex flex-col">
        {rest.map((story) => {
          const img = story.images[0];
          return (
            <StoryCard
              key={story.id}
              slug={story.slug}
              title={story.title}
              subtitle={story.subtitle}
              category={story.category}
              publishedAt={story.publishedAt}
              imageUrl={img?.url}
              imageAlt={img?.altText}
            />
          );
        })}
      </div>

      {/* Newsletter callout */}
      <div
        className="mt-16 p-8 rounded-sm border text-center"
        style={{ borderColor: "#D4A85333", backgroundColor: "#1A2535" }}
      >
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Look closer, every week.
        </h3>
        <p className="text-sm mb-5" style={{ color: "#8B8B8B" }}>
          One image. One story. Colorado, Wyoming, and Nebraska — delivered to your inbox.
        </p>
        <Link
          href="/newsletter"
          className="inline-block px-6 py-3 min-h-[44px] text-sm font-medium tracking-wide rounded-sm transition-colors"
          style={{ backgroundColor: "#D4A853", color: "#141E2A" }}
        >
          Subscribe free
        </Link>
      </div>
    </div>
  );
}
