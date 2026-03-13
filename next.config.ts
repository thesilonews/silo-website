import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: require("path").join(__dirname),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.r2.cloudflarestorage.com" },
      { protocol: "https", hostname: "**.cloudflare.com" },
    ],
  },
};

export default nextConfig;
