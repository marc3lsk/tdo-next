/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
  basePath: process.env.BASE_PATH,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  compiler: {
    styledComponents: true,
  },
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
