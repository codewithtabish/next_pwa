import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🔥 IMPORTANT FIX: disable turbopack usage in build

};

export default withPWA(nextConfig);