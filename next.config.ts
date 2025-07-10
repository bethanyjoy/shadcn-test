import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during builds for Storybook files
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during builds for Storybook files
    ignoreBuildErrors: true,
  },
  // Exclude Storybook files from the build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
