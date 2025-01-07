/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['i.scdn.co'], // Add this if you plan to use Spotify integration
    },
  }
  
  module.exports = nextConfig