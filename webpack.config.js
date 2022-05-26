const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const miniCss = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

console.log(mode + ' mode');

module.exports = {
  mode: mode,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: '[name].[hash].js',
    assetModuleFilename: './images/[name].[hash][ext]',
  },
  devServer: {
    port: 5000,
    hot: true,
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          mode === "development" ? 'style-loader' : miniCss.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  {
                    // options
                  },
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      // подключение нужных css & js к странице
      chunks: ['index'],
      // загрузка script в конец body
      inject: 'body',
      // отключаем script defer
      scriptLoading: 'blocking',
    }),
    new miniCss({
      filename: '[name].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
};
