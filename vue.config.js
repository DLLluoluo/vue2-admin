const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  // 去掉文件名中的 hash
  // filenameHashing: false,
  // 删除 HTML 相关的 webpack 插件
  // chainWebpack: config => {
  //   config.plugins.delete('html')
  //   config.plugins.delete('preload')
  //   config.plugins.delete('prefetch')
  //   // 内联图片资源限制设置为 4KiB(默认为8KiB), 并将小于 4KiB 的资源内联，以减少 HTTP 请求的数量
  //   config.module
  //     .rule('images')
  //       .set('parser', {
  //         dataUrlCondition: {
  //           maxSize: 4 * 1024 // 4KiB
  //         }
  //       })
  // }
})
