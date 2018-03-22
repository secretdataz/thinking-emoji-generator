const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distPath
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/think.svg',
        to: distPath
      }
    ])
  ]
}
