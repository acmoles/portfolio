const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    return path.resolve(__dirname, 'noopModule.js')
  },
  plugins: [
    ['@vuepress/active-header-links', options.activeHeaderLinks],
    'vuepress-plugin-reading-time',
    require('./plugins/plugin-outside-content/index.js'),
    require('./plugins/plugin-revealer/index.js'),
    ['@vuepress/pwa', {
      serviceWorker: false,
      updatePopup: false
    }],
    ['@vuepress/medium-zoom', true],
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
})
