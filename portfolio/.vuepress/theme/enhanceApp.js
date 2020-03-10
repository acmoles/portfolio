import './styles/index.sass'

import initStore from './store.js'
import initRouting from './routing.js'

import VueForceNextTick from 'vue-force-next-tick'
import VueClipboard from 'vue-clipboard2'
import lazySizes from 'lazysizes'
// import VModal from 'vue-js-modal/dist/ssr.index'
// import PortalVue from 'portal-vue'

import Home from './components/home/Home.vue'
// import HomeDeco from './components/home/HomeDeco.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.config.productionTip = false
  const store = initStore(Vue)
  Vue.mixin({store: store})
  initRouting(router, store, siteData)

  // Regster the home component separately for clearer directory structure
  Vue.component('Home', Home)
  // Vue.component('HomeDeco', HomeDeco)

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    Vue.use(VueForceNextTick)
    // Vue.use(VModal)
    Vue.use(VueClipboard)
    // Vue.use(PortalVue)

    lazySizes.init()

    // fixes scroll jump in modern browsers
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

}
