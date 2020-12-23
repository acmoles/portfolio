const path = require('path')

module.exports = {
  dest: './dist',
  // temp: './tmp',
  title: 'Anthony Moles | Portfolio',
  locales: {
      '/': {
        lang: 'en-GB',
        title: 'Anthony Moles | Portfolio',
        description: 'I\'m a designer, coder and leader creating useful and playful experiences centred on people.'
      }
  },
  head: [
      ['link', { rel: 'icon', type: `image/png`, sizes: `16x16`, href: `/icons/android-chrome-16x16.png` }],
      ['link', { rel: 'icon', type: `image/png`, sizes: `32x32`, href: `/icons/android-chrome-32x32.png` }],
      ['link', { rel: 'icon', type: `image/png`, sizes: `192x192`, href: `/icons/android-chrome-192x192.png` }],
      ['link', { rel: 'icon', type: `image/png`, sizes: `512x512`, href: `/icons/android-chrome-512x512.png` }],
      ['link', { rel: 'icon', type:'image/x-icon', href: `/favicon.ico` }],
      ['link', { rel: 'shortcut icon', type:'image/x-icon', href: `/favicon.ico` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#1F2D3D' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#1F2D3D' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#1F2D3D' }],
      ['meta', { property: 'og:title', content: 'Anthony Moles | Portfolio' }],
      ['meta', { property: 'og:image', content: 'https://www.acmoles.com/icons/Anthony_Moles_Portfolio.jpg' }],
      ['meta', { property: 'og:description', content: 'I\'m a designer and leader creating useful and playful experiences centred on people.' }],
      ['meta', { property: 'og:url', content: 'https://www.acmoles.com' }],
  ],
  ga: '',
  description: 'I\'m a designer and leader creating useful and playful experiences centred on people.',
  base: '/',
  themeConfig: {
    nav: [
      // { text: 'Home', ariaLabel: 'Home link', link: '/' },
      // { text: 'Projects', ariaLabel: 'Projects link', link: '/projects/' },
      { text: 'About', ariaLabel: 'About link', link: '/about/' },
      { text: 'Contact', ariaLabel: 'Contact menu', items: [
          { text: 'Email', link: 'mailto:acmoles@gmail.com' },
          { text: 'Linkedin', link: 'https://uk.linkedin.com/in/anthonymoles' },
          { text: 'Github', link: 'https://github.com/acmoles' }
      ] },
    ],
  },
  sass: {
    indentedSyntax: true // trouble updating sass loader...
  },
  fadeTransitionTime: 400, // sass variable $fadeTime
  revealTransitionTime: 800, // sass variable $revealTime
  breakpoints: { // matches css breakpoints
    tablet: 888,
    desktop: 1152,
    widescreen: 1344,
    fullhd: 1536,
    largeformat: 1600
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets'),
        "@application": path.resolve(__dirname, './theme/application'),
        "@plugins": path.resolve(__dirname, './theme/plugins')
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-attrs'))
      md.use(require('markdown-it-deflist'))
    }
  },
  // TODO improve external link icon (css replacement right now)
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
