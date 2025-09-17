import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  // Disable i18n for now to improve performance
  // i18n: {
  //   locales: ['en', 'ar', 'he'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },
};

export default nextConfig;
