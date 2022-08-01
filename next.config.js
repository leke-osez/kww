/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tinyurl.com'],
  },
  env: {
    NEXT_PUBLIC_KEY : 'pk_test_e75d0df77fe2c5ff7915e2c3a78467abbac2520f'
  },
}

module.exports = nextConfig
