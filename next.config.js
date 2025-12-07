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
  // Use Turbopack (default in Next.js 16)
  turbopack: {},
}

module.exports = nextConfig

