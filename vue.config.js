module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hubin/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_global.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
