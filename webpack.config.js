const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'resources/[name][ext]',
            },
        },
        {
            test: /\.mp3$/i,
            type: 'asset/resource',
            generator: {
                filename: 'resources/[name][ext]',
            },
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
    ],
  },
};