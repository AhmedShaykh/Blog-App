/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.logojoy.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;