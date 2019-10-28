// var aliasConfig = require('./build/aliasConfig.js')
// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  productionSourceMap: false,
  lintOnSave: false, //关闭eslint错误提示
  css: {
    sourceMap: true, // 开启 CSS source maps
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
        config.devtool = "source-map";
    } else if (process.env.NODE_ENV === "production") {
        config.devtool = "eval-source-map";
    }
    // config.resolve.alias = aliasConfig
  },
  // devServer: {
  //   hotOnly: true,
  //   port: 8080,
  //   open: true,
  //   disableHostCheck: true,
  //   proxy: {
  //     '/manage': {
  //       target: 'http://foyuan.aidatian.cn',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/manage": '/manage'
  //       }
  //     }
  //   }
  // }
}