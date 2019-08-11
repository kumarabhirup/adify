/* eslint-disable prettier/prettier */

require('dotenv').config()
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    )
    return config
  },
  env: {
    'GA_TRACKING_ID': process.env.GA_TRACKING_ID,
    'ONESIGNAL_ID': process.env.ONESIGNAL_ID,
    'test': {
      presets: [['es2015', { modules: false }], 'react', 'stage-0'],
      plugins: ['transform-es2015-modules-commonjs', 'dynamic-import-node'],
    },
  },
})
