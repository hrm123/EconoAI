import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // logging: false,
   output: 'export',
   productionBrowserSourceMaps: true,
   images: {
    unoptimized: true, // This disables optimization globally
  },
};

export default nextConfig;
