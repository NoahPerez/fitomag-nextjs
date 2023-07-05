/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Modify the resolve configuration
    config.resolve.extensions.push('.jsx');

    // Add any additional aliases if needed
    // For example, if you have a 'components' folder in the root directory,
    // you can add an alias like this:
    // config.resolve.alias['components'] = path.resolve(__dirname, 'components');

    return config;
  },
};

module.exports = nextConfig;
