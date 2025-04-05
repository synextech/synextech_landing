import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
