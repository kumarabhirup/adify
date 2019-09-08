/* eslint-disable prettier/prettier */

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

require('dotenv').config({ path: envFile })

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

    /**
     * Tried all these to make `.env` work. But of no use.
     * .env only works on Server side, but not on Client side
     */

    // const env = Object.keys(process.env).reduce((acc, curr) => {
    //   acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
    //   return acc
    // }, {})

    // config.plugins.push(new webpack.DefinePlugin(env))

    // config.plugins.push(new Dotenv({
    //   path: path.join(__dirname, envFile),
    //   systemvars: true
    // }))

    // config.plugins.push(
    //   new webpack.EnvironmentPlugin({
    //     GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    //     ONESIGNAL_ID: process.env.ONESIGNAL_ID,
    //   })
    // )

    return config
  },
  // target: 'serverless',
})
