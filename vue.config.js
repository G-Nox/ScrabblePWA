// const {
//   generateSW
// } = require("workbox-webpack-plugin")
module.exports = {
  transpileDependencies: ["vuetify"],
  // publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  // Experimentell alles nachfolgende keine gewähr
  // devServer:{
  //   https:true
  // },
  pwa: {
    name: "Math Scrabble PWA",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
<<<<<<< HEAD
        skipWaiting: true,
        navigateFallback: 'index.html',
        clientsClaim: true,
    //    swSrc:"src/service-worker.js"
=======
      swSrc: "src/service-worker-old.js"
>>>>>>> 2a433263b2ea255d6d43c4f8656a11bdc46f502a
    },
    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'src/registerServiceWorker.js',
    //   // ...other Workbox options...
    // },
    manifestOptions: {
      name: "Math Scrabble PWA",
      short_name: "Scrabble",
      start_url: "/",
      display: "fullscreen" //standalone
    }
  }
};
