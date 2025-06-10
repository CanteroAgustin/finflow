import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuración para Firebase Hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
