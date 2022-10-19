module.exports = {
  configureWebpack: {
    externals: {
      jquery: "jQuery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",

      jQuery: "jquery",

      "windows.jQuery": "jquery"
    })
  ]
};
