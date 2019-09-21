require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    ADIFY_GA_TRACKING_ID: process.env.ADIFY_GA_TRACKING_ID,
  },
  cssModules: true,
})
