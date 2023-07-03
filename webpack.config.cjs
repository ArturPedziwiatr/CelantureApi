const path = require('path')

const devServer = {
  static: {
    directory: path.resolve(__dirname, 'dist'),
  },
  port: 8080,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
}

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name][contenthash].js',
  clean: true,
}

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output,
  devtool: 'source-map',
  devServer,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: 'json',
      },
      {
        test: /\.geojson$/,
        type: 'json',
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml)$/,
        use: ['url-loader'],
      },
    ],
  },
}
