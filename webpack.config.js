const path = require('path');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'angular-animate',
      'angular-route',
      'angular-sanitize',
      'angular-messages',
      'angular-ui-bootstrap',
      'angular-toastr',
      'lodash'
    ],
    app: ['./js/app/app.mainmodule.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  //this is needed for a good debugging exprience in devtools
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // query: {
        //     presets: ["@babel/preset-env","@babel/preset-react"]
        // this is needed only if there is no .babelrc
        // }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    // this plugin cleans webpack console before each build
    new CleanTerminalPlugin()
  ],
  devServer: {
    inline: true,
    host: '0.0.0.0',

    port: 3000,

    publicPath: '/',

    proxy: {
      '/users': {
        target: 'https://api.github.com',
        secure: false,
        changeOrigin: true
      }
    }
  }
};
