<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip linting during build
  },
  typescript: {
    ignoreBuildErrors: true, // skip type checking during build
  },
=======
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
>>>>>>> 40e41e4 (init)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
<<<<<<< HEAD
=======
  webpack: (config) => {
    config.resolve.alias["@ui"] = path.resolve(__dirname, "src/components/ui");
    return config;
  },
>>>>>>> 40e41e4 (init)
};

module.exports = nextConfig;
