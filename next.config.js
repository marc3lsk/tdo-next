/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
  basePath: process.env.BASE_PATH,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export has no image optimizer; images are static imports used as plain <img>/CSS backgrounds.
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  // Kept for `next build --webpack` / `next dev --webpack`.
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
