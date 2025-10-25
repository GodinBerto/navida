import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // For your hero image
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // For student avatars
      },
    ],
  },
};

export default nextConfig;
