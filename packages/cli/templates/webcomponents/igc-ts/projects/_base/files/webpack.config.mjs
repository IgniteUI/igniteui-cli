import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const __dirname = path.resolve();

export default ({

  entry: path.resolve(__dirname, 'src'),
  devtool: false,
  output: {
    filename: '[chunkhash].bundle.js',
  },

  resolve: {
    mainFields: ['fesm2015', 'module', 'main'],
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [{
      test: /\.m?js/,
      type: "javascript/auto",
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.(ts|js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        "compact": true,
        "presets": [
          ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3,
            "targets": {
              "browsers": [
                "last 2 Chrome versions",
                "last 2 Safari versions",
                "last 2 iOS versions",
                "last 2 Firefox versions",
                "last 2 Edge versions"
              ]
            }
          }],
          "@babel/preset-typescript"
        ],
        "plugins": [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-transform-runtime"
        ]
      },
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '@@AppName',
      template: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
});
