module.exports = {
  // publicPath: './',      ./也可以写成/dist/
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
  //assetsDir: 'static',
  //productionSourceMap: false,
  devServer: {
      proxy: {
          '/':{
              target:'http://47.101.36.174:7109',
              changeOrigin:true,
              pathRewrite:{
                  '^/':'/'
              }
          }
      }
  },
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
      'jquery': '$',
      // 'echarts': 'echarts',
      'axios': 'axios'
    },
    resolve:{
      alias:{
        src:'@',
        api:'src/api',
        assets:'src/assets',
        components:'src/components',
        router:'src/router',
        utils:'src/utils',
        views:'src/views',

      }
    }
  },
}