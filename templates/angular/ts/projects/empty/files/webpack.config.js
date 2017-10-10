const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
			template: './src/index.html'
		})
	]
};
