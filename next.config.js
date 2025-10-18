/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  // Enable standalone output for Docker deployment
  output: 'standalone',
  // Disable ESLint during builds (errors will still show in dev)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

