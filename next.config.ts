import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  output: 'export',

  basePath: '/fashion_store',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;