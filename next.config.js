const path = require('path')
require('dotenv').config

module.exports = {
  env: {
    API_URL: "https://strapi-artsandiego.herokuapp.com",
  },

  images: {
    domains: ['res.cloudinary.com']
  },

  trailingSlash: true,
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    return config;
  }
}