import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";
import CategoryBadge from "@/components/CategoryBadge";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await prisma.story.findUnique({ where: { slug } });
  if (!story) return { title: "Not Found" };
  return {
    title: story.title,
    description: story.subtitle ?? undefined,
  };
}

export async function generateStaticParams() {
  const stories = await prisma.story.findMany({ select: { slug: true } });
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = await prisma.story.findUnique({
    where: { slug },
    include: { images: { orderBy: { isPrimary: "desc" } } },
  });

  if (!story) notFound();

  const primaryImage = story.images.find((i) => i.isPrimary) ?? story.images[0];
  const dateStr = story.publishedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Denver",
  });

  // Split body into paragraphs
  const paragraphs = story.body.split("\n\n").filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto px-6 pb-24">
      {/* Breadcrumb */}
      <div className="pt-4 pb-8">
        <Link
          href="/"
          className="text-xs tracking-wide hover:text-[#D4A853] transition-colors"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}
        >
          ← The Silo
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={story.category} />
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
          >
            {dateStr}
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          {story.title}
        </h1>

        {story.subtitle && (
          <p className="text-lg leading-relaxed" style={{ color: "#C5B49A" }}>
            {story.subtitle}
          </p>
        )}
      </header>

      {/* Primary image */}
      {primaryImage?.url && (
        <figure className="mb-8 -mx-6 md:mx-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1923]">
            <Image
              src={primaryImage.url}
              alt={primaryImage.altText ?? story.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {primaryImage.caption && (
            <figcaption
              className="px-6 md:px-0 mt-3 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
            >
              {primaryImage.caption}
              {primaryImage.sensor && (
                <span className="ml-2" style={{ color: "#3D3D3B" }}>
                  · {primaryImage.sensor}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      )}

      {/* Body */}
      <div className="prose-silo">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-base leading-relaxed mb-5"
            style={{ color: "#C5B49A" }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Additional images */}
      {story.images.length > 1 && (
        <div className="mt-12 space-y-8">
          <hr style={{ borderColor: "#2A3545" }} />
          {story.images.slice(1).map((img) => (
            <figure key={img.id}>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1923] rounded-sm">
                <Image
                  src={img.url}
                  alt={img.altText ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption
                  className="mt-2 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
                >
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* Footer nav */}
      <div
        className="mt-16 pt-8 border-t flex justify-between items-center"
        style={{ borderColor: "#2A3545" }}
      >
        <Link
          href="/archive"
          className="text-sm hover:text-[#D4A853] transition-colors"
          style={{ color: "#8B8B8B" }}
        >
          ← All stories
        </Link>
        <Link
          href="/newsletter"
          className="text-sm hover:text-[#D4A853] transition-colors"
          style={{ color: "#8B8B8B" }}
        >
          Subscribe to the newsletter
        </Link>
      </div>
    </article>
  );
}
