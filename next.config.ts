import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "placecats.com"
    }],
  },
  devIndicators: false
};

export default nextConfig;
