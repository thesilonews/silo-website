import Link from "next/link";
import Image from "next/image";
import { formatStoryDate } from "@/lib/formatDate";
import CategoryBadge from "./CategoryBadge";

interface StoryCardProps {
  slug: string;
  title: string;
  subtitle?: string | null;
  category: string;
  publishedAt: Date;
  imageUrl?: string | null;
  imageAlt?: string | null;
  size?: "normal" | "large";
}

export default function StoryCard({
  slug,
  title,
  subtitle,
  category,
  publishedAt,
  imageUrl,
  imageAlt,
  size = "normal",
}: StoryCardProps) {
  const dateStr = formatStoryDate(publishedAt);

  if (size === "large") {
    return (
      <Link
        href={`/stories/${slug}`}
        className="group block rounded-sm overflow-hidden"
        style={{ backgroundColor: "#1A2535" }}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1923]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt ?? title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#3D3D3B" }}
              >
                Image pending
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <CategoryBadge category={category} />
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
            >
              {dateStr}
            </span>
          </div>
          <h2
            className="text-2xl font-bold leading-snug mb-2 group-hover:text-[#D4A853] transition-colors"
            style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-relaxed" style={{ color: "#C5B49A" }}>
              {subtitle}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/stories/${slug}`}
      className="group flex gap-4 py-5 border-b"
      style={{ borderColor: "#2A3545" }}
    >
      {imageUrl && (
        <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-[#0f1923]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>
      )}
      <div className="flex flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2">
          <CategoryBadge category={category} />
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B8B8B" }}
          >
            {dateStr}
          </span>
        </div>
        <h3
          className="text-base font-semibold leading-snug group-hover:text-[#D4A853] transition-colors"
          style={{ fontFamily: "var(--font-source-serif)", color: "#E8E4DC" }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#8B8B8B" }}>
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
