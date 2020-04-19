
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const os = require('os');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : './', // 默认'/'，部署应用包时的基本 URL
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: os.cpus().length > 1,
  pwa: {},
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      codemirror: 'CodeMirror',
      terser: 'Terser',
      mdui: 'mdui',
      'js-base64': 'Base64',
    };
  },
  chainWebpack: (config) => {
    // 打包分析
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ]);
    }
    const cdn = {
      css: [
        'https://cdn.jsdelivr.net/npm/mdui@0.4.3/dist/css/mdui.min.css',
        'https://cdn.jsdelivr.net/npm/codemirror@5.52.2/lib/codemirror.css',
      ],
      js: [
        'https://cdn.jsdelivr.net/npm/mdui@0.4.3/dist/js/mdui.min.js',
        'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
        'https://cdn.jsdelivr.net/npm/js-base64@2.5.2/base64.min.js',
        'https://cdn.jsdelivr.net/npm/terser@4.6.11/dist/bundle.min.js',
        'https://cdn.jsdelivr.net/npm/codemirror@5.52.2/lib/codemirror.min.js',
        'https://cdn.jsdelivr.net/npm/codemirror@5.52.2/mode/javascript/javascript.js',
        'https://cdn.jsdelivr.net/npm/codemirror@5.52.2/mode/htmlmixed/htmlmixed.js',
        'https://cdn.jsdelivr.net/npm/codemirror@5.52.2/mode/css/css.js',
      ],
    };

    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap((args) => {
      // html中添加cdn
      // eslint-disable-next-line no-param-reassign
      args[0].cdn = cdn;
      return args;
    });
  },
};
