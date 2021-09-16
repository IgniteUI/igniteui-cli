const path = require('path');
const express = require('express');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './client');
const staticsPath = path.join(__dirname, './static');

const config = require("./ignite-ui-cli.json");

const extractCSS = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true });

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new HtmlWebpackPlugin({
    template: sourcePath + '/index.ejs',
    production: isProd,
    inject: true,
  }),
];

const jsEntry = [
  'index',
  'pages/Home',
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    extractCSS
  );

  jsEntry.unshift(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
}

module.exports = {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  context: sourcePath,
  entry: {
    js: jsEntry,
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: staticsPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.scss$/,
        use: isProd ?
          extractCSS.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'sass-loader'],
          }) :
          ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      }
    ],
  },
  resolve: {
	extensions: ['.js', '.jsx'],
	alias: {
		// --- Ignite UI resources aliasing. WARNING: auto-updated ---
		"ignite-ui/js/infragistics.core.js$": "ignite-ui/js/infragistics.core-lite.js",
		"ignite-ui/js/infragistics.lob.js$": "ignite-ui/js/infragistics.lob-lite.js",
		"ignite-ui": config.project.igniteuiSource.split("node_modules/").pop()
	},
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  plugins: plugins,
  devServer: {
	clientLogLevel: "error",
	contentBase: './client',
    //contentBase: ['./client', './node_modules'],
    historyApiFallback: true,
    port: 3002,
	open: true,
    hot: true,
    compress: isProd,
	stats: { colors: true },
	setup: function(app) {
		// Here you can access the Express app object and add your own custom middleware to it.
		// For example, to define custom handlers for some paths:
		// app.get('/some/path', function(req, res) {
		//   res.json({ custom: 'response' });
		// });
		
		// --- !!! Ignite UI resources handler !!!  ---
		app.use('/ignite-ui', express.static( path.join(__dirname, config.project.igniteuiSource) ));
	}
  }
};
