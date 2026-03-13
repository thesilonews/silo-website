export const Category = {
  WILDFIRE: "WILDFIRE",
  AGRICULTURE: "AGRICULTURE",
  WEATHER: "WEATHER",
  ENERGY: "ENERGY",
  HYDROLOGY: "HYDROLOGY",
  INFRASTRUCTURE: "INFRASTRUCTURE",
  COMMUNITY: "COMMUNITY",
  MISSILE_FIELDS: "MISSILE_FIELDS",
  OTHER: "OTHER",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const categoryLabels: Record<string, string> = {
  WILDFIRE: "Wildfire",
  AGRICULTURE: "Agriculture",
  WEATHER: "Weather",
  ENERGY: "Energy",
  HYDROLOGY: "Hydrology",
  INFRASTRUCTURE: "Infrastructure",
  COMMUNITY: "Community",
  MISSILE_FIELDS: "Missile Fields",
  OTHER: "Other",
};
