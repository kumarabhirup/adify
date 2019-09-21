require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    ADIFY_GA_TRACKING_ID: process.env.ADIFY_GA_TRACKING_ID,
    ADIFY_STEIN_API_KEY: process.env.ADIFY_STEIN_API_KEY,
    ADIFY_STEIN_API_USERNAME: process.env.ADIFY_STEIN_API_USERNAME,
    ADIFY_STEIN_API_PASSWORD: process.env.ADIFY_STEIN_API_PASSWORD,
  },
  cssModules: true,
})
