import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com", "notion.so"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
