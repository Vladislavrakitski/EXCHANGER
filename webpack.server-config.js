const path = require('path')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  }
}