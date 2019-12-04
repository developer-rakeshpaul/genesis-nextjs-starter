const path = require('path')
const withCSS = require('@zeit/next-css')
require('dotenv').config()

module.exports = withCSS({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_HOST: process.env.API_HOST,
    API_PROTOCOL: process.env.API_PROTOCOL,
    API_REFRESH_TOKEN_PATH: process.env.API_REFRESH_TOKEN_PATH
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['gql'] = path.join(__dirname, 'gql')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
    config.resolve.alias['interfaces'] = path.join(__dirname, 'interfaces')
    config.resolve.alias['layout'] = path.join(__dirname, 'layout')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    return config
  }
})
