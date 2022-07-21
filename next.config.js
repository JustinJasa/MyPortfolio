/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["assets.vercel.com", "cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
};
