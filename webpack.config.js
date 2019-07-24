// プラグインを利用するためにwebpackを読み込んでおく
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Cssnano = require('cssnano');
const Autoprefixer = require('autoprefixer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelop = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: [path.resolve(__dirname, 'src/ts/index.ts')],
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js',
  },
  // vagrantでLinuxを立てその中でwebpackを実行する場合、以下を指定しないとwatchされない
  // watchOptions: {
  //   poll: true,
  // },
  optimization: {
    // 共通モジュールのバンドル
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.scss/,
        use: [
          isDevelop ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelop,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
              // CSS内のurl()メソッドの取り込み trueでBase64画像としてCSSに取り込む
              url: false,
              // true で CSS Modules 有効化
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelop,
              plugins: isDevelop
                ? []
                : [
                    // CSS圧縮有効化
                    Cssnano({
                      preset: 'default',
                    }),
                    // Autoprefixer有効化
                    Autoprefixer({
                      // グリッドレイアウト有効化
                      grid: true,
                    }),
                  ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelop,
              // 共通箇所の読み込み
              // data: '@import "_common.scss";',
              includePaths: [path.resolve(__dirname, './src/scss/')],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    // 拡張子を省略してimportできる拡張子の設定 デフォルトは ['.wasm', '.mjs', '.js', '.json']
    extensions: ['*', '.ts', '.js', '.vue', '.json'],
  },
  plugins: [
    // bundleサイズの表示
    // new BundleAnalyzerPlugin(),
    // CSSの別だし
    new MiniCssExtractPlugin({
      // JSアウトプットディレクトリからの相対
      filename: '../css/[name].css',
    }),
    // JS内の'process.env.NODE_ENV'が'development'か'production'に置き換わる
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    // 共通プラグインを利用するときはこれを書いておけばインポート不要
    // 不要なものも記載するとグローバルからバンドルされるので注意
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   velocity: 'velocity-animate',
    //   axios: 'axios',
    // }),
  ],
};
