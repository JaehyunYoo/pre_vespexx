import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    domains: ["vespexx.notion.site"],
  },
};

export default nextConfig;
