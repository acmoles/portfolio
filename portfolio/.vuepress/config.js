const path = require('path')

module.exports = {
  dest: './dist',
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
      { text: 'Home', ariaLabel: 'Home link', link: '/' },
      { text: 'Projects', ariaLabel: 'Projects link', link: '/projects/' },
      { text: 'About', ariaLabel: 'About link', link: '/about/' },
      { text: 'Contact', ariaLabel: 'Contact menu', items: [
          { text: 'Email', link: 'https://email.com' },
          { text: 'Linkedin', link: 'https://linkedin.com' },
          { text: 'Github', link: 'https://github.com' }
      ] },
    ],
    smoothScroll: true
  },
  sass: { indentedSyntax: true },
  fadeTransitionTime: 400, // sass variable $fadeTime
  revealTransitionTime: 800, // sass variable $revealTime
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets')
      }
    }
  },
}
