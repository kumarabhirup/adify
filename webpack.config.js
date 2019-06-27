/**
 * THIS FILE IS NOT UNDER USE
 * MAYBE I SUPPORT WEBPACK LATER ;)
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/server/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/public/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
}
