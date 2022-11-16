/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['dice-media.imgix.net'],
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
