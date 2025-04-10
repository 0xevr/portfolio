import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,          // Enable React Strict Mode for better development experience
  pageExtensions: ["ts", "tsx", "js", "jsx"],  // Support TypeScript and JavaScript pages
  swcMinify: true,               // Enable SWC-based minification for faster builds
  images: {
    domains: ['yourdomain.com'], // Allow images from your domain (useful for static assets)
  },
  webpack(config) {
    // You can modify the webpack config here if needed
    return config;
  },
};

export default nextConfig;
