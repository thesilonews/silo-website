const categoryConfig: Record<string, { label: string; color: string }> = {
  WILDFIRE: { label: "Wildfire", color: "#A84C2A" },
  AGRICULTURE: { label: "Agriculture", color: "#5C7A5E" },
  WEATHER: { label: "Weather", color: "#3A7EBF" },
  ENERGY: { label: "Energy", color: "#D4A853" },
  HYDROLOGY: { label: "Hydrology", color: "#2980B9" },
  INFRASTRUCTURE: { label: "Infrastructure", color: "#6B7280" },
  COMMUNITY: { label: "Community", color: "#9B59B6" },
  MISSILE_FIELDS: { label: "Missile Fields", color: "#8B8B8B" },
  OTHER: { label: "Other", color: "#3D3D3B" },
};

export default function CategoryBadge({ category }: { category: string }) {
  const config = categoryConfig[category] ?? { label: category, color: "#8B8B8B" };
  const { label, color } = config;
  return (
    <span
      className="inline-block px-2 py-0.5 text-[10px] tracking-widest uppercase rounded-sm"
      style={{
        fontFamily: "var(--font-jetbrains-mono)",
        backgroundColor: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {label}
    </span>
  );
}
