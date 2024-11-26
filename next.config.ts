import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    domains: [
      "firebasestorage.googleapis.com",
      "img.notionusercontent.com",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3-us-west-2.amazonaws.com",
      "s3-us-west-2.amazonaws.com",
      "files.slack.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
  },
};

export default nextConfig;
