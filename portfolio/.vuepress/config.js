const path = require('path')

module.exports = {
  dest: './dist',
  // temp: './tmp',
  title: 'Anthony Moles Portfolio',
  locales: {
      '/': {
        lang: 'en-GB',
        title: 'ACM Portfolio',
        description: 'Portfolio'
      }
  },
  head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  ga: '',
  description: 'This is your page description.',
  base: '/',
  themeConfig: {
    nav: [
      // { text: 'Home', ariaLabel: 'Home link', link: '/' },
      // { text: 'Projects', ariaLabel: 'Projects link', link: '/projects/' },
      { text: 'About', ariaLabel: 'About link', link: '/about/' },
      { text: 'Contact', ariaLabel: 'Contact menu', items: [
          { text: 'Email', link: 'https://email.com' },
          { text: 'Linkedin', link: 'https://linkedin.com' },
          { text: 'Github', link: 'https://github.com' }
      ] },
    ],
  },
  sass: {
    indentedSyntax: true
  },
  fadeTransitionTime: 400, // sass variable $fadeTime
  revealTransitionTime: 800, // sass variable $revealTime
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets'),
        "@application": path.resolve(__dirname, './theme/application')
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-attrs'))
      md.use(require('markdown-it-deflist'))
    }
  },
  // chainMarkdown(config) {
  //   const { PLUGINS } = require('@vuepress/markdown')
  //   const originalLinkPlugin = require('@vuepress/markdown/lib/link.js');
  //
  //   config
  //     .plugins
  //       .delete(PLUGINS.CONVERT_ROUTER_LINK)
  //
  //   const linkPlugin = function (md) {
  //     const result = originalLinkPlugin.apply(this, arguments);
  //     const close = md.renderer.rules.link_close;
  //     md.renderer.rules.link_close = function() {
  //       return close.apply(this, arguments).replace('<OutboundLink/>', '');
  //     }
  //     return result;
  //   };
  //
  //   config
  //     .plugin(PLUGINS.CONVERT_ROUTER_LINK)
  //       .use(linkPlugin, [{
  //         // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
  //         target: '_blank',
  //         rel: 'noopener noreferrer'
  //       }])
  // },
}
