// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next.js to generate static files
  images: {
    unoptimized: true, // required for GitHub Pages if using next/image
  },
  basePath: '/your-repo-name', // replace with your repo name
  assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;
