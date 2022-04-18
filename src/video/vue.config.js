const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    // Fixing issue with WDS disconnected and sockjs network error
    host: "0.0.0.0",
    // public: "0.0.0.0:8080",
    // End of fix
  },
  transpileDependencies: true,
});
