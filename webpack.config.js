const path = require('path');

  module.exports = {
    entry: './index.ts',
  // devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
            test: /\.(jpe?g|png|gif|svg|html?|css)$/i, 
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
        }
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };