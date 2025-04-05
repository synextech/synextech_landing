import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // This will disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "ui.aceternity.com", // ✅ Add this line
      },
    ],
    domains: [
      "avatars.githubusercontent.com", 
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
