/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  // Enable standalone output for Docker deployment
  output: 'standalone',
  // Transpile three.js related packages for proper module resolution
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Webpack configuration for three.js compatibility (Turbopack not compatible with @react-three/fiber)
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
}

module.exports = nextConfig

