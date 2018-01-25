const express = require('express');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require("./ignite-ui-cli.json");

function getScriptTags() {
	var builder = "",
		files = config.project.sourceFiles;
	builder += "<!-- Ignite UI Required Combined JavaScript Files -->\n";
	for (var i = 0; i < files.length; i++) {
		builder += `<script src="/ignite-ui/js/${files[i]}"></script>\n`;
	}
	return builder;
}

module.exports = {

	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{test: /\.ts$/, loader: 'ts-loader'}
			//,
			// {
			// 	test: /\toolbar.scss$/,
			// 	loaders: ['raw-loader', 'sass-loader'] 
			// },
			// {
			// 	test: /\.scss$/,
			// 	use: [{
			// 		loader: "style-loader" // creates style nodes from JS strings
			// 	}, {
			// 		loader: "css-loader" // translates CSS into CommonJS
			// 	}, {
			// 		loader: "sass-loader" // compiles Sass to CSS
			// 	}]
			// }
		]
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			baseHref: '/',
			igniteUIScripts:  getScriptTags(),
			historyApiFallback: true
		})
	],
	devServer: {
	  port: 3001,
	  open: true,
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
	},
	devtool: 'source-map'
};
