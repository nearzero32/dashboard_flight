<<<<<<< HEAD
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  css: {
    extract: true,
  },
};
=======
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  css: {
    extract: true,
  },
};
>>>>>>> sjad
