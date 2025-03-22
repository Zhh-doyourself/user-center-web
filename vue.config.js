const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 新增代码：
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
});
