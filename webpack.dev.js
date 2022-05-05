/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')

const publicPath = '/'
const distPath = '/dist'

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  stats: {
    children: false,
  },
  entry: {
    main: './src/index.tsx',
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    compression: 'gzip',
  },
  output: {
    filename: '[name].[hash].js',
    publicPath,
    path: __dirname + distPath,
    chunkFilename: '[name].[chunkhash].bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlPlugin({
      template: './public/index.html',
      BASE_URL: publicPath,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        options: {
          loader: 'tsx',
          target: 'es2015',
          // tsconfigRaw: require('./tsconfig.json')
        },
      },
      // {
      //     test: /\.tsx?$/,
      //     loader: 'swc-loader',
      //     exclude: [path.resolve(__dirname, 'node_modules')],
      //     options: {
      //         jsc: {
      //             parser: {
      //                 syntax: "typescript"
      //             }
      //         }
      //     }
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]_[local]_[hash:base64:5]',
                context: __dirname + '/src',
              },
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /node_modules\/react/,
          name: 'react',
          priority: -1,
        },
        antdVendor: {
          test: /(node_modules\/antd|@ant-design|node_modules\/rc-)/,
          name: 'antd',
          priority: -2,
        },
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          priority: -4,
        },
      },
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: '3000',
    open: false,
    hot: true,
  },
}
