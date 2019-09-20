// Require
const webpack = require('webpack');

const { resolve } = require('path');

const buildPath = resolve(__dirname, 'build');
const mainPath = resolve(__dirname, 'src', 'index.tsx');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    mainPath,
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    inline: true,
    publicPath: '/',
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader?sourceMap',
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader?sourceMap',
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader',
      },
      {
        exclude: [/\.html$/, /\.(js|jsx|ts|tsx)$/, /\.css$/, /\.json$/],
        loader: 'url-loader',
        options: {
          name: 'assets/[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public/',
        to: '[name].[ext]',
      },
    ]),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' }),
  ],
};

module.exports = config;
