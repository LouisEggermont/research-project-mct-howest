import type { NextConfig } from "next";
import optimizeLocales from "@react-aria/optimize-locales-plugin";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl",
  },
  webpack(config) {
    config.plugins.push(
      optimizeLocales.webpack({
        locales: ["nl"], // Define the locales you want to optimize
      })
    );
    return config;
  },
};

export default nextConfig;
