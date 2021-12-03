const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}
