const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distPath
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/think.svg',
        to: distPath
      },
      {
        from: './src/favicon.ico',
        to: distPath
      }
    ])
  ]
}
