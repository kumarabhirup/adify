const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    TEST: process.env.TEST,
  },
})
