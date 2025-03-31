import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent",
      "res.cloudinary.com"
    ]
  }
};

export default nextConfig;
