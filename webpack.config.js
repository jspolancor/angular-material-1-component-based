/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file' },
      { test: /\.js$/, loader: 'babel', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
    ]
  }
};
