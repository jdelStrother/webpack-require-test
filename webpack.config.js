const path = require('path');

module.exports = {
  entry: './src/index.js',
  recordsPath: path.resolve(__dirname, 'webpack-records.json'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};