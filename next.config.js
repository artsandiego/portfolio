const path = require('path')
require('dotenv').config

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    IMAGES_URL: process.env.IMAGES_URL
  },

  images: {
    imageSize: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [process.env.IMAGES_URL],
    path: '/_next/image',
    loader: 'default'
  },

  trailingSlash: true,
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    return config;
  }
}