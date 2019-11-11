const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rootDir = path.resolve(__dirname, '.')
// const srcDir = path.resolve(__dirname, '.', 'src')
const distDir = path.resolve(__dirname, '.', 'dist')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const devMode = process.env.NODE_ENV === 'development'

module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})
  return {
    context: rootDir,
    entry: './src/index.js',
    output: {
      path: distDir,
      publicPath: process.env.PUBLIC_PATH,
      filename: '[hash].js'
    },
    devServer: {
      contentBase: rootDir,
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      open: true
      // needed for phone testing
      // host:'0.0.0.0',
      // port:'8080'
    },
    devtool: 'cheap-module-source-map',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        Styles: path.resolve(__dirname, 'src/styles/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Redux: path.resolve(__dirname, 'src/redux/'),
        Routes: path.resolve(__dirname, 'src/routes/'),
        Utils: path.resolve(__dirname, 'src/utils/')
      }
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'], // include eslint-loader,
        include: path.resolve(__dirname, './', 'src')
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }, {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: { hmr: devMode }
        },
        'css-loader',
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9'
                ],
                flexbox: 'no-2009'
              })
            ]
          }
        }
        ]
      }]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: cssnano,
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            },
            safe: true
          },
          canPrint: false
        })
      ],
      splitChunks: {
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          default: false,
          // vendors: false,
          vendors: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          common: {
            chunks: 'async',
            minChunks: 2,
            name: 'common',
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        // where to find the html template
        template: path.resolve(__dirname, 'index.html'),
        // where to put the generated file
        path: distDir,
        favicon: './src/assets/favicon.ico',
        // the output file name
        filename: 'index.html',
        files: {
          css: ['styles.css'],
          js: ['bundle.js']
        }
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      }),
      new CompressionPlugin({ test: /\.js(\?.*)?$/i }),
      new webpack.DefinePlugin(envKeys),
      new WorkboxPlugin.GenerateSW(),
      new CopyPlugin(['./src/assets/'])
    ]
  }
}
