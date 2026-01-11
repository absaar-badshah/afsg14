/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
