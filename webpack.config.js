const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
    index: './src/index.js',
    objects: './src/objects.js',
    display: './src/display.js',
    buttons: './src/buttons.js',
   },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
    }),
  ],
   output: {
     filename: '[name].main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };