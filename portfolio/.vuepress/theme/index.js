const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    return path.resolve(__dirname, 'noopModule.js')
  },
  plugins: [
    // ['@vuepress/active-header-links'],
    // , options.activeHeaderLinks

    // TODO add sitemap: npm install vuepress-plugin-sitemap
    // ['sitemap', {
    //   hostname: 'https://pake.web.id'
    // }],
    'vuepress-plugin-reading-time',
    require('./plugins/plugin-outside-content/index.js'),
    require('./plugins/plugin-revealer/index.js'),
    // TODO customise updatePopup and enable PWA
    ['@vuepress/pwa', {
      serviceWorker: false,
      updatePopup: false
    }],
    ['@vuepress/medium-zoom',
      {
        selector: 'img.medium-zoom',
        options: {
          margin: 24,
          background: null,
        },
    }],
    ['clean-urls', {
       normalSuffix: '/',
       indexSuffix: '/',
    }],
    // ['register-components', { componentsDir: '.vuepress/theme/components') }],
    // ['smooth-scroll']
  ],
  postcss: {
    plugins: [
      require('autoprefixer'),
    ],
  },
  evergreen: true,
  disableScrollBehavior: true,
})
