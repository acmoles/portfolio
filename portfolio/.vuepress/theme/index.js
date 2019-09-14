const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    return path.resolve(__dirname, 'noopModule.js')
  },

  plugins: [
    ['@vuepress/active-header-links', options.activeHeaderLinks],
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
  ]
})
