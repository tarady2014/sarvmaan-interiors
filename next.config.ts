import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  reactStrictMode: false, // Disable strict mode to prevent double-mounting in dev
  poweredByHeader: false,
  turbopack: {
    // Turbopack's built-in file watching optimization
    // Automatically optimizes watching and ignores build artifacts
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://sarvmaan.com",
  },
};

export default nextConfig;
