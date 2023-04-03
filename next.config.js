/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',
      'dev-to-uploads.s3.amazonaws.com',
      'cdn.hashnode.com',
      'media.makeameme.org',
      'framerusercontent.com'
    ],
  },
}

module.exports = nextConfig
