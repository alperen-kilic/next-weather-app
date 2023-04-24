/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.weatherbit.io", "bmcdn.nl"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

module.exports = nextConfig;
