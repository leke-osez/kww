/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tinyurl.com", "cdn.shopify.com"],
  },
  env: {
    NEXT_PUBLIC_KEY: "pk_test_e75d0df77fe2c5ff7915e2c3a78467abbac2520f",
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: "template_uwz317g",
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: "NKg8F1rt7kQZ3RA6L",
    NEXT_PUBLIC_EMAIL_SERVICE_ID: "service_056df2c",
  },
};

module.exports = nextConfig;
