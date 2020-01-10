const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      { test: /\.(svg|png)$/, use: 'file-loader' },
      { test: /\.(txt|log)$/, use: 'raw-loader' },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: './public/index.html' }),
  ],
};
