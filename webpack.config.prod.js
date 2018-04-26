import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

dotenv.config();

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, 'client/js/Client.jsx'), 
  output: {
    path: path.resolve('./client/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]',
          },
        },
      },
      {
        test: /(\.s?css)$/,
        loader: ['style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "client")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: "source-map",
  context: __dirname,
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.EnvironmentPlugin([
      'REQUEST', 'CLOUD_PRESET', 'JWT_SECRET'
    ])
  ],
}