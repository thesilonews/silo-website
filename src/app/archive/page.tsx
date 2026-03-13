import { prisma } from "@/lib/db";
import { Category, categoryLabels } from "@/lib/categories";
import StoryCard from "@/components/StoryCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
  description: "All stories from The Silo — satellite imagery and data journalism for the Nebraska Panhandle.",
};

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArchivePage({ searchParams }: Props) {
  const { category } = await searchParams;

  const activeCategory = category?.toUpperCase();
  const validCategory =
    activeCategory && (Object.values(Category) as string[]).includes(activeCategory)
      ? activeCategory
      : undefined;

  const stories = await prisma.story.findMany({
    where: validCategory ? { category: validCategory } : undefined,
    orderBy: { publishedAt: "desc" },
    include: {
      images: {
        where: { isPrimary: true },
        take: 1,
      },
    },
  });

  // Category counts for filters
  const counts = await prisma.story.groupBy({
    by: ["category"],
    _count: { id: true },
  });
  const countMap = Object.fromEntries(counts.map((c) => [c.category, c._count.id]));

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      <div className="pt-4 pb-10 border-b" style={{ borderColor: "#2A3545" }}>
        <h1
          className="text-3xl font-bold mb-1"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          Archive
        </h1>
        <p className="text-sm" style={{ color: "#8B8B8B" }}>
          {stories.length} {validCategory ? categoryLabels[validCategory] : "total"}{" "}
          {stories.length === 1 ? "story" : "stories"}
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 py-5 border-b" style={{ borderColor: "#2A3545" }}>
        <a
          href="/archive"
          className="px-3 py-1 text-xs rounded-sm transition-colors"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            backgroundColor: !validCategory ? "#D4A853" : "#1A2535",
            color: !validCategory ? "#141E2A" : "#8B8B8B",
            border: "1px solid",
            borderColor: !validCategory ? "#D4A853" : "#2A3545",
          }}
        >
          All ({Object.values(countMap).reduce((a, b) => a + b, 0)})
        </a>
        {Object.entries(categoryLabels).map(([cat, label]) => {
          const count = countMap[cat] ?? 0;
          if (count === 0) return null;
          const isActive = validCategory === cat;
          return (
            <a
              key={cat}
              href={`/archive?category=${cat.toLowerCase()}`}
              className="px-3 py-1 text-xs rounded-sm transition-colors"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                backgroundColor: isActive ? "#D4A853" : "#1A2535",
                color: isActive ? "#141E2A" : "#8B8B8B",
                border: "1px solid",
                borderColor: isActive ? "#D4A853" : "#2A3545",
              }}
            >
              {label} ({count})
            </a>
          );
        })}
      </div>

      {/* Story list */}
      <div className="flex flex-col mt-2">
        {stories.length === 0 ? (
          <p className="py-12 text-center" style={{ color: "#3D3D3B" }}>
            No stories in this category yet.
          </p>
        ) : (
          stories.map((story) => {
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
          })
        )}
      </div>
    </div>
  );
}
