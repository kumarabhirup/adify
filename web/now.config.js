/* eslint-disable prettier/prettier */

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

require('dotenv').config({ path: envFile })

const withSass = require('@zeit/next-sass')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = withSass({
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    )

    /**
     * Also tried this to make `.env` work. But of no use.
     */
    // const env = Object.keys(process.env).reduce((acc, curr) => {
    //   acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
    //   return acc
    // }, {})

    // config.plugins.push(new webpack.DefinePlugin(env))

    config.plugins.push(new Dotenv({
      path: path.join(__dirname, envFile),
      systemvars: true
    }))

    return config
  },
})
