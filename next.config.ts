import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@iconify/react", "framer-motion"],
  },
};

export default nextConfig;
