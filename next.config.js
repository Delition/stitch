/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/scale-summit-2023',
        destination: '/scale-summit-2023/index.html'
      },
      {
        source: '/startup-showcase-2023',
        destination: '/startup-showcase-2023/index.html'
      },
      {
        source: '/stitch-raba-tech-summit-2023-agenda',
        destination: '/stitch-raba-tech-summit-2023-agenda/index.html'
      }
    ]
  },
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    domains: ['strapiprodst.blob.core.windows.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins([], {});
module.exports = withImages();
module.exports = nextConfig;
