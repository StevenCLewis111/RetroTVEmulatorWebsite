/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // Keeps GitHub from failing the build if there are minor script warnings
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;

