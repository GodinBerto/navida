import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // For your hero image
      "randomuser.me", // For student avatars
    ],
  },
};

export default nextConfig;
