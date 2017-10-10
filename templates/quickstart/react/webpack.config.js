var path = require('path');
var webpack = require('webpack');
     
 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'index.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: ('babel-loader'),
                 options: {
                    presets: ['react'],
                    // @remove-on-eject-end
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                },
             },
			 {
				 test: /\.css$/,
				 loader:'style!css!'
			 }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };