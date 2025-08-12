/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   devIndicators: false,
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack(config) {
    // Exclude .svg from the default asset loader
    const assetRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.test?.(".svg")
    );
    if (assetRule) assetRule.exclude = /\.svg$/i;

    // Use SVGR for .svg imports
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            titleProp: true,
            ref: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
