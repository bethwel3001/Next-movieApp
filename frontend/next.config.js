/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: false, // Ensure app directory isn't conflicting if not used
    },
    pageExtensions: ['tsx', 'ts'], // Ensure Next.js recognizes your files
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;
  