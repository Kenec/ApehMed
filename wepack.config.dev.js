const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, '/client/js/Client.jsx'), 
  output: {
    path: path.resolve('./client/dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
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
        enforce: "pre",
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      }
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
    // ...
  ],
}