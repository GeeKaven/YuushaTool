module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    // ? '/YuushaTool/' 默认域名设置
    ? '/'
    : '/',
};
