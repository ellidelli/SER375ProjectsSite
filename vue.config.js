const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/SER375ProjectsSite/" : "/",
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Rule for video files
    config.module
      .rule("videos")
      .test(/\.(mov|mp4)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash:8].[ext]",
      })
      .end();
  },
});
