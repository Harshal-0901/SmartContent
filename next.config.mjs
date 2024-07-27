/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
