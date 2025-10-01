/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/karthickbio',      // your repo name
  assetPrefix: '/karthickbio/',  // ensures CSS/JS loads correctly
  trailingSlash: true, 
};

module.exports = nextConfig;
